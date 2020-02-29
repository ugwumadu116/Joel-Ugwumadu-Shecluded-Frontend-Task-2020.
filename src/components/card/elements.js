import styled from "styled-components";


export const Card = styled.div`
  height: 379px;
  width: 290px;
  margin: 14px;
  background: #ffffff;
  box-shadow: 0px 3px 7px rgba(96, 96, 96, 0.34);

  .card-content {
    padding: 20px;
  }
  .bread-name {
    font-weight: 600;
    font-size: 17px;
    line-height: 23px;
    color: #000000;
  }
  .temperament-wrapper {
    .temperament {
      font-style: normal;
      font-weight: normal;
      font-size: 15px;
      line-height: 20px;

      color: #c4c4c4;
    }
  }
  .d-flex {
    display: flex;
  }
  .cat-image-wrapper {
    width: 100%;
    height: 70%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .view-more {
    position: relative;
    button {
      position: absolute;
      border: none;
      display: flex;
      padding: 10px;

      width: 129px;
      height: 43px;
      background: linear-gradient(113.43deg, #f41313 -28.55%, #f90178 125.13%);
      background-blend-mode: darken;
      mix-blend-mode: normal;
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 23px;
      color: #ffffff;
      cursor: pointer;
      left: 13px;
      top: -56px;
    }
  }
`;
export const CardModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 600px;
  height: 312px;
  .d-flex {
    display: flex;
    margin: 10px 0;
  }
  p {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    margin-left: 5px;

    color: rgba(20, 20, 20, 0.45);
  }
  h1 {
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 20px;

    color: #000000;
  }
  .left {
    width: 50%;
    height: 100%;

    img {
      width: 100%;

      height: 100%;
    }
  }
  .right {
    width: 50%;
    padding: 10px;
  }
  @media (max-width: 601px) {
    width: 90%;
  }
`;
