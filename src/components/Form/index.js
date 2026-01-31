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
  const [messageResult, setMessageResult] = useState();

  console.log(height)

  const formatAltura = (text) => {
    const onlyNumbers = text.replace(/\D/g, '');

    if (!onlyNumbers) {
      return '';
    }

    const number = Number(onlyNumbers) / 100;

    return number.toLocaleString('pt-BR', {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    });
  };

  const formatPeso = (text) => {
    const onlyNumbers = text.replace(/\D/g, '');

    if (!onlyNumbers) {
      return '';
    }

    const number = Number(onlyNumbers) / 10;

    return number.toLocaleString('pt-BR', {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  };

  function imcCalculator() {
    const heightNumber = Number(height.replace(',', '.'));
    const weightNumber = Number(weight.replace(',', '.'));

    if (!heightNumber || !weightNumber) {
      setErrorMessage('Preencha corretamente peso e altura');
      return;
    }

    const totalImc = (weightNumber / (heightNumber * heightNumber)).toFixed(2);

    setImcList((arr) => [
      ...arr,
      { id: new Date().getTime().toString(), imc: totalImc },
    ]);

    setImc(totalImc);

    if (totalImc < 18.5) {
      setMessageResult('Abaixo do peso');
    } else if (totalImc < 25) {
      setMessageResult('Com peso normal');
    } else if (totalImc < 30) {
      setMessageResult('Acima do peso');
    } else if (totalImc < 40) {
      setMessageResult('Obeso');
    } else {
      setMessageResult('Obesidade grave');
    }
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
              onChangeText={(text) => {setHeight(formatAltura(text))}}
              value={height}
              placeholder='Ex. 1.75'
              keyboardType='numeric'
              style={styles.input}></TextInput>
            <Text style={styles.errorMessage}>{errorMessage}</Text>
          </View>
          <View style={styles.inputContainer}>
            <Text style={styles.label}>Peso:</Text>
            <TextInput
              onChangeText={(text) => {setWeight(formatPeso(text))}}
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
          <ResultImc message={message} result={imc} messageResult={messageResult} />
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
