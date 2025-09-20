import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function ColorChangerApp() {
  // default background = white
  const [bgColor, setBgColor] = useState("#ffffff");

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      <Text style={styles.title}>Color Changer App</Text>

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
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "700",
    marginBottom: 20,
  },
  btnGroup: {
    gap: 12, // works in new RN, if error replace with {marginVertical: 8}
  },
});