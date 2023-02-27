import React from 'react'
import SearchBar from './SearchBar'
import styles from './NavBar.module.css'
import { Link } from 'react-router-dom'

export default function NavBar(props) {
  return (
    <div className={styles.nav}>
        <div>
        <Link to="/home">
            <button>Home</button>
            </Link>
        </div>

        <div>
        
            <button>Filter</button>
        
        </div>

        <div>
            <SearchBar onSearch={props.onSearch}/>
        </div>

    </div>
  )
}