import { useState } from "react";
import "./styles.css";

export default function App() {
  const [color, setColor] = useState("");
  const [input, setInput] = useState("");

  return (
    <div className="App">
      <input onChange={(e) => setInput(e.target.value)} />
      <button onClick={() => setColor("red")}>red </button>
      <button onClick={() => setColor("green")}>green</button>
      <button onClick={() => setColor("blue")}> blue</button>
      {color === "red" && <h1 style={{ color: "red" }}>{input}</h1>}
      {color === "green" && <h1 style={{ color: "green" }}>{input}</h1>}
      {color === "blue" && <h1 style={{ color: "blue" }}>{input}</h1>}
    </div>
  );
}
