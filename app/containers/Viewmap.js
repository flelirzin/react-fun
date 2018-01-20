import React, { Component } from "react";
import { StyleSheet, View, Dimensions, Text } from "react-native";
import { connect } from "react-redux";
import MapView from "react-native-maps";

// import { Button } from '../components'
import { Button } from "antd-mobile";

const { width, height } = Dimensions.get("window");

import { createAction, NavigationActions } from "../utils";

@connect(({ app }) => ({ ...app }))
class Viewmap extends Component {
  static navigationOptions = {
    title: "Viewmap"
  };

  onRegionChange = r => {
    console.log("On Region Change");
    console.log(r);
    this.props.dispatch(createAction('app/locationChange')(r))
  };

  render() {
    console.log("RENDER VIEWMAP");
    console.log(this.props);
    return (
      <View style={styles.container}>
        <MapView
          style={styles.map}
          region={{
            ...this.props.location,
            latitudeDelta: 0.015,
            longitudeDelta: 0.0121
          }}
          onRegionChange={this.onRegionChange}
        >
          <MapView.Circle
            center={{
              latitude: 37.78825,
              longitude: -122.4324
            }}
            radius={300}
            fillColor="rgba(100, 100, 100, 0.5)"
          />
        </MapView>
        <View style={styles.viewText}>
          <Text style={styles.text}>{this.props.currentLocation.longitude}</Text>
          <Text style={styles.text}>{this.props.currentLocation.latitude}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    // height,
    // width,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  map: {
    ...StyleSheet.absoluteFillObject
  },
  text: {
    alignItems: "center"
  },
  viewText: {
    height: 50,
    // backgroundColor: 'gold1',
    flex: 1
  }
});

export default Viewmap;
