import {Text, View, StyleSheet, TextInput, TouchableOpacity, Alert} from "react-native"
import { useRouter } from "expo-router";
import { useState } from "react";

export default function login(){

  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async ()=> {
    try{
      const response = await fetch("http://192.168.15.8:8080/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username: username,
          password: password,
        }),
      });
      
      if(response.ok){
        const data = await response.json();
        console.log("Login bem-sucedido:", data);

        router.push("/page");
      }
      else if (response.status === 401){
        Alert.alert("Erro", "Usuario ou Senha invalidos");
      }
      else{
        Alert.alert("Erro", "Nao foi possivel conectar ao servidor");
      }
    }
     catch(error){
        console.error(error);
        Alert.alert("Erro", "Nao foi possivel conectar ao servidor");
      }
  }
  
return(
<View style = {styles.container}>
<Text style = {styles.text}>Login</Text>
<TextInput placeholder="E-mail" style = {styles.textinput} value = {username} onChangeText={setUsername}></TextInput>
<TextInput placeholder="Senha" style = {styles.textinput} value = {password} onChangeText={setPassword}></TextInput>
<TouchableOpacity style = {styles.button} onPress={handleLogin} >
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