import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import LoginScreen from './Screens/LoginScreen';


export default function App() {
  const [fontsLoaded] = useFonts({
    'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
    'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
    'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf')
  });
  console.log('Fuck yeah')

  return (
    <View style={styles.container}>
      <LoginScreen/>
      {/* <Text style={{ fontFamily: 'Roboto-Medium', fontSize: 30}}>HELLO !!! It's my first React-Native project.</Text>
      <StatusBar style="auto" />
    <LoginScreen/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
