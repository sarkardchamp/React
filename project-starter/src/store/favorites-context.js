import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalFavorites: 0,
  addFavorite: (favoriteMeetup) => {},
  removeFavorite: (meetupId) => {},
  itemIsFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);
  const addFavoriteHandler = (favoriteMeetup) => {
    setUserFavorites((prevState) => {
      return prevState.concat(favoriteMeetup);
    });
  };
  const removeFavoriteHandler = (meetupId) => {
    setUserFavorites((prevState) => {
      return prevState.filter((meetup) => meetup.id !== meetupId);
    });
  };
  const itemIsFavoriteHandler = (meetupId) => {
    return userFavorites.some((meetup) => meetupId === meetup.id);
  };
  const context = {
    favorites: userFavorites,
    totalFavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHandler,
    itemIsFavorite: itemIsFavoriteHandler,
  };
  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
