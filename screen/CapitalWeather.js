import React from 'react';
import {View,Text,StyleSheet,Image} from 'react-native';
import {Card} from 'native-base';

const CapitalWeather =({route})=>{
let {capitalInfo} = route.params;
// let {name}=capitaldetails;
let {temperature,weather_icons,wind_speed,precip}=capitalInfo.current;
return(
    <View>
        <Card style={styles.card}>
            <View style={{flexDirection:'row'}}>
<View style={{flex:1 ,marginLeft:5,padding:10}}>
<Text style={styles.title}>Wind Speed: <Text style={styles.item}>{wind_speed}</Text></Text>
<Text style={styles.title}>Precipitation: <Text style={styles.item}>{precip}</Text></Text>
<Text style={styles.title}>Temperature:<Text style={styles.item}>{temperature}</Text></Text>
<Text style={styles.title}>Weather Icon</Text>
</View>
<View style={{marginRight:20,marginTop:10}}>
{weather_icons.map((icon)=>(
    <Image source={{uri:icon}} style={{width:50,height:50}}/>
))}
</View>

            </View>
        </Card>
    </View>
)
}
export default CapitalWeather;
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fffdd0'
    },
    card:{
        marginTop:20,
        borderRadius:10,
        width:'95%',
        marginLeft:10,
        textAlign:'center'
    },title:{
        fontWeight:'bold',
        fontSize:12
    },item:{
        fontSize:11
    }
})
