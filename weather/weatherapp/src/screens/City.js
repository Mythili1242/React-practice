import React from 'react'
import {
  SafeAreaView,
  StyleSheet,
  Text,
  ImageBackground,
  StatusBar,
  View
} from 'react-native';
import {Feather} from "@expo/vector-icons";
import IconText from '../components/IconText';
const City = () => {
    const {Container,cityName,cityText,countryName,populationWrapper,populationText,riseSetWrapper,riseSetText,rowLayout}=styles
  return (
    <SafeAreaView style={Container}>
      <ImageBackground
        source={require('../../assets/cityBackground.jpg')}
        style={styles.imageLayout}
      >
        <Text style={[cityName, cityText]}>London</Text>
        <Text style={[countryName, cityText]}>UK</Text>
        <View style={[populationWrapper,rowLayout]}>
            <IconText iconName={"user"} iconColor={"red"} bodyText={"8000"} bodyTextStyles={populationText}/>
        </View>
        <View style={[riseSetWrapper,rowLayout]}>
            <IconText iconName={"sunrise"} iconColor={"white"} bodyText={"10:46:58 AM"} bodyTextStyles={riseSetText}/>
            <IconText iconName={"sunset"} iconColor={"white"} bodyText={"17:28:15 PM"} bodyTextStyles={riseSetText}/>
          
        </View>
      </ImageBackground>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0
  },
  imageLayout: {
    flex: 1
  },
  cityName: {
    fontSize: 40
  },
  countryName: {
    fontSize: 30
  },
  cityText: {
    justifyContent: 'center',
    alignSelf: 'center',
    
    color: 'white'
  },
  populationWrapper:{
   
    justifyContent:"center",
    marginTop:30
  },
  populationText:{
fontSize:25,
marginLeft:7.5,
color:"red",
fontWeight:"bold"
  },
  riseSetWrapper:{

justifyContent:"space-around",
marginTop:30
  },
  riseSetText:{
fontSize:20,
color:"white",

  },
  rowLayout:{
    flexDirection:"row",
    alignItems:"center"
  }
})
export default City
