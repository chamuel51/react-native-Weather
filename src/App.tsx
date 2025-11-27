/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import { StyleSheet } from 'react-native';
import {
  SafeAreaView
} from 'react-native-safe-area-context';
import WeatherDetailsScreen from './screens/WeatherDetailsScreen';
import Navigation from "./utils/Navigation";

// import { Text } from 'react-native/types_generated/index';

function App() {
  // const isDarkMode = useColorScheme() === 'dark';



  return (


    // <WeatherDetailsScreen ></WeatherDetailsScreen >
    <Navigation></Navigation>

  );
}

// function AppContent() {
//   const safeAreaInsets = useSafeAreaInsets();

//   return (
//     <View style={styles.container}>
//       <NewAppScreen
//         templateFileName="App.tsx"
//         safeAreaInsets={safeAreaInsets}
//       />
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: colors.skyBlue

  },

});

export default App;
