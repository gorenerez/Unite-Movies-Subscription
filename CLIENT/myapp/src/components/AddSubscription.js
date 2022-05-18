import { useState , useEffect } from 'react'
import { getAll, addItem } from '../Utils'

const url = 'http://localhost:8000/api/movies'
const url2 = 'http://localhost:8000/api/subscriptions'


const AddSubscription = ({member, moviessubs}) => {

    const [movies, setMovies] = useState([])
    const [subscription, setSubscription] = useState({})
    const [moviesnameswithoutwatched, setMoviesnameswithoutwatched] = useState([])

    //Get all movies data from server
  useEffect(() => {
    const getMovies = async () => {
        const resp = await getAll(url)
        setMovies(resp.data)
    }
    getMovies()
  }, [])


  //Save subscription details on change
  const handleChange = (e) => {
    const { name, value } = e.target
    setSubscription({ ...subscription, [name]: value })
  }

  //Add new subscription by getting movie id, then send subscription obj to the server
  const addSubscription = async () => {
      const movieid = movies.filter(mov => mov.Name === subscription.MovieName).map(mov => mov._id)
      const newSubscription = {MovieId : movieid[0], MemberId : member._id, MovieName : subscription.MovieName, MemberName : member.Name, Date : subscription.Date}
      const resp = await addItem(url2, newSubscription)
      alert(resp.data)
      window.location.reload(false)
  }

  //Filter from all movies the movies that the member didn't watch yet
  const filterMoviesThatMemberWatched = () => {
    const allMoviesNames = movies.map(function (mov){
      return mov.Name
    })
    
    const allMoviesMemberWatchedNames = moviessubs.map(function (sub){
      return sub.MovieName
    })

    const namesToDeleteSet = new Set(allMoviesMemberWatchedNames)

    const moviesThatMemberDidntWatchNames = allMoviesNames.filter((movName) =>{
      return !namesToDeleteSet.has(movName)
    })
    setMoviesnameswithoutwatched(moviesThatMemberDidntWatchNames)
  }


  //Movies names repeater in the select dropdown - only those member didn't watch
  const moviesNamesRep = moviesnameswithoutwatched.map((mov,index) => {
    return (
      <option key={index}>{mov}</option>
    )
  })


  return (
    <div className='AddSubscription'>

        <h3>Add a new movie</h3>

        <select onClick={filterMoviesThatMemberWatched}   name="MovieName" onChange={handleChange}>
            <option>Choose movie</option>
            {moviesNamesRep} 
        </select>{' '}<input type="date" name="Date" onChange={handleChange} /> 

        <br /><br />

        <button className='button' onClick={addSubscription}>Subscribe</button>

        <br /><br />
    </div>
  )
}

export default AddSubscription