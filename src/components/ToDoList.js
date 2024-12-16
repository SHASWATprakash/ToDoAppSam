// src/components/TodoList.js
import React from 'react';
import { View, Text, Button, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, deleteTodo } from '../redux/actions';

const TodoList = () => {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  const renderItem = ({ item }) => (
    <View style={styles.todo}>
      <TouchableOpacity onPress={() => dispatch(toggleTodo(item.id))}>
        <Text
          style={[
            styles.text,
            { textDecorationLine: item.completed ? 'line-through' : 'none' },
          ]}
        >
          {item.text}
        </Text>
      </TouchableOpacity>
      <Button title="Delete" onPress={() => dispatch(deleteTodo(item.id))} />
    </View>
  );

  return (
    <FlatList
      data={todos}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

const styles = StyleSheet.create({
  todo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
  },
  text: {
    flex: 1,
  },
});

export default TodoList;
