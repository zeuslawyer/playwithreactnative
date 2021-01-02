import React from 'react'
import { Text, StyleSheet } from 'react-native'


export const ComponentsScreen: React.FC = () => <Text style={styles.textStyle}>This is the Components Screen</Text>

const styles = StyleSheet.create({
    textStyle: {
        color: "green",
        fontSize: 35,
        fontStyle: "italic"
    }
})