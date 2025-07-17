import { api } from "./http";

export const getCourses = () => {
  return api.get("/courses");
};
