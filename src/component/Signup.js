import React from 'react'
import {useState} from 'react'

const Signup = () => {
    const [name, setName] = useState('')
    const [email,setEmail] = useState('')
    const [password ,setPassword] =useState('')

    const handleRegister=()=>{
        console.table(name,email,password)
    }

    // const handleOnSubmit=()=>{
    //     console.log('submitted')
    // }

    const handleSignupEvent=(e)=>{
      e.preventDefault()

    }
  return (
    <div>
      <h1>Signup Page</h1>

      <form onSubmit={handleSignupEvent}>
        <label>Name :</label>
        <input type="text" placeholder='Enter Your Name' name="name" value={name} onChange={(e)=>setName(e.target.name)} />
        <br />
        <label>Email:</label>
        <input type="email" name="email" id="" value={email} placeholder='Enter Your Name' onChange={(e)=>setEmail(e.target.email)} />
        <br />
        <label>Password :</label>
        <input type="password" name="password" value={password} placeholder='Enter your Password' onChange ={(e)=>setPassword(e.target.value)} />
        <br />
        <button onClick={handleRegister}>Signup</button>
      </form>

    </div>
  )
}

export default Signup
