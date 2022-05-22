
import { StyleSheet} from "react-native";

const AppStyles = StyleSheet.create({
    container: {
        display: 'flex'
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
    spaceTop32:{
        marginTop: 32
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
    borderInput:{
        width: "100%",
        backgroundColor: "#4B5563",
        padding: 1,
        borderRadius: 8,
    },
    viewInput:{
        width: "100%",
        borderRadius: 8,
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#000000",
    },
    buttonSelect:{
        width: 9,
        height: 16
    },
    button:{
        width: "100%",
        height: 48,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center'
    },
    textButton:{
        fontSize: 18,
        color: "#FFFFFF",
    },
    spaceTop24:{
        marginTop: 24
    },
    viewCenter:{
        justifyContent: 'center',
        alignItems: 'center'
    },
    spaceLeftRight:{
        marginLeft: 36,
        marginRight: 36
    },
    viewOptionLanguage:{
        width: "100%",
        height: "10%",
        flexDirection: "row",
        alignItems:"center",
    },
    textLanguage:{
        fontSize: 16,
        color: "#FFFFFF",
        flex: 2
    },
    contentTitle:{
        fontSize: 24,
        color: "#FFFFFF"
    },
    buttonContainer: {
        flexDirection: "row",
        height:'auto'
    },
    imageIconSocial: {
        height: 25,
        width: 25
    }
})

export default AppStyles;

export const BackgroundDark = "#E5E5E5"
export const BackgroundLight = "#111827"