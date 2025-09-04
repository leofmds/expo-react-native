import { SafeAreaView, ScrollView, View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.title}>Exemplo com Imagens</Text>

        {/* Imagem local */}
        <Image source={require('../../assets/images/icon.png')} style={styles.image} resizeMode="contain" />

        {/* Imagem remota */}
        <Image
          source={{ uri: 'https://reactnative.dev/img/tiny_logo.png' }}
          style={styles.image}
          resizeMode="cover"
        />

        {/* Texto longo para forçar scroll */}
        <Text style={styles.text}>
          {Array(20).fill('Este é um texto dentro do ScrollView. ').join('')}
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  scrollContent: { alignItems: 'center', padding: 16 },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  image: { width: 200, height: 100, marginBottom: 20 },
  text: { fontSize: 16, textAlign: 'center' },
});