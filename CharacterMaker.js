import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TouchableHighlight, FlatList } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SortableList from 'react-native-sortable-list';


class Background extends Component {

	render() {
    	const {source, children, style, ...props} = this.props
	    return (

	        <ImageBackground
	          style={[styles.container, styles.banner]}
	          source={require('./background.png')}
	        >
	        	{ children }

	        </ImageBackground>
	    )
	}
}

export class CharacterMaker extends Component {

	constructor(props) {
		super(props)
	}

	render() {

		const { navigate } = this.props.navigation;
 		const { params } = this.props.navigation.state;
		const character = params.character;	

		return (

			<Background>
				<TouchableHighlight
					onPress = {()=> navigate("ClassPicker", { character: character})}>

					<View style = {styles.textContainer}>

						<Text style={styles.title}>
							Welcome to the Character Creator
						</Text>

						<Text style={styles.text}>
							This section will help you create a new character. DnD has many rules, and creating a 
							character may take up to 20 minutes. If this is your first time, we suggest taking a
							look at the DnD players handbook reference. Click the book at the bottom of the 
							screen at any time to view the guide
						</Text>

						<Text style={styles.title}>
							Click anywhere to get started!
						</Text>

					</View>

				</TouchableHighlight>
			</Background>
		)
	}
}

export class ClassPicker extends Component {

	constructor(props) {
		super(props);
	}

	selectClass = (character, item) => {

		character.class = item.name;

		this.props.navigation.navigate("RacePicker", {character: character});
	}

	render() {

		const { navigate } = this.props.navigation;
 		const { params } = this.props.navigation.state;
		const character = params.character;	

		const classes = global.rules.classes;

		console.log(character);


		return(
			<Background>
				<View style={styles.container}>
			
					<View style = {[styles.textContainer, {marginVertical: '10%'}]}>
						<Text style={[styles.title, {fontWeight: 'bold'}]}>
							Choose your Class
						</Text>

						<Text style={[styles.text, {marginBottom: 10}]}>
							This section allows you to select your class. If you're feeling lost, click the
							book at the bottom of the screen at any time to view the DnD guide
						</Text>
					</View>

					<FlatList
						contentContainerStyle = {styles.textContainer}
						data = {classes}
						renderItem={({item}) => 
							<Text
								style = {[styles.selections, {alignItems: 'center'}]}
								onPress={()=>this.selectClass(character, item)}>
									{item.name}
							</Text>}
					/>
				</View>
			</Background>
		)
	}
}

export class RacePicker extends Component {

	constructor(props) {
		super(props)
	}

	selectRace = (character, item) => {

		character.race = item.name;

		this.props.navigation.navigate("AbilityPicker", { character: character});
	}

	render() {

		const { navigate } = this.props.navigation;
 		const { params } = this.props.navigation.state;
		const character = params.character;	

		const races = global.rules.races;

		return (
				<Background>
					<View style={styles.container}>

						<View style={[styles.textContainer, {marginVertical: '10%'}]}>
							<Text style={[styles.title, {fontWeight: 'bold'}]}>
								Choose Your Race
							</Text>

							<Text style = {[styles.text, {marginBottom: 10}]}>
								This section allows you to select your race. If you're feeling lost, click the
								book at the bottom of the screen at any time to view the DnD guide
							</Text>
						</View>

						<FlatList
							contentContainerStyle = {styles.textContainer}
							data = {races}
							renderItem={({item}) => 
								<Text 
									style={styles.selections}
									onPress={()=>this.selectRace(character, item)}>
										{item.name}
								</Text>}
						/>
					</View>
				</Background>
		)
	}
}

export class AbilityPicker extends Component {

	constructor(props) {
		super(props);

		this.state = {
			rolls: [],
			rollText: "0,0,0,0,0,0",
			fake: [0,0,0,0,0,0],
		}
	}

	formatRolls (rolls) {

		var text = "";

		for (var i=0; i<rolls.length-1; i++) {
			text += rolls[i] + ", ";
		}
		text += "" + rolls[rolls.length-1];

		return text;
	}

