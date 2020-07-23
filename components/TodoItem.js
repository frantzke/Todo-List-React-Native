import React from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
} from "react-native";

const TodoItem = (props) => {
  return (
    <TouchableHighlight
      underlayColor="lightgrey"
      activeOpacity={0.4}
      onPress={props.handleClick}
    >
      <View style={styles.item}>
        <Image
          resizeMode="contain"
          style={styles.image}
          source={
            props.complete
              ? require("../assets/check.png")
              : require("../assets/circle.png")
          }
        />
        <Text
          style={[
            styles.text,
            props.complete ? styles.completedText : undefined,
          ]}
        >
          {props.desc}
        </Text>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: "row",
    padding: 10,
    height: 44,
    justifyContent: "flex-start",
    width: "100%",
    textAlign: "right",
    alignItems: "center",
  },
  image: { width: 16, height: 16, marginRight: 10 },
  text: {
    fontSize: 18,
    color: "#325A75",
  },
  completedText: {
    textDecorationLine: "line-through",
  },
  incompleteText: {
    textDecorationLine: "underline",
  },
});

export default TodoItem;
