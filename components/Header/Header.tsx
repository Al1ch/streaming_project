import SearchBar from 'components/SearchBar/SearchBar'
import React from 'react'
import styles from './Header.module.scss'

const Header = () => {
  return (
    <div className={styles.container}>
        <h1 className={styles.title}> The <br/> <span className={styles.followingTitle}>TRAILERS</span></h1>
        <SearchBar/>

    </div>
  )
}

export default Header