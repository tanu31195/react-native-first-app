import React from 'react'
import { Platform, StyleSheet, Text } from 'react-native'

export default function AppText({children}) {
    return (
        <Text style={styles.text}>{children}</Text>
    )
}

const styles = StyleSheet.create({
    text: {
        color: 'tomato',
        fontSize:18,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir',
        textDecorationLine: 'underline line-through',
        textTransform: 'uppercase',
        // ...Platform.select({
        //     ios: {
        //         fontSize: 20,
        //         fontFamily: 'Avenir'
        //     },
        //     android: {
        //         fontSize: 18,
        //         fontFamily: 'Roboto'
        //     }
        // })
    }
})
