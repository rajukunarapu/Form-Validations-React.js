import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Form1(){

  let[email,setEmail] = useState()
  let[password,setPassword] = useState()

  return(
    <>

      <div  className=" border  w-25 mt-5 m-auto p-4">
          <h1 className='text-center text-primary'>Form Validation 1</h1>

          <div className="mt-3">
            <label>Email</label>
            <input className="form-control" type='text' value={email} onChange={(e)=>{
              setEmail(e.target.value)
    
            }} />
          </div>

          <div className="mt-3">
            <label>Password</label>
            <input className="form-control" type='password' value={password} onChange={(e)=>{
              setPassword(e.target.value)
          
            }}/>
          </div>

          <div className='mt-3'>
            <button className="btn btn-primary w-100 " onClick={()=>{
              setEmail("")
              setPassword("")
              console.log(email)
              console.log(password)
              
            }}>Submit</button>
          </div>

      </div>


    </>
  )
}

export default Form1