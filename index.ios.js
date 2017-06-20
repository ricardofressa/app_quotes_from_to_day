//Imports
import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

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

const generateRandomNumber = () => {
  var randomNumber = Math.random();
  randomNumber = Math.floor(randomNumber * 5);

  var phases = Array();
  phases[0] = 'Quando Deus nos oferece mais um dia de vida é nossa obrigação desfrutar dessa dádiva com alegria e gratidão!'; 
  phases[1] = 'Desde que você cruzou meu caminho meu coração bate de amor e eu sou apenas felicidade.'; 
  phases[2] = 'Há sempre uma luz que nos guia quando recusamos abaixar a cabeça.'; 
  phases[3] = 'Quando o Senhor nos abraça com mais um dia para viver, devemos desfrutar e agradecer!'; 
  phases[4] = 'Amigos do meu coração, espero que este dia seja mais um raio de luz e alegria na vida de todos!'; 

  var phaseChoice = phases [ randomNumber ];

  Alert.alert(phaseChoice);
};

//Components
const App = () => {
	const { main, imageStyle, buttonStyle, textButtonStyle } = Styles;
  return (
  	<View style={ main }>
    	<Image 
    		source={ require('./imgs/logo.png') }
    		style= { imageStyle } / >
    		<TouchableOpacity 
          onPress={ generateRandomNumber }
          style={ buttonStyle }> 
    			<Text style={ textButtonStyle }> Frases do dia </Text>
    		</TouchableOpacity>
    </View>
  );
};

//Render
AppRegistry.registerComponent('app_quotes_from_to_day', () => App);
