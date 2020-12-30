import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        alignItems: 'center',
        marginHorizontal: 2,
    },
    inputMessage:{
        height: 57,
        width: '81%',
        borderStyle: 'solid',
        borderColor: '#4876FF',
        borderWidth: 1,
        borderRadius: 10,
        marginBottom: 13,
        fontFamily: 'Jost_400Regular',
        paddingLeft: 11,
        fontSize: 19,
        left: '23%'
    },
    buttonSend:{
        alignItems: 'center',
        height: '60%',
        width: '11%',
        borderRadius: 12,
        backgroundColor: '#008000',
        right: '50%',
        top: '2%'
    },
    iconSend:{
        top: '9%',
        right: '5%'
    },
    nameUser:{
        color: '#000000',
        fontFamily: 'Jost_400Regular',
        fontSize: 17,
        fontWeight: 'bold',
        bottom: 25,
        right: 17
    }, 
    showMessage:{
        marginTop: '19%',
        backgroundColor: '#FFF',
        borderTopRightRadius: 13,
        borderTopLeftRadius: 13,
        borderBottomLeftRadius: 13,
        padding: '11%',
        elevation: 2,
    },
    message:{
        fontFamily: 'Jost_400Regular',
        fontSize:15,
        bottom: 25,
        right: 7
    },
    header:{
        marginTop: '9%',
        flexDirection: 'row',
        borderStyle: 'solid',
        borderBottomWidth: 1,
        borderTopWidth: 1,
        borderColor: '#4876FF',
        width: '90%'
    },
    iconClass:{
        left: '10%',
        marginBottom: '1%',
        marginRight: '13%',
    },
    titleClass:{
        marginTop: '5%',
    }
})

export default styles;