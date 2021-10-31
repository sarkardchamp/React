import { useContext } from "react";
import MeetupList from "../components/meetups/MeetupList";
import FavoritesContext from "../store/favorites-context";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);
  if (!favoritesCtx.totalFavorites) {
    return <h2>You got no favorites yet. Start adding some?</h2>;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      <MeetupList data={favoritesCtx.favorites} />
    </section>
  );
};

export default Favorites;
