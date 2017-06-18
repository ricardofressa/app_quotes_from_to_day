//Imports
import React from 'react';
import { Text, AppRegistry } from 'react-native';

//Styles
const Styles = {
  styleText : {
    fontSize : 40,
    backgroundColor : '#08509B',
    // paddingTop : 15,
    // color : '#FFF'
    // textDecorationLine : 'underline line-through'
    // fontStyle : 'italic',
    // fontWeight : '900',
    // textAlign : 'left',
    // shadowColor : '#000',
    // shadowOffset : {width:0, height: 2},
    // shadowOpacity : 0.4 
  }
}; 

//Components
const App = () => {
	const { styleText } = Styles;
  return (
    <Text style={ styleText }>Frases do dia</Text>
  );
};

//Render
AppRegistry.registerComponent('app_quotes_from_to_day', () => App);
