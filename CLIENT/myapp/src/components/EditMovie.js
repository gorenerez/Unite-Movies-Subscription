import {useNavigate, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getById ,updateItem } from '../Utils';

const url = 'http://localhost:8000/api/movies'

const EditMovie = () => {

  const { id } = useParams()
  const [movie, setMovie] = useState({Name: "", Genres: [""], Image: "", YearPremiered: 0})
  const navigate = useNavigate()

  //Get movie data from server using id params
  useEffect(() => {
    const getMovie = async () => {
        const resp = await getById(url, id)
        setMovie(resp.data) 
    }
    getMovie()
  }, [id])


  //Put new movie form to server
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (movie.Name && movie.Genres && movie.Image && movie.YearPremiered) {
      const resp = await updateItem(url, id, movie)
      alert(resp.data)
      navigate('/main/movies')
    } 
    else {
      alert('Missing Data!')
    }
  }


  return (
    <div className='add-edit-div'>

        <h3>Edit Movie</h3>

          <form onSubmit={handleSubmit}>
            
                  Name :{' '} <input type='text' value={movie.Name} onChange={(e) => setMovie({ ...movie, Name: e.target.value })} />{' '} <br /><br />
                  Genres : {' '}<input type='text' value={movie.Genres} onChange={(e) => setMovie({ ...movie, ...movie.Genres, Genres: e.target.value })} />{' '} <br /><br />
                  Image url : {' '}<input type='text' value={movie.Image} onChange={(e) => setMovie({ ...movie, Image: e.target.value })} />{' '} <br /><br /> 
                  Premiered Year : {' '}<input type='number' value={movie.YearPremiered} onChange={(e) => setMovie({ ...movie, YearPremiered: e.target.value })} />{' '} <br /><br />
                  <img src={movie.Image} alt='Movie' /> <br />
                  <button className='button' type='submit'>Save</button><button className='button' onClick={() => navigate('/main/movies')}>Cancel</button>
                  <br /><br />

          </form>
          
    </div>
  )
}

export default EditMovie