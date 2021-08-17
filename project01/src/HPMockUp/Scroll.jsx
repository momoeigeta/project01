import './styles/Scroll.css';
import { useState, useEffect, } from "react";
import { Link } from 'react-router-dom';
import Force from './images/Force.png';

const Scroll = () => {
    // storing this to get the scroll direction
   const [lastScrollTop, setLastScrollTop] = useState(0);
    // the offset of the document.body
   const [bodyOffset, setBodyOffset] = useState(
     document.body.getBoundingClientRect()
   );
    // the vertical direction
   const [scrollY, setScrollY] = useState(bodyOffset.top);
    // the horizontal direction
   const [scrollX, setScrollX] = useState(bodyOffset.left);
    // scroll direction would be either up or down
   const [scrollDirection, setScrollDirection] = useState();

   const listener = e => {
     setBodyOffset(document.body.getBoundingClientRect());
     setScrollY(-bodyOffset.top);
     setScrollX(bodyOffset.left);
     setScrollDirection(lastScrollTop > -bodyOffset.top ? "down" : "up");
     setLastScrollTop(-bodyOffset.top);
   };

   useEffect(() => {
     window.addEventListener("scroll", listener);
     return () => {
       window.removeEventListener("scroll", listener);
     };
   });

   return {
     scrollY,
     scrollX,
     scrollDirection
   };
 }

 const Navbar = () => {
  const { y, x, scrollDirection } = Scroll();  

  const styles = {
    active: {
      visibility: "visible",
      transition: "all 0.5s"
    },
    hidden: {
      visibility: "hidden",
      transition: "all 0.5s",
      transform: "translateY(-100%)"
    }
  }

    return (
        <nav className="Header" style={scrollDirection === "down" ? styles.active: styles.hidden}   >
        <Link to="/" className="Header__link">
            <img src={Force} height="50px" width="auto" alt="logo"/>
            <div className="Header__link__title">
              Chronology
            </div>
        </Link>  
        <ul className="flex">
            <li>
              <Link to="/about" className="Header__link">About</Link>
            </li>
            <li>
              <Link to="/blog" className="Header__link">Blogs</Link>
            </li>
          </ul>
        </nav>       
    )
};
export default Scroll;