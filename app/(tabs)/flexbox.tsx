import { StyleSheet } from 'react-native';
import { View } from '@/components/Themed';

export default function FlexboxDemo() {
  return (
    <View style={styles.container}>
      <View style={[styles.box, styles.box1]} />
      <View style={[styles.box, styles.box2]} />
      <View style={[styles.box, styles.box3]} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  box: { width: '100%' },
  box1: { flex: 1, backgroundColor: '#38512F' },
  box2: { flex: 2, backgroundColor: '#527A47' },
  box3: { flex: 3, backgroundColor: '#6C9C5F' },
});