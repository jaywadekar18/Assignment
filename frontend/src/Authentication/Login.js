import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import styles from './login.module.css'
import { BrowserRouter as Router, Redirect } from "react-router-dom";
function Login() {
    const [showCrudPage, setShowCrudPage] = useState(false)
    const { register, handleSubmit, formState: { errors }, } = useForm();
    function OnSubmit(data) {

        axios.post(`http://localhost:5000/login`, data)
            .then((response) => {
                console.log(response.data);
                localStorage.setItem("auth", response.data.accessToken);

                setShowCrudPage(true);

            })
            .catch((err) => { console.log(err); alert('No such record found') })
    }
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>

                    <h1 className={styles.head}>Lands</h1>
                </div>
                <div className={styles.loginContainer}>
                <div className={styles.loginContent}>
                        <h1 className={styles.loginHead}>Sign In </h1>
                    <label className={styles.label}>Enter Email   </label>

                    <input  {...register('Email', { required: true })} className={styles.textField} />
                    {errors.Email && <p className="text-muted">Email is required*</p>}


                    <label className={styles.label} >Enter Password  </label>

                    <input {...register('Password', { required: true })} type='password' className={styles.textField} ></input>
                    {errors.Password && <p className="text-muted">Password is required*</p>}


                    <button onClick={handleSubmit(OnSubmit)}>Log in</button>
                    {showCrudPage && (
                        <Redirect from="/" to="/Crud" />
                    )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
