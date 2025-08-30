import { View, StyleSheet, Image, Text, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import MenuModal from "./modal";



export default function Page(){
    const [visible, setVisible] = React.useState(false);
    return(
        <View style = {styles.container}>
        <View style = {styles.header}>
            <View style = {styles.logo}>
                <Image source={require("../../assets/images/r6-logo-banner.png")} style = {{width: 80, height: 60, marginTop: 10}} resizeMode= "contain"/>
                <Text style = {styles.textlogo}>RAINBOW SIX</Text>
            </View>
            <View style = {styles.rightGroup}>
            <View style = {styles.credits}>
                <Image source = {require("../../assets/images/r6-credits.png")} style = {styles.creditsimage}/>
                <Text style = {styles.creditstext}>
                    1000
                </Text>
                
            </View>
            <TouchableOpacity onPress={() => setVisible(true)}>
            <MaterialIcons name="menu" size={32} color="white" style={{ marginRight: 10 }} />
            </TouchableOpacity>
            </View>
        </View>
        <MenuModal visible={visible} onClose={() => setVisible(false)} />
        <View style = {styles.products}>
            <View style = {styles.product}>
                <Image source = {require("../../assets/images/skin.png")} style = {styles.imageitens} resizeMode="cover"/>
                <Text style = {styles.pricetext}><Image source = {require("../../assets/images/r6-credits.png")} style = {{width: 30, height: 30, marginRight: 10}} resizeMode="cover"/>600</Text>
                <TouchableOpacity style = {styles.buttoncompra}>
                    <Text style = {styles.textbutton}>Comprar</Text>
                </TouchableOpacity>
            </View>
            <View style = {styles.product}>
                <Image/>
            </View>
            <View style = {styles.product}>
                <Image/>
            </View>
        </View>
        </View>
        
    );

}

 const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "auto",
    },

    header:{
        backgroundColor: "#525751",
        width: "100%",
        height: 80,
        flexDirection: "row",
        justifyContent:"space-between",
        alignItems: "center",
    },

    logo:{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
    },

    textlogo:{
        color: "white",
        fontSize: 17,
        fontWeight: "bold",
    },

    credits:{
        flexDirection: "row",
        width: 100,
        height: 40,
        backgroundColor:"white",
        borderRadius: 10,
        marginRight: 40,
        alignItems: "center",
        justifyContent: "center",
    },

    creditsimage:{
        width: 18,
        height: 18,
        resizeMode:"cover",
        marginRight: 4,
    },

    creditstext:{
        fontSize: 16,
        fontWeight: "bold",
    },

    rightGroup:{
        flexDirection: "row",
        alignItems: "center",
    },

    products:{
        flexDirection: "row",
        width: "100%",
        height: 400,
        marginTop: 10,

    },

    product:{
        width: "33.3%",
        height: 400,
        backgroundColor: "white",
        borderWidth: 4,
        borderColor: "black",
        alignItems: "center",
        justifyContent:"center",
        borderRadius: 10,
    },

    imageitens:{
       width: 300,
       height: 100
    },

    pricetext:{
        fontSize: 40,
        fontWeight:"bold",
        textAlign:"center",
        marginTop: 10,
    },

    buttoncompra:{
        width: 200,
        height: 80,
        backgroundColor: "orange",
        alignItems:"center",
        justifyContent:"center",
        borderRadius: 40,
        marginTop: 40,
    },

    textbutton:{
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },




})