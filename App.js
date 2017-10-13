import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { StackNavigator } from 'react-navigation';

var DiceRoller = require('./DiceRoller.js');
var Character = require('./Character.js');

class HomeScreen extends Component {

  constructor(props) {
    super(props);
    this.state = {total: 0};
  }
  static navigationOptions = {
    title: 'Welcome',
  };
  render() {
    const { navigate } = this.props.navigation;
    let total = this.state.total;
    return (
      <View>
        <Text>Hello, Homescreen!</Text>
        <Button
          onPress={()=> navigate("Roller")}
          title="Go to Dice Roller"
        />
      </View>
    )
  }
}

const DndApp = StackNavigator({
  Home: { screen: HomeScreen },
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
  }
});