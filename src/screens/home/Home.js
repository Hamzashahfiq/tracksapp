import { ScrollView, TouchableOpacity, SectionList, Text, View, FlatList, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import { FatchTracks } from '../../store/TrackSlice'
import { connect } from 'react-redux'
import SplashScreen from '../splashScreen/SplashScreen';
import { Styles } from './HomeStyle';
import TrackPlayer from 'react-native-track-player';




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
    };
  }
  tLoading = () => {
    this.setState({ loading: true })
  }
  fLoading = () => {
    this.setState({ loading: false })
  }
  trackHandler = (item) => {
    // let track = {
    //   url: item.trackUrl,
    //   artist: item.releaseBy,
    // }
    // this.trackAdd(track)
    this.props.navigation.navigate('Track', tracksData = item)
  }
  UNSAFE_componentWillMount() {
    let trueLoading = this.tLoading
    let falseLoading = this.fLoading
    this.props.getTracks({ trueLoading, falseLoading })
  }
  componentDidMount() {
    this.trackPlayerSetup()
  }

  trackPlayerSetup = async () => {
    await TrackPlayer.setupPlayer()
   
  }
  


  render() {
    const tData = this.props.tracksData
    const hTime = new Date().getHours()
    let gText;
    if (hTime >= 5 & hTime < 12) {
      gText = 'Good Morning'
    } else if (hTime >= 12 & hTime < 18) {
      gText = 'Good Afternoon';
    } else if (hTime >= 18 & hTime < 21) {
      gText = 'Good Evening'
    } else {
      gText = 'Good Night'
    }

    return (
      <>
        {this.state.loading ? <SplashScreen /> :
          <View style={Styles.mainView}>
            <ImageBackground style={Styles.bImage} source={require('../../assets/tbgimg.webp')} resizeMode="cover">
              <View style={Styles.greetingView} >
                <Text style={Styles.greetingText} >
                  {gText}
                </Text>
              </View>
              <SectionList
                sections={tData}
                keyExtractor={item => item.id}
                renderSectionHeader={({ section }) => (
                  <>
                    <Text style={Styles.titleText}>{section.title}</Text>
                    <FlatList
                      horizontal
                      data={section.data}
                      renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => this.trackHandler(item)}>
                          <View style={Styles.cardView}>
                            <ImageBackground style={Styles.cardImg} source={{ uri: item.imageUrl }} resizeMode="cover" >
                              <View style={Styles.imgView1}><Text style={Styles.imgText1} >{item.tName}</Text></View>
                              <View style={Styles.imgView2}><Text style={Styles.imgText2}>by: {item.releaseBy}</Text></View>
                            </ImageBackground>
                          </View>
                        </TouchableOpacity>
                      )}
                    />
                  </>
                )}
                renderItem={({ item, section }) => {
                  return null;
                }
                }
              />
            </ImageBackground>
          </View>

        }
      </>
    )
  }
}

const mapStateToProps = (store, ownProps) => ({
  tracksData: store.Tracks.tracksData,
})
const mapDispatchToProps = (dispatch, ownProps) => ({
  getTracks: ({ trueLoading, falseLoading }) => dispatch(FatchTracks({ trueLoading, falseLoading })),
})


export default connect(mapStateToProps, mapDispatchToProps)(Home);
