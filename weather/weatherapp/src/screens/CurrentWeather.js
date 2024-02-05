import React from "react"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
//https://icons.expo.fyi/
import { Feather } from "@expo/vector-icons"
import RowText from "../components/RowText"
import { weatherType } from "../utilities/weatherType"

const CurrentWeather = ({ weatherData }) => {
  const {
    wrapper,
    container,
    tempStyles,
    feels,
    highlowwrapper,
    highlow,
    bodyWrapper,
    description,
    message
  } = styles
  const {
    main: { temp, feels_like, temp_max, temp_min },
    weather
  } = weatherData

  const weatherCondition = weather[0].main

  return (
    <SafeAreaView
      style={[
        wrapper,
        { backgroundColor: weatherType[weatherCondition].backgroundColor }
      ]}
    >
      {/* SafeAreaView-to render content within the safe area boundaries of a device */}
      <View style={container}>
        {/* <View style={{backgroundColor:"pink"}}> */}
        {/* use stylesheet instead of inline styling as it is a standard approach */}
        {/* <Text>Current Weather</Text> */}
        <Feather
          name={weatherType[weatherCondition].icon}
          size={100}
          color="white"
        />
        <Text style={tempStyles}>{temp}</Text>
        <Text style={feels}>{`feels like ${feels_like}`}</Text>
        <RowText
          messageOne={`High: ${temp_max}`}
          messagetwo={`Low:${temp_min}`}
          containerStyles={highlowwrapper}
          messageOneStyles={highlow}
          messagetwoStyles={highlow}
        />
        {/* <View style={styles.highlowwrapper}>
    <Text style={styles.highlow}>High:8 </Text>
    <Text style={styles.highlow}>Low:6</Text>
    </View> */}
      </View>
      <RowText
        messageOne={weather[0].description}
        messageTwo={weatherType[weatherCondition].message}
        containerStyles={styles.bodyWrapper}
        messageOneStyles={styles.description}
        messagetwoStyles={styles.message}
      />
      {/* <View style={styles.bodyWrapper}>
      <Text style={styles.description}>It's Sunny</Text>
      <Text style={styles.message}>It's perfect t-shirt weather</Text>
    </View> */}
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  container: {
    //can take any name for this attribute.here container name is taken

    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  wrapper: {
    //to make view fill entire screen as we wre using one view..no need to use display:flex as it is default
    backgroundColor: "pink",
    flex: 1
  },
  tempStyles: {
    color: "black",
    fontSize: 48 //no need of units.all dimensions in react native are unit less and represents density independent pixels
    //so,this is an absolute unit of measurement for the device
  },
  feels: {
    fontSize: 30,
    color: "black"
  },
  highlow: {
    color: "black",
    fontSize: 20
  },
  highlowwrapper: {
    flexDirection: "row"
  },
  bodyWrapper: {
    justifyContent: "flex-end",
    alignItems: "flex-start",
    paddingLeft: 25,
    marginBottom: 40
  },
  description: {
    fontSize: 48
  },
  message: {
    fontSize: 30
  }
})
export default CurrentWeather
