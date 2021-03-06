import React, {Component} from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, ImageBackground, TouchableHighlight, FlatList, SectionList, Button, AsyncStorage } from 'react-native';
import { StackNavigator } from 'react-navigation';
import SortableListView from 'react-native-sortable-listview'

var CHARACTER_KEY = "Characters"

export class CharacterMaker extends Component {

	constructor(props) {
		super(props)
	}

	static navigationOptions = ({navigation}) => ({
    	title: 'Welcome',
    	headerRight: <Button 
    		title="Next"
    		onPress={()=> navigation.navigate("ClassPicker", { character: navigation.state.params.character})}
    	/>
  	});

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

	static navigationOptions = ({navigation}) => ({
    	title: 'Class',
    	headerRight: <Button 
    		title="Next"
    		onPress={()=> navigation.navigate("RacePicker", { character: navigation.state.params.character})}
    	/>
  	});

	selectClass = (character, item) => {

		character.class = item.name;

		character.abilities += item.level1;

		switch (item.name) {
			case "Barbarian":
				character.stats.strength.savingThrow = true;
				character.stats.constitution.savingThrow = true;

				character.classFeature.name = "Rage";
				character.classFeature.max = 2;
				character.classFeature.current = 2;
				break;
			case "Bard":
				character.stats.dexterity.savingThrow = true;
				character.stats.charisma.savingThrow = true;

				character.classFeature.name = "Bardic Inspiration";
				character.classFeature.max = 2;
				character.classFeature.current = 2;
				break;
			case "Cleric":
				character.stats.wisdom.savingThrow = true;
				character.stats.charisma.savingThrow = true;
				break;
			case "Druid":
				character.stats.intelligence.savingThrow = true;
				character.stats.wisdom.savingThrow = true;
				break;
			case "Fighter":
				character.stats.strength.savingThrow = true;
				character.stats.constitution.savingThrow = true;

				character.classFeature.name = "Second Wind";
				character.classFeature.max = 1;
				character.classFeature.current = 1;
				break;
			case "Monk":
				character.stats.strength.savingThrow = true;
				character.stats.dexterity.savingThrow = true;
				break;
			case "Paladin":
				character.stats.wisdom.savingThrow = true;
				character.stats.charisma.savingThrow = true;

				character.classFeature.name = "Lay On Hands";
				character.classFeature.max = 1;
				character.classFeature.current = 1;
				break;
			case "Ranger":
				character.stats.dexterity.savingThrow = true;
				character.stats.strength.savingThrow = true;
				break;
			case "Rogue":
				character.stats.intelligence.savingThrow = true;
				character.stats.dexterity.savingThrow = true;
				break;
			case "Sorcerer":
				character.stats.constitution.savingThrow = true;
				character.stats.charisma.savingThrow = true;
				break;
			case "Warlock":
				character.stats.wisdom.savingThrow = true;
				character.stats.charisma.savingThrow = true;
				break;
			case "Wizard":
				character.stats.intelligence.savingThrow = true;
				character.stats.wisdom.savingThrow = true;

				character.classFeature.name = "Arcane Recovery";
				character.classFeature.max = 1;
				character.classFeature.current = 1;
				break;
			default:
				console.log("No cases fit")
				break;

		}

		this.props.navigation.navigate("RacePicker", {character: character});
	}

	render() {

		const { navigate } = this.props.navigation;
 		const { params } = this.props.navigation.state;
		const character = params.character;	

		const classes = global.rules.classes;

		return(
			<Background style={styles.container}>
			
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
			</Background>
		)
	}
}

export class RacePicker extends Component {

	constructor(props) {
		super(props)
	}

	static navigationOptions = ({navigation}) => ({
    	title: 'Race',
    	headerRight: <Button 
    		title="Next"
    		onPress={()=> navigation.navigate("AbilityPicker", { character: navigation.state.params.character})}
    	/>
  	});

