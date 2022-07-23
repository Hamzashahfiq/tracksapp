import { Text, View, Image, TouchableOpacity } from 'react-native'
import React, { Component, useEffect} from 'react'
import { Styles } from './TrackStyle'
import TrackPlayer, { State, useProgress, usePlaybackState  } from 'react-native-track-player';
import Slider from '@react-native-community/slider';




export default function Track({route}) {
  const progress = useProgress();
  const isPlaying = usePlaybackState();
   
  return (
    <>
      <TrackHook trackData = {route.params} progress = {progress} isPlaying = {isPlaying}/>
    </>
  )
}



class TrackHook extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checkPlay: 2,
    }
  }
  componentDidMount() {
    let track = {
      url: this.props.trackData.trackUrl,
      artist: this.props.trackData.releaseBy,
    }
    this.trackAdd(track)
  }
  trackAdd = async (track) => {
    TrackPlayer.reset()
    await TrackPlayer.add([track]);
  }
  trackHandler = async () => {
    const playbackState = this.props.isPlaying
    if (playbackState === State.Playing) {
      TrackPlayer.pause();
      this.setState({ checkPlay: playbackState })
    } else {
      TrackPlayer.play();
      this.setState({ checkPlay: playbackState })
    };
  }

  render() {
    const track = this.props.trackData
    const progress = this.props.progress
    const isPlaying = this.props.isPlaying
    return (
      <View style={Styles.mainView}>
        <Image
          style={Styles.tImg}
          source={{ uri: track.imageUrl }}
        />
        <Text style={Styles.tText1}>The Greatest Song</Text>
        <Text style={Styles.tText2}>{track.tName}</Text>
        <View  style={Styles.viewSlider}>
          <Slider
            style={{ minWidth: '100%', height: 60, }}
            value = {progress.position}
            minimumValue={0}
            maximumValue={progress.duration}
            minimumTrackTintColor="#ade8f4"
            maximumTrackTintColor="#000000"
            onSlidingComplete={async(value) => {
             await TrackPlayer.seekTo(value)          
            }}
          />
        </View>
        <View  style={Styles.viewText}>
          <Text>{new Date(progress.position * 1000).toString().substr(20, 5)}</Text>
          <Text>-{new Date((progress.duration-Math.floor(progress.position))*1000).toString().substr(20, 5)}</Text>
        </View>

        <TouchableOpacity
          style={Styles.tButton}
          onPress={() => this.trackHandler()}
        >
          <Text style={Styles.tButtonText}>{isPlaying === State.Playing ?  'Puase' : 'Play'}</Text>
        </TouchableOpacity>
      </View>
    )
  }
}