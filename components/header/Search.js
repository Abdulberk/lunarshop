import React from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import {useState,useEffect,useRef} from 'react'
import _ from 'lodash'




function Search({setSearchVisible, searchVisible}) {

    const searchRef = useRef(null);
    const [searchInput, setSearchInput] = useState("");
    
    
    const searchHandler = _.debounce((value) => {
        setSearchInput(value);
      }, 20);
    

   
      const searchInputHandler = (e) => {
        searchHandler(e.target.value);
        };

       


    useEffect(() => {
      const searchElement = searchRef.current;
      if (searchVisible) {
    
        searchElement.style.opacity = "0";
        searchElement.style.transform = "translateX(150px)";
        searchElement.style.transition = "opacity 0.5s ease-in-out, transform 0.3s ease-in-out";
        setTimeout(() => {
          searchElement.style.opacity = "1";
          searchElement.style.transform = "translateX(0px)";
          
        }, 10);
      } 
    }, [searchVisible]);


  return (
    <>
   <div className = {styles.middle__search} ref = {searchRef}>
          <button className = {styles.middle__search__searchButton} onClick = {() => setSearchVisible(false)}>
            <Image src="/search.svg"  alt="search" width = {30} height = {30} />
          </button>
          <input type = "text" placeholder = "type to search..." value = {searchInput} onChange={searchInputHandler}/>
          <button className = {styles.middle__search__cancel} onClick = {() => setSearchVisible(false)}>
            <Image src="/cancel.svg"  alt="cancel" width = {20} height = {20} />
          </button>


          
        </div>
        

    </>
  )
}

export default Search