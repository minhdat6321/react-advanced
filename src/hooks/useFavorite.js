import { useContext } from "react";
import { AddFavoriteContext } from "../contexts/AddFavoriteContext";

const useFavorite = () => {
  return useContext(AddFavoriteContext);
};

export default useFavorite;