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

  
    boxParticipants:{
        minHeight: 560,
        maxHeight: 560,
        width: "85%"
    },
 
   

    Button:{
        left:'40%',
        width: '20%',
        alignItems: 'center',
        borderRadius: 21,
        elevation: 15,
        alignSelf:'center',
        justifyContent:'flex-end'
        
    },
})

export default styles;