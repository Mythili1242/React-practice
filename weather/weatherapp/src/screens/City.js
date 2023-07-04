
import React from "react";
import { SafeAreaView,StyleSheet,Text,ImageBackground,StatusBar } from "react-native";
const City=()=>{
    return(
<SafeAreaView style={styles.Container}>
    <ImageBackground source={require('../../assets/cityBackground.jpg')} style={styles.imageLayout}>
   <Text style={[styles.cityName,styles.cityText]}>London</Text>
   <Text style={[styles.countryName,styles.cityText]}>UK</Text>
    </ImageBackground>
</SafeAreaView>
    )
}

const styles=StyleSheet.create({
    Container:{
        flex:1,
        marginTop:StatusBar.currentHeight || 0
    },
    imageLayout:{
        flex:1
    },
    cityName:{

fontSize:40,

    },
    countryName:{

fontSize:30,

    },
    cityText:{
        justifyContent:"center",
        alignSelf:"center",
        fontWeight:"bold",
        color:"white" 
    }
})
export default City;