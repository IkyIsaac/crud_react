import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Create = () => {
  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:''
  })
  const navigate = useNavigate();

  const handleSubmit = (event)=>{
    event.preventDefault()


    axios.post('http://localhost:3001/users',values)
      .then(res=>{
        console.log(res)
        navigate('/')
      })
      .catch(err => console.error(err));
  }

  return (
    <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <div className='w-50 bg-white shadow px-5 pt-3 bp-5 rounded'>
        <h1>Add a User</h1>
        <form onSubmit={handleSubmit}>
        <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name' onChange={e=>setValues({...values,name: e.target.value})} />
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Email:</label>
            <input type="email" name='email' className='form-control' placeholder='Enter Email'onChange={e=>setValues({...values,email: e.target.value})} />
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Phone:</label>
            <input type="text" name='phone' className='form-control' placeholder='Enter Phone' onChange={e=>setValues({...values,phone: e.target.value})}/>
          </div>
          <button className='btn btn-sm btn-success'>Submit</button>
          <Link to="/" className='px-3 btn btn-sm btn-primary m-3' >Back</Link>
        </form>
      </div>
    </div>
  )
}

export default Create