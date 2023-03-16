import React from "react";
import { FaChevronRight, FaChevronLeft } from 'react-icons/fa'
import classes from "./SlideControls.module.css"

const SliderControls = ({ slides, slideIndex, setSlideIndex, infiniteLoop }) => {

    return (
        <>
      <span
          onClick={() =>
              setSlideIndex((current) =>
                  current === 0 ? slides.length - 1 : current - 1
              )
          }
          className={`${classes.spanControls} ${classes.spanControlLeft}`}
          style={{
              opacity: !infiniteLoop && slideIndex === 0 ? '0.3' : '1',
              pointerEvents: !infiniteLoop && slideIndex === 0 ? 'none' : 'auto'
          }}
      >
        <FaChevronLeft style={{fontSize: '1.5rem'}}/>
      </span>
            <span
                onClick={() =>
                    setSlideIndex((current) =>
                        current === slides.length - 1 ? 0 : current + 1
                    )
                }
                className={`${classes.spanControls} ${classes.spanControlRight}`}
                style={{
                    opacity: !infiniteLoop && slideIndex === slides.length - 1 ? '0.3' : '1',
                    pointerEvents: !infiniteLoop && slideIndex === slides.length - 1 ? 'none' : 'auto'
                }}
            >
        <FaChevronRight style={{fontSize: '1.5rem'}}/>
      </span>
        </>
    )
}
export default SliderControls
