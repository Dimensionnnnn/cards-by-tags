import { API_URL } from "./constants";
import { Card } from "./types";

export const getCourses = async (): Promise<Card[]> => {
  const response = await fetch(API_URL);
  const data: Card[] = await response.json();
  return data;
};
