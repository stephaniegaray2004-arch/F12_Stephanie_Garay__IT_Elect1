// components/Messenger.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';

const Messenger = () => {
  const [messages, setMessages] = useState([]);
  const [newMsg, setNewMsg] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('messages').orderBy('createdAt', 'asc')
      .onSnapshot((snapshot) => {
        const msgs = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setMessages(msgs);
      });
    return () => unsubscribe();
  }, []);

  const handleSend = () => {
    if (!newMsg.trim()) return;
    db.collection('messages').add({
      text: newMsg,
      sender: "User", // later you can replace with auth user
      createdAt: new Date(),
    });
    setNewMsg('');
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={styles.messageBox}>
            <Text style={styles.sender}>{item.sender}:</Text>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
      <TextInput
        style={styles.input}
        placeholder="Type a message..."
        value={newMsg}
        onChangeText={setNewMsg}
      />
      <Button title="Send" onPress={handleSend} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, margin: 10 },
  input: { borderWidth: 1, padding: 8, marginVertical: 5, borderRadius: 5 },
  messageBox: { flexDirection: 'row', marginBottom: 5 },
  sender: { fontWeight: 'bold', marginRight: 5 },
});

export default Messenger;