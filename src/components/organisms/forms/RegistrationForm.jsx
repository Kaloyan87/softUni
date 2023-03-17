import {useState} from "react";
import {Link} from "react-router-dom";
import styles from "./RegistrationForm.module.css";
import {AiOutlineCheck} from "react-icons/ai";
import {FaTimes} from "react-icons/fa";
import {BsInfoCircle} from "react-icons/bs";
import Input from "../../atom/fields/Input";
import backGround from "../../../assets/images/bg-registration.jpeg";


const RegistrationForm = () => {

    const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
    const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{6,24}$/;
    const EMAIL_REGEX = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;

    const [user, setUser] = useState("");
    const [validName, setValidName] = useState(false);
    console.log(user)

    const [pwd, setPwd] = useState("");
    const [validPwd, setValidPwd] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const userValidate = (e) => {
        setUser(e.target.value)
        setValidName(USER_REGEX.test(user));
    }

    const passwordValidate = (e) => {
        setPwd(e.target.value)
        setValidPwd(PWD_REGEX.test(pwd));
    }

    const emailValidate = (e) => {
        setEmail(e.target.value)
        setValidEmail(EMAIL_REGEX.test(email));
    }

    return (
        <section style={{
            backgroundImage:`url(${backGround})`,
            backgroundRepeat:"no-repeat",
            backgroundSize:"cover"
        }}
                 className={styles.box}
        >
            <div className={styles.formSection}>
                <h1 className={styles.title}>Registration</h1>
                <form
                    autoComplete="off"
                    onSubmit={handleSubmit}
                    className={styles.registrationForm}
                >
                    <section className={styles.sectionInput}>
                        <label htmlFor="userName">
                            Username
                            <AiOutlineCheck
                                className={validName ? styles.valid : styles.hide}
                            />
                            <FaTimes
                                className={validName || !user ? styles.hide : styles.invalid}
                            />
                        </label>
                        <Input
                            required={true}
                            type="text"
                            id="userName"
                            value={user}
                            onChange={userValidate}
                        />
                        <p className={!validName && user ? styles.instructions : styles.offscreen}>
                            <BsInfoCircle/>
                            4 to 24 characters.
                            <br/>
                            Must begin with a letter.
                            <br/>
                            Letters, numbers, underscores, hyphens allowed.
                        </p>
                    </section>

                    <section className={styles.sectionInput}>
                        <label htmlFor="password">
                            Password
                            <AiOutlineCheck
                                className={validPwd ? styles.valid : styles.hide}
                            />
                            <FaTimes
                                className={validPwd || !pwd ? styles.hide : styles.invalid}
                            />
                        </label>
                        <Input
                            required={true}
                            type="password"
                            id="password"
                            onChange={passwordValidate}
                            value={pwd}
                        />
                        <p className={!validPwd && pwd ? styles.instructions : styles.offscreen}>
                            <BsInfoCircle/>
                            6 to 24 characters.
                            <br/>
                            Uppercase and lowercase letters, a number and a special character.
                        </p>
                    </section>

                    <section className={styles.sectionInput}>
                        <label htmlFor="email">
                            Email
                            <AiOutlineCheck
                                className={validEmail && email ? styles.valid : styles.hide}
                            />
                            <FaTimes
                                className={validEmail || !email ? styles.hide : styles.invalid}
                            />
                        </label>
                        <Input
                            type="email"
                            id="email"
                            onChange={emailValidate}
                            value={email}
                            required={true}
                        />
                        <p className={!validEmail && email ? styles.instructions : styles.offscreen}>
                            <BsInfoCircle/>
                            Please enter a valid email
                        </p>
                    </section>
                    <button id="registration" className={styles.btnRegistration}>Registration</button>
                </form>
                <div className={styles.login_registration_link}>
                    Already registered?
                    <br/>
                    <span className="line">
                         <Link to="/login">Login</Link>
                    </span>
                </div>
            </div>
        </section>
    );
};

export default RegistrationForm;

