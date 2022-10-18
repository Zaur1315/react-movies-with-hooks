import Movie from './Movie'

function Movies(props) {
  const { movies = [] } = props
  return (
    <div className="movies">
      {movies.length ? (
        movies.map((movie) => <Movie key={movie.imdbID} {...movie} />)
      ) : (
        <img
          src="./21895128.jpg"
          alt="Not Found"
          style={{ 'max-width': '120%' }}
        />
      )}
    </div>
  )
}

export default Movies
