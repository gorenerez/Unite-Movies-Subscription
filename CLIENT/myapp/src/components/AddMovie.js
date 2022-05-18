import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { addItem } from '../Utils'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const url = 'http://localhost:8000/api/movies'

const AddMovie = () => {

  const [addGenreInput, setAddGenreInput] = useState(false)
  const [movie, setMovie] = useState({})

  //Save movie details on change
  const handleChange = (e) => {
    const { name, value } = e.target
    setMovie({ ...movie, [name]: value })
  }

  //When clicking change input visibility
  const showInput = () => {
    setAddGenreInput(!addGenreInput)
  }

  //Post movie form to server
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (movie.Name && movie.Image && movie.YearPremiered && movie.Genres) {
      const resp = await addItem(url, movie)
      alert(resp.data)
      navigate('/main/movies')
    } 
    else {
      toast.error('All fields mandatory!',
      {
        duration: 6000,
      }
     )
   }
  }
  
  const navigate = useNavigate()

  return (
    <div className='add-edit-div'>

        <h3>Add New Movie</h3>

        <ToastContainer />

          <form onSubmit={handleSubmit}>
            
                  Name :{' '} <input type='text' name='Name' onChange={handleChange} />{' '} <br /><br />
                  Genre : {' '}<input type='text' name='Genres' onChange={handleChange} />{' '} <button className='plusbutton' onClick={showInput}>+</button> <br /><br />

                  {addGenreInput ? <div>Genre : {' '}<input type='text' name='Genres' onChange={handleChange} />{' '}<button className='plusbutton' onClick={showInput}>-</button><br /><br /></div> : null}
                  Image url : {' '}<input type='text' name='Image' onChange={handleChange} />{' '} <br /><br /> 

                  Premiered Year : {' '}<input type='number' name='YearPremiered' onChange={handleChange} />{' '} <br /><br />
                   
                  <button className='button' type='submit'>Save</button><button className='button' onClick={() => navigate('/main/movies')}>Cancel</button>
                  <br /><br />

          </form>

    </div>
  )
}

export default AddMovie