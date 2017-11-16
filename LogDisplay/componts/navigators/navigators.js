import React, { Component } from 'react'
import {StackNavigator} from 'react-navigation'
import Home from '../home';
import Login from '../login'

const RootNavigator = StackNavigator({
    Home: {
      screen: Home,
      navigationOptions:{
        header: null
      }
    },
    Login: {
      screen: Login,
    }


  });
export default RootNavigator;
  