import React from "react";
import { CardModal } from "./elements";

const App = ({ catDetail }) => {
  return (
    <CardModal>
      <div className="left">
        <img src={catDetail.url} alt="cat" />
      </div>
      <div className="right">
        <div className="d-flex">
          <h1>Breed Name: </h1>
          <p>{catDetail.breeds[0].name}</p>
        </div>
        <div className="temperament-wrapper">
          <h1>Temperament: </h1>
          <p>{catDetail.breeds[0].temperament}</p>
        </div>
        <div className="d-flex">
          <h1>Life Span :</h1>
          <p>{catDetail.breeds[0].life_span}</p>
        </div>
        <div className="d-flex">
          <h1> Shedding Level: </h1>
          <p>{catDetail.breeds[0].shedding_level}</p>
        </div>
        <div className="d-flex">
          <h1> Dog Friendly :</h1>
          <p>{catDetail.breeds[0].dog_friendly}</p>
        </div>
        <div className="d-flex">
          <h1> Child Friendly :</h1>
          <p>{catDetail.breeds[0].child_friendly}</p>
        </div>
      </div>
    </CardModal>
  );
};

export default App;
