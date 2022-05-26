import React,{useState} from 'react';
import {Text,TouchableOpacity,SafeAreaView,StyleSheet} from 'react-native'


const App = () =>{

    const [number,setNumber] = useState('0')

    function handleNumber(){

        const new_number = Math.floor(Math.random() * 1000)

        setNumber(new_number)
    }

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.numero}>{number}</Text>
            <TouchableOpacity onPress={handleNumber} style={styles.button}>
                <Text >Gerar Número</Text>
            </TouchableOpacity>
        </SafeAreaView>

    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor:'#FF0000',
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        
    },
    
    numero: {
        fontSize:38,
        color: '#FFFFFF',
        fontWeight: 'bold',
    },
    
    button: {
        
        backgroundColor:'#FFFFFF',
        width:'80%',
        paddingHorizontal: 5,
        paddingVertical: 10,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:10,


    },

})
export default App