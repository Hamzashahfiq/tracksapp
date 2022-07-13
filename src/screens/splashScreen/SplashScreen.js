import {View, ActivityIndicator } from 'react-native'
import React, { Component } from 'react'

export default class SplashScreen extends Component {
  render() {
    return (
      <View style={Styles.mainView}>
         <ActivityIndicator size="large" />
      </View>
    )
  }
}