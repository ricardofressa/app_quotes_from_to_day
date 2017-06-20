//Imports
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity } from 'react-native';

//Styles
const Styles = {
  main : {
  	flex : 1,
  	justifyContent  : 'center',
  	alignItems : 'center'
  },
	buttonStyle : {
		backgroundColor : '#538530',
		paddingVertical : 10,
		paddingHorizontal : 40, 
		marginTop : 20
	},
	textButtonStyle : {
		color : 'white',
		fontSize : 16, 
		fontWeight : 'bold'
	}
}; 

// const pressButton = () => {
// 	alert('Botão Pressionado');
// };

//Components
const App = () => {
	const { main, imageStyle, buttonStyle, textButtonStyle } = Styles;
  return (
  	<View style={ main }>
    	<Image 
    		source={ require('./imgs/logo.png') }
    		style= { imageStyle } / >
    		<TouchableOpacity style={ buttonStyle }> 
    			<Text style={ textButtonStyle }> Frases do dia </Text>
    		</TouchableOpacity>
    </View>
  );
};

//Render
AppRegistry.registerComponent('app_quotes_from_to_day', () => App);
