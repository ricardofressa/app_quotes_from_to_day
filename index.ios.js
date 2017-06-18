//Imports
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Styles
const Styles = {
  TitleApp: {
    fontSize : 20,
    backgroundColor : '#08509B',
    paddingTop : 15,
    shadowColor : '#000',
    shadowOffset : {width:0, height: 2},
    shadowOpacity : 0.4 
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
