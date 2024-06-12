import { StyleSheet } from "react-native"
import colours from "./colours"

const styles = StyleSheet.create({
container:{
    margin:0,
    padding:0,
    flex: 1,
    backgroundColor: '#b6ccd8', 
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
    },
    button: {
        backgroundColor: "#00668c",
        borderRadius: 20,
        padding: 15,
        height: 50,
        margin: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
      },
      buttonContent: {
        alignItems: "center",
        justifyContent: "center",
      },
      image: {
        width: 40,
        height: 40,
      },
      text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "white",
      },

})
export default styles