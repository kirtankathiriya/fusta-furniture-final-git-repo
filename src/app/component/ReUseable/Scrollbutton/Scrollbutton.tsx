'use client';
import React, {useState} from 'react'
import { IoIosArrowUp } from 'react-icons/io'
import Styles from "./Scrollbutton.module.css"


type Props = {} 


const Scrollbutton = () => {
    const [visible, setVisible] = useState(false) 
  
  const toggleVisible = () => { 
    const scrolled = document.documentElement.scrollTop; 
    if (scrolled > 400){ 
      setVisible(true) 
    }  
    else if (scrolled <= 400){ 
      setVisible(false) 
    } 
  }; 

window.addEventListener('scroll', toggleVisible);

  return (
    <button onClick={() => {
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
      }}
       className={Styles.main}
       style={{display: visible ? 'inline' : 'none'}}>
        <div className={Styles.icon}>
        <IoIosArrowUp size={30} />
        </div>
      </button>
  )
}

export default Scrollbutton