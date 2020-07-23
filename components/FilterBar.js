import React from "react";
import { StyleSheet, View } from "react-native";
import { Chip } from "react-native-paper";

const FilterBar = (props) => {
  const [completed, setCompleted] = React.useState(true);
  const [todo, setTodo] = React.useState(true);

  return (
    <View style={styles.container}>
      <Chip
        selectedColor="#325A75"
        mode="outlined"
        textStyle={completed ? styles.selectedItemText : styles.itemText}
        style={completed ? styles.selectedItem : styles.item}
        onPress={() => {
          props.handleFilter(todo, !completed);
          setCompleted(!completed);
        }}
      >
        Completed
      </Chip>
      <Chip
        selectedColor="#325A75"
        mode="outlined"
        textStyle={todo ? styles.selectedItemText : styles.itemText}
        style={todo ? styles.selectedItem : styles.item}
        onPress={() => {
          props.handleFilter(!todo, completed);
          setTodo(!todo);
        }}
      >
        Todo
      </Chip>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "flex-start",
    padding: 5,
    alignItems: "center",
  },
  item: {
    marginStart: 5,
  },
  selectedItem: {
    marginStart: 5,
    backgroundColor: "#325A75",
  },
  itemText: {
    color: "#325A75",
  },
  selectedItemText: {
    color: "white",
  },
});

export default FilterBar;
