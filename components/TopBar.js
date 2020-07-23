import React from "react";
import { Appbar } from "react-native-paper";

const TopBar = (props) => {
  return (
    <Appbar>
      <Appbar.Content title="Todo List" />
      <Appbar.Action icon="plus" onPress={props.handleAddPress} />
    </Appbar>
  );
};

export default TopBar;
