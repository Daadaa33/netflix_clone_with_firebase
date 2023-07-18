import { atom } from "recoil";

export const modelState = atom({
  key: "modelState",
  default: false,
});

export const movieState = atom({
  key: "movieState",
 default : null,
});
