import { Text, View } from 'react-native'
import React, { Component } from 'react'
import { FatchTracks } from '../../store/TrackSlice'
import { connect } from 'react-redux'


class Home extends Component {
    constructor(props){
        super(props)
    }
    UNSAFE_componentWillMount(){
        this.props.getTracks()
    }
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    )
  }
}

const mapDispatchToProps = (dispatch, ownProps) => ({
    getTracks: () => dispatch(FatchTracks()),
})

export default connect(null, mapDispatchToProps)(Home);