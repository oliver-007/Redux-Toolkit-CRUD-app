import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addBook } from "./bookSlice";

const AddBook = () => {
  const [title, setTitle] = useState("");

  const [author, setAuthor] = useState("");

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(
      addBook({
        id: new Date().getTime().toString(),
        title: title,
        author: author,
      })
    );
    setTitle("");
    setAuthor("");
    navigate("/show_book", { replace: true });
  };

  return (
    <div>
      <h2>Add Book</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Add Book Name : </label>
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
          <label htmlFor="author">Add Author Name : </label>
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
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddBook;
