import React, { useContext, useEffect } from "react";
import { SearchPage } from "../SearchbarPage/SearchPage";
import { MealsContainer } from "../MealsContainer/MealsContainer";
import { MyContext } from "../../Context/Context";

export const HomePage = () => {
  const { meals, setMeals } = useContext(MyContext);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMeals(data.meals);
      })
      .catch((error) => console.log(error));
  }, [setMeals]);

  console.log("mealsdata.....", meals);
  return (
    <div>
      <SearchPage />

      <MealsContainer meals={meals} />

      {/* {meals &&
        meals.map((meal) => (
          // <div key={meal.idMeal}>{meal.strMeal}</div>
          <MealCard key={meal.idMeal} {...meal} />
        ))} */}
    </div>
  );
};
