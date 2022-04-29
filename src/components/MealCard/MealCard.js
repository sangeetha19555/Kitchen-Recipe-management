import React from "react";
import { Card } from "react-bootstrap";
import MealModal from "../MealModal/MealModal";

export const MealCard = ({
  strMealThumb,
  strMeal,
  strInstructions,
  idMeal,
  idx,
}) => {
  return (
    // <p>hello</p>
    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={strMealThumb} />
      <Card.Body>
        <Card.Title className="card_title">{strMeal}</Card.Title>
        {/* see More button */}
        <MealModal
          title={strMeal}
          description={strInstructions}
          idMeal={idMeal}
          key={idx}
        />
        {/* see More button ends*/}
      </Card.Body>
    </Card>
  );
};
