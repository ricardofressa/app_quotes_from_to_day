//Imports
import React from 'react';
import { Text, AppRegistry, View, Button } from 'react-native';

//Styles
const Styles = {
  // styleText : {
  //   fontSize : 40,
  //   backgroundColor : '#08509B',
  //   paddingTop : 15,
  //   color : '#FFF'
  //   textDecorationLine : 'underline line-through'
  //   fontStyle : 'italic',
  //   fontWeight : '900',
  //   textAlign : 'left',
  //   shadowColor : '#000',
  //   shadowOffset : {width:0, height: 2},
  //   shadowOpacity : 0.4 
  // },
  // styleText2 : {
  //   fontSize : 40,
  //   backgroundColor : '#2A48FA',
  // },
  // styleView : {
  // 	backgroundColor : 'skyblue',
  // 	height : 600,
  // 	justifyContent : 'space-around',
  // 	alignItems : 'flex-end'
  // }
  main : {
  	flex : 1,
  	backgroundColor : 'cornflowerblue',
  	paddingTop : 40
  }
//   top : {
//   	flex : 2, // 2:11
//   	backgroundColor : 'brown'
//   },
//   content : {
//   	flex : 8, // 8:11
//   	backgroundColor : 'yellowgreen'
//   },
//   footer : {
//   	flex : 1, // 1:11
//   	backgroundColor : 'orangered'
//   }
}; 

const pressButton = () => {
	alert('Botão Pressionado');
};

//Components
const App = () => {
	const { main} = Styles;
  return (
  	<View style={ main }>
    	<Button
    		onPress={ pressButton }
    		title="Clique aqui"
    		color="#841584"
    		accessibilityLabel="Clique para abrir as notícias!" />

    </View>
  );
};

//Render
AppRegistry.registerComponent('app_quotes_from_to_day', () => App);
