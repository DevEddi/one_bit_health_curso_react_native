import React, { useState } from 'react';
import { 
    Text,
    TextInput,
    View,
    TouchableOpacity,
    Vibration,
    Pressable,
    Keyboard, 
    } from 'react-native';
import ResultImc from './ResultImc/';
import styles from './style'

export default function Form() {

    const [height ,setHeight] = useState(null)
    const [weight ,setWeight] = useState(null)
    const [messageImc ,setMessageImc] = useState('Preencha o peso e altura')
    const [imc ,setImc] = useState(null)
    const [textButton ,setTextButton] = useState('Calcular')
    const [erroMessage, setErroMessage] = useState(null)



     function imcCalculator (){
       let heightFormat = height.replace(',','.')
        return setImc((weight / (heightFormat*heightFormat)).toFixed(2))
     }

     function verificationImc(){
       if(imc == null){
         Vibration.vibrate();
         setErroMessage('Campo obrigatório')
       }
     }

    function validationImc(){
        if(weight != null && height != null){
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageImc('Seu imc é igual: ')
            setTextButton('Calcular Novamente')
            setErroMessage(null)
            return
        }
        verificationImc()
        setImc(null)
        setTextButton('Calcular')
        setMessageImc('Preencha com peso e altura')
       
        
     }
 
  return (
    <Pressable onPress={Keyboard.dismiss} style={styles.formContext}>
      <View style={styles.form}>
      <Text style={styles.formLabel}>Altura</Text>
      <Text style={styles.erroMessage}>{erroMessage}</Text>
      <TextInput
        onChangeText={setHeight}
        value={height}
        placeholder='Ex. 1.75'
        keyboardType = 'numeric'
        style={styles.input}
      />
      <Text style={styles.formLabel}>Peso</Text>
      <Text style={styles.erroMessage}>{erroMessage}</Text>
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
    </Pressable>
  );
}