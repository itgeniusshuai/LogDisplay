import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    FlatList
} from 'react-native'

class NoteListItem extends Component{
    constructor(props){
        super(props)

    }
    getDefulatProps(){
        return ({
            marginRightValue = 10,
        });
    }
    loadSubItems(item){
        // 根据当前节点获取下一节点
        let isFile = item.isFile;
        let detailId = item.detailId;
        if(isFile){
            this.props.navigation.navigate('NoteDetail',{detailId:detailId});
        
        }else{
            this.setState();ß
        }
    }
    render(){
        return (
            <View>
                <TouchableOpacity style={styles.item} >
                    
                </TouchableOpacity>
            </View>
        );
    }

}