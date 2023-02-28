import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Login.module.css'

export default function Login() {
  return (
    <div className={styles.fondo}>
        <input></input>
        <Link to="/home">
            <button>to Home</button>
        </Link>

    </div>
  )
}
