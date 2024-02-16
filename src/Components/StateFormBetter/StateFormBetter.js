import React, { useState } from "react";
import "./StateFormBetter.scss";

function StateForm() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [myFormData, setMyFormData] = useState({});

    const handleAllChanges = (event) => {
        setMyFormData({ ...myFormData, [event.target.name]: event.target.value });
    };

    // const handleChangeEmail = (event) => {
    //     setUsername(event.target.value);
    //     setMyFormData({ ...myFormData, email: event.target.value });
    // };
    // const handleChangePassword = (event) => {
    //     setPassword(event.target.value);
    //     setMyFormData({ ...myFormData, password: event.target.value });
    // };
    // const handleChangeConfirmPassword = (event) => {
    //     setConfirmPassword(event.target.value);
    //     setMyFormData({ ...myFormData, confirmPassword: event.target.value });
    // };

    const isUsernameValid = () => {
        if (username.length < 1) {
            return false;
        }
        return true;
    };
    const isPasswordValid = () => {
        if (password.length < 8) {
            return false;
        }
        if (!password.match(/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/)) {
            return false;
        }
        return true;
    };
    const isConfirmPasswordValid = () => {
        if (confirmPassword !== password) {
            return false;
        }
        return true;
    };

    const isFormValid = (event) => {
        if (!username || !password || !confirmPassword) {
            return false;
        }

        if (!isUsernameValid()) {
            return false;
        }
        if (!isPasswordValid()) {
            return false;
        }
        if (!isConfirmPasswordValid()) {
            return false;
        }
        return true;
    };

    return (
        <section>
            <div>
                <h2>React Form With State</h2>
                <h3>Why use state to make a form?</h3>
                <p>
                    There are many reasons to use state to capture the data of a form. For one, if
                    you use Vanilla Javascript, you cant access the information until the user
                    clicks submit. In order to have instant validation, you can use state to
                    immedietly tell a user if their enter password is valid (with any appropriate
                    characters/length/etc), if confirm password matches, etc.
                </p>
                <p>There is more setup required, but the benefits are way worth it.</p>
                <p>
                    We also want to have access to the values of the fields incase we need them
                    later, and trying to find them through the DOM is a pain.
                </p>
                <p>
                    Password must be 8 characters, and include a special symbol, and confirm
                    password and password must match.
                </p>
            </div>
            <form className="form">
                <h2 className="form__header">Sign Up Form With State and Validation</h2>
                <label className="form__label">
                    Username:
                    <input
                        type="text"
                        name="username"
                        onChange={handleAllChanges}
                        value={myFormData.username}
                        className={`form__input ${isPasswordValid() ? "" : "form__input--invalid"}`}
                    />
                </label>
                <label className="form__label">
                    Password:
                    <input
                        type="text"
                        name="password"
                        onChange={handleAllChanges}
                        value={myFormData.password}
                        className={`form__input ${isPasswordValid() ? "" : "form__input--invalid"}`}
                    />
                </label>
                <label className="form__label">
                    Confirm Password:
                    <input
                        type="text"
                        name="confirmPassword"
                        onChange={handleAllChanges}
                        value={myFormData.confirmPassword}
                        className={`form__input ${isPasswordValid() ? "" : "form__input--invalid"}`}
                    />
                </label>
                <button type="submit" disabled={!isFormValid()}>
                    Sign Up!
                </button>
            </form>
        </section>
    );
}

export default StateForm;
