import { StyleSheet } from "react-native";

export const Styles = StyleSheet.create({
    mainView: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        paddingTop: 50

    },
    tImg: {
        width: 150,
        height: 150,
        borderRadius: 100,
        marginVertical: 5,
        marginBottom: 40,
    },
    tText1: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold'
    },
    tText2: {
        color: 'black',
        fontSize: 16,
    },
    tButton: {
        backgroundColor: 'black',
        color: 'white',
        width: '100%',
        padding: 5,
        borderRadius: 4,
        marginTop:50,
    },
    tButtonText: {
        color: 'white',
        fontWeight:"bold",
        textAlign:"center"
    }

})