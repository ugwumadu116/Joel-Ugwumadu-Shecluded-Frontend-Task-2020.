import React from "react";
import { Card } from "./elements";


const App = ({ cat, i, openModal }) => {
  return (
    <Card key={`${i}${cat.id}`}>
      <div className="cat-image-wrapper">
        <img src={cat.url} alt="cat" />
      </div>
      <div className="view-more">
        <button onClick={() => openModal(cat)}>View details</button>
      </div>
      <div className="card-content">
        <div className="d-flex">
          <p className="bread-name">{cat.breeds[0].name}</p>
        </div>
        <div className="temperament-wrapper">
          <p className="temperament">{cat.breeds[0].temperament}</p>
        </div>
      </div>
    </Card>
  );
};
 
export default App;
