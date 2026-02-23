import { useEffect, useRef, useState } from 'react';
import MovieList from '../components/MovieList'

function Home() {

    const [ movies, setMovies ] = useState([]);
    const [ loading, setLoading ] = useState(false);

    const inputRef = useRef();
    const handleSearch = (e) => {
        e.preventDefault();
        const query = inputRef.current.value.trim();
        if(query) fetchMovies(query);
    }

    const fetchMovies = async (query) => {
        setLoading(true);
        const res = await fetch(`http://www.omdbapi.com/?apikey=448f6f14&s=${query}`);
        const data = await res.json();
        console.log(data);
        setMovies(data.Search || []);
        setLoading(false);
    }
    useEffect(() => {
        fetchMovies('avengers');
    }, []);

  return (
     <div className="home">
		<form onSubmit={ handleSearch }>
			<input ref={ inputRef } className="searchInput" placeholder="Search for a movie..." />
			<button type="submit">Search 🔎</button>
		</form>

        {/* <MovieList movies={movies} /> */}
        { loading ? <p>Loading...</p> : <MovieList movies={movies} /> }
        {/* {loading ? <p>Loading...</p> : <MovieList movies={movies} />} */}
		
	</div>
  )
}

export default Home