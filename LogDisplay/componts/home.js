import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import WINDOW_SIZE from '../common/const';
import Carousel from 'react-native-carousel';
import config from '../common/config';


class Home extends Component {
    
    _onStartApp(){
        this.props.navigation.navigate('Login');
    }
    render() {
        var picCount = config.carouselPics.length;
        return (
            <Carousel  delay={config.carouselDelay} 
                loop={false} style={styles.wrapper} 
                indicatorOffset={config.carouselBottom}
                >
                {config.carouselPics.map((img,index) => (
                    (index != picCount-1)?(<View style={styles.img} key={index}>
                        <Image source={img}  style={styles.img}/>
                    </View>):(
                        <View style={styles.img} key={index}>
                        <Image source={img}  style={styles.img}/>
                        <TouchableOpacity style={styles.button} onPress={this._onStartApp.bind(this)}>
                            <Text style={styles.btnText}>进入应用</Text>
                        </TouchableOpacity>
                    </View> 
                    )
                ))}
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