import React from "react";
import { View,Text,SafeAreaView,StyleSheet } from "react-native";
//https://icons.expo.fyi/
import { Feather } from '@expo/vector-icons';

const CurrentWeather=()=>{

return(
  <SafeAreaView style={styles.wrapper}>   
    {/* SafeAreaView-to render content within the safe area boundaries of a device */}
     <View style={styles.container}>
      {/* <View style={{backgroundColor:"pink"}}> */}  
      {/* use stylesheet instead of inline styling as it is a standard approach */}
    {/* <Text>Current Weather</Text> */}
    <Feather name="sun" size={100} color="black" />
    <Text style={styles.temp}>6</Text>
    <Text style={styles.feels}>Feels like 5</Text>
    <View style={styles.highlowwrapper}>
    <Text style={styles.highlow}>High:8 </Text>
    <Text style={styles.highlow}>Low:6</Text>
    </View>
    </View>
    <View style={styles.bodyWrapper}>
      <Text style={styles.description}>It's Sunny</Text>
      <Text style={styles.message}>It's perfect t-shirt weather</Text>
    </View>
 
  </SafeAreaView>
 
)
}
const styles=StyleSheet.create({
  container:{ //can take any name for this attribute.here container name is taken
    
    flex:1,
    alignItems:"center",
    justifyContent:"center"
  },
  wrapper:{  //to make view fill entire screen as we wre using one view..no need to use display:flex as it is default
    backgroundColor:"pink",
    flex:1
  },
  temp:{
    color:"black",
    fontSize:48  //no need of units.all dimensions in react native are unit less and represents density independent pixels
    //so,this is an absolute unit of measurement for the device
  },
  feels:{
    fontSize:30,
    color:"black"
  },
  highlow:{
    color:"black",
    fontSize:20
  },
  highlowwrapper:{
    flexDirection:"row"
  },
  bodyWrapper:{
    justifyContent:"flex-end",
    alignItems:"flex-start",
    paddingLeft:25,
    marginBottom:40
  },
  description:{
    fontSize:48
  },
  message:{
    fontSize:30
  }
})
export default CurrentWeather;