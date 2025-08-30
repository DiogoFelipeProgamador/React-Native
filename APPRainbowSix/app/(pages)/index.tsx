import {Text, View, StyleSheet, TextInput, TouchableOpacity} from "react-native"
import { useRouter } from "expo-router";

export default function login(){

  const router = useRouter();
  
return(
<View style = {styles.container}>
<Text style = {styles.text}>Login</Text>
<TextInput placeholder="E-mail" style = {styles.textinput}></TextInput>
<TextInput placeholder="Senha" style = {styles.textinput}></TextInput>
<TouchableOpacity style = {styles.button} onPress = {() => router.push("/page")} >
  <Text style = {styles.buttontext}>Entrar</Text>
</TouchableOpacity>
</View>
)
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: "center",
    paddingTop: 100
  },

  text:{
    fontSize: 40,
    color: "white",
    fontWeight: "bold",
  },

  textinput:{
    height: 40,
    width: 400,
    borderColor: "white",
    borderWidth: 1,
    borderRadius: 10,
    marginTop: 40,
    color: "white",
    textAlign: "center",
  },

  button:{
    marginTop: 40,
    width: 200,
    height: 40,
    backgroundColor: "orange",
    borderRadius: 10,
     alignItems: "center",
    justifyContent: "center",
  },

  buttontext:{
    textAlign: "center",
    color: "white",
    fontSize: 16,
  }
})