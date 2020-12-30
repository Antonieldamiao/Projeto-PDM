import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
    },
    boxImg: {
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgLogo: {
        width: 137,
        height: 147,
    },
    textInput: {
        fontFamily: 'Allan_400Regular',
        color: '#808080',
        fontSize: 27,
    },
    input: {
        borderStyle: 'solid',
        borderColor: '#4876FF',
        borderWidth: 1,
        height: 41,
        width: '67%',
        paddingLeft: 11,
        borderRadius: 10,
        fontFamily: 'Jost_400Regular',
        fontSize: 19,
        marginBottom: 7,
    },
    boxInputs: {
        alignItems: 'center',
    },
    textRegister: {
        fontSize: 27,
        fontFamily: 'Allan_400Regular',
        color: '#FFF',
        marginTop: '2%',

    },
    registerButton: {
        marginTop: '9%',
        backgroundColor: '#228B22',
        height: 47,
        width: '53%',
        alignItems: 'center',
        borderRadius: 21,
        elevation: 15,
        marginBottom: '7%'
    },
    textDate: {
        fontFamily: 'Jost_400Regular',
        paddingLeft: 11,
        fontSize: 19,
        marginTop: '2%',
    },
    viewButtonImage: {
        right: '14%',
        marginBottom: '3%'
    },
    selectImg: {
        width: 120,
        height: 89,
        right: '17%',
        borderRadius: 5,
        marginBottom: '2%',
        marginRight: 20,
    },
    errorText:{
        fontFamily: 'Jost_400Regular',
        fontSize: 17,
        color: '#FF0000',
    }
})

export default styles;