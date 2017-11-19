import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'

class HomeScreen extends Component {
    static navigationOptions = {
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
           <View style={styles.container}>
               <View style={styles.title}>
                   <Text style={styles.titleText}>笔记</Text>
                </View>
               <View style={styles.content}>
                <FlatList
                    data={[{key: 'a'}, {key: 'b'}]}
                    renderItem={({item}) => <Text>{item.key}</Text>}
                    />
               </View>
           </View>
       );
   }
}
const styles = StyleSheet.create({
    icon: {
      width: 26,
      height: 26,
    },
    container:{
        width:'100%',
        height:'100%',
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    title:{
        flex:1,
        width:'100%',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'flex-end',
        borderBottomWidth:1
    },
    titleText:{
        fontSize:18,
        textAlign:'center',
        flexDirection:'row',
        justifyContent:'center',
    },
    content:{
        flex:9
    }

  });
  

export default HomeScreen;