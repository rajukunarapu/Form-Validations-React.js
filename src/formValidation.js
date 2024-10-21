import { useState } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Formvalidation(){

  let[email,setEmail] = useState("")
  let[password,setPassword] = useState("")

  let[errors,setErrors] = useState({
    emailError:"",
    passwordError:""
  })

  const EmailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/

  function getHandle(){
    if(email.trim() === ""){
      setErrors((errors)=>({...errors,emailError:"Enter the Email Address" }))
    }

    else if(!EmailRegExp.test(email)){
      setErrors((errors)=>({...errors,emailError:"Enter the valid Email Address" }))
    }

    else{
      setErrors({...errors,emailError:""})
    }

    if(password.trim() === ""){
      setErrors((errors)=>({...errors,passwordError:"Enter the Password" }))
    }

    else if(password.length<8){
      setErrors((errors)=>({...errors,passwordError:"Password is minimum 8 characters" }))
    }

    else{
      setErrors({...errors,passwordError:""})
    }

  }

  return(
    <>

      <div  className=" border  w-25 mt-5 m-auto p-4">
          <h1 className='text-center text-primary'>Form Validation 3</h1>

          <div className="mt-3">
            <label>Email</label>
            <input className="form-control" type='text' value={email} onChange={(e)=>{
              setEmail(e.target.value)
            }} />
          </div>

            {
              errors.emailError&&<span className='text-danger'>{errors.emailError}</span>
            }


          <div className="mt-3">
            <label>Password</label>
            <input className="form-control" type='password' value={password} onChange={(e)=>{
              setPassword(e.target.value)
            }}/>
          </div>

          {
            errors.passwordError&&<span className='text-danger'>{errors.passwordError}</span>
          }

          <div className='mt-3'>
            <button className="btn btn-primary w-100 " onClick={()=>{
              setEmail("")
              setPassword("")
              console.log(email)
              console.log(password)

              getHandle()
              
            }}>Submit</button>
          </div>

      </div>


    </>
  )
}


export default Formvalidation