	rollDice = () => {

		totals = [0,0,0,0,0,0];

		d6Rolls = [0,0,0,0]

		//Repeat 6 times, once for each ability
		for (var i=0; i<6; i++) {

			//Roll 4D6, take highest 3
			for (var j=0; j<4; j++) {
				//Roll a D6
				d6Rolls[j] = Math.ceil(Math.random()*6);

			}

			d6Rolls.sort(function(a,b){return b-a});

			for (var j=0; j<3; j++) {
				totals[i] += d6Rolls[j];
			}

			d6Rolls = [0,0,0,0];

		}

		var rollText = this.formatRolls(totals);

		this.setState({
			rollText: rollText,
			rolls: totals,
		});

	}

	render() {

		const {navigate} = this.props.navigation;
		const { params } = this.props.navigation.state;
		const character = params.character;

		return (
			<Background>
				<View style = {styles.container}>

					<View style = {[styles.textContainer, {marginVertical: '5%'}]}>
						<Text style = {styles.title}>
							Ability Scores
						</Text>

						<Text style = {[styles.text, {marginBottom: 10}]}>
							This section will help roll for your ability scores. Click the button below to
							roll 6 D20s, which will give you the total amount of ability points which you
							can distribute between the 6 categories below
						</Text>
					</View>

					<Text 
						onPress = {this.rollDice}
						style = {[styles.textContainer, styles.title, {fontWeight: 'bold'}]}>
							PRESS TO ROLL DICE
					</Text>

					<Text style = {[styles.textContainer, styles.title, {fontWeight: 'bold', marginBottom: '10%'}]}>
						{this.state.rollText}
					</Text>

					<View style = {[styles.textContainer, {flexDirection: 'row'}]}>

						<View style>
							<Text style = {styles.selections}>STR</Text>
							<Text style = {styles.selections}>DEX</Text>
							<Text style = {styles.selections}>CON</Text>
							<Text style = {styles.selections}>INT</Text>
							<Text style = {styles.selections}>WIS</Text>
							<Text style = {styles.selections}>CHA</Text>

						</View>

						<SortableList
							data = {this.state.fake}
							renderRow={({value}) => 
								<Text>
									11
								</Text>
							}
						/>
					</View>

				</View>


			</Background>
		)
	}
}

// class AbilityRow extends Component {

// 	constructor (props) {
// 		super(props);

// 		this.state = {
// 			ability: props.ability,
// 			value: props.value,
// 		}
// 	}

// 	add = () => {
// 		var value = this.state.value;

// 		this.setState({value: value+1});
// 	}

// 	render() {

// 		const value = this.props.value;

// 		return (

// 			<View style = {styles.textContainer}>
// 						<AbilityRow ability="STR" value={this.state.rolls[0]} />
// 						<AbilityRow ability="DEX" value={this.state.rolls[1]} />
// 						<AbilityRow ability="CON" value={this.state.rolls[2]} />
// 						<AbilityRow ability="INT" value={this.state.rolls[3]} />
// 						<AbilityRow ability="WIS" value={this.state.rolls[4]} />
// 						<AbilityRow ability="CHA" value={this.state.rolls[5]} />
// 					</View>
// 			<View style = {{flexDirection: 'row'}}>
// 				<Text style = {styles.ability}>
// 					{this.state.ability}
// 				</Text>

// 				<Text style = {styles.ability}>
// 					{value}
// 				</Text>

// 				<Text style={[styles.ability, {color: 'red'}]} onPress = {this.add}>
// 					+
// 				</Text>


// 			</View>
// 		)
// 	}
// }

export class WeaponPicker extends Component {

	constructor(props) {
		super(props);
	}

	render() {

		const { navigate } = this.props.navigation;
 		const { params } = this.props.navigation.state;
		const character = params.character;	

		return (
			<Background>

			</Background>
		)
	}
}

function cancel () {


}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  banner: {
    flex: 1,
    width: null,
    height: null
  },
  textContainer: {
  	width: '90%',
    backgroundColor: '#A39367',
  	borderWidth: 3,
  	alignItems: 'center',
  },
  title: {
  	fontSize: 22,
  	marginHorizontal: 5,
  	marginVertical: 10,
  	textAlign: 'center',
  },
  text: {
  	fontSize: 14,
  	marginHorizontal: 10,
  	textAlign: 'center',
  },
  selections: {
  	fontSize: 18,
  	marginVertical: 3,
  	width: '100%',
  	fontWeight: 'bold',
  	marginHorizontal: 10,
  },
  ability: {
  	flex: 1,
  	fontSize: 22,
  	textAlign: 'center',
  	fontWeight: 'bold',
  	marginVertical: 5,
  }

});