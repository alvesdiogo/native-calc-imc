import { Text, View } from 'react-native';
import styles from './style';

export default function Title() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Calculadora IMC!</Text>
    </View>
  );
}
