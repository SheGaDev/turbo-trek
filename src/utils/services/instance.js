import axios from "axios";
import { MOCKAPI_URL } from "../constants/api";

export const instanse = axios.create({
  baseURL: MOCKAPI_URL,
  params: {
    limit: 12,
  },
});
