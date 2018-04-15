import React, {Component} from 'react';
import { Text, View } from 'react-native';


export default class Spells extends Component {

    render() {

        let character = this.props.character;

        return (
            <View>

                <Text style={{textAlign: 'center'}}>Spells</Text>

                <View style={{flex:0.1}}>
                    <SpellLevels spells={character.spells}/>
                </View>
            </View>
        )
    }
}

class SpellLevels extends Component {

    render() {

        const spells = this.props.spells.map(
            (spellLevel, i) => {
                return <SpellLevel key={i} level={i+1}  value={spellLevel.length}/>
            }
        );

        return (
            <View style={{borderWidth: 3, backgroundColor: '#DCDCDC', height: 40, width: '90%', display: 'flex', flexDirection: 'row', alignSelf: 'center', justifyContent: 'space-around'}}>
                {spells}
            </View>
        )
    }
}

class SpellLevel extends Component {

    render() {
        return (
            <View style={{display: 'flex', flexDirection: 'column'}}>
                <Text style={{fontSize: 14, fontWeight: 'bold'}}>Lvl {this.props.level}</Text>
                <Text style={{textAlign: 'center', fontWeight: 'bold'}}>{this.props.value}</Text>
            </View>
        )
    }
}