import React, {useState} from 'react';
import { useNavigate } from "react-router-dom"; 
import axios from "axios";


function Register({ setToken, token }) {
    const [newUserData, setNewUserData] = useState({});
    const navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        if (newUserData.password && newUserData.username) {
            axios
            .post(
              'http://localhost:${ serverPort || 3000}/api/users/register',
              newUserData,   
            )
            .then((data) => {
              console.log(data.data.token);
              setToken(data.data.token);
              localStorage.setItem("token", data.data.token);
            })
            .catch((err) => console.log(err));
        }
    };

    if(token) {
      navigate("/account");
    }
  return (
    <div className="register-container">
    <h2>Register Here</h2>
    <form onSubmit={handleSubmit}>
      <label>
        First Name:
        <input type="text" name="firstname" onChange={handleInput} />
      </label>
      <label>
        Last Name:
        <input type="text" name="lastname" onChange={handleInput} />
      </label>
      <label>
        Email:
        <input type="username" name="username" onChange={handleInput} />
      </label>
      <label>
        Password:
        <input type="password" name="password" onChange={handleInput} />
      </label>
      <button>Register Now!</button>
    </form>
  </div>
  );
}

export default Register