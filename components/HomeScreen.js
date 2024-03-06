import React from 'react';
import { SafeAreaView, Text, View, Image, StyleSheet,TextInput, Button } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
const HomeScreen = ()=>{
    return(
        <View style={styles.container}>
            <Image source={require('../assets/Logo1.jpg')} style={styles.logoCss}/>
            <Text style={styles.labelCss}>Login Here</Text>
            <View style={styles.inputView}>
                <MaterialIcons name="person" size={25} color="#666" style={{left:5, position: 'absolute'}}/>
                <TextInput style={styles.inputText} placeholder='Enter Username'/>
            </View>
            <View style={styles.inputView}>
                <MaterialIcons name="key" size={25} color="#666" style={{left:5, position: 'absolute'}}/>
                <TextInput style={styles.inputText} placeholder='Enter Password'/>
            </View>
            <View style={styles.buttonView}>
                <Button title='Login' style={styles.buttonCss}></Button>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
    },
    logoCss: {
      height:150,
      width:300,
    },
    labelCss:{
        fontWeight: "bold",
        fontSize: 20,
        color: "#fb5b5a",
        marginLeft:10,
        marginBottom:5,
        textAlign: 'center'
    },
    inputView:{
        width:"100%",
        borderRadius:25,
        border: '1px solid',
        marginBottom:20,
        justifyContent:"center",
        padding:0
    },
    inputText:{
        height:35,
        borderRadius:25,
        paddingLeft: 35,
        fontSize: 15
    },
    buttonView:{
        width:"100%",
        justifyContent:"center",
    },
    buttonCss: {
        borderRadius: 25,
        width: 100
    }
  });
export default HomeScreen;