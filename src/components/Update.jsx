import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'

const Update = () => {
  // const[data,setData]=useState([])
  const {id} = useParams()

  const [values,setValues]=useState({
    name:'',
    email:'',
    phone:''
  })
  const navigate = useNavigate();


  useEffect(() => {
    console.log(id)

    axios.get(`http://localhost:3001/users/${id}`)
      .then(res => {
        setValues(res.data)
      })
      .catch(err => console.error(err));  
  }, [id]);

  const handleUpdate = (event)=>{
    event.preventDefault()


    axios.put(`http://localhost:3001/users/${id}`,values)
      .then(res=>{
        console.log(res)
        navigate('/')
      })
      .catch(err => console.error(err));
  }


  return (
      <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
      <div className='w-50 bg-white shadow px-5 pt-3 bp-5 rounded'>
        <h1>Update User</h1>
        <form onSubmit={handleUpdate}>
        <div className='mb-2'>
            <label htmlFor="name">Name:</label>
            <input type="text" name='name' className='form-control' placeholder='Enter Name' value={values.name} onChange={e=>setValues({...values,name: e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Email:</label>
            <input type="email" name='email' className='form-control' placeholder='Enter Email' value={values.email} onChange={e=>setValues({...values,email: e.target.value})}/>
          </div>
          <div className='mb-2'>
            <label htmlFor="name">Phone:</label>
            <input type="text" name='phone' className='form-control' placeholder='Enter Phone' value={values.phone} onChange={e=>setValues({...values,phone: e.target.value})}/>
          </div>
          <button className='btn btn-sm btn-success'>Update</button>
          <Link to="/" className='px-3 btn btn-sm btn-primary m-3' >Back</Link>
        </form>
      </div>
    </div>
    )
}

export default Update