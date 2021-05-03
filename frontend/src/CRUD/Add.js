import React from 'react'
import { useForm } from 'react-hook-form';
import axios from 'axios'
import styles from '../Authentication/login.module.css'
function Add(props) {
    const { register, handleSubmit, formState: { errors }, } = useForm();
    function onSubmit(data) {

        axios.post(`http://localhost:5000/landData`, data)
            .then((response) => {
                console.log(response);
                alert("New data added!!");
                props.history.push('/crud');
            })
            .catch((err) => { console.log(err); alert("This data may already exist")})
    }
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>

                    <h1 className={styles.head}>Add</h1>
                </div>

                <div className={styles.loginContainer}>
                    <div className={styles.loginContent}>


                        <label className={styles.label}>Name</label>

                        <input  {...register('Name', { required: true })} />
                        {errors.Name && <p className="text-muted ">Name is required*</p>}


                        <label className={styles.label}>Area</label>

                        <input  {...register('Area', { required: true })} />
                        {errors.Area && <p className="text-muted">Area is required*</p>}


                        <label className={styles.label}>City</label>

                        <input  {...register('City', { required: true })} />
                        {errors.City && <p className="text-muted">City is required*</p>}



                        <label className={styles.label} className="">State</label>

                        <input  {...register('State', { required: true })} />
                        {errors.State && <p className="text-muted">State is required*</p>}




                        <label className={styles.label}>Country</label>

                        <input  {...register('Country', { required: true })} />
                        {errors.Country && <p className="text-muted">Country is required*</p>} <br />



                        <button onClick={handleSubmit(onSubmit)} className="btn btn-outline-primary">Add</button>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Add
