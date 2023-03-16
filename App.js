import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Image, SafeAreaView, StyleSheet, Text, TouchableWithoutFeedback ,TouchableOpacity} from 'react-native';
import Page from './components/Page.js';

export default function App() {

  const [hel,setHel] = useState(0)

  return (
    <SafeAreaView style={styles.container}>
      <Page/>  
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    display : "flex",
    flex: 1,
    backgroundColor: '#ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
