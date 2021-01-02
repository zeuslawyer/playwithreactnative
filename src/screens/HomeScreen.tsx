import React from "react";
import { Text, StyleSheet, Button, View, TouchableOpacity } from "react-native";


export const HomeScreen: React.FC = (props: any) => {
  const { navigate } = props.navigation
  return (
    <View>
      <Text style={styles.text}>Aloha Matey!✌</Text>
      <Button
        title="TOUCH ME!"
        onPress={() => navigate("Components")}
        color="red"
      />
      <TouchableOpacity
        style={styles.touchableOpacity}
        onPress={() => navigate("Components")}>
        <Text>Touchable Opacity....</Text>
      </TouchableOpacity>
    </View>
  )

};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    marginTop: 20,
    marginBottom: 20,
  },
  touchableOpacity: {
    marginTop: 20,
    backgroundColor: "purple",
    padding: 15,
  }
});

