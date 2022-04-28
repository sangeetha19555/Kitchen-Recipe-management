import React, { useContext, useState } from "react";
import { FormControl, InputGroup, Button } from "react-bootstrap";
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
    <div className="jumbotron">
      <h1 className="title">Welcome</h1>
      <h2>You can sreach your favorite meals</h2>

      <div className="button-input">
        <InputGroup className="mb-3 ">
          <FormControl
            placeholder="Search for a meal"
            aria-label="Meal Search Input"
            aria-describedby="meal-search-button"
            value={searchInput}
            onChange={(e) => setsearchInput(e.target.value)}
          />

          <Button variant="danger" onClick={handleSearch}>
            Search
          </Button>
        </InputGroup>
      </div>
    </div>
  );
};
