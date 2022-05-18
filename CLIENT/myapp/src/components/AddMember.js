import {useNavigate} from 'react-router-dom'
import { useState } from 'react'
import { addItem } from '../Utils'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const url = 'http://localhost:8000/api/members'

// Get with useEffect user data or from session and check permission
// if permission false - add member button => is unvisible

const AddMember = () => {

  const navigate = useNavigate()
  const [member, setMember] = useState({})

  //Save member details on change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setMember({ ...member, [name]: value })
  }

  //Post member form to server
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (member.Name && member.Email&& member.City) {
      const resp = await addItem(url, member)
      alert(resp.data)
      navigate('/main/subscriptions')
    } 
    else {
      toast.error('All fields mandatory!',
      {
        duration: 6000,
      }
     )
   }
  }

  return (
    <div className='add-edit-div'>

        <h3>Add New Member</h3>

        <ToastContainer />

        <form onSubmit={handleSubmit}>
                  Name : {' '} <input type='text' name='Name' onChange={handleChange}  />{' '} <br /><br />
                  Email : {' '}<input type='text' name='Email' onChange={handleChange} />{' '} <br /><br />
                  City : {' '}<input type='text' name='City' onChange={handleChange} />{' '} <br /><br /> 
                   
                  <button className='button' type='submit'>Save</button><button className='button' onClick={() => navigate('/main/subscriptions')}>Cancel</button>
                  <br /><br />
        </form>

    </div>
  )
}

export default AddMember