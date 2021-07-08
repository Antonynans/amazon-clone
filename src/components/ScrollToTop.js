import React, {useState} from 'react';
import { Button } from './scrollToTop';
// import {FaArrowCircleUp} from 'react-icons/fa';
// import '../../Styles/scrollToTop.css';


const ScrollArrow = () =>{

  const [showScroll, setShowScroll] = useState(false)

  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400){
      setShowScroll(true)
    } else if (showScroll && window.pageYOffset <= 400){
      setShowScroll(false)
    }
  };

  const scrollTop = () =>{
    window.scrollTo({top: 0, behavior: 'smooth'});
  };

  window.addEventListener('scroll', checkScrollTop)

  return (
        <Button onClick={scrollTop} style={{height: 40, display: showScroll ? 'flex' : 'none'}}>Back to top</Button>
  );
}

export default ScrollArrow;