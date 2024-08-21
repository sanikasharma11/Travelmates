import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function DetailScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Detail Screen</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});