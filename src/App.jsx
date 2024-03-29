import { useState } from 'react'
import SignUpForm from './SignUpForm'
import Authenticate from './Authenticate'
import './App.css'


function App() {
  const [token , setToken] = useState(null);
  
  return (
    <>
      <h1>Please Login</h1>
      < SignUpForm token={token} setToken={setToken} />
      <Authenticate token={token} setToken={setToken}/>
    </>
  )
}

export default App
