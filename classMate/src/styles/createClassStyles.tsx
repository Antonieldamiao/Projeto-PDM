import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
    },
    boxForm: {
        alignItems: 'center',
        marginTop: '9%',
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
    inputArea: {
        borderStyle: 'solid',
        borderColor: '#4876FF',
        borderWidth: 1,
        height: 100,
        width: '67%',
        paddingLeft: 11,
        paddingBottom: 55,
        borderRadius: 10,
        fontFamily: 'Jost_400Regular',
        fontSize: 19,
        marginBottom: 7,
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
    },
    buttonImg: {
        width: '21%',
        marginBottom: '2%',
        right: '22%'
    },
    textInputArea: {
        fontFamily: 'Allan_400Regular',
        color: '#808080',
        fontSize: 20,
    }
})

export default styles;