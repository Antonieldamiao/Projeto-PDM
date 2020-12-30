import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
    },
    boxShow: {
        marginTop: '90%',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textResult: {
        fontFamily: 'Jost_400Regular',
        fontSize: 27,
    },
    img: {
        right: '29%'
    },
    rooms: {
        marginTop: '31%',
        alignItems: 'center',
    },
    boxRoom:{
        flexDirection: 'row',
    },
    title:{
        marginTop: '1%',
        paddingRight: '15%',
        right: '30%'
    },
    boxButtonRoom:{
        backgroundColor: '#FFF',
        borderRadius: 13,
        left:'3%',
        height: 100,

    },
    textDate:{
        bottom: '67%',
        left: '18%'
    }
});

export default styles;