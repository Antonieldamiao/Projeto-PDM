import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
    },
    image:{
        height: 150,
        width: '100%',
    },
    boxImg: {
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    imgLogo:{
        width: 137,
        height: 147,
    },
    textHeader:{
        fontFamily: 'Allan_400Regular',
        color: 'black',
        fontSize: 30,
    },
    textInput:{
        fontFamily: 'Allan_400Regular',
        color: '#808080',
        fontSize: 27,
    },
    boxEmail:{
        flex:1,
        flexDirection: 'row',
       
        justifyContent:'center'
        
    },
    buttonAdd:{
       flexDirection:  'row',
        width:"45%",
        height: 30,
        backgroundColor: 'blue',
        borderRadius: 15,
        alignItems: 'center',
        marginTop: -20
        
        
    },
    textAdd:{
        alignSelf:'center',
        fontSize: 20,
        color:'white',
        marginLeft:30

    },
    input:{
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
    boxInputs:{
        alignItems: 'center',
    },
    textRegister:{
        fontSize: 27,
        fontFamily: 'Allan_400Regular',
        color: '#FFF',
        marginTop: '2%',

    },
    registerButton:{
        marginTop: 10,
        backgroundColor: '#228B22',
        height: 47,
        width: '53%',
        alignItems: 'center',
        alignSelf:'center',
        borderRadius: 21,
        elevation: 15,
    },
    textDate:{
        fontFamily: 'Jost_400Regular',
        paddingLeft: 11,
        fontSize: 19,
        marginTop: '2%',
    },
    viewButtonImage:{
        right: '14%',
        marginBottom: '3%'
    },

    boxParticipants:{
        flex:0.5,
        width: "85%"

    },
    buttonMap:{
        width: '100%',
        height: 150
    },
})

export default styles;