import { StyleSheet } from 'react-native';
import { color } from 'react-native-reanimated';

const styles = StyleSheet.create({
container: {
    flex: 1,
    paddingTop:25,
    backgroundColor: '#ADD8E6',
    
},image:{
    borderColor: 'white',
    borderRadius: 25,
    borderWidth: 2,
    alignSelf:'center'
},boxInput:{
    paddingTop: 30,
    margin:10,
    alignItems:'center'
},input:{
    backgroundColor:'transparent',
    width: '80%'

},boxButton:{
    
    flex:1,
    flexDirection:'row',
    alignSelf:'center',
 
    
}, Button:{

    marginBottom: 12,
    marginTop: 7,
    margin:7,
    height: 37,
    width: 90,
    borderRadius: 5,
    elevation: 13,
    backgroundColor: '#228B22'
},textButton:{
    marginTop:3,
    fontSize:20,
    alignSelf:'center'
}
})

export default styles;