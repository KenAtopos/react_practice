import SearchBar from "./components/SearchBar";
import searchImage from "./api";
import ImageList from "./components/ImageList";
import { useState } from "react";

function App() {
  const [response, setResponse] = useState("");

  const getImages = async (term) => {
    setResponse(await searchImage(term));
  };

  return (
    <div>
      <SearchBar onSubmit={getImages} />
      <ImageList data={response} />
    </div>
  );
}

export default App;
