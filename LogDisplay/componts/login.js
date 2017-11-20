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
        this.props.navigation.navigate('Tab')
    }
    render(){
        return(
            <View style={styles.container}>
                <View style={styles.imgView}>
                    <Image style={styles.img} source={require('../pic/login1.jpg')}/>
                </View>
                <View style={styles.inputView}>
                    <TextInput
                        style={styles.input}
                        placeholder='用户名'
                        onChangeText={(e)=>{this.setState({'username':e})}}
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='密码'
                        onChangeText={(e)=>{this.setState({'password':e})}}
                        />
                </View>
                <View style={styles.btnView}>
                    <TouchableOpacity style={styles.btn} onPress={this.login.bind(this)}>
                        <Text style={styles.btnText}>登录</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btn}>
                        <Text style={styles.btnText}>注册</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.forgetView}>
                    <Text style={styles.forget} onPress={() => alert('forget')}>忘记密码</Text>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
    },
    imgView:{
        height:230,
        width:'100%',
        marginTop:60,
    },
    img:{
        height:230,
        width:WINDOW_SIZE.ScreenWidth
    },
    inputView:{
        height:100,
        width:'100%',
        marginTop:10,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    input:{
        marginTop:5,
        height:45,
        width:WINDOW_SIZE.ScreenWidth - 40,
        borderBottomWidth:1
    },
    btnView:{
        marginTop:10,
        height:110,
        width:'100%',
        marginTop:10,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    btn:{
        marginTop:10,
        height:45,
        width:WINDOW_SIZE.ScreenWidth - 40,
        backgroundColor:'#2f2f2f'
    },
    btnText:{
        lineHeight:45,
        textAlign:'center'
    },
    forgetView:{
        marginTop:5,
        height:25,
        width:WINDOW_SIZE.ScreenWidth - 40,
        flexDirection:'row',
        justifyContent:'flex-end',
        alignItems:'center',
    },
    forget:{
        color:'red',
        fontSize:18
    }
});

export default Login;