import React from 'react'
import './ScrollTop.css'

const ScrollTop = () => {

    window.addEventListener('scroll', function () {
        const scrollTop = document.querySelector(".scrolltop")

        if (this.scrollY >= 560) scrollTop.classList.add("show-scroll")
        else scrollTop.classList.remove("show-scroll")
        
    })
  return (
    <>
    <a href="#" className="scrolltop">
        <i className="uil uil-arrow-up scrolltop__icon"></i>
    </a>
    </>
  )
}

export default ScrollTop