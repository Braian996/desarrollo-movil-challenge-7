import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default class Screen2 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Screen 2 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})