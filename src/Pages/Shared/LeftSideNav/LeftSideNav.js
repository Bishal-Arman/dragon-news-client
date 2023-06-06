import React, { useEffect, useState } from "react";

import { Link } from "react-router-dom";

const LeftSideNav = () => {
  const [categories, setCatagories] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5000/news-categories")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data)
        setCatagories(data);
      });
  }, []);
  return (
    <div>
      <h2>All Categories:{categories.length}</h2>
      {categories.map((category) => (
        <p key={category.id}>
          <Link to={`/category/${category.id}`}>{category.name}</Link>
        </p>
      ))}
    </div>
  );
};

export default LeftSideNav;
