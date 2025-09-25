import React from 'react';
import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import CommentSection from './components/CommentSection';
import MessengerSection from './components/MessengerSection';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <CommentSection />
        <MessengerSection />
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