//Imports
import React from 'react';
import { Text, AppRegistry, View, TouchableOpacity } from 'react-native';

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
  },
  button : {
  	backgroundColor : '#48BBEC',
  	padding : 10,
  	borderColor : '#1D8EB8',
  	borderWidth : 1,
  	borderRadius : 8,
  	shadowColor : '#000',
  	shadowOffset : { width:0, height: 2},
  	shadowOpacity : 0.4
  },
  textButton : {
  	color : '#FFF',
  	fontSize : 16, 
  	fontWeight : 'bold',
  	alignSelf : 'center'
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
	const { main, button, textButton } = Styles;
  return (
  	<View style={ main }>
    	<TouchableOpacity style={ button }>
    		<Text style={ textButton }>Clique aqui</Text>
    	</TouchableOpacity>
    </View>
  );
};

//Render
AppRegistry.registerComponent('app_quotes_from_to_day', () => App);
