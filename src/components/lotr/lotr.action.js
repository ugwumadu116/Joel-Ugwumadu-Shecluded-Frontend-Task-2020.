import request from "../../request";
import { LOTR_INFO } from "./constants/actionTypes";
const KEY = process.env.REACT_APP_LOTR_API_KEY;

export const lotrInfo = payload => ({
  type: LOTR_INFO.default,
  payload
});

export const lotrInfoBoundActionCreator = () => dispatch => {
  const payload = request({
    url: `https://the-one-api.herokuapp.com/v1/character`,
    method: "GET",
    headers: { Authorization: `Bearer ${KEY}` }
  });
  dispatch(lotrInfo(payload));
};

export default lotrInfoBoundActionCreator;
