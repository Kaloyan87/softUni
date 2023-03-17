import React, {useState} from 'react';
import styles from "./Header.module.css"
import {Link} from "react-router-dom";
import logo from "../../../assets/images/logo.png"
import Modal from "../modals/Modal";

const Header = () => {

    const [openModal, setOpenModal] = useState(false)


    return (
        <>
            <Modal open={openModal} onClose={() => {setOpenModal(false)}}/>
            <section className={styles.navbar}>
                <Link to="/home" className={styles.logoContainer}>
                    <img
                        src={logo}
                        alt="Food Logo"
                    />
                </Link>
                <div className={styles.header}>
                    <div className={styles.nav}>
                        <>
                            <span>Hello, username!</span>
                            <span><Link to="/home">Home</Link></span>
                            <span><Link to="/account">Recipes List</Link></span>
                            <span><Link to="/shopping">For Shopping</Link></span>
                            {/*<span><Link to="/user">User Details</Link></span>*/}
                            <span>
                                <a type="button" onClick={() => {setOpenModal(true)}} href="#">User Details</a>
                            </span>
                            <span><Link to={() => {}}>Log out</Link></span>
                        </>
                    </div>
                </div>
            </section>
        </>
    );
};


export default Header;

