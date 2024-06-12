import React, { useState, useEffect } from "react";
import {
  Button,
  Text,
  View,
  TextInput,
  ScrollView,
  StyleSheet,
} from "react-native";
import CustomButton from "../../components/Rectangle/Rectangle";

class TrieNode {
  constructor() {
    this.children = {};
    this.translation = "";
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insertWord(word, translation) {
    let current = this.root;
    for (let c of word) {
      if (!current.children[c]) {
        current.children[c] = new TrieNode();
      }
      current = current.children[c];
    }
    current.translation = translation;
  }

  findTranslation(word) {
    let current = this.root;
    for (let c of word) {
      if (!current.children[c]) {
        return "";
      }
      current = current.children[c];
    }
    return current.translation;
  }

  findMatchingWords(prefix) {
    let current = this.root;
    for (let c of prefix) {
      if (!current.children[c]) {
        return [];
      }
      current = current.children[c];
    }
    let matches = [];
    this.traverseTrie(current, prefix, matches);
    return matches;
  }

  traverseTrie(node, prefix, matches) {
    if (node.translation) {
      matches.push(`${prefix} - ${node.translation}`);
    }
    for (let c in node.children) {
      this.traverseTrie(node.children[c], prefix + c, matches);
    }
  }

  reverseTrie() {
    const reversedTrie = new Trie();
    this._reverseTrieHelper(this.root, "", reversedTrie);
    return reversedTrie;
  }

  _reverseTrieHelper(node, currentWord, reversedTrie) {
    if (node.translation) {
      reversedTrie.insertWord(node.translation, currentWord);
    }
    for (let c in node.children) {
      this._reverseTrieHelper(node.children[c], currentWord + c, reversedTrie);
    }
  }
}

export function Description({ navigation }) {
  const [trie, setTrie] = useState(new Trie());
  const [prefix, setPrefix] = useState("");
  const [matches, setMatches] = useState([]);
  const [testWords, setTestWords] = useState([
    "flutter",
    "gibb",
    "grin",
    "hammer",
    "huddle",
  ]);
  const [translations, setTranslations] = useState({});

  const words = [
    { word: "amuse", translation: "bawić" },
    { word: "astounding", translation: "zdumiewający" },
    { word: "bear it", translation: "znieść" },
    { word: "bobble hat", translation: "czapka z pomponem" },
    { word: "brass", translation: "mosiądz" },
    { word: "broom shed", translation: "szopa na miotły" },
    { word: "cloak", translation: "peleryna, płaszcz" },
    { word: "clutch", translation: "sprzęgło" },
    { word: "dare", translation: "odważyć się" },
    { word: "dull", translation: "nudny" },
    { word: "flutter", translation: "trzepotanie" },
    { word: "gibber", translation: "bełkot" },
    { word: "grin", translation: "szeroki uśmiech" },
    { word: "hammer", translation: "młotek" },
    { word: "huddle", translation: "nagromadzenie" },
    { word: "hum", translation: "nucić" },
    { word: "knobbly knees", translation: "szorstkie kolana" },
    { word: "merrily", translation: "wesoło" },
    { word: "nasty", translation: "paskudny" },
    { word: "nod glumly", translation: "ponuro skinąć głową" },
    { word: "oddly", translation: "dziwnie" },
    { word: "peculiar", translation: "osobliwy, szczególny" },
    { word: "pinched", translation: "ściągnięty, wynędzniały" },
    { word: "prodded", translation: "popychany" },
    { word: "pursed hips", translation: "zaciśnięte biodra" },
    { word: "quiver", translation: "drżeć" },
    { word: "reptile house", translation: "terrarium" },
    { word: "ruffled", translation: "potargane" },
    { word: "scrammy", translation: "bałagan" },
    { word: "shudder", translation: "dreszcz" },
    { word: "slug", translation: "ślimak" },
    { word: "snigger", translation: "chichotać" },
    { word: "stern look", translation: "surowe spojrzenie" },
    { word: "stiffly", translation: "twardo" },
    { word: "tantrum", translation: "furia" },
    { word: "tawny", translation: "opalony" },
    { word: "tin", translation: "cyna" },
    { word: "tuck", translation: "podwinąć" },
    { word: "whomping willow", translation: "wierzba bijąca" },
    { word: "wrestle", translation: "zmagać się" },
  ];

  useEffect(() => {
    const initializeTrie = () => {
      const trie = new Trie();
      for (const { word, translation } of words) {
        trie.insertWord(word, translation);
      }
      setTrie(trie);
    };
    initializeTrie();
  }, []);

  useEffect(() => {
    handleFindMatchingWords();
  }, [prefix, trie]);

  const handleFindTranslation = () => {
    const newTranslations = {};
    for (let word of testWords) {
      newTranslations[word] =
        trie.findTranslation(word) || "Nie znaleziono tłumaczenia";
    }
    setTranslations(newTranslations);
  };

  const handleFindMatchingWords = () => {
    const matches = trie.findMatchingWords(prefix);
    setMatches(matches);
  };

  const handleReverseTrie = () => {
    const reversed = trie.reverseTrie();
    setTrie(reversed);
  };

  return (
    <View>
      <Text style={styles.title}>Słownik</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
        }}
      >
        <CustomButton text="Testuj" onPress={handleFindTranslation} />
        <CustomButton text="Odwróć drzewo" onPress={handleReverseTrie} />
      </View>
      <ScrollView style={styles.scrollView}>
        {Object.keys(translations).map((word) => (
          <Text key={word}>
            Tłumaczenie słowa '{word}': {translations[word]}
          </Text>
        ))}
      </ScrollView>

      <TextInput
        style={styles.input}
        placeholder="Podaj część słowa"
        value={prefix}
        onChangeText={setPrefix}
      />
      {/* <Button title="Znajdź Pasujące Słowa" onPress={handleFindMatchingWords} /> */}
      <ScrollView style={styles.scrollView}>
        {matches.map((match, index) => (
          <Text key={index} style={styles.text}>
            {match}
          </Text>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: "center",
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 1,
    margin: 10,
    paddingHorizontal: 10,
  },
  scrollView: {
    marginVertical: 20,
    marginHorizontal: 10,
  },
  text: {
    fontSize: 20,
  },
});

export default Description;
