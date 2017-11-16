import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    TextInput
} from 'react-native'
import WINDOW_SIZE from '../common/const';
import Carousel from 'react-native-carousel';
import config from '../common/config';


class Login extends Component{
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.subBox}>
                        <View style={styles.textArea}>
                            <Text style={styles.text}>姓 名：</Text>
                            <TextInput style={styles.textInput}></TextInput>
                        </View>
                    </View>
                    <View style={styles.subBox}>
                        <View style={styles.textArea}>
                            <Text style={styles.text}>密 码：</Text>
                            <TextInput style={styles.textInput}></TextInput>
                        </View>
                    </View>
                    <View style={styles.subBox}>
                        <View style={styles.textArea}>
                            <TouchableOpacity style={styles.btn}>
                                <Text style={{width:'50%',textAlign:'center'}}>登       录</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    box:{
        height:100,
        width:150,
        justifyContent:'center',
        flexDirection:'column',
        flex:1,
        alignItems:'center'
    },
    subBox:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        // backgroundColor:'red'
    },
    textArea:{
        width:'50%',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        height:'100%',
        // backgroundColor:'rgba(255,255,0,0.5)',
    },
    text:{
        flex:1,
        // backgroundColor:'blue'
    },
    textInput:{
        flex:3,
        // backgroundColor:'green'
    },
    btn:{
        flex:1,
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:'rgba(255,255,0,0.5)',
        width:'100%'
    }


});

export default Login;