import request from "../../request";
import { CAT_INFO } from "./constants/actionTypes";

export const catInfo = payload => ({
  type: CAT_INFO.default,
  payload
});

export const catInfoBoundActionCreator = data => dispatch => {
  const payload = request({
    url: `https://api.thecatapi.com/v1/images/search?limit=9&mime_types=&order=Random&size=small&page=0&breed_ids=${data}&sub_id=demo-eb775d`,    
    method: "GET",
    headers: { "x-api-key": `${process.env.CAT_API_KEY}` }
  });
  dispatch(catInfo(payload));
};

export default catInfoBoundActionCreator;

