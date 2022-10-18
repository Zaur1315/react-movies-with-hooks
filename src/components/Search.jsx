import { useState } from 'react'

const Search = ({ searchMovies }) => {
  const [search, setSearch] = useState('')
  const [type, setType] = useState('all')

  const handleKey = (event) => {
    if (event.key === 'Enter') {
      searchMovies(search, type)
    }
  }

  const handleFilter = (event) => {
    setType(event.target.dataset.type)
    searchMovies(search, event.target.dataset.type)
  }

  return (
    <div className="row">
      <div className="input-field" style={{ display: 'flex' }}>
        <input
          id="email_inline"
          type="search"
          className="validate"
          placeholder="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKey}
        />
        <button
          className="btn #607d8b blue-grey"
          onClick={() => searchMovies(search, type)}
        >
          Search
        </button>
      </div>
      <div className="check-box">
        <p>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="all"
              onChange={handleFilter}
              checked={type === 'all'}
            />
            <span>All</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="movie"
              onChange={handleFilter}
              checked={type === 'movie'}
            />
            <span>Movie Only</span>
          </label>
        </p>
        <p>
          <label>
            <input
              className="with-gap"
              name="group3"
              type="radio"
              data-type="series"
              onChange={handleFilter}
              checked={type === 'series'}
            />
            <span>Series Only</span>
          </label>
        </p>
      </div>
    </div>
  )
}

export default Search
