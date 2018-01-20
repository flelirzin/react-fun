import React, { Component } from 'react'
import { StyleSheet, View, Dimensions } from 'react-native'
import { connect } from 'react-redux'
import MapView from 'react-native-maps'

// import { Button } from '../components'
import { Button } from 'antd-mobile'

const { width, height } = Dimensions.get('window')

import { NavigationActions } from '../utils'

@connect()
class Viewmap extends Component {
  static navigationOptions = {
    title: 'Viewmap',
  }

  render() {
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121,
          }}
        >
          <MapView.Circle
            center={{
              latitude: 37.78825,
              longitude: -122.4324,
            }}
            radius={300}
            fillColor="rgba(100, 100, 100, 0.5)"
          />
        </MapView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    height,
    width,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
})

export default Viewmap
