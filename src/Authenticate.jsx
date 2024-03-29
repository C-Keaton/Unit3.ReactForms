import { useState } from "react";

const Authenticate = ({token}) => {
  const API_URL_AUTH = "https://fsa-jwt-practice.herokuapp.com/authenticate";

  const [successMessage, setSuccessMessage] = useState(null);
  const [error, setError] = useState(null);

  const handleClick = async() => {
    try {
      const response = await fetch(API_URL_AUTH, { 
          method: "GET", 
          headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}` 
          }
        })
        const jsonFile = await response.json()
        setSuccessMessage(jsonFile.message)

    }
    catch(error) {
      setError("Error Occured: ", error.message);
    }
  }

  return (
    <>
      <h2>Authenticate!</h2>

      {successMessage && <p>{successMessage}</p>}
      {error && <p>Error Occured: {error}</p>}

      <button onClick={handleClick}>Authenticate Token!</button>
    </>
  )
}

export default Authenticate