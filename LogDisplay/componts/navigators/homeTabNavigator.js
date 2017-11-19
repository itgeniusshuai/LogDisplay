import React,{Component} from 'react';  
import {Image} from 'react-native';  
import {TabNavigator,TabBarBottom} from 'react-navigation';  
import HomeScreen from '../home';
import UserScreen from '../user';


const Tab = TabNavigator(  
    {
      Note:{  
        screen:HomeScreen,  
      },  
    
      User:{  
        screen:UserScreen,  
      },  
    },  
    
      {  
        tabBarComponent:TabBarBottom,  
        tabBarPosition:'bottom',  
        swipeEnabled:false,  
        animationEnabled:false,  
        lazy:true,  
        tabBarOptions:{  
          activeTintColor:'#06c1ae',  
          inactiveTintColor:'#979797',  
          style:{backgroundColor:'#ffffff',},  
        //   labelStyle: {  
        //         fontSize: 20, // 文字大小  
        //     },  
        }  
          
      }  
    
    );  

class TabBarItem extends Component {  

    render() {  
        return(  
            <Image source={ this.props.focused ? this.props.selectedImage : this.props.normalImage }  
                style={ { tintColor:this.props.tintColor,width:25,height:25 } }  
            />  
        )  
    }  
    
}  

export default Tab;