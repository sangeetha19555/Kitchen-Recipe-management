import React from "react";
// import { Button } from "react-bootstrap";
import { MealCard } from "../MealCard/MealCard";
import "./MealsContainer.css";

export const MealsContainer = ({ meals }) => {
  console.log("MealsContainer77777", meals);

  return (
    <div className="meals_container">
      {/* {meals.map((meal) => (
        <div>{meal.strMeal}</div>
      ))} */}
      {/* {mealsdata.map((meal) => (
        <div> {meal}</div>
      ))} */}

      {meals &&
        meals.map((meal) => (
          // <div key={meal.idMeal}>{meal.strMeal}</div>
          <MealCard key={meal.idMeal} {...meal} />
        ))}
    </div>
  );
};
