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

type Props = {};
//TODO: validate props for answer buttons

export default class App extends Component<Props> {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.questionContainer}><Text style={styles.questionText}>Place d'Italie</Text></View>
                <View style={styles.answersContainer}>
                    <Grid>
                        <Col style={styles.col}>
                            <Row style={styles.row}>
                                <Answer answer='5ème arr.'/>
                            </Row>
                            <Row style={styles.row}>
                                <Answer answer='16ème arr.'/>
                            </Row>
                        </Col>
                        <Col style={styles.col}>
                            <Row style={styles.row}>
                                <Answer answer='13ème arr.'/>
                            </Row>
                            <Row style={styles.row}>
                                <Answer answer='1er arr.'/>
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
