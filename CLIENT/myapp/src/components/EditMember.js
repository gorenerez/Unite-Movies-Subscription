import {useNavigate, useParams} from 'react-router-dom'
import { useState, useEffect } from 'react';
import { getById, updateItem } from '../Utils'


const url = 'http://localhost:8000/api/members'


const EditMember = () => {

  const { id } = useParams();
  const [member, setMember] = useState({Name: "", Email: "", City: ""})
  const navigate = useNavigate()

  //Get member data from server using id params
  useEffect(() => {
    const getMember = async () => {
        const resp = await getById(url, id)
        setMember(resp.data) 
    }
    getMember()
  }, [id])


  //Put new member form to server
  const handleSubmit = async (e) => {
    e.preventDefault()

    if (member.Name && member.Email&& member.City) {
      const resp = await updateItem(url, id, member)
      alert(resp.data)
      navigate('/main/subscriptions')
    } 
    else {
      alert('Missing Data!')
    }
  }

  return (
    <div className='add-edit-div'>

        <h3>Edit Member</h3>
        
        <form onSubmit={handleSubmit}>
                Name :{' '} <input type='text' value={member.Name} onChange={(e) => setMember({ ...member, Name: e.target.value })} />{' '} <br /><br />
                Email : {' '}<input type='text' value={member.Email} onChange={(e) => setMember({ ...member, Email: e.target.value })} />{' '} <br /><br /> 
                City : {' '}<input type='text' value={member.City} onChange={(e) => setMember({ ...member, City: e.target.value })} />{' '} <br /><br />
                
                <button className='button' type='submit'>Save</button><button className='button' onClick={() => navigate('/main/subscriptions')}>Cancel</button>
                <br /><br />
                
        </form>

    </div>
  )
}

export default EditMember