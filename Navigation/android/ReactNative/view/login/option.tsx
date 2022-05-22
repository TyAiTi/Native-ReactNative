import React from "react";

import { View, Image, Text, TouchableOpacity, NativeModules, } from "react-native";
import AppStyle from '../../utils/styles';

const OpenActivity = NativeModules.OpenActivity;

const Option: React.FC = () => {
    const moveScreen = (nameScreen : string) =>{
        OpenActivity.moveScreen(nameScreen);
    }
    return (
        <View style={[AppStyle.container, {backgroundColor: '#111827'}]}  >
               <View style={[AppStyle.viewCenter, AppStyle.spaceTop24]}>
                    <Image source={require('../../asset/image/ic_robot_login.png')} style={{width: 224, height: 224}}/>
                    <Text style={[AppStyle.contentScreen, AppStyle.spaceTop24]}>Đăng nhập</Text>
                    <Image source={require('../../asset/image/ic_border.png')} style={{width: 56, height: 2, marginTop: 32}}/>
                    
               </View>
               <View style={[AppStyle.spaceLeftRight, AppStyle.spaceTop24]}>
                    <Text style={AppStyle.textSuggest}>Bạn sẽ dùng tài khoản nào? Google hay FaceBook</Text>
                    {/* <TouchableOpacity style={[AppStyle.button,AppStyle.spaceTop24, {backgroundColor:"#1767FD"}]}>
                        <Text style={AppStyle.textButton}>Đăng nhập ẩn danh</Text>
                    </TouchableOpacity> */}

                    <TouchableOpacity style={[AppStyle.spaceTop24, AppStyle.buttonContainer, AppStyle.button, {backgroundColor:"#1767FD"}]}
                        onPress = { ()=> moveScreen('Google')}
                        >
                        <Text style={[AppStyle.textButton, ]}>Đăng nhập với Google</Text>
                        <Image source={require('../../asset/image/ic_icon_google.png')} style={[AppStyle.imageIconSocial, {marginLeft: 10}]}/>
                    </TouchableOpacity>
                    
                    <TouchableOpacity style={[AppStyle.spaceTop24, AppStyle.buttonContainer, AppStyle.button, {backgroundColor:"#24A8D8"}]}
                        onPress = { ()=> moveScreen('Facebook')}
                        >
                        <Text style={[AppStyle.textButton, ]}>Đăng nhập với FaceBook</Text>
                        <Image source={require('../../asset/image/ic_icon_facebook.png')} style={[AppStyle.imageIconSocial, {marginLeft: 10}]}/>
                    </TouchableOpacity>
                    <Image source={require('../../asset/image/ic_border.png')} style={[AppStyle.spaceTop24,{width: "100%", height: 2}]}/>
                    
                    <View style={[AppStyle.viewOptionLanguage, AppStyle.spaceTop24]}>
                        <Text style={[AppStyle.textLanguage]}>Tiếng Việt</Text>
                        <TouchableOpacity >
                            <Image source={require('../../asset/image/ic_button_select_next.png')} style={[AppStyle.buttonSelect]}  />
                        </TouchableOpacity>
                        
                    </View>
                    
               </View>

        </View>
    );
};


export default Option;