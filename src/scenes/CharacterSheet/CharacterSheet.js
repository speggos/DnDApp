import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ImageBackground, SectionList, TextInput } from 'react-native';
import { StackNavigator } from 'react-navigation';
import CharacterStats from './CharacterStats'

export default class CharacterSheet extends Component {

	constructor(props) {
    	super(props);
 	}

	render () {

        const { params } = this.props.navigation.state;
		const character = params.character;

		const stats = character.stats;
        const skills = character.skills;

        console.log(character);
        console.log(stats);

        return(
            <CharacterStats character={character}/>
		)
	}
}