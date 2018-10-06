import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default class Screen3 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Screen 3 </Text>
                <Button title="Ir a Screen1" onPress={() => this.props.navigation.navigate('Home')} />
                <Button title="Ir a Screen2" onPress={() => this.props.navigation.navigate('SecondScreen')} />
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