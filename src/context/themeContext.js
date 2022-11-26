import React from "react";

const ThemeContext  = React.createContext({
  color: 'primary',
  changeColor: () => {},
});

export default ThemeContext;