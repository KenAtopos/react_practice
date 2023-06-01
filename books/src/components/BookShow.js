import { useState } from "react";
import BookEdit from "./BookEdit";

function BookShow({ book, onDelete, onUpdate }) {
  const [showEdit, setShowEdit] = useState(false);

  const handleEditClick = () => {
    setShowEdit(!showEdit);
  };

  const handleDeleteClick = () => {
    onDelete(book.id);
  };

  const onSave = (id, newTitle) => {
    setShowEdit(!showEdit);
    onUpdate(id, newTitle);
  };

  return (
    <div className="book-show">
      {showEdit ? (
        <BookEdit onSave={onSave} onUpdate={onUpdate} book={book} />
      ) : (
        book.title
      )}
      <div className="actions">
        <button className="edit" onClick={handleEditClick}>
          edit
        </button>
        <button className="delete" onClick={handleDeleteClick}>
          delete
        </button>
      </div>
    </div>
  );
}

export default BookShow;
