/* eslint-disable react/jsx-key */
import React, {useState} from 'react'
import styles from './home.module.scss'
import Header from 'components/Header/Header'
import CardMovie from 'components/CardMovie/CardMovie';
import {films} from 'mockedData/mockedFilm';
import {Film} from 'models.types';
import Image from 'next/image';

const Home = () => {

  const [movie, setMovie] = useState<Film>(films[0]);


  return (
    <div className={styles.container}>

        <Header/>

        <div className={styles.trailerInfoSection}>

          <div className={styles.trailerContainer}>
            <div className={styles.movieInfo}> 
              {movie.author.map((author) => <p>{author}</p> )}
              <h1>{movie.title}</h1>
            </div>
            <div className={styles.movieCardContainer}> 
              {films.map((film, index) => (
                <CardMovie key={index} {...film}/>
              ))}
            </div>
          </div>
        </div>
        
        <div className={styles.movieImageWrapper}>
          <div className={styles.gradient}></div>
          <Image src={movie.backgroundImage} alt={movie.title} className={styles.image} />
        </div>


        
    </div>
  )
}

export default Home