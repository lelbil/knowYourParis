/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Col, Row, Grid} from "react-native-easy-grid";
import Answer from './src/answerButton'
import { generatePossibleAnswers, stringifyAnswer } from './util'

type Props = {};
//TODO: validate props for answer buttons

export default class App extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            currentQuestion: 0,
            data: [
                {
                    question: 'Place d\'italie',
                    possibleAnswers: [13]
                },
                {
                    question: 'Boulevard Haussmann',
                    answer: [8, 9]
                },
                {
                    question: 'Rue petit',
                    answer: [19]
                },
            ]
        }
    }
    render() {
        const { currentQuestion, data } = this.state
        const answers = generatePossibleAnswers(data[currentQuestion].possibleAnswers).map(answer => <Answer answer={stringifyAnswer(answer)}/>)

        return (
            <View style={styles.container}>
                <View style={styles.questionContainer}><Text style={styles.questionText}>{data[currentQuestion].question}</Text></View>
                <View style={styles.answersContainer}>
                    <Grid>
                        <Col style={styles.col}>
                            <Row style={styles.row}>
                                {answers[0]}
                            </Row>
                            <Row style={styles.row}>
                                {answers[1]}
                            </Row>
                        </Col>
                        <Col style={styles.col}>
                            <Row style={styles.row}>
                                {answers[2]}
                            </Row>
                            <Row style={styles.row}>
                                {answers[3]}
                            </Row>
                        </Col>
                    </Grid>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
    },
    questionContainer: {
        width: '70%',
        backgroundColor: 'orange',
        borderRadius: 15,
        borderWidth: 2,
        borderColor: 'grey',
        marginBottom: 120,
    },
    questionText: {
        textAlign: 'center',
        margin: '10%',
    },
    answersContainer: {
        height: '30%',
        width: '90%',
        //backgroundColor: 'gold',
    },
    answerButton: {},
    col: {
        alignItems: 'center',
    },
    row: {
        alignItems: 'center',
    }
});
