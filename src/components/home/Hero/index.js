import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const App = () => {
  return (
    <Container>
      <h1>Lord Of The Rings</h1>
      <p>
        Consectetur elit culpa culpa tempor esse Lorem excepteur. Dolore qui ut
        et culpa eu sint elit ut et consectetur officia.{" "}
      </p>
      <div className="d-flex">
        <Link className="intro-link" to="/cats">
          View Cats
        </Link>
        <Link className="intro-link" to="/lotr">
          View LOTR
        </Link>
      </div>
    </Container>
  );
};
export const Container = styled.div`
  height: 97%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 640px;
  margin: 0 auto;
  h1 {
    font-weight: bold;
    font-size: 34px;
    line-height: 54px;

    color: #ffffff;
    margin: 10px;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 27px;
    text-align: center;
    margin: 5px 10px;

    color: #f2f2f2;
  }
  .intro-link {
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #ffffff;
    order: 0;
    align-self: center;
    margin: 10px;
    display: flex;
    padding: 10px 23px;
    justify-content: center;
    align-items: center;
    width: 86px;
    height: 40px;
    background: linear-gradient(105.33deg, #f41313 -28.55%, #f90178 125.13%);
    border-radius: 3px;
  }
`;

export default App;
