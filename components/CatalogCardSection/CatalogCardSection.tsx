import React from 'react'
import styles from './CatalogCardSection.module.scss'
import Image from 'next/image'
import { MovieCatalog } from 'models.types';
import CatalogCard from 'components/CatalogCard/CatalogCard';

type Props = {
    movies: MovieCatalog[];
    titleSection : string;

}


const CatalogCardMovie = ({movies , titleSection}: Props) => {

    const moviesLenght = {"--movieLenght" : movies.length} as React.CSSProperties;

  return (
    
    <div className={styles.catalogSection}>
        <h1 className={styles.titleSection}>{titleSection}</h1>
        <div className={styles.catalogList} style={moviesLenght}> 
            {
                movies.map((movie, index) => (<CatalogCard key ={ index} index={index} movie={movie}/>))
            }
        </div>
  </div>
  )
}

export default CatalogCardMovie