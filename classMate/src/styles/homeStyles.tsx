import { StyleSheet } from 'react-native';

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
    },
    viewSearch: {
        justifyContent: 'center',
        marginTop: '10%',
        alignItems: 'center',
        flexDirection: 'row',
    },
    inputSearch: {
        width: '77%',
        borderWidth: 1,
        paddingLeft: '2%',
        marginRight: 1,
        borderRadius: 14,
        fontSize: 17,
        fontFamily: 'Jost_400Regular',
    },
    posModal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '12%',
    },
    viewModal: {
        shadowColor: '#000',
        backgroundColor: '#FFF',
        borderRadius: 17,
        padding: 33,
        height: '37%',
        paddingTop: 11,
        alignItems: 'center',
        elevation: 5,
        opacity: 0.6,
    },
    imgWelcome: {
        width: 120,
        height: '33%'
    },
    textModal: {
        fontFamily: 'Jost_400Regular',
        fontSize: 16,
    },
    titleModal: {
        fontFamily: 'Jost_400Regular',
        fontSize: 27,
        fontWeight: 'bold'
    },
    buttonModal: {
        backgroundColor: '#008000',
        borderRadius: 5,
        marginTop: 33,
        elevation: 9,
        width: 75,
        height: 41,
        alignItems: 'center'
    },
    texButton: {
        fontFamily: 'Jost_400Regular',
        fontSize: 27,
        fontWeight: 'bold',
        color: '#FFF',
    },
    containerDrawer: {
        flex: 1,
    },
    sectionUser: {
        paddingLeft: 20,
    },
    section: {
        marginTop: 15,
    },
    img: {
        right: '29%'
    },
    rooms: {
        marginTop: '13%',
        alignItems: 'center',
    },
    boxRoom:{
        flexDirection: 'row',
    },
    title:{
        marginTop: '1%',
        paddingRight: '25%',
        right: '26%'
    },
    boxButtonRoom:{
        backgroundColor: '#FFF',
        borderRadius: 13,
        left:'3%',
        height: 70,

    },
    textDate:{
        bottom: '57%',
        left: '13%'
    }
});

export default style;