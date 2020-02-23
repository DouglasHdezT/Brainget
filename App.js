import React, { useState } from 'react';
import { StyleSheet, View} from 'react-native';
import * as Font from 'expo-font';
import {AppLoading} from 'expo';

import mainMenuConf from './assets/constants/MainMenuData'
import budgetMenuConf from './assets/constants/BudgetMenuData'

import MainMenu from './components/menus/MainMenu'

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  if ( !dataLoaded ){
    return (<AppLoading 
      startAsync = {fetchFonts} 
      onFinish = {()=> setDataLoaded(true)} />);
  }

  return (
    <View style={styles.container}>
      <MainMenu menus = {mainMenuConf}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
	backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const fetchFonts = () => {
  return Font.loadAsync({
    'roboto': require('./assets/fonts/Roboto-Light.ttf'),
    'roboto-light': require('./assets/fonts/Roboto-Thin.ttf'),
    'roboto-bold': require('./assets/fonts/Roboto-Regular.ttf'),
  })
}