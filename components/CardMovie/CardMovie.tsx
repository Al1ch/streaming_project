import React from 'react'
import styles from './CardMovie.module.scss'
import Image, { StaticImageData } from 'next/image'

type Props = {
  title: string;
  cardImage: StaticImageData;
}


const CardMovie = ({title, cardImage}: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.titleMovie}>{title}</h1>

        <Image src={cardImage} alt="Card Picture" width={200} height={300} className={styles.image}/>
        
    </div>
  )
}

export default CardMovie;