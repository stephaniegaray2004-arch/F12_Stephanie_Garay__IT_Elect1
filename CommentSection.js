import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import { db } from '../firebaseConfig';

const CommentSection = () => {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');

  useEffect(() => {
    db.collection('comments').onSnapshot((snapshot) => {
      const comments = snapshot.docs.map((doc) => doc.data());
      setComments(comments);
    });
  }, []);

  const handleAddComment = () => {
    db.collection('comments').add({ text: newComment });
    setNewComment('');
  };

  return (
    <View>
      <TextInput
        placeholder="Add a comment..."
        value={newComment}
        onChangeText={(text) => setNewComment(text)}
      />
      <Button title="Post" onPress={handleAddComment} />
      <FlatList
        data={comments}
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

export default CommentSection;
