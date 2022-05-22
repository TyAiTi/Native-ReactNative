import React from "react";

import { StyleSheet, View, ImageBackground ,Image, Text, TouchableOpacity, Alert, NativeModules } from "react-native";


const OpenActivity = NativeModules.OpenActivity;
const Welcome: React.FC = () => {
    const moveScreen = (nameScreen : string) =>{
        OpenActivity.moveScreen(nameScreen);
    }
    return (
        <View style={styles.container}  
            onTouchStart={() => moveScreen("Option")}
        >
            <TouchableOpacity>
                <ImageBackground source={require('../../asset/image/ic_welcome.png')} style={{width: '100%', height: '100%'}}>  
                    
                </ImageBackground>
            </TouchableOpacity>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    viewContent:{
        display: "flex",
        marginTop: 74,
        alignItems:'center'
    },
    textHalo:{
        color: "#FFFFFF",
        marginTop: 9.04,
        fontSize: 20
    },
    locationLogo:{
        position: 'absolute',
        bottom: 56,
        marginLeft: 16
    }
})

export default Welcome;