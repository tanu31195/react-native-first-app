import React from 'react'
import { StyleSheet, Text } from 'react-native'

export default function Heading({ children }) {
    return (
        <Text style={styles.heading}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 16,
        paddingVertical: 8,
        borderWidth: 4,
        borderColor: "#20232a",
        borderRadius: 6,
        backgroundColor: "#61dafb",
        color: "#20232a",
        textAlign: "center",
        fontSize: 30,
        fontWeight: "bold"
    }
})
