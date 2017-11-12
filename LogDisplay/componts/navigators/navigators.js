import React, { Component } from 'react'
import {StackNavigator} from 'react-navigation'
import Home from '../home'

const RootNavigator = StackNavigator({
    Home: {
      screen: Home,
    },


  });
export default RootNavigator;
  