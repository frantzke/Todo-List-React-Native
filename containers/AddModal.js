import React from "react";
import { View } from "react-native-paper";

const AddModal = (props) => {
  const [todoText, setTodoText] = React.useState("");

  const handleTextChange = (text) => {
    setTodoText(text);
  };

  const handleAddTodo = () => {
    //ADD Text to array
    //Clear input text
    if (todoText !== "") {
      props.addTodoItem(todoText);
      setTodoText("");
    }
  };

  return (
    <View>
      <View>
        <TextInput
          style={styles.input}
          placeholder="Todo..."
          onChangeText={handleTextChange}
          value={todoText}
        />
      </View>
      <Button title="Add" mode="outlined" onPress={handleAddTodo}>
        Text
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    alignItems: "center",
    height: 90,
    backgroundColor: "pink",
  },
  input: {
    width: 300,
    borderColor: "grey",
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 18,
    height: 40,
    padding: 5,
  },
  titleContainer: {
    position: "absolute",
    width: "100%",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    padding: 10,
    alignItems: "center",
    height: 90,
  },
  title: {
    fontSize: 26,
    color: "#325A75",
  },
});

export default AddModal;
