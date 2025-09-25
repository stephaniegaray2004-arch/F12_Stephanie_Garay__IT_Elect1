import React from "react";
import { ScrollView, StyleSheet } from "react-native";
import Counter from "./counter";
import ColorChanger from "./colorchanger";

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Counter />
      <ColorChanger />
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
});