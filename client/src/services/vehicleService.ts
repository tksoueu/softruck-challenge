import { api } from "./http";

export const getVehicle = () => {
  return api.get("/vehicle");
};
