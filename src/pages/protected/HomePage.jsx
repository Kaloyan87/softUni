import React from 'react';
import Carousel from "../../components/molecules/Carousel";
import Header from "../../components/organisms/layout/Header";
import FavoriteRecipes from "../../components/molecules/FavoriteRecipes";
import styles from "./Home.module.css"

const HomePage = () => {
    return (
        <div className={styles.homeBackground}>
            <Header/>
            <Carousel/>
            <FavoriteRecipes/>
        </div>
    );
};

export default HomePage;