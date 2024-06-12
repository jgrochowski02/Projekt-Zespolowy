import { StyleSheet } from "react-native";

const styles2 = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  resultTitle: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
    marginTop: 20,
    marginBottom: 10,
    textAlign: "center",
  },
  resultText: {
    fontSize: 18,
    color: "#666",
    marginBottom: 5,
  },
  resultText1: {
    fontSize: 18,
    color: "#666",
    marginBottom: 5,
    color: "green",
  },
  resultText2: {
    fontSize: 18,
    color: "#666",
    marginBottom: 5,
    color: "red",
  },
  button: {
    backgroundColor: "#00668c",
    borderRadius: 20,
    padding: 15,
    height: 60,
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
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
export default styles2;
