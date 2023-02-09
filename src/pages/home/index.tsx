import React from 'react'
import styles from './home.module.scss'
import Header from 'components/Header/Header'
import {films} from 'mockedData/mockedFilm';

const home = () => {
  return (
    <div className={styles.container}>
        <Header/>
        <div className={styles.playerSection}>

        </div>
    </div>
  )
}

export default home