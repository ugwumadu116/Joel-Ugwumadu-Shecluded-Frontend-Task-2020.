import styled from "styled-components";

export const LOTRCArd = styled.div`
  height: 159px;
  width: 350px;
  margin: 14px;
  background: #ffffff;
  box-shadow: 0px 3px 7px rgba(96, 96, 96, 0.34);
  padding: 20px;
  .d-flex {
    display: flex;
    align-items: center;
    margin:10px 0;
  }
  .topic-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .topic {
    font-weight: 600;
    font-size: 17px;
    line-height: 23px;
    color: #000000;
  }
  .key {
    font-weight: 600;
    font-size: 15px;
    line-height: 23px;
    color: #000000;
    opacity:0.8;
    margin-right:10px;
  }
  .value {
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    color: #c4c4c4;
  }
`;
