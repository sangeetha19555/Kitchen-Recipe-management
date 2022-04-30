import React, { useContext, useEffect } from "react";
import { SearchPage } from "../SearchbarPage/SearchPage";
import { MealsContainer } from "../MealsContainer/MealsContainer";
import { MyContext } from "../../Context/Context";
// import { Button } from "react-bootstrap";
import "./HomeScreen.css";
import { Footer } from "../Footer/Footer";
import { PopularFood } from "../PopularFood/PopularFood";
export const HomePage = () => {
  const { meals, setMeals } = useContext(MyContext);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        setMeals(data.meals);
      })
      .catch((error) => console.log(error));
  }, [setMeals]);

  // console.log("mealsdata.....", meals);
  return (
    <div>
      <div className="HomePage ">
        <h1 className="HomePage_title1 ">Are You Hungry ?</h1>
        <h2 className="HomePage_title2 title">Don't wait!</h2>
        <h2 className="HomePage_title3 title">
          Let start to cook your Food Now
        </h2>
        <a href="#search">
          <button className="Homepage_search_button">Search Recipes</button>
        </a>
      </div>

      <PopularFood />

      <SearchPage />

      <MealsContainer meals={meals} />

      <Footer />
      {/* {meals &&
        meals.map((meal) => (
          // <div key={meal.idMeal}>{meal.strMeal}</div>
          <MealCard key={meal.idMeal} {...meal} />
        ))} */}
    </div>
  );
};
