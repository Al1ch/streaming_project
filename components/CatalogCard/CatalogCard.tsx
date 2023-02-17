import React from 'react'
import Image from 'next/image'
import styles from './CatalogCard.module.scss'
import cn from 'classnames'
import { MovieCatalog } from 'models.types';
import { useInView } from "react-intersection-observer";


type Props = {
    movie: MovieCatalog;
    index : number;
}


const CatalogCard = ({movie , index}: Props) => {

    const { ref, inView } = useInView({
        threshold: 0,
        triggerOnce : true
    });

    const mediaType = {'Theather': 'yellow', 'Netflix': 'red', 'Paramount': 'blue'}
    const cardCssVars = { "--card-index": index } as React.CSSProperties;

  return (
            <div ref={ref} className={cn(styles.catalogItem, inView && styles.reveal)} style={cardCssVars}>
                <div className={styles.movieCardImage}> 
                    <Image src={movie.image} alt="" className={styles.cardMovie} />
                </div>
                <p className={styles.titleCard} >{movie.title} </p>
                <div className={styles.description}> 
                    <p>{movie.release}</p>
                    <div className={cn(styles.category)} style= {{ border: `1px solid ${mediaType[movie.mediaDiffusion as keyof typeof mediaType]}` }}>
                        <p>{movie.mediaDiffusion}</p>
                     </div>
                </div>

            </div>
    
  )
}

export default CatalogCard