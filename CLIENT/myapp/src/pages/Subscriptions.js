import {useNavigate} from 'react-router-dom'
import { useState, useEffect } from 'react'
import { getAll } from '../Utils';
import Member from '../components/Member'

const url = 'http://localhost:8000/api/members'


const Subscriptions = () => {

  const navigate = useNavigate()

  const [members, setMembers] = useState([])
  const [userPermission, setUserPermission] = useState("hidden")

  //Get all members data from server onload
  useEffect(() => {
    const getMembers = async () => {
        const resp = await getAll(url)
        setMembers(resp.data)
    }
    getMembers()
  }, [])

  //Onload check if user has permission to add member - check true/false in session storage
  useEffect(() => {
    if(sessionStorage["permission"] === "true")
    {
      setUserPermission("")
    }
  }, [])
  

   //Rendering Member component
   const membersRep = members.map((mmbr) => {
    return (
        <div key={mmbr._id}>
            <Member member={mmbr} /> <br />
        </div>  
    )
})


  return (
    <div className='mainDiv'>

        <h2>Subscriptions</h2>

        <button className='button' onClick={() => navigate('/main/subscriptions')}>All Members</button>{' '} <button className='add-member-button' onClick={() => navigate('/main/addmember')} hidden={userPermission}>Add Member</button>

      <ul>
        {membersRep}
      </ul>

      <button className='button' onClick={() => window.scrollTo(0, 0)}>Back To Top Of The Page</button> <br /> <br />
       
    </div>
  )
}

export default Subscriptions


