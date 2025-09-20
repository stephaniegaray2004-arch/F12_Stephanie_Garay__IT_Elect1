import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { db } from '../firebaseConfig';

const MessengerSection = () => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  useEffect(() => {
    db.collection('messages').onSnapshot((snapshot) => {
      const messages = snapshot.docs.map((doc) => doc.data());
      setMessages(messages);
    });
  }, []);

  const handleSendMessage = () => {
    db.collection('messages').add({ text: newMessage });
    setNewMessage('');
  };

  return (
    <View>
      <TextInput
        placeholder="Type a message..."
        value={newMessage}
        onChangeText={(text) => setNewMessage(text)}
      />
      <Button title="Send" onPress={handleSendMessage} />
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default MessengerSection;
