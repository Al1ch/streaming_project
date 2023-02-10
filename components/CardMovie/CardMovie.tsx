import React from 'react'
import styles from './CardMovie.module.scss'
import Image, { StaticImageData } from 'next/image'
import cn from 'classnames'
import { Movie } from 'models.types'

type Props = {
  title: string;
  cardImage: StaticImageData;
  currentMovie : boolean;
  onChange : () => void;
}


const CardMovie = ({title, cardImage, currentMovie, onChange}: Props) => {
  return (
    <div className={cn(styles.container, {[styles.currentMovie]: currentMovie}) } onClick={onChange} >
      <h1 className={styles.titleMovie}>{title}</h1>

        <Image src={cardImage} alt="Card Picture" width={200} height={300} className={styles.image}/>
        
    </div>
  )
}

export default CardMovie;