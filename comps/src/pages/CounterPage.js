import { useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [addValue, setAddValue] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  const handleChange = (e) => {
    const value = +e.target.value || 0;

    setAddValue(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setCount(count + addValue);
    setAddValue(0);
  };

  return (
    <Panel className="m-3">
      <h1 className="text-lg">Count is {count}.</h1>
      <div className="flex flex-row">
        <Button primary onClick={increment}>
          increment
        </Button>
        <Button danger onClick={decrement}>
          decrement
        </Button>
      </div>
      <form onSubmit={handleSubmit}>
        <label>Add a lot</label>
        <input
          type="number"
          value={addValue || ""}
          onChange={handleChange}
          className="p-1 m-3 bg-grey-50 border border-gray-300"
        />
        <Button success>Add it</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