	selectRace = (character, item) => {

		character.race = item.name;

		character.abilities += item.level1;

		switch(item.name) {
			case "Dragonborn":
				character.stats.strength.value += 2;
				character.stats.charisma.value += 1;
				character.speed = 30;
				break;
			case "Dwarf":
				character.stats.constitution.value += 2;
				character.speed = 25;
				break;
			case "Elf":
				character.stats.dexterity.value += 2;
				character.speed = 30;
				break;
			case "Gnome":
				character.stats.intelligence.value += 2;
				character.speed = 25;
				break;
			case "Half-Elf":
				character.stats.charisma.value += 2;
				character.speed = 30;
				break;
			case "Half-Orc":
				character.stats.strength.value += 2;
				character.stats.constitution.value += 1;
				character.speed = 30;
				break;
			case "Halfling":
				character.stats.dexterity.value += 2;
				character.speed = 25;
				break;
			case "Human":
				character.stats.strength.value += 1;
				character.stats.dexterity.value += 1;
				character.stats.constitution.value += 1;
				character.stats.intelligence.value += 1;
				character.stats.wisdom.value += 1;
				character.stats.charisma.value += 1;
				character.speed = 30;
				break;
			case "Tiefling":
				character.stats.intelligence.value += 1;
				character.stats.charisma.value += 2;
				character.speed = 30;
				break;
		}

		this.props.navigation.navigate("AbilityPicker", { character: character});
	}

	render() {

		const { navigate } = this.props.navigation;
 		const { params } = this.props.navigation.state;
		const character = params.character;	

		const races = global.rules.races;

		return (
				<Background style = {styles.container}>

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
						scrollEnabled = {false}
						contentContainerStyle = {styles.textContainer}
						data = {races}
						renderItem={({item}) => 
							<Text 
								style={styles.selections}
								onPress={()=>this.selectRace(character, item)}>
									{item.name}
							</Text>}
					/>
				</Background>
		)
	}
}

export class AbilityPicker extends Component {

	constructor(props) {
		super(props);

		this.state = {
			rolls: [0,0,0,0,0,0],
			rollText: "0,0,0,0,0,0",
			values: [0,0,0,0,0],
			order: [0,1,2,3,4,5],
		}
	}

	static navigationOptions = ({navigation}) => ({
    	title: 'Abilities',
    	headerRight: <Button 
    		title="Next"
    		onPress={()=> navigation.navigate("SkillPicker", { character: navigation.state.params.character})}
    	/>
  	});

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

	navigateWeapons = (character, rolls, order) => {

		character.stats.strength.value += rolls[order[0]]
		character.stats.dexterity.value += rolls[order[1]]
		character.stats.constitution.value += rolls[order[2]]
		character.stats.intelligence.value += rolls[order[3]]
		character.stats.wisdom.value += rolls[order[4]]
		character.stats.charisma.value += rolls[order[5]]

		this.props.navigation.navigate("SkillPicker", {character: character})

	}

	render() {

		const {navigate} = this.props.navigation;
		const { params } = this.props.navigation.state;
		const character = params.character;
		let order = this.state.order

		return (
			<Background>
				<View style = {styles.container}>

					<View style = {[styles.textContainer, {marginVertical: '5%'}]}>
						<Text style = {styles.title}>
							Ability Scores
						</Text>

						<Text style = {[styles.text, {marginBottom: 10}]}>
							This section will help roll for your ability scores. Click the button below to
							roll 6 D20s, then drag and drop the values to customize your character's ability scores
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

					<View style = {[styles.textContainer, {flexDirection: 'row', width: '30%'}]}>

						<View>
							<Text style = {styles.selections}>STR</Text>
							<Text style = {styles.selections}>DEX</Text>
							<Text style = {styles.selections}>CON</Text>
							<Text style = {styles.selections}>INT</Text>
							<Text style = {styles.selections}>WIS</Text>
							<Text style = {styles.selections}>CHA</Text>

						</View>

						<SortableListView
							scrollEnabled = {false}
							limitScrolling = {true}
							data = {this.state.rolls}
							order = {order}
							onRowMoved={e => {
					          order.splice(e.to, 0, order.splice(e.from, 1)[0])
					          this.setState({
					          	order: order
					          })
					        }}
							renderRow={value =>
								<TouchableOpacity {...this.props.sortHandlers}>
									<Text style = {styles.selections}>
										{value}
									</Text>
								</TouchableOpacity>
							}
						/>

					</View>

					<TouchableHighlight
						style = {[styles.textContainer, {marginTop: 20}]}
						onPress = {()=>this.navigateWeapons(character, this.state.rolls, order)}>
						<Text style={[styles.title, {fontWeight: 'bold'}]}>DONE</Text>
					</TouchableHighlight>

					</View>
			</Background>
		)
	}
}

