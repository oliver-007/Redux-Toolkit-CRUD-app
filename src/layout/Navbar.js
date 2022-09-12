import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Add Book", path: "/add_book" },
    { name: "show Book", path: "/show_book" },
  ];

  return (
    <nav>
      {links &&
        links.map((link, index) => (
          <Link to={link.path} className="nav-link" key={index}>
            {link.name}
          </Link>
        ))}
    </nav>
  );
};

export default Navbar;
