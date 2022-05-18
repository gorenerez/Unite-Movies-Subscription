import { useNavigate, Outlet } from 'react-router-dom'
import  moment  from 'moment'

const Main = () => {

  const navigate = useNavigate()

  //Getting user name when he log in and session storaged to show it all the time
  const name = sessionStorage["name"]

  return (
    <div>
        <div>
              <h3 style={{color : '#A97155'}}>Hey {name} --  {moment().format('MMMM Do YYYY')}</h3>
              
              
              <button className='button' onClick={() => navigate('movies')}>MOVIES</button>{' '}
              <button className='button' onClick={() => navigate('subscriptions')}>SUBSCRIPTIONS</button>{' '}
              <button className='button' onClick={() => navigate('/')}>LOG OUT</button>{' '}<br /> <br />
              <Outlet />
        </div>
    </div>
  )
}

export default Main