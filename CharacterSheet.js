import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';

class CharacterSheet extends Component {

	constructor(props) {
    	super(props);
 	}

	render () {
 		const { params } = this.props.navigation.state;
		const character = params.character
		
		return(
			<View style={[styles.container]}>

				<View style={{flex: 1, flexDirection: 'row'}}>
					<ShieldProp value={character.ac}/>

					<ShieldProp value={character.ac}/>
				</View>

				<View style={{flex: 2}}>
					<Text>Part 2</Text>
				</View>

			</View>
		)
	}
}

class ShieldProp extends Component {

	constructor(props) {
		super(props);

		this.state= {
			text: this.props.text,
			value: this.props.value,
		}
	}

	render() {
		return(
			<ImageBackground
				style={[styles.container,styles.banner]}
				source={require('./shield.png')}>

				<Text >{this.state.value}</Text>

			</ImageBackground>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: '#A39367',
	},
	banner: {
		flex: 1,
		width: null,
		height: null,
		backgroundColor: '#999',
	},
})

module.exports = CharacterSheet;