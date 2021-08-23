import { SET_USERNAME } from "./actionTypes";

export function editUsername(value) {
  return {
    type: SET_USERNAME,
    payload: value,
  };
}
