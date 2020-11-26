import React from "react";
import "./styles.css";
import store from "./store";
import { Counter } from "./components/Counter";

export default function App() {
  return (
    <store.Provider initialValue={{ count: 0 }}>
      <Counter />
    </store.Provider>
  );
}
