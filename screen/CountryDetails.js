import React,{Component} from 'react';
import {View,Text,StyleSheet, ActivityIndicator} from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import {SvgUri} from 'react-native-svg';
const APK_KEY="337edd5799e09ebf5409d8825539a1dc";
export default class CapitalWeather extends Component{
 constructor(props){
     super(props);
     this.state={
         countryDetails:[],
         loader:false
     }
     alert(JSON.stringify(props.route.params))
 }
 async Go_to_CapitalWeather(capital){
     alert(JSON.stringify(capital))
     this.setState({loader:true});
 let response =await fetch("http://api.weatherstack.com/current?access_key="+APK_KEY+"&query="+capital).
 then((response)=>response.json()).
 then((responsejson)=>{
     alert(JSON.stringify(responsejson));
     this.setState({loader:false});
     this.props.navigation.navigate('capital Weather',{
         capitalInfo:responsejson
     })
 })
 }
 startLoader =()=>{
 <View  style={styles.loader_style}>
     <ActivityIndicator color={'#000'} size={90}></ActivityIndicator>
 </View>
 }
    render(){
        return(
            <View style={styles.container}>
                <FlatList 
                data={this.props.route.params.Countrydetails}
                renderItem={({item})=>
                <View style={{flexDirection:'row',marginTop:25}}>
                    <View style={{flex:1.5}}>
                        <SvgUri width='100' height='100' uri={item.flag} viewBox="0 0 30 30"/>
                    </View>
                    <View style={{flex:1.6}}>
                        <View style={{width:110}}>
        <Text><Text>Country:</Text><Text>{item.name}</Text></Text>
        <Text><Text>Capital:</Text><Text>{item.capital}</Text></Text>
        <Text><Text>Population:</Text><Text>{item.population}</Text></Text>
        <Text><Text>latlng:</Text><Text>{item.latlng}</Text></Text>
                        </View>
                    </View>
                    <View style={{flex:1.6}}>
                        <TouchableOpacity onPress={()=>this.Go_to_CapitalWeather(item.capital)} style={styles.button}>
                            <Text>Capital weather</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            }
                />
                {this.state.loader ? this.startLoader() :null}
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container:{
        backgroundColor:'#99ff99',
        flex:1
    },
    button:{
        backgroundColor:'#fddd00',
        borderRadius:20,
        paddingLeft:8,
        paddingTop:5,
        paddingBottom:10,
        paddingVertical:10,
        marginTop:30
    },
    loader_style:{
        bottom:0,
        left:0,
        right:0,
        top:0,
        position:'absolute',
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#999',
        opacity:0.5
    }
})