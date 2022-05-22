import React from "react";

import { StyleSheet, View,Image, Text, TextInput, TouchableOpacity } from "react-native";

const Anonymous: React.FC = () => {
    return (
        <View style={styles.container}  >
           <View style={[styles.top, {marginTop: 20}]} >
                <Image source={require('../../asset/image/ic_button_back.png')}/>
                <Text style={[styles.textBack, {marginLeft: 26}]}>Quay lại</Text>
           </View> 

           <View style={[styles.body]} >
               <Text style={[styles.contentScreen, styles.spaceTop]}> Xin Chào</Text>
               <Image source={require('../../asset/image/ic_border.png')} style={[styles.spaceTop,{width: 56, height: 2}]}/>
               <Text style={[styles.textSuggest, styles.spaceTop]}>Vui lòng nhập số điện thoại để bắt đầu sử dụng ứng dụng Halome</Text>

               <View style={[styles.viewInput, styles.spaceTop]}>
                <Text style={[styles.textBack, {marginLeft: 20}]}>+84</Text>
                <Image source={require('../../asset/image/ic_button_select_down.png')} style={[styles.buttonSelect, {marginLeft: 14, alignItems:"center", marginBottom: 8 }]}  />
                <TextInput style={[styles.textBack, {marginLeft: 14}]} placeholder="Số điện thoại" placeholderTextColor="#9F9F9F" />
               </View>
           </View>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#111827"
    },
    top: {
        marginLeft: 21,
        marginRight: 21,
        flexDirection: "row",
        alignItems:"center",
    },
    body:{
        marginLeft: 36,
        marginRight: 36,
        alignItems: "center",
    },
    spaceTop:{
        marginTop: 24
    },
    imageBack:{
        width: 9,
        height: 16
    },
    textBack:{
        fontSize: 16,
        color: "#9F9F9F"
    },
    contentScreen:{
        fontSize: 24,
        color: "#FFFFFF"
    },
    textSuggest:{
        fontSize: 16,
        color: "#FFFFFF",
        textAlign: 'center',
    },
    viewInput:{
        width: "100%",
        height: 48,
        // backgroundColor:"blue",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        borderWidth: 1,
        backgroundColor: "#000000"
    },
    buttonSelect:{
        width: 9,
        height: 16
    }
})

export default Anonymous;