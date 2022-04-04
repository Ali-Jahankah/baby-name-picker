import React, { useState } from "react";
import "../styles/search.css";
const Search = ({ names, setNames, allNames }) => {
  const [style, setStyle] = useState({ boys: false, girls: false, all: true });
  const [storage, setStorage] = useState(allNames);
  return (
    <article className="search_article">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => {
          setNames(
            storage.filter((item) =>
              item.name.toLowerCase().includes(e.target.value.toLowerCase())
            )
          );
        }}
        className="search"
      />
      <span
        className={
          style.boys ? "filter_btn boys_btn chosen" : "filter_btn boys_btn"
        }
        onClick={() => {
          if (!style.boys) {
            setStyle({ boys: true, girls: false, all: false });
            setNames(names.filter((item) => item.sex === "m"));
            setStorage(names.filter((item) => item.sex === "m"));
          }
        }}
      >
        Boys
      </span>
      <span> | </span>
      <span
        className={
          style.girls ? "filter_btn girls_btn chosen" : "filter_btn girls_btn"
        }
        onClick={() => {
          if (!style.girls) {
            setStyle({ boys: false, girls: true, all: false });
            setNames(names.filter((item) => item.sex === "f"));
            setStorage(names.filter((item) => item.sex === "f"));
          }
        }}
      >
        {" "}
        Girls
      </span>{" "}
      <span> | </span>
      <span
        className={
          style.all ? "filter_btn all_btn chosen" : "filter_btn all_btn"
        }
        onClick={() => {
          if (!style.all) {
            setStyle({ boys: false, girls: false, all: true });
            setNames(names);
            setStorage(names);
          }
        }}
      >
        All
      </span>
    </article>
  );
};

export default Search;
