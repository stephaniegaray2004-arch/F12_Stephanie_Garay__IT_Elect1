import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";

export default function App() {
  // --- Comment Section States ---
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  // --- Messenger Section States ---
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  // Add comment
  const addComment = () => {
    if (comment.trim() !== "") {
      setComments([...comments, { id: Date.now().toString(), text: comment }]);
      setComment(""); // clear input
    }
  };

  // Add message + auto reply
  const addMessage = () => {
    if (message.trim() !== "") {
      const myMessage = {
        id: Date.now().toString(),
        text: message,
        sender: "You",
      };
      setMessages((prev) => [...prev, myMessage]);
      setMessage(""); // clear input

      // Auto reply after 1 second
      setTimeout(() => {
        const friendReplies = [
          "That’s interesting!",
          "Really? Tell me more!",
          "Haha, good one 😂",
          "I agree with you.",
          "Nice! 👍",
        ];
        const randomReply =
          friendReplies[Math.floor(Math.random() * friendReplies.length)];

        const friendMessage = {
          id: (Date.now() + 1).toString(),
          text: randomReply,
          sender: "Friend",
        };

        setMessages((prev) => [...prev, friendMessage]);
      }, 1000);
    }
  };

  // Render comment
  const renderComment = ({ item }) => (
    <View style={styles.commentBox}>
      <Text style={styles.commentText}>{item.text}</Text>
    </View>
  );

  // Render message
  const renderMessage = ({ item }) => (
    <View
      style={[
        styles.messageBox,
        item.sender === "You" ? styles.myMessage : styles.friendMessage,
      ]}
    >
      <Text style={styles.sender}>{item.sender}:</Text>
      <Text
        style={[
          styles.messageText,
          item.sender === "You" ? { color: "#fff" } : { color: "#000" },
        ]}
      >
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Comment Section */}
      <Text style={styles.title}>Comment Section</Text>
      <TextInput
        style={styles.input}
        placeholder="Write a comment..."
        value={comment}
        onChangeText={setComment}
      />
      <TouchableOpacity style={styles.button} onPress={addComment}>
        <Text style={styles.buttonText}>Post</Text>
      </TouchableOpacity>
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id}
        renderItem={renderComment}
        style={styles.list}
      />

      {/* Messenger Section */}
      <Text style={[styles.title, { marginTop: 25 }]}>Messenger Section</Text>
      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        renderItem={renderMessage}
        style={[styles.list, { flex: 1 }]}
      />
      <View style={styles.messageInputContainer}>
        <TextInput
          style={[styles.input, { flex: 1, marginBottom: 0 }]}
          placeholder="Type a message..."
          value={message}
          onChangeText={setMessage}
        />
        <TouchableOpacity style={styles.buttonSmall} onPress={addMessage}>
          <Text style={styles.buttonText}>Send</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 12,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  button: {
    backgroundColor: "#007bff",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 15,
  },
  buttonSmall: {
    backgroundColor: "#007bff",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginLeft: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  list: {
    marginTop: 10,
  },
  commentBox: {
    padding: 12,
    backgroundColor: "#fff",
    borderRadius: 8,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  commentText: {
    fontSize: 16,
  },
  // Messenger Styles
  messageBox: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
    maxWidth: "70%",
  },
  myMessage: {
    backgroundColor: "#007bff",
    alignSelf: "flex-end",
  },
  friendMessage: {
    backgroundColor: "#e5e5ea",
    alignSelf: "flex-start",
  },
  messageText: {
    fontSize: 16,
  },
  sender: {
    fontWeight: "bold",
    marginBottom: 3,
  },
  messageInputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
  },
});