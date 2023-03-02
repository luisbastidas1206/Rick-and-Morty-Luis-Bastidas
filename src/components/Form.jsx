import React from "react";
import { Link } from "react-router-dom";
import styles from "./Form.module.css";
import validate from './validate'

export default function Form(props) {

  const [userData, setUserData] = React.useState({username: '', password: ''})
  const [errors, setErrors] = React.useState({username: '', password: ''})

function handleInputChange (e){
  setUserData({
    ...userData,
    [e.target.name]: e.target.value
  })

  setErrors(validate({
    ...userData,
    [e.target.name]:e.target.value
  }))
}

const handleSubmit = (evento) => {
  evento.preventDefault();
  props.login(userData);
}


  return (
    <div className={styles.fondo}>
      <form onSubmit={handleSubmit}>
        <div className={styles.container}>
          <div>
            <label>Username</label>
            <input type='text' name='username' placeholder="Enter username" onChange={(e)=> handleInputChange(e)}></input>
            {errors.username && <p>{errors.username}</p>}
          </div>
          <div>
            <label>Password</label>
            <input type='password' name='password' placeholder="Enter password" onChange={(e)=> handleInputChange(e)}></input>
            {errors.password && <p>{errors.password}</p>}
          </div>

          {Object.keys(errors).length === 0 ? <button type= "submit">Log in</button>:null}
          
        </div>
      </form>
    </div>
  );
}
