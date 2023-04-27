import { key } from "localforage";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

function LeftSide() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories")
      .then((res) => res.json())
      .then((data) => setCategories(data))
      .catch((err) => console.log(err));

    // const catchData = async()=>{
    //   const data = await fetch('http://localhost:5000/categories')
    //   // const allCategories = data.json()
    //   console.log(data)
    // }

    // catchData()
    // .catch(Error => console.log(Error) )
  }, []);

  return (
    <div className="my-3">
      <h4>All Category</h4>
      <div className="my-4">
        {categories.map((category) => (
          <NavLink
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isPending ? "red" : "black",
              };
            }}
            to={`/category/${category.id}`}
            className=" text-decoration-none pointer-event text-black"
          >
            <p key={category.id}>{category.name}</p>
          </NavLink>
        ))}
      </div>
    </div>
  );
}

export default LeftSide;
