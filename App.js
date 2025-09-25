import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CommentSection from './components/CommentSection';
import Messenger from './components/Messenger';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CommentSection />
        <Messenger />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 30,
  },
});