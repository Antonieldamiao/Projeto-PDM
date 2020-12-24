import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ADD8E6',
        paddingTop:25
    },
    boxImg: {
        marginTop: '10%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textHeader:{
        fontFamily: 'Allan_400Regular',
        color: 'white',
        fontSize: 30,
        marginLeft: 10,
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
    imagem:{
        height: 40,
        width: 40,
        borderRadius: 20
    },
    header:{
        alignItems:'center',
        backgroundColor:'rgb(2,97,128)',
        width:'100%',
        height:45,
        flexDirection:'row',
        flex:1
       
    },
    icon:{
        left:150,
        

    }
})

export default styles;