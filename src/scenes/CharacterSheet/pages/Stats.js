import React, {Component} from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, ImageBackground, SectionList, TextInput } from 'react-native';

export default class Stats extends Component {

    render() {

        //TODO make images less hacky
        const statBox = require('../../../images/statBox.png')
        console.log(this.props)
        const character = this.props.character;
        const stats = character.stats;

        return (
            <View style={styles.container}>

                <View style={{flex: .15}}>
                    <Text style={[styles.textContainer, styles.title, {marginVertical: '5%', paddingHorizontal: 1}]}>
                        {character.name}, {character.class}, Level {character.level}
                    </Text>

                </View>

                <View style={{flex: 0.65, flexDirection: 'row', width: '100%'}}>

                    <View style={{flex: 1, marginLeft: 10}}>

                        {/*<Text style={styles.centerText}>*/}
                        {/*{character.exp} Image*/}
                        {/*</Text>*/}

                        <Text style={styles.skill}>
                            {character.exp} EXP
                        </Text>

                        <ImageContainer image={require('../../../images/HP.png')}>
                            <Text style={styles.hpTopText}>{character.hp.current}</Text>
                            <Text style={styles.hpBottomText}>{character.hp.max}</Text>
                        </ImageContainer>

                        <ImageContainer image={require('../../../images/AC.png')}>
                            <Text style={styles.ACText}>{character.ac}</Text>
                        </ImageContainer>

                        <ImageContainer image={require('../../../images/initiative.png')}>
                            <Text style={styles.ACText}>{stats.dexterity.value}</Text>
                        </ImageContainer>

                        <Image
                            source={require('../../../images/dice.png')}
                            style={styles.image}
                        />

                    </View>

                    <View style={{flex: 1}}>

                        <ImageContainer image={statBox}>
                            <Text style={styles.statTopText}>STR</Text>
                            <Text style={styles.statBottomText}>{stats.strength.value}</Text>
                        </ImageContainer>

                        <ImageContainer image={statBox}>
                            <Text style={styles.statTopText}>DEX</Text>
                            <Text style={styles.statBottomText}>{stats.dexterity.value}</Text>
                        </ImageContainer>

                        <ImageContainer image={statBox}>
                            <Text style={styles.statTopText}>CON</Text>
                            <Text style={styles.statBottomText}>{stats.constitution.value}</Text>
                        </ImageContainer>

                        <ImageContainer image={statBox}>
                            <Text style={styles.statTopText}>INT</Text>
                            <Text style={styles.statBottomText}>{stats.intelligence.value}</Text>
                        </ImageContainer>

                        <ImageContainer image={statBox}>
                            <Text style={styles.statTopText}>WIS</Text>
                            <Text style={styles.statBottomText}>{stats.wisdom.value}</Text>
                        </ImageContainer>

                        <ImageContainer image={statBox}>
                            <Text style={styles.statTopText}>CHA</Text>
                            <Text style={styles.statBottomText}>{stats.charisma.value}</Text>
                        </ImageContainer>

                    </View>

                    <View style={{flex: 1.2, marginRight: 10}}>

                        <View>
                            <Text style={[styles.textContainer, {marginVertical: '5%', paddingHorizontal: 1}]}>
                                <Text style={styles.savingThrows}>Saving Throws{"\n"}</Text>
                                <Text>Strength{"\n"}</Text>
                                <Text>Dexterity{"\n"}</Text>
                                <Text>Constitution{"\n"}</Text>
                                <Text>Intelligence{"\n"}</Text>
                                <Text>Wisdom{"\n"}</Text>
                                <Text>Charisma</Text>

                            </Text>
                        </View>

                        <View>
                            {/*style={{display: 'flex', justifyContent: 'space-between'}}>*/}

                            <Text style={styles.skill}>{"Acrobatics(Dex)+" + stats.dexterity.value}</Text>
                            <Text style={styles.skill}>{"Animal Handling(Wis) +" + stats.wisdom.value}</Text>
                            <Text style={styles.skill}>{"Arcana (Int) +" + stats.intelligence.value}</Text>
                            <Text style={styles.skill}>{"Athletics(Str) +" + stats.strength.value}</Text>
                            <Text style={styles.skill}>{"Deception(Cha)+" + stats.charisma.value}</Text>
                            <Text style={styles.skill}>{"History(Int) " + stats.intelligence.value}</Text>
                            <Text style={styles.skill}>{"Insight(Wis) " + stats.wisdom.value}</Text>
                            <Text style={styles.skill}>{"Intimidation" + stats.charisma.value}</Text>
                            <Text style={styles.skill}>{"Investigation " + stats.intelligence.value}</Text>
                            <Text style={styles.skill}>{"Medicine (Wis)" + stats.wisdom.value}</Text>
                            <Text style={styles.skill}>{"Nature(Int) " + stats.intelligence.value}</Text>
                            <Text style={styles.skill}>{"Perception " + stats.dexterity.value}</Text>
                            <Text style={styles.skill}>{"Performance " + stats.dexterity.value}</Text>
                            <Text style={styles.skill}>{"Persuasion " + stats.dexterity.value}</Text>
                            <Text style={styles.skill}>{"Religion " + stats.dexterity.value}</Text>
                            <Text style={styles.skill}>{"Sleight of Hand " + stats.dexterity.value}</Text>
                            <Text style={styles.skill}>{"Stealth " + stats.dexterity.value}</Text>
                            <Text style={styles.skill}>{"Survival " + stats.dexterity.value}</Text>


                        </View>

                    </View>

                </View>


                <Image
                    source={require('../../../images/book.png')}
                    style={styles.bookImage}
                    onPress={()=>console.log('called')}//;this.props.navigation.navigate('RuleBook')}}
                    onClick={()=>console.log('click')}
                />
            </View>
        );
    }
}

class ImageContainer extends Component {

    render() {
        return (
            <ImageBackground
                source={this.props.image}
                style={styles.image}
                imageStyle={{resizeMode: 'contain'}}
            >
                {this.props.children}
            </ImageBackground>

        )
    }
}

const fontSize = 25;

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
        //resizeMode: 'stretch',
    },
    bookImage: {
        flex: 0.2,
        top: '6%',
        resizeMode: 'contain'
    },

    hpTopText: {
        backgroundColor: 'transparent',
        top: '15%',
        left: '30%',
        fontWeight: 'bold',
        fontSize: fontSize
    },
    hpBottomText: {
        backgroundColor: 'transparent',
        //top: '0%',
        left: '60%',
        fontWeight: 'bold',
        fontSize: fontSize
    },
    ACText: {
        backgroundColor: 'transparent',
        textAlign: 'center',
        top: '25%',
        fontWeight: 'bold',
        fontSize: fontSize
    },
    centerText: {
        textAlign: 'center'
    },
    savingThrows: {
        fontSize: 16,
        fontWeight: 'bold',
    },

    statTopText:  {
        textAlign: 'center',
        backgroundColor: 'transparent',
    },
    statBottomText:  {
        backgroundColor: 'transparent',
        textAlign: 'center',
        top: '45%'
    },

    skill: {
        backgroundColor: '#DCDCDC',
        borderWidth: 1,
        textAlign: 'center',
        marginTop: 2,
        fontWeight: 'bold',
        fontSize: 12,
    },

    flexRow: {
        flexDirection: 'row',
        flex: 0.75
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
});