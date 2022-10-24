import { useState, useEffect } from "react"
import MovieCard from "../components/MovieCard"

function Home() {
  const [movies, setMovies] = useState([])

  const popularMovies = async () => {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&page=1`

    try {
      const res = await fetch(url)
      const data = await res.json()
      setMovies(data.results)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    popularMovies()
  }, [])
  return (
    <>
      <h1 className="title"> POPULAR MOVIES</h1>
      <div className="card-list">
        {movies.map((movie) => (
          <MovieCard movie={movie} key={movie.id} />
        ))}
      </div>
    </>
  )
}

export default Home
