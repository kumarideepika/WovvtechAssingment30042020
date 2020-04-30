import React from 'react';
import {View,Text,StyleSheet} from 'react-native';
import {Card} from 'native-base';

const CapitalWeather =({route})=>{
let {capitalInfo} = route.params;
// let {name}=capitaldetails;
let {temperature,weather_icons,wind_speed,precip}=capitalInfo.current;
return(
    <View>
        <Card>
            <View style={{flexDirection:'row'}}>
{/* <Text>Capital: <Text>{name}</Text></Text> */}
<Text>Wind Speed: <Text>{wind_speed}</Text></Text>
<Text>Precipitation: <Text>{precip}</Text></Text>
<Text>Temperature:<Text>{temperature}</Text></Text>
<Text>Weather Icon</Text>
<View>
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
        backgroundColor:'#fff'
    }
})
