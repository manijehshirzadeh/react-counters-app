import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./Counter";
import { useState } from "react";

const initialNumber = [0, 0, 0, 0];

function App() {
  const [counters, setCounters] = useState(initialNumber);
  // console.log(counters);
  const handleAdd = (index) => {
    const newCounters = [...counters];
    newCounters[index] = newCounters[index] + 1;

    setCounters(newCounters);
  };

  return (
    <div className="App">
      <div>
        <div>
          Navbar
          <button type="button" className="btn btn-secondary">
            {0}
          </button>
        </div>
        <div className="d-grid gap-2 col-1 mx-auto">
          <button type="button" className="btn btn-primary">
            Reset
          </button>
        </div>
      </div>
      {counters.map((counter, index) => {
        return <Counter number={counter} onAdd={() => handleAdd(index)} />;
      })}
    </div>
  );
}

export default App;