export class SkillPicker extends Component {

	constructor(props) {
		super(props);
	}

	static navigationOptions = ({navigation}) => ({
		title: 'Skills',
		headerRight: <Button
			title="Next"
			onPress={()=> navigation.navigate("WeaponPicker", {character: navigation.state.params.character})}
		/>
	});

	render() {

		const { navigate } = this.props.navigation.navigate;
		const { params } = this.props.navigation.state;
		const character = params.character;

		const skills = character.skills;

		return(
			<Background>
				<View style={styles.container}>

						<Text style={[styles.textContainer, styles.title]}>
							Select your Skills
						</Text>

					<View style={[styles.textContainer,{height: '80%', width: '80%'} ]}>
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
			</Background>
		)
	}
}

export class WeaponPicker extends Component {

	constructor(props) {
		super(props);
	}

	static navigationOptions = ({navigation}) => ({
    	title: 'Weapons',
    	headerRight: <Button 
    		title="Next"
    		onPress={()=> navigation.navigate("ArmourPicker", { character: navigation.state.params.character})}
    	/>
  	});

	render() {

		const { navigate } = this.props.navigation.navigate;
 		const { params } = this.props.navigation.state;
		const character = params.character;

		const weapons = global.rules.weapons;

		return (
			<Background>
				<View style={styles.container}>

					<View style={[styles.textContainer, {marginBottom: '5%', height: '20%'}]}>
						<Text style={[styles.title, {fontWeight: 'bold'}]}>
							Choose Your Weapons
						</Text>

						<Text style = {[styles.text, {marginBottom: 10}]}>
							This section allows you to add weapons to your character. You can find which weapons your character
							can wield by checking your class. Click a weapon to add it to your inventory
						</Text>
					</View>

					<View style={[styles.textContainer,{height: '70%', width: '80%'} ]}>
						<SectionList
							renderItem={({item}) => <WeaponRow weapon={item} character={character} />}
							renderSectionHeader={({section}) => <Text style={{fontWeight: 'bold'}}>{section.title} Weapons</Text>}
							sections={[
								{data: weapons.simpleMeelee, title: "Simple Meelee"},
						    	{data: weapons.simpleRanged, title: "Simple Ranged"},
						    	{data: weapons.martialRanged, title: "Martial Meelee"},
						    	{data: weapons.martialMeelee, title: "Martial Ranged"},
						  ]}
						/>
					</View>
				</View>
			</Background>
		)
	}
}

export class ArmourPicker extends Component {

	constructor(props) {
		super(props);

		this.state={
			Characters: []
		}
	}

	static navigationOptions = ({navigation}) => {
		const {params = {}} = navigation.state;
		return {
	    	title: 'Armour',
	    	headerRight: <Button 
	    		title="Finish"
	    		onPress={() => params.addCharacter()}
	    	/>
	    }
  	};

  	addCharacter = () => {

  		var navigation = this.props.navigation;
	    var characters = this.state.Characters;
	    var newCharacter = navigation.state.params.character

	    calculateCharacter(newCharacter);

	    console.log(newCharacter)

	    characters = characters.concat([newCharacter]);

	    AsyncStorage.setItem(CHARACTER_KEY, JSON.stringify(characters));

	    navigation.navigate("Home");
	}

	  componentDidMount() {

	  	this.props.navigation.setParams({ addCharacter: this.addCharacter})
	    AsyncStorage.getItem(CHARACTER_KEY)
	      .then((response)=> JSON.parse(response))
	      .then((characters) => {
	        this.setState({
	          Characters: characters
	        });
	      })
	  }

