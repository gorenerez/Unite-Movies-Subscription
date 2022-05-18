
import { useNavigate } from "react-router-dom"
import { deleteItem, deleteSubscriptionItem } from '../Utils'
import SubscriptionsWatched from "./SubscriptionsWatched"

const url = 'http://localhost:8000/api/movies'
const url2 = 'http://localhost:8000/api/subscriptions'


const Movie = ({movie}) => {

    const navigate = useNavigate()

    //Rendering movie genre
    const genresRep = movie.Genres.map((genre, index) => {
        return (
            <span key={index}>{genre}  </span>
        )
    })

    //Delete movie data & movie subscriptions
    const deleteMovieData = async () => {
      const resp = await deleteItem(url, movie._id)
      
      deleteMovieSubscriptions()
      console.log(resp.data)
      alert(resp.data)
    }

    //Use this function when clicking on delete movie - call function inside deleteMovieData()
    const deleteMovieSubscriptions = async () => {
      const resp = await deleteSubscriptionItem(url2, movie._id)
      console.log(resp.data)
    }

    
  return (
    <div className='member-movie'>

       <h2>{movie.Name}</h2>
       
       Genres : {genresRep} <br /> <br />
       <img src={movie.Image} alt='Movie' /><br />
       <button className='button' onClick={() => navigate(`/main/editmovie/${movie._id}`)}>Edit</button>{' '}
       <button className='button' onClick={deleteMovieData}>Delete</button><br /><br />

      <SubscriptionsWatched movie={movie}/> <br />

    </div>
  )
}

export default Movie


