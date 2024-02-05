// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View } from 'react-native';

// export default function App() {
//   const message="hello"
//   return (
//     // <View style={styles.container}>
//     //   <Text>Open up App.js to start working on your app!</Text>
//     //   <StatusBar style="auto" />
//     // </View>
//     <View style={{height:100,width:500,backgroundColor:'orange'}}>
// <Text>{message}</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

import React, { useState, useEffect } from "react"
import { ActivityIndicator, View, StyleSheet } from "react-native"
import { NavigationContainer } from "@react-navigation/native"
import Tabs from "./src/components/Tabs"
import * as Location from "expo-location"
import { useGetWeather } from "./src/hooks/useGetWeather"
// import { TEST_KEY } from '@env'
// import { TEST_KEY } from "react-native-dotenv"

//api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
const App = () => {
  // console.log(TEST_KEY)

  const [loading, error, weather] = useGetWeather()
  console.log(loading, error, weather)

  if (weather && weather.list) {
    return (
      <NavigationContainer>
        <Tabs weather={weather} />
      </NavigationContainer>
    )
  }


    return (
      <View style={styles.container}>
        <ActivityIndicator size={"large"} color={"blue"} />
      </View>
    )
  

  
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    flex: 1
  }
})
export default App
