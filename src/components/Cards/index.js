import styles from "./Cards.module.css";
import likeIcon from "./like.png";
import { useFavoriteContext } from "../../_utils/context/Favorites";
import unlikeIcon from "./unlike.png";
import { Link } from "react-router-dom";

export default function Cards({ id, title, cover }) {
  const { favorite, addFavorite } = useFavoriteContext();
  const itsFavorite = favorite.some((fav) => fav.id === id);
  const icon = itsFavorite ? likeIcon : unlikeIcon;

  return (
    <div className={styles.container}>
      <Link className={styles.link} to={`/${id}`}>
        <img src={cover} alt={title} className={styles.cover} />
        <h2>{title}</h2>
      </Link>
      <img
        src={icon}
        alt="Like movie"
        className={styles.like}
        onClick={() => addFavorite({ id, title, cover })}
      />
    </div>
  );
}
