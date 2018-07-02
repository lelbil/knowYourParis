import React, {Component} from 'react';
import {
    Button,
    View
} from 'react-native';
import answer from '../module/answered'

type Props = {};

export default class App extends Component<Props> {
    render() {
        return (
            <View style={{
                borderRadius: 15,
                borderWidth: 2,
                borderColor: 'grey',
                padding: 10,
                backgroundColor: '#DDD',
                width: '90%',
            }}><Button title={this.props.answer} onPress={() => {answer(this.props.answer)}}/></View>
        );
    }
}
