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
    boxParticipants:{
        minHeight: 400,
        maxHeight: 400,
        width: "85%"
    },
    buttonAdd:{
       
        width:"10%"
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
    textButton:{
        fontSize: 27,
        fontFamily: 'Allan_400Regular',
        color: '#FFF',
        marginTop: '2%',

    },
    Button:{
        marginTop: '9%',
        backgroundColor: '#228B22',
        height: 47,
        width: '53%',
        alignItems: 'center',
        borderRadius: 21,
        elevation: 15,
        alignSelf:'center'
        
    },
    separator:{
        flex:1,
        borderTopWidth:1,
        width: 300,
    
    },
})

export default styles;