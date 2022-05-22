import React from "react";

import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import AppStyle from '../../utils/styles';

const FaceBook: React.FC = () => {
    return (
        <View style={[AppStyle.container, {backgroundColor: '#111827'}]}  >
            <Text style={{color: 'pink', fontSize: 30}}>Facebook Login</Text>
        </View>
    );
};


export default FaceBook;