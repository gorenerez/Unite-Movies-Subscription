import {  useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { addItem } from '../Utils'

import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserLock } from '@fortawesome/free-solid-svg-icons'
const element = <FontAwesomeIcon icon={faUserLock} className='loginicon' />

const url = 'http://localhost:8000/api/users'

export const Login = () => {

    const navigate = useNavigate()
    const [user, setUser] = useState({})


    //Save username & password on change
    const handleChange = (e) => {
      const { name, value } = e.target;
    setUser({ ...user, [name]: value })
    }

    //Send username & password to server and check if authenticated
    //then save user full name and permission in session storage
    const handleSubmit = async (e) => {
      e.preventDefault()

      const resp = await addItem(url, user)
      if(resp.data === "No match")
      {
        toast.error(
          "Sorry user is not registered!",
          {
            duration: 6000,
          }
        )
      }
      else
      {
        console.log(resp.data)
        sessionStorage["name"] = resp.data.Name
        sessionStorage["permission"] = resp.data.Permission
        navigate('/main/movies') 
      }    
    }


  return (
    <div style={{ textAlign: 'center', border: '150px solid #BE8C63', borderRadius: '90px',  width: '30%', margin: 'auto' }}>
      
        <h3>Login  {element}</h3>

        <ToastContainer />
        
          <form onSubmit={handleSubmit}>
                  <input type='text' name='UserName' placeholder='Username' required  onChange={handleChange}/>{' '}
                  <br />
                  <input type='password' name='Password' placeholder='Password' onChange={handleChange} required />{' '}
                  <br /><br />
                  <button className='button' type='submit'>LOGIN</button>
                  <br /><br />
          </form>

    </div>
  )
}

export default Login;
