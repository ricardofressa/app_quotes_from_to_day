//Imports
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Styles
const Styles = {
  TitleApp: {
    fontSize : 30,
    backgroundColor : '#08509B',
    height : 80
  }
}; 

//Components
const App = () => {
  return (
    <Text style={ Styles.TitleApp }>Frases do dia</Text>
  );
};

//Render
AppRegistry.registerComponent('app_quotes_from_to_day', () => App);
