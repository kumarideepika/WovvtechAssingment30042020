import React,{ Component } from 'react';
import {View,Text,StyleSheet,TextInput, TouchableOpacity} from 'react-native';
import {Card} from 'native-base';
export default class Homescreen extends Component{
    constructor(){
        super();
        this.state={
            Countryid:'',
            showmessage:false
            
        }
    }
   async GetCountyList(){
        let response=await fetch("https://restcountries.eu/rest/v2/name/"+this.state.Countryid)
        .then((response) =>response.json())
        .then(responseJson =>{
            if(responseJson.status==404){
                this.setState({showmessage:true})
            }else{
                this.state.showmessage=false;
                this.props.navigation.navigate('Country List',{
                    Countrydetails:responseJson
                })
            }
        })
    }
    render(){
        return(
            <View style={styles.Container}>
                <Card style={styles.card}>
                    <View>
                        <TextInput style={styles.textinput}
                        name="country name"
                        placeholder="Enter Country ID"
                        selectionColor="#999"
                        placeholderTextColor="#999"
                        onChangeText={Countryid => this.setState({Countryid})}
                        value={this.state.Countryid}
                        />
                        {this.state.Countryid.length<3 &&
                        <View><Text style={{color:"red"}}>Please Enter Minimum 3 Characters</Text></View>}
                    </View>
                    <View>
                        <TouchableOpacity onPress={()=>this.GetCountyList()} disabled={this.state.Countryid.length<3} style={[styles.submit_button, {backgroundColor:this.state.Countryid.length<3 ? '#999':'#009688'}]}>
                            <Text style={styles.text_button}>Submit</Text>
                        </TouchableOpacity>
                    </View>
                </Card>
                <Card>
                    {this.state.showmessage && 
                    <Card style={styles.message}>
                        <Text>No Data Found</Text>
                        </Card>}
                </Card>
            </View>
        );
    }
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
        // backgroundColor:'#0099cc'
    },
    card:{
        marginTop:50,
        height:250,
        backgroundColor:'#87ceeb',
        width:"90%",
        alignContent:'center',
        alignItems:'center',
        borderRadius:10,marginLeft:17
    },
    message:{
        alignItems:'center',
        height:'100%'
    },
    textinput:{
        padding:5,
        marginTop:60,
        width:250,
        backgroundColor:'#fff',
        borderRadius:20,
        borderWidth:1,

    },
    submit_button:{
        width:250,
        marginVertical:20,
        padding:10,
        
    },
    text_button:{
        fontSize:12,
        fontWeight:'500',
        color:'#fff',
        textAlign:'center',
        fontFamily:'serif'
    }
})