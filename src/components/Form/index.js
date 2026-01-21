import { StyleSheet, Text, View, TextInput, TouchableOpacity, Vibration } from 'react-native';
import ResultImc from './ResultImc';
import { useState } from 'react';
import styles from './style';

export default function Form() {
  const [height, setHeight] = useState(null);
  const [weight, setWeight] = useState(null);
  const [message, setMessage] = useState('Preencha o peso e altura');
  const [imc, setImc] = useState(null);
  const [textButton, setTextButton] = useState('Calcular IMC');
  const [errorMessage, setErrorMessage] = useState(null);

  function imcCalculator() {
    return setImc((weight / (height * height)).toFixed(2));
  }

  function verificationImc() {
    if (imc == null) {
      Vibration.vibrate();
      setErrorMessage('Campo obrigatório*');
      return;
    }
  }

  function validationImc() {
    if (height != null || weight != null) {
      imcCalculator();
      setHeight(null);
      setWeight(null);
      setMessage('Seu imc é igual:');
      setTextButton('Calcular novamente');
      setErrorMessage(null);
      return;
    }

    verificationImc();
    setImc(null);
    setTextButton('Calcular');
    setMessage('Preencha o peso e altura');
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Altura:</Text>
        <TextInput
          onChangeText={setHeight}
          value={height}
          placeholder='Ex. 1.75'
          keyboardType='numeric'
          style={styles.input}></TextInput>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>
      <View style={styles.inputContainer}>
        <Text style={styles.label}>Peso:</Text>
        <TextInput
          onChangeText={setWeight}
          value={weight}
          placeholder='Ex. 75.5'
          keyboardType='numeric'
          style={styles.input}></TextInput>
        <Text style={styles.errorMessage}>{errorMessage}</Text>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => validationImc()}>
        <Text style={styles.buttonText}>{textButton}</Text>
      </TouchableOpacity>

      <ResultImc result={imc} message={message} />
    </View>
  );
}
