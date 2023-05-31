import { useState } from "react";

function SearchBar({ onSubmit }) {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputValue);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <br></br>
        <button>Get image</button>
      </form>
    </div>
  );
}

export default SearchBar;
