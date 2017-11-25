import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
// import {navigationOptions} from 'react-navigation';  
class UserScreen extends Component {
    static navigationOptions = {
        // tabBarLabel: 'UserScreen',
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../pic/user.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
   render(){
       return (
           <View>
               <Text>user</Text>
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
  
export default UserScreen;