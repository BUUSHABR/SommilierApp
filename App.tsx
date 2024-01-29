// /**
//  * Sample React Native App
//  * https://github.com/facebook/react-native
//  *
//  * @format
//  */
import React from 'react';
import 'react-native-gesture-handler';
import MyStack from './src/router/Router';
// import LoginScreen from './src/pages/LoginScreen';
// import RegistrationScreen from './src/pages/RegistrationScreen';
// import SplashScreen from './src/pages/SplashScreen';
function App(): React.JSX.Element {
  return (
    <>
      <MyStack />
      {/* <LoginScreen /> */}
      {/* <RegistrationScreen /> */}
      {/* <SplashScreen /> */}
    </>
  );
}

export default App;
