import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    Image,
    TouchableOpacity,
    ImageBackground,
    AsyncStorage,
    FlatList
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import DiceRoller from './src/components/DiceRoller.js';
import Character from './src/helpers/Character.js';
import CharacterSheet from './src/scenes/CharacterSheet/CharacterSheet.js'
import CharacterStats from './src/scenes/CharacterSheet/CharacterStats.js';
import {
    CharacterMaker,
    ClassPicker,
    RacePicker,
    AbilityPicker,
    SkillPicker,
    WeaponPicker,
    ArmourPicker
} from './src/scenes/CharacterMaker.js';
import './src/helpers/rules.js';
import title from './src/images/title.png'


const CHARACTER_KEY = "Characters";

class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        const {navigate} = this.props.navigation;

        return (

            <ImageBackground
                style={[styles.container, styles.banner]}
                source={require('./src/images/background.png')}
            >

                <View style={styles.bannerContainer}>
                    <Image
                        style={styles.banner}
                        source={title}
                    />
                </View>

                <CharacterList {...this.props}/>

                <Image
                    source={require('./src/images/book.png')}
                    style={{flex: 0.8, top: '6%', justifyContent: 'flex-end', resizeMode: 'contain'}}
                />

            </ImageBackground>
        )
    }
}


class CharacterList extends Component {

    constructor(props) {
        super(props);

        this.state = {Characters: []};
    }

    addCharacter = () => {

        var newCharacter = new Character();
        var characters = this.state.Characters;

        newCharacter.name = "Character " + characters.length;

        characters = characters.concat([newCharacter]);

        AsyncStorage.setItem(CHARACTER_KEY, JSON.stringify(characters));

        this.setState({Characters: characters});
    }

    deleteCharacters = () => {

        var characters = [];

        AsyncStorage.setItem(CHARACTER_KEY, JSON.stringify(characters));

        this.setState({Characters: characters});
    }

    componentDidMount() {
        AsyncStorage.getItem(CHARACTER_KEY)
            .then((response) => JSON.parse(response))
            .then((characters) => {
                this.setState({
                    Characters: characters
                });
            })
    }

    render() {

        const {navigate} = this.props.navigation;

        return (
            <View style={styles.characters}>

                <FlatList
                    data={this.state.Characters}
                    renderItem={({item}) =>
                        <TouchableOpacity
                            style={[styles.characterButton]}
                            onPress={() => navigate("CharacterSheet", {character: item})}>
                            <Text>{item.name}</Text>
                        </TouchableOpacity>}
                    keyExtractor={(item, index) => index}
                />

                <TouchableOpacity
                    style={[styles.characterButton, {marginTop: 30}]}
                    onPress={this.addCharacter}>
                    <Text>Add New Blank Character</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={[styles.characterButton, {marginTop: 10}]}
                    onPress={() => navigate("CharacterMaker", {character: new Character()})}>
                    <Text>Create New Character</Text>
                </TouchableOpacity>

                <TouchableOpacity style={[styles.characterButton, {marginTop: 10}]} onPress={this.deleteCharacters}>
                    <Text>Clear all characters</Text>
                </TouchableOpacity>

            </View>
        )
    }
}

const DndApp = StackNavigator({
    Home: {screen: HomeScreen},
    CharacterSheet: {screen: CharacterSheet},
    CharacterStats: {screen: CharacterStats},
    CharacterMaker: {screen: CharacterMaker},
    ClassPicker: {screen: ClassPicker},
    RacePicker: {screen: RacePicker},
    AbilityPicker: {screen: AbilityPicker},
    SkillPicker: {screen: SkillPicker},
    WeaponPicker: {screen: WeaponPicker},
    ArmourPicker: {screen: ArmourPicker},
    Roller: {screen: DiceRoller}
});

export default class App extends Component {
    render() {
        return <DndApp/>;
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
    },
    banner: {
        flex: 1,
        width: null,
        height: null,
    },
    bannerContainer: {
        flex: 1.3,
        width: '90%',
    },
    characters: {
        flex: 2,
        width: '60%',
    },
    characterButton: {
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#A39367',
        borderWidth: 2,
        marginTop: 10,
        marginBottom: 10,
    }
});
