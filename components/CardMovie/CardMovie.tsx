import React, {FC, useState, useRef, useMemo} from 'react'
import styles from './CardMovie.module.scss'
import Image, { StaticImageData } from 'next/image'
import cn from 'classnames'
import { Movie } from 'models.types'
import { useInView } from "react-intersection-observer";


type Props = {
  title: string;
  cardImage: StaticImageData;
  currentMovie : boolean;
  onChange : () => void;
  index: number;
}


const CardMovie = ({title, cardImage, currentMovie, onChange, index: key}: Props) => {


  const { ref, inView } = useInView({
    threshold: 0,
    triggerOnce : true
  });
  
  const cardCssVars = { "--card-index": key } as React.CSSProperties;


  return (
    <div  ref={ref} className={cn(styles.container  ,  inView && styles.reveal, {[styles.currentMovie]: currentMovie}) } onClick={onChange} style={cardCssVars}>
      <h1 className={styles.titleMovie}>{title}</h1>
        <Image src={cardImage} alt="Card Picture" width={200} height={300} className={styles.image}/>
    </div>
  )
}

export default CardMovie;