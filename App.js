import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ImageBackground } from 'react-native';
import { StackNavigator } from 'react-navigation';

import DiceRoller from './DiceRoller.js';
import Character from './Character.js';
import CharacterSheet from './CharacterSheet.js';
import {CharacterMaker, ClassPicker, RacePicker, AbilityPicker, WeaponPicker} from './CharacterMaker.js';

import './rules.js';

class HomeScreen extends Component {

  constructor(props) {
    super(props);
  }
  render() {
    const { navigate } = this.props.navigation;
    return (

        <ImageBackground
          style={[styles.container, styles.banner]}
          source={require('./background.png')}
        >

          <Banner/>
          <CharacterList {...this.props}/>

          <Button
            onPress = {()=> navigate("Roller")}
            title = "Go to Dice Roller"
          />

        </ImageBackground>
    )
  }
}

class Banner extends Component {
  render() {
    return (
      <View style = {styles.bannerContainer}>
        <Image
          style = {styles.banner}
          source = {require('./title.png')}
        />
      </View>
    )
  }
}

class CharacterList extends Component {

  constructor(props) {
    super(props);

    //Hard coded for now. Will accept stored data
    var char1 = new Character()
    char1.name = "Character 1"
    var char2 = new Character()
    char2.name = "Character 2"

    this.state = {Characters: [char1, char2] };
  }

  addCharacter = () => {

    var Characters = this.state.Characters
    var newCharacter = new Character();

    newCharacter.name = "Character " + (Characters.length + 1)

    this.setState({Characters: Characters.concat([newCharacter])});

    return newCharacter;
  }

  render() {

    var CharList = this.state.Characters.map((char)=> <CharacterButton {...this.props} character={char} key={this.state.Characters.indexOf(char)} />)
    const { navigate } = this.props.navigation;

    return (
      <View style = {styles.characters} >
        {CharList}

        <TouchableOpacity style = {[styles.characterButton, {marginTop: 30}]} onPress = {this.addCharacter}>
          <Text>Add New Blank Character</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style = {[styles.characterButton, {marginTop: 10}]}
          onPress = {
            ()=> navigate("CharacterMaker", {character: this.addCharacter()})
          }>

            <Text>Create New Character</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

class CharacterButton extends Component {

  constructor(props) {
    super(props);
  }
  render () {
    const { navigate } = this.props.navigation;
    
    return (
      <TouchableOpacity
        style = {styles.characterButton}
        onPress = {()=> navigate("CharacterSheet", {character: this.props.character})}
        >
          <Text>{this.props.character.name}</Text>
      </TouchableOpacity>
    )
  }
}

const DndApp = StackNavigator({
  Home: { screen: HomeScreen },
  CharacterSheet: { screen: CharacterSheet},
  CharacterMaker: { screen: CharacterMaker},
  ClassPicker: { screen: ClassPicker},
  RacePicker: { screen: RacePicker},
  AbilityPicker: { screen: AbilityPicker},
  WeaponPicker: { screen: WeaponPicker},
  Roller: { screen: DiceRoller }
});

export default class App extends Component {
  render() {
    return <DndApp />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  banner: {
    flex: 1,
    width: null,
    height: null
  },
  bannerContainer: {
    flex: 1.3,
    width: '90%'
  },
  characters: {
    flex: 2,
    width: '60%',
  },
  characterButton: {
    height: '10%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#A39367',
    borderWidth: 2,
    marginTop: 10,
    marginBottom: 10
  }
});
