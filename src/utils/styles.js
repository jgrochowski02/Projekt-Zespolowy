import { StyleSheet } from "react-native"
import colours from "./colours"

const styles = StyleSheet.create({
container:{
    flex: 1,
    backgroundColor: '#BCE1FF', 
  },
    containerDefaultBackground: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    textButton: {
        colour: colours.text,
        fontSize: 20,
    },
    primaryButton: {
        backgroundColour: colours.green,
        color: "#000000",
        marginVertical: 10,
        height: 60,
        alignItems: "center",
        justifyContent: "center",
        padding: 15,
        borderRadius: 5,
    }
})
export default styles