import { useState, useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { getAll } from '../Utils'
import Movie from '../components/Movie'

const url = 'http://localhost:8000/api/movies'

const Movies = () => {

  const navigate = useNavigate()

  const [movies, setMovies] = useState([])
  const [filteredMovies, setFilteredMovies] = useState([])
  const [searchField, setSearchField] = useState("")

  //Get all movies data from server onload
  useEffect(() => {
    const getMovies = async () => {
        const resp = await getAll(url)
        setMovies(resp.data)
        setFilteredMovies(resp.data)
    }
    getMovies()
  }, [])

  //Search for movie as user type show - movies that their letters in search field include in their name - onchange
  const find = () =>{
    if(filteredMovies && searchField !== "")
      {
        setMovies(filteredMovies.filter(mov => mov.Name.includes(searchField)))
      }
    else /*if(searchField ==="")*/
      {
        setMovies(filteredMovies)
      }   
  }

  //Save search field
  const handleChange = (e) => {
    find()
    setSearchField(e.target.value);
  }

  //Onclick shows back all movies
  const backToAllMovies = () => {
    setMovies(filteredMovies)
    navigate('/main/movies')
  }

  //Rendering Movie component
  const moviesRep = movies.map((mov) => {
      return (
          <div key={mov._id}>
              <Movie movie={mov} /> <br />
          </div>  
      )
  })


  return (
    <div className='mainDiv'>

        <h2>Movies</h2>

        <button className='button' onClick={backToAllMovies}>All Movies</button>{' '}<button className='button' onClick={() => navigate('/main/addmovie')}>Add Movie</button>{' '}
        <input type="search" placeholder='Search Movie' onChange = {handleChange}  />
        <ul>
            {moviesRep}
        </ul>
        
        <button className='button' onClick={() => window.scrollTo(0, 0)}>Back To Top Of The Page</button> <br /> <br />
    </div>
  )
}

export default Movies

