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
import Carousel from 'react-native-carousel';
import config from '../common/config';


class Home extends Component {
    
    _onStartApp(){
        alert("fsdf")
    }
    render() {
        // var PicViews = config.carouselPics.map((pic) => {
        //     alert(pic)
        //     return (<View style={styles.img}>
        //         {/* <Image source={require(pic)}  style={styles.img}/> */}
        //         <Text>{pic}</Text>
        //     </View>)
        // });
        return (
            <Carousel  delay={config.carouselDelay} 
                loop={false} style={styles.wrapper} 
                indicatorOffset={config.carouselBottom}
                >
                <View style={styles.img}>
                    <Image source={require('../pic/a.jpg')}  style={styles.img}/>
                </View>
                <View style={styles.img}>
                    <Image source={require('../pic/b.jpg')}  style={styles.img}/>
                </View>
                <View style={styles.img}>
                    <Image source={require('../pic/a.jpg')} style={styles.img}/>
                </View> 
                <View style={styles.img}>
                    <Image source={require('../pic/d.jpg')}  style={styles.img}/>
                    <TouchableOpacity style={styles.button} onPress={this._onStartApp}>
                        <Text style={styles.btnText}>进入应用</Text>
                    </TouchableOpacity>
                </View> 
            </Carousel>

        )
    }
}

const styles = StyleSheet.create({
    wrapper: {
        height:WINDOW_SIZE.ScreenHeight,
        width:WINDOW_SIZE.ScreenWidth,
        marginTop:-20
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
        alignItems:'center',
        
    },
    btnText:{
        backgroundColor:'rgba(0,0,0,0)'
    }

})
export default Home;