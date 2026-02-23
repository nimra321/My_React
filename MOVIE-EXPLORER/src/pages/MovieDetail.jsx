import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetail() {

    const { id } = useParams();

    const [ movie, setMovie ] = useState(null);

    useEffect(() => {
        async function getMovie() {
            const res = await fetch(`http://www.omdbapi.com/?apikey=448f6f14&i=${id}`);
            const data = await res.json();
            setMovie(data);
            console.log(data);
        }
        getMovie();
    }, [id]);

    

    if(!movie) return <p>Loading...</p>;

  return (
    <div className="movie-detail">
        <h2>{movie.Title}</h2>
        <img src={movie.Poster} alt={movie.Title} />
        <p>Year: {movie.Year}</p>
        <p>Plot: {movie.Plot}</p>
        <p>Actors: {movie.Actors}</p>
        <p>Director: {movie.Director}</p>
        <p>Genre: {movie.Genre}</p>
        <p>Runtime: {movie.Runtime}</p>
        <p>IMDB Rating: {movie.imdbRating}</p>
        <p>IMDB Votes: {movie.imdbVotes}</p>
        
    </div>
  )
}

export default MovieDetail;
