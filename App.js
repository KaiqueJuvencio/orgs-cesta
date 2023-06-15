
import { StyleSheet, Text, View, StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta';
import { useFonts, Montserrat_400Regular, Montserrat_700Bold } from '@expo-google-fonts/montserrat';

export default function App() {
  
  // Quando essa variavel fontCarregada é atualizada, o aplicativo inteiro é carregado
  const [fonteCarregada] = useFonts({
    "MontserratRegular": Montserrat_400Regular,
    "MontserratBold": Montserrat_700Bold,
  });

  // if para que o aplicativo não mostre nada enquanto a fonte não estiver totalmente carregada
  if(!fonteCarregada) {
    return <View/>
  }

  return (
    <SafeAreaView>
      <StatusBar/>
      <Cesta/>
    </SafeAreaView>
  );
}
