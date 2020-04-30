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
 }
 async Go_to_CapitalWeather(capital){
     this.setState({loader:true});
 let response =await fetch("http://api.weatherstack.com/current?access_key="+APK_KEY+"&query="+capital).
 then((response)=>response.json()).
 then((responsejson)=>{
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
              renderItem={({item}) => 
              <View>
 <View style={{ flexDirection: 'row',marginTop:25
}}>
            <View style={{  marginLeft: 0,width:110,flex:1.5,marginTop:-13 }}> 
            <SvgUri width="100" height="100" uri={item.flag} viewbox="0 0 30 30" />
                        </View>
         <View style={{borderWidth:0,flex:1.6}}>
         <View style={{  marginLeft: 0,width:115}}>
           <Text style={{ fontSize:11,fontWeight:'bold',marginTop:0,color:'#000',fontFamily:'serif' }}>Country: <Text style={{fontWeight:'400',fontSize:11}}>{item.name}</Text></Text>
           <Text style={{ fontSize:11,fontWeight:'bold',marginTop:0,color:'#000',fontFamily:'serif' }}>Capital: <Text style={{fontWeight:'400',fontSize:11}}>{item.capital}</Text></Text>
           <Text style={{ fontSize:11,fontWeight:'bold',marginTop:0,color:'#000',fontFamily:'serif' }}>Population: <Text style={{fontWeight:'400',fontSize:11}}>{item.population}</Text></Text>
           <Text style={{ fontSize:11,fontWeight:'bold',marginTop:0,color:'#000',fontFamily:'serif' }}>LatLong: <Text style={{fontWeight:'400',fontSize:11}}>{item.latlng}</Text></Text>
           </View>
          </View>
          <View  style={{ borderWidth:0,flex:1.6}}>
            <TouchableOpacity onPress={() => this.Go_to_CapitalWeather(item.capital)}  style={styles.button} >
                  <Text style={{color:'#fff'}}>Capital Weather</Text>
                  </TouchableOpacity>
                  </View>
                  <View  style={{ borderWidth:0,flex:.1}}>
       
                  </View>

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
        backgroundColor:'#00ccff',
        flex:1
    },
    button: {
        backgroundColor:'#009688',
        marginTop:30,
        borderRadius:20,
        paddingLeft:8,
        padding:5,
        paddingTop:5,
        paddingBottom:10,
          // marginVertical:10,
          paddingVertical:10,
      },
    item_font:{
        fontSize:10
    },title:{
        fontSize:11,
        fontWeight:'bold'
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
        opacity:0.5,
        elevation:18
    }
})