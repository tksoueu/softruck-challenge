import { api } from "./http";

export const getSummary = () => {
  return api.get("/summary");
};
