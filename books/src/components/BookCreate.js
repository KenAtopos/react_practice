import { useState } from "react";

function BookCreate({ onCreate }) {
  const [name, setName] = useState("");

  const handleCreate = (e) => {
    e.preventDefault();
    onCreate(name);
    setName("");
  };

  const handleChange = (e) => {
    setName(e.target.value);
  };

  return (
    <div className="book-create">
      <h3>Add a book</h3>
      <form onSubmit={handleCreate}>
        <label>Title</label>
        <input className="input" onChange={handleChange} value={name} />
        <button className="button">Create</button>
      </form>
    </div>
  );
}

export default BookCreate;
