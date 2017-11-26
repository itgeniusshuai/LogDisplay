import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'
class ItemSeparatorComponent extends Component{
    render(){
        return (
            <View style={{backgroundColor:'black',height:1,width:'100%'}}>

            </View>
        );
    }
}
class NoteScreen extends Component {
    static navigationOptions = {
        // Note: By default the icon is only shown on iOS. Search the showIcon option below.
        tabBarIcon: ({ tintColor }) => (
          <Image
            source={require('../pic/note.png')}
            style={[styles.icon, {tintColor: tintColor}]}
          />
        ),
      };
    _renderItem = ({item}) =>
        (
            <TouchableOpacity style={styles.item}>
                <Text style={styles.itemText}>{item.key}</Text>
            </TouchableOpacity>
        );
    _keyExtractor = (item, index) => item.id;
    
    render(){
       return (
           <View style={styles.container}>
               <View style={styles.title}>
                   <Text style={styles.titleText}>笔记</Text>
                </View>
               <View style={styles.content}>
                <FlatList
                    data={[{key: 'a',id:1}, {key: 'b',id:2},{key: 'c',id:3}, {key: 'd',id:4}]}
                    renderItem={this._renderItem}
                    keyExtractor={this._keyExtractor}
                    ItemSeparatorComponent={ItemSeparatorComponent}
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
        flex:9,
        width:'100%',
    },
    itemContainer:{
        justifyContent:'center',
        flexDirection:'column',
        alignItems:'center',     
    },
    item:{
        flex:1,
        height:45,
        justifyContent:'center',
        alignItems:'center',
    },
    itemText:{
        fontSize:18,
        textAlign:'center',
        lineHeight:45,
        // flex:1
    }

  });
  

export default NoteScreen;