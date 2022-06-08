import { FaAngleUp } from "react-icons/fa";
import  { useState, useEffect } from 'react';
import "./goToTop.css"

function GoToTop() {

    const [showTopBtn, setShowTopBtn] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 400 ) {
                setShowTopBtn(true);
            } else {
                setShowTopBtn(false);
            }
        });
    }, []);

    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };


  return (
    <div className="goToTop">
      <FaAngleUp className="icon-position icon-style" onClick={goToTop} />
    </div>
  );
}

export default GoToTop;
