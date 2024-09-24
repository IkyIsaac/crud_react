import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom';

const Read = () => {
  const[data,setData]=useState({})
  const {id}=useParams()
  console.log("Data",data)

  useEffect(() => {
    // const numId = parseInt(id, 10); 
    // console.log(numId)
    console.log(id)

    axios.get('http://localhost:3001/users/'+id)
      .then(res => setData(res.data))
      .catch(err => console.error(err));  
  }, [id]);

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center bg-light'>
      <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
        <h3>Detail of User</h3>
        <div className='mb-2'>
          <strong>Name: {data.name}</strong>
        </div>
        <div className='mb-2'>
          <strong>Email: {data.email}</strong>
        </div>
        <div className='mb-2'>
          <strong>Phone: {data.phone}</strong>
        </div>
      <Link to={`/update/${id}`} className='btn btn-sm btn-success'>Edit</Link>
      <Link to="/" className='btn btn-sm btn-primary mx-2'>Back</Link>
      </div>
    </div>
  )
}

export default Read