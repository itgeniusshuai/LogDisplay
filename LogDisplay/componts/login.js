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
import httpUtils from '../common/http';
import Tab from './navigators/homeTabNavigator'


class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            'username':'',
            'password':'',
        }
    }
    login(){
        let params = {};
        params.username=this.state.username;
        params.password=this.state.password;
        const url = 'http://wwww.baidu.com'
        // httpUtils.httpGet(url,params,null);
        this.props.navigation.navigate('Tab')
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.box}>
                    <View style={styles.subBox}>
                        <View style={styles.textArea}>
                            <Text style={styles.text}>姓 名：</Text>
                            <TextInput style={styles.textInput} 
                                keyboardType='phone-pad' 
                                onChangeText={(e)=>{this.setState({'username':e})}}
                                placeholder='姓  名'></TextInput>
                        </View>
                    </View>
                    <View style={styles.subBox}>
                        <View style={styles.textArea}>
                            <Text style={styles.text}>密 码：</Text>
                            <TextInput style={styles.textInput} 
                                keyboardType='default' 
                                placeholder='密  码' 
                                onChangeText={(e)=>{this.setState({'password':e})}}
                                secureTextEntry={true}></TextInput>
                        </View>
                    </View>
                    <View style={styles.subBox}>
                        <View style={styles.textArea}>
                            <TouchableOpacity style={styles.btn} onPress={this.login.bind(this)}>
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
        alignItems:'center',
        backgroundColor:'rgba(255,0,0,0.8)'
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
    },
    textArea:{
        width:'50%',
        justifyContent:'center',
        flexDirection:'row',
        alignItems:'center',
        height:'100%',
    },
    text:{
        flex:1,
    },
    textInput:{
        flex:3,
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