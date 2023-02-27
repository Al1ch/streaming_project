import React from 'react'
import { GetStaticProps, } from 'next';
import { getPostDetails, getPostIdList } from './index';
import globaStyles from "styles/globalStyles.module.scss"
import Image from 'next/image';
import antManCardImage from 'assets/images/antManCardImage.jpg' 


export  const  getStaticPaths = async ()=> {

  const paths = await getPostIdList();
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async ({params}) => {
    const postData = await getPostDetails(params?.name as string);

  return {
    props: {
      postData,
    },
  };
}

const Movie = () => {
  return (
    <div className={globaStyles.main}>
      <div className={globaStyles.wrapper}>
          
      </div>

      
      <div className={globaStyles.movieImageWrapper}>
          <div className={globaStyles.gradient}></div>
          <Image src={antManCardImage} className={globaStyles.image} alt="" />
      </div>

    </div>
  )
}

export default Movie