	render() {

		const { params } = this.props.navigation.state;
		const character = params.character;

		const armour = global.rules.armour;

		return (
			<Background>
				<View style={styles.container}>

					<View style={[styles.textContainer, {marginBottom: '5%', height: '20%'}]}>
						<Text style={[styles.title, {fontWeight: 'bold'}]}>
							Choose Your Armour
						</Text>

						<Text style = {[styles.text, {marginBottom: 10}]}>
							This section allows you to add armour to your character. You can find which armor your character
							can equipt by checking your class. Click armour to add it to your inventory
						</Text>
					</View>

					<View style={[styles.textContainer,{width: '80%'} ]}>
						<SectionList
							renderItem={({item}) => <ArmourRow armour={item} character={character} />}
							renderSectionHeader={({section}) => <Text style={{fontWeight: 'bold'}}>{section.title}</Text>}
							sections={[
								{data: armour.lightArmour, title: "Light Armour"},
								{data: armour.mediumArmour, title: "Medium Armour"},
						    	{data: armour.heavyArmour, title: "Heavy Armour"},
						    	{data: armour.shields, title: "Shields"}
						  	]}
						/>
					</View>
				</View>
			</Background>
		)
	}
}

class Background extends Component {

	render() {
    	const {source, children, style, ...props} = this.props
	    return (

	        <ImageBackground
	          style={[styles.container, styles.banner]}
	          source={require('../images/background.png')}
	        >
	        	{ children }

	        </ImageBackground>
	    )
	}
}

class SkillRow extends Component {

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
				style={this.state.highlight && {backgroundColor: '#444'}}
				onPress = {this.toggleSkill}>
					<Text>
						{this.state.skill.name}
					</Text>
			</TouchableOpacity>
		)
	}
}

class WeaponRow extends Component {

	constructor(props) {
		super(props);

		this.state= { 
			weapon: this.props.weapon,
			character: this.props.character,
			highlight: false,
		};
	}

	toggleWeapon = () => {
		
		var weapons = this.state.character.weapons;
		var weapon = this.state.weapon;

		if (this.state.highlight) {
			//Deselect weapon
			var index = weapons.indexOf(weapon)

			if (index>-1) {
				weapons.splice(index, 1)
			}
		} else {
			//Add weapon
			weapons.push(weapon);
		}

		this.setState({
			highlight: !this.state.highlight
		})
	}

	//Yeah this code is ugly
	formatDamage(damage) {
		if (damage.length == 1) {
			return "D" + damage[0];
		} else if (damage.length == 2) {
			if (damage[0]==damage[1]) {
				return "2D" + damage[0];
			} else {
				return "D" + damage[0] + " + D" + damage[1];
			}
		}
	}	

	render () {

		const weapon = this.state.weapon;

		const damage = this.formatDamage(weapon.damage)

		return (
			<TouchableOpacity
				style={[{flexDirection: 'row'}, this.state.highlight && {backgroundColor: '#444'}]}
				onPress = {this.toggleWeapon}>
					<Text style={{width: '25%'}}>
						{weapon.name}
					</Text>

					<Text style={{width: '10%'}}>
						{damage}
					</Text>

					<Text>
						{weapon.properties}
					</Text>
			</TouchableOpacity>
		)
	}
}

class ArmourRow extends Component {

	constructor(props) {
		super(props);

		this.state= { 
			armour: this.props.armour,
			character: this.props.character,
			highlight: false,
		};
	}

	toggleArmour = () => {
		
		var armours = this.state.character.armour;
		var armour = this.state.armour;

		if (this.state.highlight) {
			//Deselect armour
			var index = armours.indexOf(armour)

			if (index>-1) {
				armours.splice(index, 1)
			}
		} else {
			//Add armour
			armours.push(armour);
		}

		this.setState({
			highlight: !this.state.highlight
		})
	}

