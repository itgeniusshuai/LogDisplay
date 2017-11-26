import React,{Component} from 'react';  
import {Image} from 'react-native';  
import {TabNavigator,TabBarBottom} from 'react-navigation';  
import NoteScreen from '../note/note';
import UserScreen from '../user/user';


const Tab = TabNavigator(  
    {
      Note:{  
        screen:NoteScreen,  
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
        //   showLabel:false,`
          style:{backgroundColor:'#ffffff',},  
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