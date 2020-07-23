import React from "react";
import { DefaultTheme, Provider } from "react-native-paper";

import Main from "./containers/Main";

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#325A75",
  },
};

export default function App() {
  return (
    <Provider theme={theme}>
      <Main />
    </Provider>
  );
}
