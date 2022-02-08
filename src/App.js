import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Counter from "./Counter";
import { useState } from "react";

const initialNumber = [1, 0, 0, 3];

function App() {
  const [counters, setCounters] = useState(initialNumber);
  const totalCounters = counters.filter((counter) => counter !== 0);
  console.log(totalCounters);

  const handleAdd = (index) => {
    const newCounters = [...counters];
    newCounters[index] = newCounters[index] + 1;
    setCounters(newCounters);
  };

  const handleDecrease = (index) => {
    console.log(index);
    const newCounters = [...counters];
    console.log(newCounters);
    newCounters[index] = newCounters[index] - 1;
    setCounters(newCounters);
  };

  // const handleNavbar = () => {
  //   const newNavbar = navbar;
  //   console.log(newNavbar);
  //   setNavbar(newNavbar + 1);
  // };

  return (
    <div className="App">
      <div>
        <div>
          Navbar
          <button type="button" className="btn btn-secondary">
            {totalCounters.length}
          </button>
        </div>
        <div className="d-grid gap-2 col-1 mx-auto">
          <button type="button" className="btn btn-primary">
            Reset
          </button>
        </div>
      </div>
      {counters.map((counter, index) => {
        return (
          <Counter
            number={counter}
            onAdd={() => handleAdd(index)}
            onDecrease={() => handleDecrease(index)}
          />
        );
      })}
    </div>
  );
}

export default App;
