import React, { useContext, useState } from "react";
import { FormControl, InputGroup } from "react-bootstrap";
// import { NavLink } from "react-router-dom";
import { MyContext } from "../../Context/Context";
import "./style.css";

export const SearchPage = () => {
  const [searchInput, setsearchInput] = useState("");
  const { setMeals } = useContext(MyContext);

  function handleSearch() {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInput}`)
      .then((res) => res.json())
      .then((data) => setMeals(data.meals));
    // .catch((error) => console.log(error));
  }

  return (
    <div>
      {/* <h1 className="jumbotron_title1">Are You Hungry ?</h1>
      <h2 className="jumbotron_title2 ">Don't wait!</h2>
      <h2 className="jumbotron_title3 ">Let start to cook your Food Now</h2> */}
      <div className="title" id="search">
        <h2 className="titleText">
          <span>S</span>earch Recpies
        </h2>
      </div>

      <div className="jumbotron">
        <div className="button-input">
          <InputGroup className="mb-3 ">
            <FormControl
              placeholder="Search for a meal"
              aria-label="Meal Search Input"
              aria-describedby="meal-search-button"
              value={searchInput}
              onChange={(e) => setsearchInput(e.target.value)}
            />

            <button onClick={handleSearch} className="search_button">
              Search
            </button>
          </InputGroup>
        </div>
      </div>
    </div>
  );
};
