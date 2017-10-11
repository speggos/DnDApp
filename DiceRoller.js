import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

//TODO: Add modifier functionality

class DiceRoller extends Component {

	constructor(props) {
		super(props);
		this.state = {total: 0, results: [], dice:[], resultsText: ""};
	}

	rollDice = () => {
		
		var rolls = [];
		var dice = this.state.dice;

		//Sort dice by decreasing value
		dice.sort((a,b) => b-a )

		//Roll dice
		for(var i=0; i<dice.length; i++) {
		 	rolls = rolls.concat(Math.floor (Math.random (dice[i])*dice[i]+1));
		}
		this.setState({results: rolls});

		var sum = sumArray(rolls);
		this.setState({total: sum});

		var resultsText = makeResultText(dice, rolls, sum);
		this.setState({resultsText: resultsText})		
	}

	clear = () => {
		this.setState({total: 0});
		this.setState({results: []});
		this.setState({dice: []});
		this.setState({resultsText: ""});
	}

	render() {

		let total = this.state.total;
		let results = this.state.results;
		let dice = this.state.dice;
		let resultsText = this.state.resultsText

		var showDice = dice.map ((value)=> <Text>{value}</Text>);
		var showResults = results.map ((value)=> <Text>{value}</Text>);
		return(
			<View>
				<Text>Welcome to the Dice Roller!</Text>
				<Text> Total is: {total} Dice is {showDice} results is {showResults}</Text>
				<Text> Result is: {resultsText}</Text>
				<Button
					title="D4"
					onPress={()=> this.setState({dice: dice.concat(4)})}
				/>
				<Button
					title="D6"
					onPress={()=> this.setState({dice: dice.concat(6)})}
				/>
				<Button
					title="D8"
					onPress={()=> this.setState({dice: dice.concat(8)})}
				/>
				<Button
					title="Roll Dice"
					onPress={this.rollDice }
				/>
				<Button
					title="Clear"
					onPress={this.clear}
				/>

			</View>
		);
	}
};

function sumArray(array) {

	var sum = 0;

	for (var i=0; i<array.length; i++) {
		sum += array[i];
	}

	return sum;
}

function makeResultText(dice, results, total) {

		var resultsText = "";

		for (var i=0; i < dice.length; i++) {
			resultsText += " (d" + dice[i] + ") " + results[i];
		}

		resultsText += " = " + total;

		return resultsText

	}

module.exports = DiceRoller;