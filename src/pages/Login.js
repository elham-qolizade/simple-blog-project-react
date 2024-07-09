import React, { useState } from 'react';
import './login.css';

function Login() {
    const [showRegistration, setShowRegistration] = useState(false);

    const handleRegistrationToggle = () => {
        setShowRegistration(!showRegistration);
    };

    const handleRegistration = (e) => {
        e.preventDefault();
        // اینجا می‌توانید عملیات ثبت نام را انجام دهید
        alert('ثبت نام با موفقیت انجام شد!');
    };

    return (
        <div className="loginpage">
            {!showRegistration ? (
                <>
                    <p>لطفاً لینک و کلید کنید</p>
                    <button className="Login-btn" onClick={handleRegistrationToggle}>
                        ثبت نام
                    </button>
                </>
            ) : (
                <form onSubmit={handleRegistration}>
                    <p>فرم ثبت نام</p>
                    <label htmlFor="username">نام کاربری:</label>
                    <input type="text" id="username" />

                    <label htmlFor="password">رمز عبور:</label>
                    <input type="password" id="password" />

                    <button className="submit" type="submit">
                        تمام
                    </button>
                </form>
            )}
        </div>
    );
}

export default Login;