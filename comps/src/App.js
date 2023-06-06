import { useState } from "react";
import DropDown from "./components/DropDown";

function App() {
  const [selection, setSelection] = useState(null);

  const handleSelect = (option) => {
    setSelection(option);
  };

  const options = [
    { label: "red", value: "value" },
    { label: "blue", value: "blue" },
    { label: "green", value: "green" },
  ];

  return (
    <div className="flex">
      <DropDown value={selection} options={options} onChange={handleSelect} />
    </div>
  );
}

export default App;
