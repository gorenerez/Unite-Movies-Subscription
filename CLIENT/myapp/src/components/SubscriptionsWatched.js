import { useState, useEffect } from 'react'
import { getAllSubscriptionsByMovieId } from '../Utils'
import { Link } from 'react-router-dom'
import moment from 'moment'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEye } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faEye} />

const url = 'http://localhost:8000/api/subscriptions'

const SubscriptionsWatched = ({movie}) => {

    const [subscriptions, setSubscriptions] = useState([])

    //Get all movie subscriptions onload
    useEffect(() => {
        const getSubscriptions = async () => {
          const resp = await getAllSubscriptionsByMovieId(url, movie._id)
          setSubscriptions(resp.data)
      }
      getSubscriptions()
      },[movie._id])

    //Subscription reapter of member watched this movie
    const subs = subscriptions.map(sub => {
      return(
        <li key={sub._id}><Link to='/main/subscriptions'>{sub.MemberName}</Link> - {moment(sub.Date).format("L")}</li>
      )
    })

    
  return (
    <div className='SubscriptionsWatched'>
        <h3>Subscriptions Watched {element}</h3>
        
        <ul style={{listStyleType : 'none'}}>
          {subs}
        </ul>
        <br />
        
    </div>
  )
}

export default SubscriptionsWatched
