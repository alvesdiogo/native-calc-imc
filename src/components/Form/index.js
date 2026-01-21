import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Vibration,
  Pressable,
  Keyboard,
  FlatList,
} from 'react-native';
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
  const [imcList, setImcList] = useState([]);

  function imcCalculator() {
    let heightFormat = height.replace(',', '.');
    let totalImc = (weight / (heightFormat * heightFormat)).toFixed(2);
    setImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalImc }]);
    setImc(totalImc);
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
      console.log('imc', imc);
      setHeight(null);
      setWeight(null);
      setMessage('Seu imc é igual:');
      setTextButton('Calcular novamente');
      setErrorMessage(null);
    } else {
      verificationImc();
      setImc(null);
      setTextButton('Calcular');
      setMessage('Preencha o peso e altura');
    }
  }

  return (
    <View style={styles.form}>
      {imc == null ? (
        <Pressable onPress={Keyboard.dismiss} style={styles.container}>
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
        </Pressable>
      ) : (
        <View style={styles.exhibitionResultImc}>
          <ResultImc message={message} result={imc} />
          <TouchableOpacity style={styles.button} onPress={() => validationImc()}>
            <Text style={styles.buttonText}>{textButton}</Text>
          </TouchableOpacity>
        </View>
      )}
      <FlatList
        style={styles.listImcs}
        data={[...imcList].reverse()}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          const isLast = index === 0;

          return (
            <Text style={styles.resultImcItem}>
              <Text style={styles.textResultItemList}>
                {isLast ? 'Resultado atual IMC = ' : `${index + 1}° Resultado IMC = `}
              </Text>
              {item.imc}
            </Text>
          );
        }}
      />
    </View>
  );
}
