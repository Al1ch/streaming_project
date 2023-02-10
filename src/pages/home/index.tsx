/* eslint-disable react/jsx-key */
import React, {useState} from 'react'
import styles from './home.module.scss'
import Header from 'components/Header/Header'
import CardMovie from 'components/CardMovie/CardMovie';
import {films} from 'mockedData/mockedFilm';
import {Movie} from 'models.types';
import Image from 'next/image';

const Home = () => {

  const [movie, setMovie] = useState<Movie>(films[0]);

  const handleMovieChange = (movieClicked : Movie) => {
    console.log("current movie" , movie)

    setMovie(movieClicked);
  }



  return (
    <div className={styles.container}>
      
      <div className={styles.wrapper}>
        <Header/>

        <div className={styles.trailerInfoSection}>

          <div className={styles.trailerContainer}>
            <div className={styles.movieInfo}> 
             <div className={styles.authorContainer}> {movie.author.map((author) => <p>{author}</p> )}</div> 
              <h1>{movie.title.toUpperCase()}</h1>
            </div>
            <div className={styles.movieCardContainer}> 
              {films.map((film, index) => (
                <CardMovie key={index} {...film} currentMovie={movie.id === film.id}  onChange={()=>handleMovieChange(film)}/>
              ))}
            </div>
          </div>
        </div>

        
      </div>

      <div className={styles.movieImageWrapper}>
          <div className={styles.gradient}></div>
          <Image src={movie.backgroundImage} alt={movie.title} className={styles.image} />
      </div>

        <div className={styles.catalogSection}>
          <h1>Trending This Week</h1>
          <div className={styles.catalogContainer}>
              <div className={styles.catalogItem}>
                <h1>Ant-Man & The Wasp</h1>
                <div className={styles.description}> 
                  <p>Feb 17</p>
                  <div className={styles.categorie}>
                    <p>Theater</p>
                  </div>
                </div>
              </div>
          </div>
        </div>
        
    </div>
  )
}

export default Home