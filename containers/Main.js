import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  FlatList,
  Platform,
  StatusBar,
} from "react-native";
import { Button, Dialog, List, Portal, TextInput } from "react-native-paper";

import TopBar from "../components/TopBar";
import FilterBar from "../components/FilterBar";

const Main = () => {
  const [showModal, setShowModal] = React.useState(false);
  const [todoText, setTodoText] = React.useState("");
  const [todos, setTodos] = React.useState([]);
  const [filteredTodos, setFilteredTodos] = React.useState([]);

  React.useEffect(() => {
    const initalList = [
      { key: "0", desc: "Learn React Native", complete: true },
      { key: "1", desc: "Create Git Repository", complete: false },
    ];
    setTodos(initalList);
    setFilteredTodos(initalList);
  }, []);

  const handleAddTodo = () => {
    //ADD Text to array. Clear input text
    if (todoText !== "") {
      addTodoItem(todoText);
      setTodoText("");
      setShowModal(false);
    }
  };

  const handleItemPress = (item) => {
    todos.forEach((todo) => {
      if (todo.key === item.key) {
        todo.complete = !todo.complete;
      }
    });
    setTodos([...todos]);
  };

  const handleAddPress = () => {
    setShowModal(true);
  };

  const handleFilter = (filterTodo, filterCompleted) => {
    if (filterTodo && filterCompleted) {
      //Show all
      setFilteredTodos([...todos]);
    } else if (!filterTodo && !filterCompleted) {
      //Show None
      setFilteredTodos([]);
    } else {
      //Filter either Todos or Completed
      const filtered = todos.filter((todo) => {
        return (
          filterTodo === !todo.complete || filterCompleted === todo.complete
        );
      });
      setFilteredTodos(filtered);
    }
  };

  const addTodoItem = (todoDesc) => {
    const newTodo = {
      key: Math.random().toString(),
      desc: todoDesc,
      complete: false,
    };
    setTodos([...todos, newTodo]);
    setFilteredTodos([...todos, newTodo]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopBar addTodoItem={addTodoItem} handleAddPress={handleAddPress} />
      <FilterBar handleFilter={handleFilter} />
      <FlatList
        style={{ width: "100%" }}
        data={filteredTodos}
        renderItem={({ item }) => (
          <List.Item
            key={item.key}
            title={item.desc}
            titleNumberOfLines={2}
            titleStyle={
              item.complete ? { textDecorationLine: "line-through" } : {}
            }
            onPress={() => handleItemPress(item)}
            left={() => (
              <List.Icon
                icon={
                  item.complete
                    ? require("../assets/check.png")
                    : require("../assets/circle.png")
                }
              />
            )}
          />
        )}
      />
      <Portal>
        <Dialog visible={showModal} onDismiss={() => setShowModal(false)}>
          <Dialog.Title>Add Todo</Dialog.Title>
          <Dialog.Content>
            <TextInput
              label="Todo"
              mode="outlined"
              value={todoText}
              onChangeText={(text) => setTodoText(text)}
            />
          </Dialog.Content>
          <Dialog.Actions>
            <Button color="red" onPress={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button onPress={handleAddTodo}>Add</Button>
          </Dialog.Actions>
        </Dialog>
      </Portal>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});

export default Main;
