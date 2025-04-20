import Banner from "../../components/Banner";
import Title from "../../components/Title";
import Card from "../../components/Cards";
import movies from "../../json/db.json";
import styles from "./Homepage.module.css";

export default function Homepage() {
  return (
    <>
      <Banner image="home" />
      <Title>
        <h1>The Devs' Picks</h1>
      </Title>
      <section className={styles.container}>
        {movies.map((movie) => {
          return <Card {...movie} key={movie.id} />;
        })}
      </section>
    </>
  );
}
