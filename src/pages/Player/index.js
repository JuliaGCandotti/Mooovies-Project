import Title from "../../components/Title";
import Banner from "../../components/Banner";
import { useParams } from "react-router-dom";
import movies from "../../json/db.json";
import OopsError from "pages/OopsError";

export default function Player() {
  const parameters = useParams();
  const movie = movies.find((movie) => {
    return movie.id === Number(parameters.id);
  });

  if (!movie) {
    return <OopsError />;
  }

  return (
    <>
      <Banner image="player" />
      <Title>
        <h1>Watch the Trailer!</h1>
      </Title>
      <section>
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${movie.linkId}`}
          title={movie.title}
        ></iframe>
      </section>
    </>
  );
}
