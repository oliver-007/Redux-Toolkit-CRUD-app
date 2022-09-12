import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { deleteBook } from "./bookSlice";

const ShowBook = () => {
  const { book } = useSelector((state) => state.bookSlice);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (id, title, author) => {
    navigate("/edit_book", { state: { id, title, author } }, { replace: true });
  };

  return (
    <div>
      <h2>List of Books </h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {book &&
            book.map((item) => {
              const { id, author, title } = item;
              return (
                <tr key={id}>
                  <td> {id} </td>
                  <td> {title} </td>
                  <td> {author} </td>
                  <td>
                    <button onClick={() => handleEdit(id, title, author)}>
                      Edit
                    </button>
                    <button onClick={() => handleDelete(id)}>Delete</button>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};

export default ShowBook;
