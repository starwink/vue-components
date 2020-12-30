import python from "./python.js";
import test from "./test.js";
import { request } from "@/axios/request/http.js";


export const api = {
  ...python,
  ...test,
};
