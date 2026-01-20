import { StyleSheet, Text, View } from 'react-native';
import styles from './style';

export default function ResultImc(props) {
  console.log(props);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.message}</Text>
      <Text style={styles.text}>{props.result}</Text>
    </View>
  );
}
