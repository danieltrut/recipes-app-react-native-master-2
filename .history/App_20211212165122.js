/* import React from 'react';
import ScreenDisplay from './src/navigations/NavigationTabs';
import ApiContainer from './src/data/AppContainer';
import TodoList from './src/components/categoryList';

export default function App() {
  return (
    //<ScreenDisplay />
    <TodoList />
  );
} */


import React from "react";
import { RequestProvider } from "./requestContainer";
import TodoList from "./TodoList";

const App = () => (
  <RequestProvider>
    <TodoList />
  </RequestProvider>
);

export default App;


