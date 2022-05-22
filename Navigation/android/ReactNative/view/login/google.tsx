import React from "react";

import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import AppStyle from '../../utils/styles';

const Google: React.FC = () => {
    return (
        <View style={[AppStyle.container, {backgroundColor: '#111827'}]}  >
            <Text style={{color: 'pink', fontSize: 30}}>Google Login</Text>
        </View>
    );
};


export default Google;