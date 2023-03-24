import React, {useState} from 'react';
import styles from "./Header.module.css"
import {Link} from "react-router-dom";
import logo from "../../../assets/images/logo.png"
import Modal from "../modals/Modal";
import {useNavigate} from "react-router";

const Header = () => {
    const navigate = useNavigate()
    const [openModal, setOpenModal] = useState(false)

    // const user = JSON.parse(window.localStorage.getItem('user') || 'null')
    const logout = () => {
        window.localStorage.removeItem('user')
        window.localStorage.removeItem('token')
        navigate(`/login`)
    }

    return (
        <>
            <Modal open={openModal} onClose={() => {
                setOpenModal(false)
            }}/>
            <header className={styles.navbar}>
                <Link to="/home" className={styles.logoContainer}>
                    <img
                        src={logo}
                        alt="Food Logo"
                    />
                </Link>
                <nav className={styles.header}>
                    <div className={styles.nav}>
                        <span>Hello, username!</span>
                        <span><Link to="/home">Home</Link></span>
                        <span><Link to="/recipes">Recipes List</Link></span>
                        <span><Link to="/shopping">For Shopping</Link></span>
                        <span><Link to="/shopping">User Details</Link></span>
                        <span>
                                <a type="button"
                                   onClick={() => {setOpenModal(true)}}
                                   href="#"
                                >
                                    User Details
                                </a>
                            </span>
                        <span onClick={logout}> Log out</span>
                    </div>
                </nav>
            </header>
        </>
    );
};

export default Header;

