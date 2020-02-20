import React, {Component} from 'react';
import {StyleSheet ,View, Text, Image} from 'react-native'; 

import {SubMenu} from './SubMenu';

export default class SixMenu extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <View style = {styles.main}>
                <View style = {styles.columns}>
                    <SubMenu
                        title = {this.props.menu1.title}
                        src = {this.props.menu1.src}
                        color = {this.props.menu1.color}/>

                    <SubMenu
                        title = {this.props.menu2.title}
                        src = {this.props.menu2.src}
                        color = {this.props.menu2.color}/>

                    <SubMenu
                        title = {this.props.menu3.title}
                        src = {this.props.menu3.src}
                        color = {this.props.menu3.color}/>
                </View>

                <View style = {styles.columns}>
                    <SubMenu
                        title = {this.props.menu4.title}
                        src = {this.props.menu4.src}
                        color = {this.props.menu4.color}/>

                    <SubMenu
                        title = {this.props.menu5.title}
                        src = {this.props.menu5.src}
                        color = {this.props.menu5.color}/>

                    <SubMenu
                        title = {this.props.menu6.title}
                        src = {this.props.menu6.src}
                        color = {this.props.menu6.color}/>
                </View>
            </View>
        );   
    }
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center'
    },
    columns:{
        flex: 1,
    },
});