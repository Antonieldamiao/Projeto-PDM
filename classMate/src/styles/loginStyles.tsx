import {StyleSheet} from 'react-native';

const loginStyles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#ADD8E6',
        alignItems: 'center',
        justifyContent: 'center',
    },
    input:{
        height: 48,
        width: '75%',
        borderStyle: 'solid',
        borderColor: '#4876FF',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 13,
        fontFamily: 'Jost_400Regular',
        paddingLeft: 11,
        fontSize: 19,
    },
    loginButton:{
        marginBottom: 12,
        marginTop: 7,
        height: 37,
        width: '61%',
        alignItems: 'center',
        borderRadius: 19,
        elevation: 13,
        backgroundColor: '#228B22'
    },
    singUpButton:{
        fontSize:27,
        color: '#FFF',
        fontFamily: 'Allan_400Regular',
        elevation: 20,
    },
    textButton:{
        fontFamily: 'Allan_400Regular',
        color: '#FFF',
        fontSize: 25,
    },
    textInput:{
        right: '29%',
        fontFamily: 'Allan_400Regular',
        color: '#808080',
        fontSize: 21,

    },
    img:{
        top: 5,
    },
    errorText:{
        fontFamily: 'Jost_400Regular',
        fontSize: 17,
        color: '#FF0000',
        marginBottom: 10,
    }
});

export default loginStyles;