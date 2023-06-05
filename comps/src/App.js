import Accordion from "./components/Accordion";

function App() {
  const items = [
    {
      id: "sdklasb",
      label: "Can I use React?",
      content: "You can use React on any project you want.",
    },
    {
      id: "fklaflk",
      label: "Can I use React?",
      content: "You can use React on any project you want.",
    },
    {
      id: "fflagfo",
      label: "Can I use React?",
      content: "You can use React on any project you want.",
    },
  ];

  return <Accordion items={items} />;
}

export default App;
