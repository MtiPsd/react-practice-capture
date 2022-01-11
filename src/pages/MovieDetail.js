import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { MovieState } from "../movieState";

const MovieDetail = () => {
  let location = useLocation();
  let url = location.pathname;

  //...........................States....................................

  const [movies, setMovies] = useState(MovieState);
  const [movie, setMovie] = useState(null);

  //...........................UseEffect.................................

  useEffect(() => {
    const currentMovie = movies.filter((movieState) => movieState.url === url);
    setMovie(currentMovie[0]);
  }, [movies, url]);

  //................................App.....................................

  return (
    <>
      {movie && (
        <div className="details">
          <div className="headline">
            <h2>{movie.title}</h2>
            <img src={movie.mainImg} alt="movie" />
          </div>
          <div className="awards">
            {movie.awards.map((award) => {
              return (
                <Award
                  title={award.title}
                  description={award.description}
                  key={award.title}
                />
              );
            })}
          </div>
          <DisplayImg movie={movie.secondaryImg} />
        </div>
      )}
    </>
  );
};

// Award & Image Components
const Award = ({ title, description, secondaryImg }) => {
  return (
    <div className="award">
      <h3>{title}</h3>
      <div className="line"></div>
      <p>{description}</p>
    </div>
  );
};

const DisplayImg = ({ movie }) => {
  return (
    <div className="displayImage">
      <img src={movie} alt="display" />
    </div>
  );
};

export default MovieDetail;
