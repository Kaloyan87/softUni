import React, {useEffect, useState} from "react";
import Slide from "../../components/atom/carosel/Slide";
import SliderControls from "../../components/atom/carosel/SliderControls";
import SliderNav from "../../components/atom/carosel/SliderNav";
import {slides} from "../atom/carosel/slidesData";
import classes from "./Carosel.module.css"


const Carousel = ({
  initialIndex = 0,
  infiniteLoop = true,
  autoplay = true,
  autoplayInterval = 3000000
  }) => {
    const [slideIndex, setSlideIndex] = useState(initialIndex)

    useEffect(() => {
        if (autoplay) {
            const interval = setInterval(() => {
                setSlideIndex((current) =>
                    current === slides.length - 1 ? 0 : current + 1
                )
            }, autoplayInterval)
            return () => clearInterval(interval)
        }
    }, [autoplay, autoplayInterval])

    return (
        <section className={classes.container}>
            <Slide
                slides={slides}
                slideIndex={slideIndex}
                tittle={slides}
            />
            <SliderControls
                slides={slides}
                slideIndex={slideIndex}
                setSlideIndex={setSlideIndex}
                infiniteLoop={infiniteLoop}
            />
            <SliderNav
                slides={slides}
                slideIndex={slideIndex}
                setSlideIndex={setSlideIndex}
            />
        </section>
    )
}

export default Carousel;