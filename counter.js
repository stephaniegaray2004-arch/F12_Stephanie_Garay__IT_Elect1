import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>Counter: {count}</Text>
      <View style={styles.btnGroup}>
        <Button title="Increment" onPress={() => setCount(count + 1)} />
        <Button title="Decrement" onPress={() => setCount(count - 1)} />
        <Button title="Reset" onPress={() => setCount(0)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 20,
    alignItems: "center",
  },
  counterText: {
    fontSize: 20,
    marginBottom: 10,
  },
  btnGroup: {
    marginVertical: 5,
  },
});