import styles from "./Favorites.module.css";
import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Cards";
import { useFavoriteContext } from "../../_utils/context/Favorites";

export default function Favorites() {
  const { favorite } = useFavoriteContext();

  return (
    <>
      <Banner image="favorites" />
      <Title>
        <h1>My Favorite Mooovies</h1>
      </Title>
      <section className={styles.container}>
        {favorite.map((fav) => {
          return <Card {...fav} key={fav.id} />;
        })}
      </section>
    </>
  );
}
