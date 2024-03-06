import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput,Image, ImageBackground } from "react-native";
import HomeScreen from "./components/HomeScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <HomeScreen></HomeScreen>
      <Text style={styles.labelCss1}>Powered By</Text>
      <Image source={require('./assets/Logo.jpg')} style={styles.imageCss} />
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
  labelCss1:{
      fontWeight: "bold",
      fontSize: 10,
      color: "#000",
      marginTop:10,
      marginBottom:5,
      textAlign: 'center'
  },
  imageCss: {
    height: 50,
    width: 50
  },
  logoCss: {
    height:180,
    width:500
  },
  title: {
    fontWeight: "bold",
    fontSize: 50,
    color: "#fb5b5a",
    marginBottom: 40,
  },
  inputView:{
    width:"80%",
    backgroundColor:"#3AB4BA",
    borderRadius:25,
    height:50,
    marginBottom:20,
    justifyContent:"center",
    padding:20
    },
    inputText:{
    height:50,
    color:"white"
    },
});
