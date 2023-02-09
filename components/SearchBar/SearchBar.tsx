import React from 'react'
import styles from './SearchBar.module.scss'
import SearchSVG from 'assets/images/search.svg'
import Delete from 'assets/images/close.svg'

type Props = {
  handleChange?:(value:string) => void;
  searchValue?: string;
}

const SearchBar = ({handleChange , searchValue}: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
            <input
              value ={searchValue}
              type="text"
              placeholder="Search For A Movie"
              // onChange={(e)=> handleChange(e.target.value)}
              className={styles.input}
            />
            <SearchSVG className={styles.searchLogo}/>

          
        </div>
        
    </div>
  )
}

export default SearchBar