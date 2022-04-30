import React from "react";
import "./PopularFood.css";
export const PopularFood = () => {
  return (
    <div className="popular-food-background">
      <div className="title">
        <h2 className="titleText mt-5">
          <span>P</span>opular Food
        </h2>
        <p style={{ paddingBottom: "40px", fontSize: "18px" }}>
          we Provide a variety of food and beverage recipes
          <br /> with high taste from famous chefs.
        </p>
      </div>
      <div className="popular_food_conatiner">
        <div className="popular_food_conatiner--box">
          <img
            src="https://images.unsplash.com/photo-1609357871098-7949aa2fb20d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="cake-img"
          />
        </div>

        <div className="popular_food_conatiner--box ">
          <img
            src="https://images.unsplash.com/photo-1563076429-c04cbe68da3a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="cup-cake-img"
          />
        </div>
        <div className="popular_food_conatiner--box">
          <img
            src="https://ak.picdn.net/shutterstock/videos/1021617682/thumb/1.jpg"
            alt=""
            width="350px"
          />
        </div>

        <div className="popular_food_conatiner--box">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/471/127/595/oil-bow-pepper-tomatoes-wallpaper-preview.jpg"
            alt=""
            width="350px"
          />
        </div>

        <div className="popular_food_conatiner--box">
          <img
            src="https://images.deliveryhero.io/image/talabat/Menuitems/Kuska1637837175976823223.jpg"
            alt=""
            width="350px"
          />
        </div>
        <div className="popular_food_conatiner--box">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/942/63/586/apples-orange-kiwi-juice-wallpaper-preview.jpg"
            alt=""
            width="350px"
          />
        </div>
        <div className="popular_food_conatiner--box">
          <img
            src="https://images.unsplash.com/photo-1551106652-a5bcf4b29ab6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80"
            alt=""
            width="350px"
          />
        </div>
        <div className="popular_food_conatiner--box">
          <img
            src="https://freedesignfile.com/upload/2017/06/Crisp-and-delicious-fried-chicken-HD-picture.jpg"
            alt=""
            width="350px"
          />
        </div>
        <div className="popular_food_conatiner--box">
          <img
            src="https://media.istockphoto.com/photos/heallthy-organic-fruit-salad-picture-id511622035?k=20&m=511622035&s=612x612&w=0&h=orK-ebrO0n1zb-U4UwOVlJ2i0vK0zso7ueK3jr08U9U="
            alt=""
            width="350px"
          />
        </div>

        {/*  */}
      </div>
    </div>
  );
};
