import { ScrollView, Text, View, FlatList } from 'react-native'
import React, { Component } from 'react'
import { FatchTracks } from '../../store/TrackSlice'
import { connect } from 'react-redux'
import SplashScreen from '../splashScreen/SplashScreen';



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
    return (


      <>
        {this.state.loading ? <SplashScreen /> :
          <FlatList
            data={tData}
            renderItem={({ item }) => (
              <View>
                <Text>{item.tCategory}</Text>
              </View>
            )}
            keyExtractor={item => item.id}
          />

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
