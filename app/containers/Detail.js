import React, { Component } from "react";
import { StyleSheet, View } from "react-native";
import { connect } from "react-redux";

// import { Button } from '../components'
import { Button } from "antd-mobile";

import { NavigationActions } from "../utils";

@connect()
class Detail extends Component {
  static navigationOptions = {
    title: "Detail"
  };

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: "Detail" }));
  };

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: "Account" }));
  };

  render() {
    return (
      <View style={styles.container}>
        <Button type="primary" onClick={this.gotoDetail} style={styles.button}>
          Goto Detail
        </Button>
        <Button type="warning" onClick={this.goBack}>
          Go Back
        </Button>
        <View style={styles.extraView} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  button: {
    alignItems: "center"
    // backgroundColor: 'white'
  },
  extraView: {
    backgroundColor: 'powderblue',
    flexGrow: 1

  }
});

export default Detail;
