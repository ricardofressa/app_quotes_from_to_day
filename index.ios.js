//Imports
import React from 'react';
import { Text, AppRegistry, View } from 'react-native';

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
  },
  styleView : {
  	backgroundColor : 'skyblue',
  	height : 300,
  	justifyContent : 'center',
  	alignItems : 'flex-end'
  }
}; 

//Components
const App = () => {
	const { styleText, styleView } = Styles;
  return (
  	<View style={ styleView }>
    	<Text style={ styleText }></Text>
    </View>
  );
};

//Render
AppRegistry.registerComponent('app_quotes_from_to_day', () => App);
