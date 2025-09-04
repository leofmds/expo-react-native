import { StyleSheet } from 'react-native';
import { useState, useEffect } from 'react';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

export default function TabOneScreen() {
  const [counter, setCounter] = useState(0);
  const [msg, setMsg] = useState('');

  useEffect(() => {
    let timer = setInterval(() => {
      setCounter(prevValue => prevValue + 1);
    }, 1000);
    
    return () => clearInterval(timer);
  });

  useEffect(() => {
    if (counter > 20) {
      setMsg('Valor alto!')
    } else if (counter > 0) {
      setMsg('contando...');
    } else {
      setMsg('');
    }
  }, [counter]);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contador: {counter}</Text>
      <Text style={styles.title2}>{msg}</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 15,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
