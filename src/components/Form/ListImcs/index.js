import { FlatList, Text } from 'react-native';
import styles from './style';

export default function ListImcs({data}) {
  return (
    <FlatList
      style={styles.listImcs}
      data={[...data].reverse()}
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
  );
}
