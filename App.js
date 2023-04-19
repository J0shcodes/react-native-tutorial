import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button } from "react-native";
import { useState } from "react";

export default function App() {
  const [name, setName] = useState("Programming");
  const [person, setPerson] = useState({name: "David", age: 19});

  const clickMe = () => {
    setName("Knowledge");
    setPerson({name: "Joshua", age: 22});
  }

  return (
    <View style={styles.container}>
      {/* <Text style={styles.textStyle}>Progarmming knowlwdge</Text>
      <Text style={styles.textStyle}>This is React Native</Text>
      <Button title='Click Me' color="red" onPress={() => alert("Welcome to React Native")}></Button> */}
      <Text>{name}</Text>
      <Text>My name is {person.name} I am {person.age} years old</Text>
      <View style={styles.button}>
        <Button title="Change" onPress={clickMe}></Button>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  textStyle: {
    fontSize: 20,
    color: "blue",
    fontWeight: "bold",
    backgroundColor: "yellow",
    fontStyle: "italic",
  },

  button: {
    margin: 20,
  }
});
