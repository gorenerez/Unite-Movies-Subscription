import { useState, useEffect } from 'react'
import { getAllSubscriptionsByMemberId } from '../Utils'
import { Link } from 'react-router-dom'
import AddSubscription from './AddSubscription'
import moment from 'moment'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faEye} />

const url = 'http://localhost:8000/api/subscriptions'

const MoviesWatchedByMember = ({member}) => {

    const [moviessubs, setMoviessubs] = useState([])
    const [subToMovieComponent, setSubToMovieComponent] = useState(false)

    //Get all movie subscriptions onload
    useEffect(() => {
        const getMoviesSubscriptions = async () => {
          const resp = await getAllSubscriptionsByMemberId(url, member._id)
          setMoviessubs(resp.data)
      }
      getMoviesSubscriptions()
      },[member._id])

    //Subscription reapter of movies watched by member 
    const subs = moviessubs.map(mov => {
        return(
          <li key={mov._id}><Link to='/main/movies'>{mov.MovieName}</Link> - {moment(mov.Date).format("L")}</li>
        )
    })

    //Onclick call function and make AddSubscription component visible
    const makeVisible = () => {
        setSubToMovieComponent(!subToMovieComponent)
      }

  return (
    <div className='MoviesWatchedByMember'>
        <h3>Movies Watched  {element}</h3>

        
        <ul style={{listStyleType : 'none'}}>
          {subs}
        </ul>
        <br />

        <button className='button' onClick={makeVisible}>Subscribe To Movie</button> <br /> <br />
        {subToMovieComponent && <AddSubscription member={member} moviessubs={moviessubs} />} <br />
        
    </div>
  )
}

export default MoviesWatchedByMember