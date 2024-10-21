import { useRef} from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

function Form2(){

  let Emailref =useRef()
  let Passwordref =useRef()

  return(
    <>

      <div  className=" border  w-25 mt-5 m-auto p-4">
          <h1 className='text-center text-primary'>Form Validation 2</h1>

          <div className="mt-3">
            <label>Email</label>
            <input className="form-control" type='text' ref={Emailref}/>
          </div>

          <div className="mt-3">
            <label>Password</label>
            <input className="form-control" type='password' ref={Passwordref} />
          </div>

          <div className='mt-3'>
            <button className="btn btn-primary w-100" onClick={()=>{
                console.log(Emailref.current.value)
                console.log(Passwordref.current.value)
            }}>Submit</button>
          </div>

      </div>


    </>
  )
}

export default Form2