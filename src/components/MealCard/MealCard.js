import React from "react";
import { Card } from "react-bootstrap";
import MealModal from "../MealModal/MealModal";

export const MealCard = ({
  strMealThumb,
  strMeal,
  strInstructions,
  idMeal,
}) => {
  return (
    // <p>hello</p>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title>{strMeal}</Card.Title>
        {/* see More button */}
        <MealModal
          title={strMeal}
          description={strInstructions}
          idMeal={idMeal}
          key={idMeal}
        />
        {/* see More button ends*/}
      </Card.Body>
    </Card>
  );
};
