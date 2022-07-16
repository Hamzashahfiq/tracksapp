import React, { Component } from 'react'
import Home from './src/screens/home/Home'
import { Store } from './src/config/Store'
import { Provider } from 'react-redux'
import SplashScreen from './src/screens/splashScreen/SplashScreen'
import Navigation from './src/navigation/Navigation'

export default class App extends Component {
  render() {
    return (
      <Provider store={Store}>
        <Navigation />
      </Provider>
    )
  }
}