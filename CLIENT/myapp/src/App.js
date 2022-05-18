import './App.css'
import { Routes, Route} from 'react-router-dom'
import Login  from './pages/Login'
import Main from './pages/Main'
import Movies from './pages/Movies'
import Subscriptions from './pages/Subscriptions'
import AddMovie from './components/AddMovie'
import EditMovie from './components/EditMovie'
import AddMember from './components/AddMember'
import EditMember from './components/EditMember'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClapperboard } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faClapperboard} className='movieicon' />

function App() {
  return (
    <div style={{ textAlign: 'center'}}>
      
        <h1> {element} UNITE SUBSCRIPTIONS TO MOVIES {element} </h1>

        <Routes>

        <Route path='/' element={<Login />} />
        <Route path='/main' element={<Main />} >
              <Route path='subscriptions' element={<Subscriptions />} />
              <Route path='addmember' element={<AddMember />} />
              <Route path='editmember/:id' element={<EditMember />} />
              <Route path='movies' element={<Movies />} />
                  <Route path='addmovie' element={<AddMovie />} />
                  <Route path='editmovie/:id' element={<EditMovie />} />
              </Route>  
         
        </Routes>

    </div>
  )
}

export default App;