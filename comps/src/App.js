import DropDown from "./components/DropDown";

function App() {
  const options = [
    { label: "red", value: "value" },
    { label: "blue", value: "blue" },
    { label: "green", value: "green" },
  ];

  return <DropDown options={options} />;
}

export default App;
