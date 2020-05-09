import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import TaskList from "./TaskList";

const initialTodos = [
  {
    task: 'Learn React Native'
  }
];

const App = (initialTodos) => {
  const [todos, setTodos] = React.useState(initialTodos);

  return (
    <View style={styles.container}>
      <Text>Howdy</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;