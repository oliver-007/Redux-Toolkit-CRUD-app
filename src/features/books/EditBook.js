import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { editBook } from "./bookSlice";

const EditBook = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { id } = location.state;
  const [title, setTitle] = useState(location.state.title);
  const [author, setAuthor] = useState(location.state.author);

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(editBook({ id, title, author }));
    navigate("/show_book", { replace: true });
  };

  return (
    <div>
      <h2>Edit Book</h2>
      <form onSubmit={handleUpdate}>
        <div className="form-field">
          <label htmlFor="title">Edit Book Name : </label>
          <input
            type="text"
            id="title"
            name="title"
            placeholder="Enter your book name"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <br />
        <div>
          <label htmlFor="author">Edit Author Name : </label>
          <input
            type="text"
            id="author"
            name="author"
            placeholder="Enter author name"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditBook;
