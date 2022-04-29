import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-bootstrap";
import { MyContext } from "../../Context/Context";
import { MealCard } from "../MealCard/MealCard";

export const Favorites = () => {
  const { user } = useContext(MyContext);
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    //www.themealdb.com/api/json/v1/1/lookup.php?i=52772

    if (user.favorites.length) {
      const requests = user.favorites.map((favorite) =>
        fetch(
          `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${favorite}`
        ).then((res) => res.json())
      );
      Promise.all(requests).then((res) => setFavorites(res));
    }
  }, [user]);
  if (!user.favorites.length) {
    return (
      <div>
        <h3>You don't have any Favorites yet.</h3>
        <NavLink to="/">Please Add New Ones</NavLink>
      </div>
    );
  }

  return (
    <div>
      <div className="title">
        <h2 className="titleText mt-5">
          <span>Y</span>our Favorites Recipes
        </h2>
      </div>
      <div className="meals_container">
        {favorites.map(({ meals: meal }) => (
          <MealCard key={meal[0].idMeal} {...meal[0]} />
        ))}
      </div>
    </div>
  );
};
