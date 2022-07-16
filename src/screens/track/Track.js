import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component } from 'react'
import { Styles } from './TrackStyle'
import TrackPlayer, { State } from 'react-native-track-player';

export default class Track extends Component {
  constructor(props) {
    super(props)
    this.state={
      checkPlay:2,
    }
  }

  trackHandler = async () => {
    const playbackState = await TrackPlayer.getState()
    if (playbackState === State.Playing) {
      TrackPlayer.pause();
      this.setState({checkPlay: playbackState})
    } else {
      TrackPlayer.play();
      this.setState({checkPlay: playbackState})
    };
  }

  render() {
    const track = this.props.route.params
    return (
      <View style={Styles.mainView}>
        <Image
          style={Styles.tImg}
          source={{ uri: track.imageUrl }}
        />
        <Text style={Styles.tText1}>The Greatest Song</Text>
        <Text style={Styles.tText2}>{track.tName}</Text>
        <TouchableOpacity
          style={Styles.tButton}
          onPress={() => this.trackHandler()}
        >
          <Text style={Styles.tButtonText}>{this.state.checkPlay === State.Playing? 'Play' :'Puase' }</Text>
        </TouchableOpacity>
      </View>
    )
  }
}