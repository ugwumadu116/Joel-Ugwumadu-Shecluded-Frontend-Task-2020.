import styled from "styled-components";

export const Container = styled.div`
  /* max-width: 1140px; */
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-flow: row wrap;
  height: 90vh;
  overflow-x: hidden;
  ::-webkit-scrollbar {
    display: none;
  }
  scrollbar-width: none;
  -ms-overflow-style: none;
`;

export const PaginateWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 10px;
  .pagination {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 30px;
    width: 300px;
    border: solid whitesmoke 2px;
    border-radius: 7px;
    li {
      border: solid whitesmoke 2px;
      width: 100%;
      height: 30px;

      text-align: center;
    }
    .active {
      background: linear-gradient(105.88deg, #f41313 -28.55%, #f90178 125.13%);
    }
  }
`;
