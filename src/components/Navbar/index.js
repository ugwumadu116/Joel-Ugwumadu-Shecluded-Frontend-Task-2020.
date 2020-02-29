import React from "react";
import styled from "styled-components";
import { NavLink, Link } from "react-router-dom";
import { AiOutlineThunderbolt } from "react-icons/ai";

const App = () => {
  return (
    <Container>
      <div>
        <Link className="d-flex logo" to="/">
          <AiOutlineThunderbolt size="25px" />
          Xta App
        </Link>
      </div>
      <div className="d-flex link-wrapper">
        <div>
          <NavLink className="link-wrapper" to="/cats">
            Cats
          </NavLink>
        </div>
        <div>
          <NavLink className="link-wrapper" to="/lotr">
            LOTR
          </NavLink>
        </div>
      </div>
    </Container>
  );
};
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  position: fixed;
  top: 0;
  z-index: 999;
  width: 100%;
  height: 10vh;
  background: rgba(40, 40, 40, 0.5);
  .d-flex {
    display: flex;
    align-items: center;
  }

  .logo {
    font-weight: bold;
    font-size: 23px;
    line-height: 31px;

    color: #ffffff;
  }
  .link-wrapper {
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 20px;
    color: #ffffff;
    margin: 0 10px;
  }
  .active {
    color: red;
  }
`;

export default App;
