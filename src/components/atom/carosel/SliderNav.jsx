import React from "react";
import { BiRadioCircle, BiRadioCircleMarked } from 'react-icons/bi'
import classes from "./SliderNav.module.css"


const SliderNav = ({ slides, slideIndex, setSlideIndex }) => {
    const handleClick = (index) => setSlideIndex(index)

    return (
        <div className={classes.nav}>
            {slides.length > 0 &&
                slides.map((slide, i) =>
                    slideIndex === i ? (
                        <BiRadioCircleMarked
                            key={i}
                            onClick={() => handleClick(i)}
                            style={{ fontSize: '2.1rem', cursor: 'pointer' }}
                        />
                    ) : (
                        <BiRadioCircle
                            key={i}
                            onClick={() => handleClick(i)}
                            style={{ fontSize: '2rem', cursor: 'pointer' }}
                        />
                    )
                )}
        </div>
    )
}
export default SliderNav
