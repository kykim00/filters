import { atom } from "recoil";
import { QueryParams } from "../types";

export const paramState = atom<QueryParams>({
  key: "paramState",
  default: {},
});
