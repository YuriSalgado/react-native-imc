import React, { useState } from 'react';
import { View, Image, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function App(){
  const [peso, setPeso] = useState('');
  const [altura, setAltura] = useState('');

  function handleSubmit(){
    const alt = altura / 100;
    const imc = peso / (alt * alt);

    if (imc < 18.6) {
      alert("Você está abaixo do peso! " + imc.toFixed(2));
    } else if (imc >= 18.6 && 24.9) {
      alert("Peso ideal! " + imc.toFixed(2));
    } else if (imc >= 24.9 && imc > 34.9) {
      alert("Levemente acima do peso! " + imc.toFixed(2));
    }
  }
  
  return(
    <View style={styles.container}>
      <Image source={require('./assets/undraw_fitness_stats_orange.png')} style={styles.backgroundImage} />
      <View style={styles.wrapper}>
        <View style={styles.head}>
          <Text style={styles.title}>Calcule seu IMC</Text>
          <Text style={styles.description}>Workshop React Native</Text>
        </View>
        <TextInput
          style={styles.input}
          value={peso}
          onChangeText={ (peso) => setPeso(peso)}
          placeholder="Peso (kg)"
          keyboardType="numeric"
        />

        <TextInput
          style={styles.input}
          value={altura}
          onChangeText={ (altura) => setAltura(altura)}
          placeholder="Altura (cm)"
          keyboardType="numeric"
        />

        <TouchableOpacity 
          style={styles.button}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Calcular</Text>        
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fbfffe',
    justifyContent:'center',
    alignItems:'center'
  },
  backgroundImage:{
    height:300,
    width:300
  },
  head:{
    alignItems:'center'
  },
  title:{
    fontSize:30,
    color:'#1b1b1e'
  },
  description:{
    fontSize:20,
    color:'#6d676e'
  },
  input:{
    backgroundColor:'#6d676e',
    borderRadius: 5,
    marginTop:15,
    marginLeft:0,
    padding:10,
    color:'#faa916',
    fontSize:20
  },
  button:{
    justifyContent:'center',
    alignItems:'center',
    alignSelf: 'stretch',
    borderRadius: 5,
    marginTop:15,
    backgroundColor:'#faa916',
    padding:10
  },
  buttonText:{
    color:'#fbfffe',
    fontSize:25
  } 
})