import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import ResultImc from './ResultImc/';
import styles from './style'

export default function Form() {

    const [height ,setHeight] = useState(null)
    const [weight ,setWeight] = useState(null)
    const [messageImc ,setMessageImc] = useState('Preencha o peso e altura')
    const [imc ,setImc] = useState(null)
    const [textButton ,setTextButton] = useState('Calcular')
    
     function imcCalculator (){
        return setImc((weight / (height*height)).toFixed(2))
     }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu imc é igual: ')
            setTextButton('Calcular Novamente')
            return
        }
        imcCalculator()
        setTextButton('Calcular')
        setMessageImc('Preencha com peso e altura')
        
     }
 
  return (
    <View style={styles.formContext}>
      <View style={styles.form}>
      <Text style={styles.formLabel}>Altura</Text>
      <TextInput
        onChangeText={setHeight}
        value={height}
        placeholder='Ex. 1.75'
        keyboardType = 'numeric'
        style={styles.input}
      />
      <Text style={styles.formLabel}>Peso</Text>
      <TextInput
        onChangeText={setWeight}
        value={weight}
        placeholder='Ex. 78.10'
        keyboardType = 'numeric'
        style={styles.input}
      
      />
      <TouchableOpacity
        onPress={() => {
          validationImc()
        }}
        style={styles.buttonCalculator}
      >
        <Text style={styles.textButtonCalculator}>{textButton}</Text>

      </TouchableOpacity>
      </View>
      <ResultImc  messageResultImc={messageImc} resultImc={imc}/>
    </View>
  );
}