import React, {Component} from 'react';
import {
    Button,
    View
} from 'react-native';
import {stringifyAnswer} from '../util'

type Props = {};

export default class App extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            colour: null
        }
    }

    clicked = () => {
        this.setState({ colour: 'blue' })
        setTimeout(() => {
            if (this.props.isCorrect) this.setState({ colour: 'green' })
            else this.setState({ colour: 'red' })
        }, 300)
        setTimeout(() => {
            this.setState({ colour: null }, this.props.checkAnswer())
        }
        , 1000)
    }

    render() {
        return (
            <View style={{
                borderRadius: 15,
                borderWidth: 2,
                borderColor: 'grey',
                padding: 10,
                backgroundColor: this.state.colour || '#DDD',
                width: '90%',
            }}><Button title={stringifyAnswer(this.props.answer)} onPress={this.clicked}/></View>
        );
    }
}
