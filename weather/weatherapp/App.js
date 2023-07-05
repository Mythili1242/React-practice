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


import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import Tabs from "./src/components/Tabs";



const App=()=>{
  
return(
  <NavigationContainer>
   <Tabs />
</NavigationContainer>
) 
}

export default App;