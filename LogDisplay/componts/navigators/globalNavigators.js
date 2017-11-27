import React, { Component } from 'react'
import {StackNavigator} from 'react-navigation'
import Login from '../login'
import Guide from '../guide'
import Tab from './homeTabNavigator'
import NoteListItem from '../note/noteListItem'

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
    },
    NoteListItem:{
      screen:NoteListItem,
    }



  });
export default RootNavigator;
  