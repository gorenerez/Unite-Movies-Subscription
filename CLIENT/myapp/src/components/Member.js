import { useNavigate } from "react-router-dom"
import { deleteItem, deleteMemberSubscriptionItem } from '../Utils'
import MoviesWatchedByMember from "./MoviesWatchedByMember"


const url = 'http://localhost:8000/api/members'
const url2 = 'http://localhost:8000/api/subscriptions'


const Member = ({member}) => {

  const navigate = useNavigate()

  //Delete member date & delete member subscriptions to movies
  const deleteMemberData = async () => {
    const resp = await deleteItem(url, member._id)
  
    deleteMemberSubscriptions()
    console.log(resp.data)
    alert(resp.data)
    window.location.reload(false)
  }

  //Use this function when clicking on delete member - call function inside deleteMemberDate()
  const deleteMemberSubscriptions = async () => {
   const resp = await deleteMemberSubscriptionItem(url2, member._id)
   console.log(resp.data)
  }
  

  return (
    <div className='member-movie'>

        <h2>{member.Name}</h2>

        Email : {member.Email} <br />
        City : {member.City} <br /><br />
        <button className='button' onClick={() => navigate(`/main/editmember/${member._id}`)}>Edit</button>{' '}
        <button className='button' onClick={deleteMemberData}>Delete</button><br /><br />

        <MoviesWatchedByMember  member={member}/> <br />

    </div>
  )
}

export default Member
