import * as React from 'react';
import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { TabViewAnimated, TabBar, SceneMap } from 'react-native-tab-view';
import Stats from './pages/Stats';
import Spells from './pages/Spells';
import Combat from './pages/Combat';
import Character from '../../helpers/Character'

const initialLayout = {
    height: 0,
    width: Dimensions.get('window').width,
};

export default class CharacterSheet extends React.Component {

    constructor(props) {
        super(props);

        this.state={
            index: 0,
            routes: [
                { key: 'stats', title: 'Stats' },
                { key: 'spells', title: 'Spells' },
                { key: 'combat', title: 'Combat' },

            ],
        };

        this.character = new Character();
    }

    _handleIndexChange = index => this.setState({ index });

    _renderHeader = props => <TabBar {...props} style={styles.header} />;

    _renderScene = SceneMap({
        stats: () => <Stats character={this.character}/>,
        spells: () => <Spells character={this.character}/>,
        combat: () => <Combat character={this.character}/>,
    });

    render() {

        return (
            <TabViewAnimated
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
                initialLayout={initialLayout}
            />
        );
    }
}

const styles = StyleSheet.create({
    scene: {
        flex: 1,
    },
});