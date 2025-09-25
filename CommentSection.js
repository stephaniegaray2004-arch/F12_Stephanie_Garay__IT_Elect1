// components/CommentSection.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet } from 'react-native';
import { db } from '../firebaseConfig';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    const unsubscribe = db.collection('comments').orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const commentsData = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setComments(commentsData);
      });
    return () => unsubscribe();
  }, []);

  const handleAddComment = () => {
    if (!newComment.trim()) return;
    db.collection('comments').add({
      text: newComment,
      createdAt: new Date(),
    });
    setNewComment('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Add a comment..."
        value={newComment}
        onChangeText={setNewComment}
      />
      <Button title="Post" onPress={handleAddComment} />
      <FlatList
        data={comments}
        renderItem={({ item }) => (
          <View style={styles.commentBox}>
            <Text>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { margin: 10 },
  input: { borderWidth: 1, padding: 8, marginBottom: 5, borderRadius: 5 },
  commentBox: { padding: 5, borderBottomWidth: 1, borderColor: '#ddd' },
});

export default CommentSection;