	render () {

		const armour = this.state.armour;

		return (
			<TouchableOpacity
				style={[{flexDirection: 'row'}, this.state.highlight && {backgroundColor: '#444'}]}
				onPress = {this.toggleArmour}>
					<Text style={{width: '25%'}}>
						{armour.name}
					</Text>

					<Text style={{width: '10%'}}>
						{armour.value}
					</Text>

					<Text>
						{armour.properties}
					</Text>
			</TouchableOpacity>
		)
	}
}

function calculateCharacter(character) {

	calculateStats(character.stats);

	calculateHealth(character)

	calculateAC(character)

	//features
}

function calculateStats(stats) {

	var stat;

	for (var key in stats) {
		stat = stats[key];
		
		stat.modifier = Math.floor((stat.value - 10)/2)
	}
}

function calculateHealth(character) {

	var maxHealth = 0;
	var characterClass = character.class;
	var constitutionMod = character.stats.constitution.modifier;
	var hitDice = character.hitDice

	switch (characterClass) {
		case "Barbarian":
			maxHealth += 12;
			hitDice.value = 12;
			break;
		case "Bard":
			maxHealth += 8;
			hitDice.value = 8;
			break;
		case "Cleric":
			maxHealth += 8;
			hitDice.value = 8;
			break;
		case "Druid":
			maxHealth += 8;
			hitDice.value = 8;
			break;
		case "Fighter":
			maxHealth += 10;
			hitDice.value = 10;
			break;
		case "Monk":
			maxHealth += 8;
			hitDice.value = 8;
			break;
		case "Paladin":
			maxHealth += 10;
			hitDice.value = 10;
			break;
		case "Ranger":
			maxHealth += 10;
			hitDice.value = 10;
			break;
		case "Rogue":
			maxHealth += 8;
			hitDice.value = 8;
			break;
		case "Sorcerer":
			maxHealth += 6;
			hitDice.value = 6;
			break;
		case "Warlock":
			maxHealth += 8;
			hitDice.value = 8;
			break;
		case "Wizard":
			maxHealth += 6;
			hitDice.value = 6;
			break;
		default:
			console.log("**No cases fit**")
			break;
	}

	maxHealth += constitutionMod;

	character.hp.max = maxHealth;
	character.hp.current = maxHealth;
}

function calculateAC (character) {

	var armours = character.armour;
	var dexMod = character.stats.dexterity.modifier;

	var maxArmour = {value: 0};
	var hasShield = false;

	//Find strongest armour, and check for shield
	for (var i=0; i<armours.length; i++) {
		if (armours[i].value > maxArmour.value && armours[i].name != "Shield") {
			maxArmour = armours[i];
		}
		if (armours[i].name == "Shield") {
			hasShield = true;
		}
	}

	console.log(maxArmour);


	//Add dex modifier to armour
	if (maxArmour.name == "Padded" || maxArmour.name == "Leather") {
		character.ac = 11 + dexMod;
	} else if (maxArmour.name == "Studded Leather") {
		character.ac = 12 + dexMod;
	} else if (maxArmour.name == "Hide") {
		if (dexMod > 2) {
			character.ac = 12+2;
		} else {
			character.ac = 12+dexMod;
		}
	} else if (maxArmour.name == "Chain Shirt") {
		if (dexMod > 2) {
			character.ac = 13+2;
		} else {
			character.ac = 13+dexMod;
		}
	} else if (maxArmour.name == "Scale Mail" || maxArmour.name == "Breastplate") {
		if (dexMod > 2) {
			character.ac = 14+2;
		} else {
			character.ac = 14+dexMod;
		}
	} else if (maxArmour.name == "Half Plate") {
		if (dexMod > 2) {
			character.ac = 15+2;
		} else {
			character.ac = 15+dexMod;
		}
	} else if (maxArmour.name == "Ring Mail") {
		character.ac = 14;
	} else if (maxArmour.name == "Chain Mail") {
		character.ac = 16;
	} else if (maxArmour.name == "Splint") {
		character.ac = 17
	} else if (maxArmour.name == "Plate") {
		character.ac = 18
	} else {
		console.log("Couldn't find any armour. Max armour is");
		console.log(maxArmour);
		character.ac = 10 + dexMod;
	}

	if (hasShield) {
		character.ac += 2;
	}

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