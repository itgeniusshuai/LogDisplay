import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
//import {navigationOptions} from 'react-navigation';  

class HomeScreen extends Component {
    static navigationOptions = {
        // tabBarLabel: 'HomeScreen',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../pic/note.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
   render(){
       return (
           <View>
               <Text>home</Text>
           </View>
       );
   }
}
const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
  });
  

export default HomeScreen;