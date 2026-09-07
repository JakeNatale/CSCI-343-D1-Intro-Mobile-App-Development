import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Button, Pressable, Modal, TextInput } from 'react-native';

export default function App() {
  // Set responses from magic 8 ball
  const responses = [
    "It is certain",
    "It is decidedly so",
    "Without a doubt",
    "Yes definitely",
    "You may rely on it",
    "As I see it, yes",
    "Most likely",
    "Outlook good",
    "Yes",
    "Signs point to yes",
    "Reply hazy, try again",
    "Ask again later",
    "Better not tell you now",
    "Cannot predict now",
    "Concentrate and ask again",
    "Don't count on it",
    "My reply is no",
    "My sources say no",
    "Outlook not so good",
    "Very doubtful"
  ];
  // Create state management variables
  const [userQuestion, setUserQuestion] = useState("");
  const [ballResult, setBallResult] = useState("");
  const [modalIsVisible, setModalIsVisible] = useState(false);

  function rollBall() {
    const randomIndex = Math.floor(Math.random() * responses.length);

    setBallResult(responses[randomIndex]);
    setModalIsVisible(true);
  }

  return (
    <>
      <StatusBar style="auto" />
        <SafeAreaView style={styles.root}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>8 Ball Roller</Text>
          </View>
          
          <View style = {styles.inputContainer}>
            <TextInput
            style={styles.textInput}
            placeholder='Ask the 8 ball a question...'
            value={userQuestion}
            onChangeText={setUserQuestion}
            />
          </View>

          <View style={styles.rollButtonContainer}>
            <Pressable
            android_ripple={{color: "#210644"}}
            onPress={() => {
              console.log("Pressed");
              rollBall();
            }}
            style = {({pressed}) => {
              return pressed && styles.pressedButton;
            }}
            >
              <View style={styles.rollButton}>
                <Text style={styles.rollButtonText}>Ask 8 Ball</Text>
              </View>
            </Pressable>
          </View>
        
          <View style={styles.ballContainer}>
            <View style={styles.ball}>
              <Text style={styles.ballNumber}>8</Text>
            </View>
          </View>

          <Modal visible={modalIsVisible}>
            <SafeAreaView style = {styles.modalRoot}>
              <Text style={styles.questionLabel}>Your Question was:</Text>
              <Text style={styles.textInput}>
              {userQuestion}
              </Text>
              <Text style={styles.questionLabel}>The 8 Ball Says:</Text>
              <Text style={styles.textInput}>
                {ballResult}
              </Text>
            <View style={styles.rollButtonContainer}>
            <Pressable
            android_ripple={{color: "#210644"}}
            onPress={() => {
              console.log("Pressed");
              setModalIsVisible(false);
            }}
            style = {({pressed}) => {
              return pressed && styles.pressedButton;
            }}
            >
              <View style={styles.rollButton}>
                <Text style={styles.rollButtonText}>Close</Text>
              </View>
            </Pressable>
          </View>
            </SafeAreaView>
          </Modal>
        </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#e21ce2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  titleContainer: {
    flex: 3,
    backgroundColor: "black",
    width: "90%",
    justifyContent: "center",
    margin: 50,
    borderColor: "white",
    borderWidth: 3,
    borderRadius: 20
  },
  title: {
    fontSize: 40,
    color: "white",
    textAlign: "center"
  },
  rollButtonContainer: {
    flex: 1,
    justifyContent: "center"
  },
  rollButton: {
    backgroundColor: "white",
    borderRadius: 50,
    padding: 10
  },
  rollButtonText: {
    color: "black",
    padding: 8,
    fontSize: 25,
    textAlign: "center"
  },
  pressedButton: {
    opacity: 0.5
  },
  ballContainer: {
    flex: 3,
    flexDirection: "row",
    alignContent: "space-between",
    justifyContent: "center",
    alignItems: "center",
    width: "80%"
  },
  ball: {
    borderWidth: 6,
    margin: 20,
    width: "40%",
    paddingVertical: 30,
    backgroundColor: "white"
  },
  ballNumber: {
    fontSize: 40,
    fontWeight: "bold",
    textAlign: "center"
  },
  resultContainer: {
    flex: 1
  },
  resultText: {
    fontSize: 25,
    color: "white",
    textAlign: "center"
  },
  modalRoot: {
    flex: 1,
    backgroundColor: "#b138b1",
    alignItems: "center"
  },
  questionLabel: {
    fontSize: 25,
    color: "white",
    textAlign: "center",
    marginTop: 20
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    backgroundColor: "#e4d0ff",
    color: "black",
    borderRadius: 6,
    width: "90%",
    padding: 12,
    marginBottom: 30
  },
  inputContainer: {
    flex: 1,
    width: "90%",
    margin: 20,
    alignItems: "center"
  }
});
