import {Link} from "react-router-dom";
import styles from "./LoginForm.module.css";


const LoginForm = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();
    };

    return (
        <section className={styles.box}>
            <div className={styles.formSection}>
                <h1 className={styles.title}>Login</h1>
                <form onSubmit={handleSubmit} className={styles.loginForm}>
                    <section className={styles.sectionInput}>
                        <label>Email</label>
                        <input id="email" type="text"/>
                    </section>
                    <section className={styles.sectionInput}>
                        <label>Password</label>
                        <input id="password" type="password"/>
                    </section>
                    {/*<button id="loginButton" className={styles.btnLogin}>Login</button>*/}
                    <Link id="regLink" to="/home">Home</Link>
                </form>
                <div className={styles.login_registration_link}>
                    Need an Account?
                    <br/>
                    <span className="line">
                        <Link id="regLink" to="/registration">Registration</Link>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default LoginForm;
