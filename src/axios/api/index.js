import python from './python.js'
import test from './test.js'
import ewellAI from "./ewell.js";
import mp from "./mp.js";
import { request } from '@/axios/request/http.js'

export const api = {
  ...python,
  ...test,
  ...ewellAI,
  ...mp,
}
