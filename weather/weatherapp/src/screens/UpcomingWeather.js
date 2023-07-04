import React from "react";
import { Text,StyleSheet,SafeAreaView,FlatList,StatusBar,ImageBackground } from "react-native";
import {Feather} from '@expo/vector-icons';
import ListItem from "../components/ListItem";

const DATA=[
    {
        "dt_txt": "2022-08-30 16:00:00",
        "main": {
          "temp_min": 296.2,
          "temp_max": 296.31, 
        },
        "weather": [
          {
            "main": "Rain",
          }
        ],
    },
    {       
        "dt_txt": "2022-08-30 17:00:00",
        "main": {
          
          "temp_min": 292.84,
          "temp_max": 294.94,
        },
        "weather": [
          {
            "main": "Rain",
          }
        ],
    },
    {
        "dt_txt": "2022-08-30 18:00:00",
        "main": {
          "temp_min": 294.14,
          "temp_max": 294.14,
        },
        "weather": [
          {
            "main": "Clouds",
          }
        ]
    }
]



const UpcomingWeather=()=>{

const renderItem=({item})=>{
    return(
<ListItem condition={item.weather[0].main} dt_txt={item.dt_txt} min={item.main.temp_min} max={item.main.temp_max} /> 

    )
}
const {container,image}=styles;
    return(
<SafeAreaView style={container}>
{/* <Image source={require('../../assets/upcomingImage.jpg')} style={styles.image}/> */}
<ImageBackground source={require('../../assets/upcomingImage.jpg')} style={image}>
      <Text>Upcoming Weather</Text>
        
 <FlatList data={DATA} renderItem={renderItem} keyExtractor={(item)=>{item.dt_txt}}/>
 </ImageBackground>
</SafeAreaView>
    )
}
const styles=StyleSheet.create({
    container:{
        marginTop:StatusBar.currentHeight || 0, //initializes with current height of the andriod
flex:1,
backgroundColor:"red"
    },
    
    image:{
        // height:100,
        // width:100
        flex:1
    }
})
export default UpcomingWeather;
