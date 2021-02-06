import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function AppText({ children }) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'blue',
        fontSize: 18,
        fontFamily: 'Avenir',
        textDecorationLine: 'underline line-through',
        textTransform: 'uppercase',
    }
})
