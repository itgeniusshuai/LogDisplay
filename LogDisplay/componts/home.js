import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import Swiper from 'react-native-swiper';
import WINDOW_SIZE from '../common/const';


class Home extends Component {
    
    _onStartApp(){
        alert("fsdf")
    }
    render() {
        return (
        
            <Swiper  showsButtons={true} style={styles.wrapper} 
                loop={false}>
                <View style={styles.img}>
                    <Image source={require('../pic/a.jpg')}  style={styles.img}/>
                </View>
                <View style={styles.img}>
                    <Image source={require('../pic/b.jpg')}  style={styles.img}/>
                </View>
                <View style={styles.img}>
                    <Image source={require('../pic/c.jpg')} style={styles.img}/>
                </View>
                <View style={styles.img}>
                    <Image source={require('../pic/d.jpg')}  style={styles.img}/>
                    <TouchableOpacity style={styles.button} onPress={this._onStartApp}>
                        <Text>进入应用</Text>
                    </TouchableOpacity>
                </View>
            </Swiper>

        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height:WINDOW_SIZE.ScreenWidth,
        width:WINDOW_SIZE.ScreenWidth
    },
    img: {
        width: WINDOW_SIZE.ScreenWidth,
        height: WINDOW_SIZE.ScreenHeight,
    },
    button: {
        width:80,
        position:'absolute',
        height:40,
        left:(WINDOW_SIZE.ScreenWidth-80)/2,
        bottom:80,      
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    btnText:{

    }

})
export default Home;