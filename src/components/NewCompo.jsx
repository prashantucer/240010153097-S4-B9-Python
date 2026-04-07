import { useState } from "react";

function App() {

  
  const [fruit, setFruit] = useState("");

  const fruits = (name) => {
    setFruit(name + " bhago ye fal kaha se aagya 😄");
  };

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h1>Example with State + Arrow Function</h1>

      
      <h2>{fruit}</h2>

      <button onClick={() => fruits("Apple")}>Apple 🍎</button>
      <button onClick={() => fruits("Mango")}>Mango 🥭</button>
      <button onClick={() => fruits("Banana")}>Banana 🍌</button>

    </div>
  );
}

export default App;