import { useState } from "react";
import boxes from "./boxes";

function App() {
  const [squares, setSquares] = useState(boxes);

  const squareElements = squares.map((square) => (
    <div key={square.id} className="box"></div>
  ));

  return (
    <main>
      <h1>Boxes will go here</h1>
      {squareElements}
    </main>
  );
}

export default App;
