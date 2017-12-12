import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ImageBackground, SectionList } from 'react-native';
import { StackNavigator } from 'react-navigation';

class CharacterSheet extends Component {

	constructor(props) {
    	super(props);
 	}

	render () {
 		const { params } = this.props.navigation.state;
		const character = params.character;

		const skills = character.stats
		
		return(
			<View style={[styles.container]}>

				<View style={{flex: 1}}>
					<Text style={[styles.textContainer, styles.title, {marginVertical: '5%', paddingHorizontal: 1}]}>
						{character.name}, {character.class}, Level {character.level}
					</Text>

				</View>

				<View style={{flex: 1, flexDirection: 'row'}}>

					<ACShield ac={character.ac} />
					<View style={styles.container}>

					</View>

					<View style={styles.container}>

					</View>

					<View style={styles.container}>
						<SectionList

							renderItem={({item}) => <SkillRow skill={item}/>}
							renderSectionHeader={({section}) => <Text style={{fontWeight: 'bold'}}>{section.title} Skills</Text>}
							sections={[
								{data: skills.strength, title: "Strength"},
								{data: skills.dexterity, title: "Dexterity"},
								{data: skills.intelligence, title: "Intelligence"},
								{data: skills.wisdom, title: "Wisdom"},
								{data: skills.charisma, title: "Charisma"},
						  ]}
						/>
					</View>

				</View>

				<Image
		            source={require('./images/book.png')}
		            style={{flex: 0.8, top: '6%', justifyContent: 'flex-end', resizeMode: 'contain'}}
		        />
	
			</View>
		)
	}
}

class SavingRow extends Component {

	constructor(props) {
		super(props);

		this.state = {
			skill: this.props.skill,
			highlight: false,
		};
	}

	toggleSkill = () => {
		
		this.state.skill.proficient = !this.state.skill.proficient;

		this.setState({
			highlight: !this.state.highlight
		})
	}

	componentDidMount() {
		if (this.state.skill.proficient) {
			this.setState({
				highlight: true
			})
		}
	}

	render() {
		return(
			<TouchableOpacity
				onPress = {this.toggleSkill}>
					<Text style={this.state.highlight && {color: 'blue'}}>
						{this.state.skill.name}
					</Text>
			</TouchableOpacity>
		)
	}
}

class ACShield extends Component {

	constructor(props) {
		super(props);

		this.state = {
			ac: this.props.ac,
		};
	}

	render() {

		return(

			<ImageBackground
				source = {require('./images/temphp.png')}
				style={styles.image}
			/>
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
	image: {
		flex: 1,
		width: null,
		height: null,
	},
	textContainer: {
		backgroundColor: '#DCDCDC',
		borderWidth: 3,
		textAlign: 'center',
	},
	title: {
		fontSize: 22,
		textAlign: 'center',
		fontWeight: 'bold',
	},
	text: {
		fontSize: 14,
	},
})

module.exports = CharacterSheet;