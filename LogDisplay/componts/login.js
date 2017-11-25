import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableHighlight,
    TouchableOpacity,
    TextInput
} from 'react-native'
import WINDOW_SIZE from '../common/const';
import Carousel from 'react-native-carousel';
import config from '../common/config';
import httpUtils from '../common/http';
import Tab from './navigators/homeTabNavigator'
import { NavigationActions } from 'react-navigation';
const bgColor = 'rgba(35,35,35,1)'
const disBgColor = 'rgba(35,35,35,0.2)'

class Login extends Component{
    constructor(props){
        super(props);
        this.state={
            'username':'',
            'password':'',
            'flagLogindisabled':true,
            'loginBackgroundColor': disBgColor
        }
    }
    login(){
        let params = {};
        params.username=this.state.username;
        params.password=this.state.password;
        const tabAuction = NavigationActions.reset({index: 0,
            actions: [
              NavigationActions.navigate({ routeName: 'Tab'})
            ]})
        this.props.navigation.dispatch(tabAuction)
    }
    _onChangeText(type,e){
        let stateObj = {}
        if(type == 'username'){
            stateObj.username = e
            stateObj.flagLogindisabled = (this.state.password == '' || e == '' ?true:false);
            
        }else if(type == 'password'){
            stateObj.password = e
            stateObj.flagLogindisabled = (this.state.username == '' || e == '' ?true:false);
        }
        if(stateObj.flagLogindisabled){
            this.loginBackgroundColor = disBgColor
        }else{
            this.loginBackgroundColor = bgColor
        }
        this.setState(stateObj) //4006601169
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
                        onChangeText={(e)=>{this._onChangeText('username',e)}
                            }
                    />
                    <TextInput 
                        style={styles.input}
                        placeholder='密码'
                        onChangeText={(e)=>{this._onChangeText('password',e)}}
                        />
                </View>
                <View style={styles.btnView}>
                    <TouchableHighlight style={[styles.btn,{backgroundColor:disBgColor}]} onPress={this.login.bind(this)} disabled={this.state.flagLogindisabled}>
                        <Text style={[styles.btnText,{backgroundColor:this.loginBackgroundColor}]}>登录</Text>
                    </TouchableHighlight>
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
        backgroundColor:'#232323'
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