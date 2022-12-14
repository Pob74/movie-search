import { useState } from "react"
import MovieCard from "../components/MovieCard"

function Search() {
  const [query, setQuery] = useState("")
  const [movies, setMovies] = useState([])

  const searchMovies = async (e) => {
    e.preventDefault()

    const url = `https://api.themoviedb.org/3/search/movie?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&query=${query}&page=1&include_adult=false`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
      console.log(data.results)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <>
      <h1 className="title">MOVIE SEARCH</h1>
      <form className="form" onSubmit={searchMovies}>
        <label htmlFor="query" className="label">
          Movie name:
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="enter movie name"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {movies
          .filter((movie) => movie.poster_path)
          .map((movie) => (
            <MovieCard movie={movie} key={movie.id} />
          ))}
      </div>
    </>
  )
}

export default Search
