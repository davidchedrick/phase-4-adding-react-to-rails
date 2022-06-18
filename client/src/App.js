import { useEffect, useState } from "react";
import "./App.css";

function App() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch("/movies")
            .then(r => r.json())
            .then(movies => setMovies(movies));
    }, []);

    const movieTitles = movies.map(movie => <h2>{movie.title}</h2>);

    return (
        <>
            <h1>Hello fom React!</h1>
            <ul>{movieTitles}</ul>
        </>
    );
}

export default App;
