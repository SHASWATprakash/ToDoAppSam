// src/App.js
import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';

const App = () => {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <AddTodo />
        <TodoList />
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
});

export default App;
