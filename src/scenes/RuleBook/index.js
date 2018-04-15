import React, {Component} from 'react';
import Text from 'react-native'
import Accordion from 'react-native-collapsible/Accordion'


export default class RuleBook extends Component {

    render() {

        return (
            <Accordion
                sections={['Section 1', 'Section 2']}
                renderHeader={()=><Text>Head</Text>}
                renderContent={()=><Text>Cont</Text>}
            />
        )
    }
}
