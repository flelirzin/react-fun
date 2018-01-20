import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import { connect } from 'react-redux'

// import { Button } from '../components'
import { Button } from 'antd-mobile';

import { NavigationActions } from '../utils'

@connect()
class Viewmap extends Component {
  static navigationOptions = {
    title: 'Viewmap',
  }

  gotoDetail = () => {
    this.props.dispatch(NavigationActions.navigate({ routeName: 'Viewmap' }))
  }

  goBack = () => {
    this.props.dispatch(NavigationActions.back({ routeName: 'Account' }))
  }

  render() {
    return (
      <View style={styles.container}>
        <Button type="primary" onClick={this.gotoDetail} >Goto Detail</Button>
        <Button type="warning" onClick={this.goBack} >Go Back</Button>
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
})

export default Viewmap
