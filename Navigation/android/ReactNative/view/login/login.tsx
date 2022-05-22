import React from "react";

import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";

const Login: React.FC = () => {
    return (
        <View style={styles.container}  >
               <View style={[styles.top, styles.spaceTop]}>
                    <Image source={require('../../asset/image/ic_robot_login.png')} style={{width: 224, height: 224}}/>
                    <Text style={[styles.contentScreen, styles.spaceTop]}>Đăng nhập</Text>
                    <Image source={require('../../asset/image/ic_border.png')} style={{width: 56, height: 2, marginTop: 32}}/>
                    
               </View>
               <View style={[styles.body, styles.spaceTop]}>
                    <Text style={styles.textSuggest}>Bạn sẽ dùng tài khoản nào? HAHALOLO hay ẩn danh</Text>
                    <TouchableOpacity style={[styles.button,styles.spaceTop, {backgroundColor:"#1767FD"}]}>
                        <Text style={styles.textButton}>Đăng nhập ẩn danh</Text>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[styles.button, styles.spaceTop, {backgroundColor:"#24A8D8"}]}>
                        <Text style={styles.textButton}>Đăng nhập với HAHALOLO</Text>
                    </TouchableOpacity>
                    <Image source={require('../../asset/image/ic_border.png')} style={[styles.spaceTop,{width: "100%", height: 2}]}/>
                    
                    <View style={[styles.viewOptionLanguage, styles.spaceTop]}>
                        <Text style={[styles.textLanguage]}>Tiếng Việt</Text>
                        <TouchableOpacity >
                            <Image source={require('../../asset/image/ic_button_select_next.png')} style={[styles.buttonSelect]}  />
                        </TouchableOpacity>
                        
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
    top:{
        display: "flex",
        alignItems: "center"
    },
    body:{
        
        marginLeft: 36,
        marginRight: 36,
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
    textButton:{
        fontSize: 18,
        color: "#FFFFFF",
    },
    button:{
        width: "100%",
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    spaceTop:{
        marginTop: 24
    },
    textLanguage:{
        fontSize: 16,
        color: "#FFFFFF",
        flex: 2
    },
    viewOptionLanguage:{
        width: "100%",
        height: "10%",
        flexDirection: "row",
        alignItems:"center",

    },
    buttonSelect:{
        width: 9,
        height: 16
    }
})

export default Login;