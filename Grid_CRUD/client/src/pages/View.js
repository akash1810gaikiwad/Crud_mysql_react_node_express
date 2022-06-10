import React, {useEffect, useState} from 'react'
import { useParams , Link } from 'react-router-dom'
import axios from 'axios'
import "./View.css"


const View = () => {
    const[user,setUser]= useState({})
    const {id} = useParams();
    useEffect(()=>{
        axios.get(`http://localhost:5000/api/get/${id}`).then((resp)=>setUser({...resp.data[0]}))
      },[id])
    
  return (
    <div style={{marginTop:"150px"}}>

        <div className='card'>
            <div className='card-header'>
                <p>User Contact Details</p>
            </div>
            <div className='container'>
                <strong>ID: </strong>
                <span>{id}</span>
                <br/>
                <strong>name: </strong>
                <span>{user.name}</span>
                <br/>
                <strong>email </strong>
                <span>{user.email}</span>
                <br/>
                <strong>contact </strong>
                <span>{user.contact}</span>
                <br/>

<Link to="/">
<button className='btn btn-edit'>BACK HOME</button>
</Link>
            </div>
        </div>
    </div>
  )
}

export default View