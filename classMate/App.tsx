import React from 'react';
import Routes from './src/routes';
import {AppLoading} from 'expo';
import {Allan_400Regular, useFonts} from '@expo-google-fonts/allan';
import {Jost_400Regular} from '@expo-google-fonts/jost';

export default function App() {
  const [fonts] = useFonts({
    Allan_400Regular, Jost_400Regular
  });

  if(!fonts){
    return (
      <AppLoading/>
    );
  }
  return (
    <Routes/>
  );
}
