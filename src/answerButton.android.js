import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

type Props = {};

export default class App extends Component<Props> {
    render() {
        return (
            <TouchableOpacity onPress={this.props.checkAnswer}>
                <View style={{
                    borderRadius: 15,
                    borderWidth: 2,
                    backgroundColor: '#DDD',
                    borderColor: 'grey',
                    width: '80%',
                }}>
                    <Text style={{
                        padding: 20,
                        textAlign: 'center',
                    }}>{this.props.answer}</Text>
                </View>
            </TouchableOpacity>
        );
    }
}
