import React, { Component } from 'react'
import {StackNavigator} from 'react-navigation'
import Home from '../home';
import Login from '../login'
import Guide from '../guide'
import Tab from './homeTabNavigator'

const RootNavigator = StackNavigator({
    // Guide:{
    //   screen:Guide,
    //   navigationOptions:{
    //     header:null
    //   }
    // }, 
    // Home: {
    //   screen: Home,
    //   navigationOptions:{
    //     header: null
    //   }
    // },
    Login: {
      screen: Login,
      navigationOptions:{
        header: null
      }
    },
    Tab:{
      screen:Tab,
      navigationOptions:{
        header: null
      }
    }


  });
export default RootNavigator;
  