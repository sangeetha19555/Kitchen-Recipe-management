import axios from "../../Axios";
import React, { useContext, useState } from "react";
import { Modal, Button } from "react-bootstrap";
import { MyContext } from "../../Context/Context";
import "./MealModal.css";
const MealModal = ({ title, description, idMeal }) => {
  const result = description.split(".");
  const filtered_des = result.filter((e) => e !== "");
  // console.log(result, "filtereddes", filtered_des);

  const [show, setShow] = useState(false);
  const { user, setUser } = useContext(MyContext);
  const [loading, setLoading] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddToFavorites = () => {
    setLoading(true);
    axios
      .post(`/add-favorites`, { mealId: idMeal })
      .then(({ data }) => {
        setLoading(false);
        setUser(data);
        alert("Meal Add To Favorites");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };

  const handleRemoveFromFavorites = () => {
    setLoading(true);
    axios
      .post(`/remove-favorites`, { mealId: idMeal })
      .then(({ data }) => {
        setLoading(false);
        setUser(data);
        alert("Meal Removed from Favorites");
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        See More
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          {filtered_des.map((e, idx) => (
            <div className="desc_container">
              <span className="desc_icon">🍒</span>{" "}
              <span className="desc_points" key={idx} style={{}}>
                {e}.
              </span>
            </div>
          ))}
        </Modal.Body>
        {/* <Modal.Body>{description}</Modal.Body> */}

        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>

          {user && (
            <>
              {user.favorites.includes(idMeal) ? (
                <Button
                  variant="danger"
                  onClick={handleRemoveFromFavorites}
                  disabled={loading}
                >
                  Remove Form Favorites
                </Button>
              ) : (
                <Button
                  variant="primary"
                  onClick={handleAddToFavorites}
                  disabled={loading}
                >
                  Add To Favorites
                </Button>
              )}
            </>
          )}
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default MealModal;
