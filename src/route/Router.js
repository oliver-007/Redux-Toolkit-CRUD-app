import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AddBook from "../features/books/AddBook";
import EditBook from "../features/books/EditBook";
import ShowBook from "../features/books/ShowBook";
import Layout from "../layout/Layout";
import Error from "../pages/Error";
import Home from "../pages/Home";

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<Error />} />
            <Route path="/add_book" element={<AddBook />} />
            <Route path="/show_book" element={<ShowBook />} />
            <Route path="/edit_book" element={<EditBook />} />
          </Routes>
        </main>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;
