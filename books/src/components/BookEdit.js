import { useState } from "react";

function BookEdit({ book, onSave }) {
  const [newName, setNewName] = useState(book.title);

  const handleChange = (e) => {
    setNewName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(book.id, newName);
  };

  return (
    <div>
      <form className="book-edit" onSubmit={handleSubmit}>
        <label>title:</label>
        <input className="input" value={newName} onChange={handleChange} />
        <button className="button is-primary">save</button>
      </form>
    </div>
  );
}

export default BookEdit;
