import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed'

export default function FlexboxAlignment() {
  return (
    <View style={styles.container}>
      <View style={styles.item} />
      <View style={styles.item} />
      <View style={styles.item} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',           // linha horizontal
    justifyContent: 'space-between', // espaçamento igual
    alignItems: 'center',            // centralização vertical
    backgroundColor: '#eee',
    padding: 20,
  },
  item: {
    width: 60,
    height: 60,
    backgroundColor: 'tomato',
  },
});