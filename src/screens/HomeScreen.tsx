import React from "react";
import { Text, StyleSheet, Button } from "react-native";

const HomeScreen: React.FC = () => {
  return (
    <>
      <Text style={styles.text}>Aloha Matey!✌</Text>;
      <Button>PRESS ME!</Button>
    </>
  )

};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
  }
});

export default HomeScreen;
