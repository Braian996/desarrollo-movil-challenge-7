import React, { Component } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

export default class Screen1 extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Text> Screen 1 </Text>
                <Button title="Ir a Screen2" onPress={() => this.props.navigation.navigate('SecondScreen')} />
                <Button title="Ir a Screen3" onPress={() => this.props.navigation.navigate('ThirdScreen')} />
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