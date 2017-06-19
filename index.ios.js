//Imports
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

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
  	backgroundColor : 'cornflowerblue'
  },
  top : {
  	flex : 2, // 2:11
  	backgroundColor : 'brown'
  },
  content : {
  	flex : 8, // 8:11
  	backgroundColor : 'yellowgreen'
  },
  footer : {
  	flex : 1, // 1:11
  	backgroundColor : 'orangered'
  }
}; 

//Components
const App = () => {
	const { main, top, content, footer } = Styles;
  return (
  	<View style={ main }>
    	<Text style={ top }> A </Text>
    	<Text style={ content }> B </Text>
    	<Text style={ footer }> C </Text>
    </View>
  );
};

//Render
AppRegistry.registerComponent('app_quotes_from_to_day', () => App);
