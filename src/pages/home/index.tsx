/* eslint-disable react/jsx-key */
import React, {useState} from 'react'
import styles from './home.module.scss'
import Header from 'components/Header/Header'
import CardMovie from 'components/CardMovie/CardMovie';
import {films} from 'mockedData/mockedTrailerFilms';
import {Movie} from 'models.types';
import Image from 'next/image';
import CatalogCardSection from 'components/CatalogCardSection/CatalogCardSection';
import { movieTrending, movieComing } from 'mockedData/mockedCatalogFilm';

const Home = () => {

  const [movie, setMovie] = useState<Movie>(films[0]);

  
  const cssVars = { "--card-count": films.length } as React.CSSProperties;

  const handleMovieChange = (movieClicked : Movie) => {
    
    setMovie(movieClicked);
  }

  return (
    <div className={styles.container}>
            <div> </div>
      <div className={styles.wrapper}>
        <Header/>

        <div className={styles.trailerInfoSection}>

          <div className={styles.trailerContainer}>
            <div className={styles.movieInfo}> 
             <div className={styles.authorContainer}> {movie.author.map((author) => <p>{author}</p> )}</div> 
              <h1 className={styles.movieTitle}>{movie.title.toUpperCase()}</h1>
            </div>
            <div className={styles.movieCardContainer} style={cssVars}> 
              {films.map((film, index) => (
                <CardMovie index={index} {...film} currentMovie={movie.id === film.id} onChange={()=>handleMovieChange(film)}/>
              ))}

            </div>
          </div>
          
        </div>

      </div>

      <div className={styles.movieImageWrapper}>
          <div className={styles.gradient}></div>
          <Image src={movie.backgroundImage} alt={movie.title} className={styles.image} />
      </div>
      <CatalogCardSection movies={movieTrending} titleSection="🔥Trending Section"/>
      <CatalogCardSection movies={movieComing} titleSection="🎬Coming Up Next"/>
    </div>
  )
}

export default Home