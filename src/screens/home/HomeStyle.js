import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
    },
    bImage: {
        flex: 1,
        padding: 16,
    },
    greetingView: {
        marginTop: 8,
        marginBottom: 16,

    },
    greetingText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 22,
    },
    titleText: {
        color: 'Black',
        fontSize: 18,
        marginVertical: 16,
        fontWeight: "bold"
    },
    cardView: {
        height: 170,
        width: 170,
        margin: 8
    },
    cardImg: {
        flex: 1,
        padding: 3,
        overflow: 'hidden',
        borderRadius:16,
        borderWidth:3,
        borderColor:'white'

    },
    imgText1: {
        color: 'black',
        fontSize: 15,
        fontWeight: "bold",
        backgroundColor:'#ffffff90',
        padding:5,
        width:140,
        textAlign:"center",
        borderRadius:5
    },
    imgText2: {
        backgroundColor:'#00000090',
        color: 'white',
        fontSize: 15,
        fontWeight: "bold",
        textAlign:"center",
        padding:3,
        borderRadius:5,
        
    },
    imgView1: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgView2: {
        flex: 2,
    }


})