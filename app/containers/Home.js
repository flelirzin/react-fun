import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { connect } from 'react-redux'

// import { Button } from '../components'
import { Button } from 'antd-mobile'

import { NavigationActions } from '../utils'

@connect()
class Home extends Component {
  static navigationOptions = {
    title: 'Home',
    tabBarLabel: 'Home',
    tabBarIcon: ({ focused, tintColor }) => (
      <Image
        style={[styles.icon, { tintColor: focused ? tintColor : 'gray' }]}
        source={require('../images/house.png')}
      />
    ),
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Detail' }))
  }
  gotoViewmap = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Viewmap' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button type="primary" onClick={this.gotoDetail}>
          Goto Detail
        </Button>
        <Button type="default" onClick={this.gotoViewmap}>
          Goto Viewmap
        </Button>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  icon: {
    width: 32,
    height: 32,
  },
})

export default Home
