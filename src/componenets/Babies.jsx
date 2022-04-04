import React, { useState } from "react";
import "../styles/babies.css";
import data from "../data/babyNamesData.json";
import Search from "./Search";
import Favourites from "./Favourites";

const Babies = () => {
  const [names, setNames] = useState(data);
  const [favourites, setFavourites] = useState([]);

  return (
    <>
      <Search names={data} setNames={setNames} allNames={names}></Search>
      <Favourites
        favourites={favourites}
        setFavourites={setFavourites}
        names={names}
        setNames={setNames}
      ></Favourites>
      <article className="babies_article">
        <table className="table">
          <thead>
            <tr>
              <td>Boys</td>
              <td>Girls</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="boys_column">
                {names
                  .sort((a, b) => a.name.localeCompare(b.name))
                  .map((item, index) => {
                    return item.sex === "m" ? (
                      <span
                        key={index}
                        onClick={() => {
                          if (!favourites.includes(item.name)) {
                            setFavourites([...favourites, item.name]);
                            setNames(names.filter((n) => n.name !== item.name));
                          }
                        }}
                      >
                        {item.name}
                      </span>
                    ) : null;
                  })}
              </td>
              <td className="girls_column">
                {names.map((item, index) => {
                  return item.sex === "f" ? (
                    <span
                      key={index}
                      onClick={() => {
                        if (!favourites.includes(item.name)) {
                          setFavourites([...favourites, item.name]);
                          setNames(names.filter((n) => n.name !== item.name));
                        }
                      }}
                    >
                      {item.name}
                    </span>
                  ) : null;
                })}
              </td>
            </tr>
          </tbody>
        </table>
      </article>
      <footer>
        <p>
          Made by <a href="https://github.com/Ali-Jahankah">Ali Jahankah</a>
        </p>
      </footer>
    </>
  );
};

export default Babies;
