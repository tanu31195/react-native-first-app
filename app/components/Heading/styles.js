import { Platform, StyleSheet } from 'react-native'

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
        fontWeight: "bold",
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Avenir'
    }
})

export default styles;
