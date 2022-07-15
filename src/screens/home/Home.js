import { ScrollView, SectionList, Text, View, FlatList, ImageBackground } from 'react-native'
import React, { Component } from 'react'
import { FatchTracks } from '../../store/TrackSlice'
import { connect } from 'react-redux'
import SplashScreen from '../splashScreen/SplashScreen';
import { Styles } from './HomeStyle';




class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loading: false };
  }
  tLoading = () => {
    this.setState({ loading: true })
  }
  fLoading = () => {
    this.setState({ loading: false })
  }
  UNSAFE_componentWillMount() {
    let trueLoading = this.tLoading
    let falseLoading = this.fLoading
    this.props.getTracks({ trueLoading, falseLoading })
  }

  render() {
    console.log(this.props.tracksData)
    const tData = this.props.tracksData
    console.log(this.props.tracksData[0].data)
    return (


      <>
        {this.state.loading ? <SplashScreen /> :
          <View style={Styles.mainView}>
            <ImageBackground style={Styles.bImage} source={require('../../assets/tbgimg.webp')} resizeMode="cover">
              <SectionList
                sections={tData}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                  <View>
                    <Text>{item.id}</Text>
                  </View>
                )}
                renderSectionHeader={({ section: { title } }) => (
                  <Text >{title}</Text>
                )}
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
