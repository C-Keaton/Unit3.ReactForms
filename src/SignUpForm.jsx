import { useState } from "react";

const SignUpForm = ({token, setToken}) => {
  const API_URL_SIGNUP = "https://fsa-jwt-practice.herokuapp.com/signup"

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = async(event) => {
    event.preventDefault()

    try {
      const response = await fetch(API_URL_SIGNUP, {
        method: "POST", 
        headers: 
        { 
          "Content-Type": "application/json" 
        }, 
        body: JSON.stringify({
          username: username, 
          password: password 
        }) 
      })
      const jsonFile = await response.json()
      setToken(jsonFile.token);
    }
    catch(error) {
      setError("Error Occured: ", error.message);
    }


    }
  
  const displayUsername = () => {
    if (username == "" || null) {
      return
    }
    const form = document.querySelector("form")
    const addUsername = document.createElement("h4")
    addUsername.innerText = `Your Username is: ${username}`
    form.appendChild(addUsername)
  }

  return (
    <>
      <h2>Sign Up!</h2>
      {error && <p>Error Occured: {error}</p>}

      <form onSubmit={handleSubmit}>
        <label>Enter Username: </label>
        <input placeholder="username" type="text" size={"30"} value={username} onChange={(event) => setUsername(event.target.value)} required></input><br />
        <label>Enter Password: </label>
        <input placeholder="password" type="text" size={"30"} value={password} onChange={(event) => setPassword(event.target.value)} required></input><br />
        <button onClick={displayUsername}>Submit</button>
      </form>
    
    </>
  )
}

export default SignUpForm