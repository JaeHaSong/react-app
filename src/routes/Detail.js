import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom/cjs/react-router-dom";

function Detail() {
  const { id } = useParams();

  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState();

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    // console.log(json);

    setMovie(json.data.movie);
    setLoading(false);
    console.log(movie);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      {loading ? (
        <h2>loading...</h2>
      ) : (
        <div>
          <h1>Detail</h1>
          <img src={movie.medium_cover_image} alt="" />
          <h2>{movie.title}</h2>
          <p>{movie.description_intro}</p>
          <Link to="/">Back</Link>
        </div>
      )}
    </div>
  );
}

export default Detail;
