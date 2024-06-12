import { StyleSheet, Dimensions } from "react-native";

export const Gray300 = "#E0E0E0";
export const Gray100 = "#F5F5F5";
export const Gray50 = "#FAFAFA";
export const White = "#FFFFFF";
export const Red = "#CE1126";
export const Green = "#007A3D";

export const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: Gray300,
  },
  viewPort: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: Gray50,
  },
  header: {
    width,
    flexDirection: "row",
    backgroundColor: Gray100,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    marginBottom: 10,
  },
  left: {
    marginLeft: 5,
    marginTop: 5,
    width: 50,
    textAlign: "center",
  },
  middle: {
    width: width - 110,
    marginTop: 15,
    fontSize: 23,
    textAlign: "center",
  },
  right: {
    marginTop: 5,
    width: 50,
    textAlign: "center",
  },
  flatCard: {
    backgroundColor: White,
    justifyContent: "center",
    alignItems: "center",
    shadowOpacity: 0.3,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    width: width - 20,
    height: 100,
    marginBottom: 10,
    marginLeft: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 25,
    textAlign: "center",
  },

  /*
  DeckMain
  */

  search: {
    width: width - 115,
    marginLeft: 5,
    marginTop: 5,
    fontSize: 20,
  },
  list: {
    width,
  },
  deckTitle: {
    fontSize: 30,
    textAlign: "center",
  },
  deckBody: {
    marginTop: 5,
    fontSize: 20,
    textAlign: "center",
  },

  /*
  DeckEdit
  */

  deckName: {
    width: 200,
    height: 50,
    padding: 5,
    borderWidth: 1,
    borderColor: "gray",
    marginTop: 200,
  },

  /*
  DeckDetail
  */

  cardTitle: {
    fontSize: 20,
    textAlign: "center",
    width: width - 40,
  },
  studyButton: {
    backgroundColor: Green,
    width: 250,
    padding: 10,
    borderRadius: 5,
    height: 50,
    marginBottom: 10,
  },
  footer: {
    width,
    flexDirection: "row",
    backgroundColor: Gray100,
    shadowOpacity: 0.3,
    shadowOffset: {
      height: -3,
      width: 0,
    },
  },

  /*
  CardEdit
  */

  question: {
    width: width - 20,
    height: 50,
    padding: 5,
    borderBottomWidth: 1,
    fontSize: 20,
  },
  answer: {
    width: width - 20,
    height: 300,
    padding: 5,
    marginTop: 10,
    fontSize: 20,
  },

  /*
  CardQuiz
  */

  progress: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  cardContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: width - 40,
    height: height / 2,
  },
  flipCard: {
    backgroundColor: White,
    alignItems: "center",
    justifyContent: "center",
    shadowOpacity: 0.5,
    shadowOffset: {
      height: 5,
      width: 5,
    },
    width: 280,  // reduced width for better aesthetics
    height: 160, // reduced height for better aesthetics
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10, // rounded corners
    borderWidth: 0,
  },
  flipSide: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    padding: 10, // padding for better spacing
  },
  face: {
    fontSize: 30, // adjusted font size
    color: Red,
    textAlign: "center",
  },
  back: {
    fontSize: 30, // adjusted font size
    color: Green,
    textAlign: "center",
  },

  /*
  Result
  */

  resultCircle: {
    marginTop: 100,
    marginBottom: 50,
  },
  resultButton: {
    backgroundColor: Green,
    width: 220,
    padding: 10,
    borderRadius: 5,
    height: 50,
    marginBottom: 10,
  },

  resultTitle: {
    fontSize: 30,
    fontWeight: "bold",
    marginTop: 20,
    marginBottom: 20,
    textAlign: "center",
  },
  resultText: {
    fontSize: 20,
    textAlign: "center",
    marginTop: 5,
  },
  resultSubtitle: {
    fontSize: 25,
    fontWeight: "bold",
    marginTop: 10,
    textAlign: "center",
  },

 
});

