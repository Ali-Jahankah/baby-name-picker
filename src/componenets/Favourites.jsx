import React from "react";
import "../styles/fav.css";
const Favourites = ({ favourites, setFavourites }) => {
  return (
    <article>
      <p>
        <h1>Favourites:</h1>
        {favourites.map((item) => {
          return <span className="fav">{item}</span>;
        })}
      </p>
    </article>
  );
};

export default Favourites;
