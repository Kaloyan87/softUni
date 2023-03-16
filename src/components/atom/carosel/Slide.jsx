import React from "react";
import classes from "./Slide.module.css"


const Slide = ({ slides, slideIndex }) => {

    const slide = slides[slideIndex]
    const title = slides[slideIndex].title


    return (
        <div className={classes.container}>
            <p className={classes.title}>{title}</p>
            <div className={classes.imgContainer}>
                <img className={classes.img} key={slideIndex} src={slide?.image} alt='banner'/>
            </div>
        </div>
    )
}
export default Slide
