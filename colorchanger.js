import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ColorChanger() {
  const [bgColor, setBgColor] = useState("#ffffff");

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Color Changer</Text>
      <View style={styles.btnGroup}>
        <Button title="White (Default)" onPress={() => setBgColor("#ffffff")} />
        <Button title="Light Blue" onPress={() => setBgColor("#add8e6")} />
        <Button title="Light Green" onPress={() => setBgColor("#90ee90")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    marginBottom: 10,
  },
  btnGroup: {
    marginVertical: 5,
  },
});