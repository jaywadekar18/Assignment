import { Button, TextField } from '@material-ui/core';
import React from 'react'
import axios from 'axios'
import styles from '../Authentication/login.module.css'
function Edit(props) {
    const [formData, setFormData] = React.useState({
        Name: props.data.Name,
        Area: props.data.Area,
        City: props.data.City,
        State: props.data.State,
        Country: props.data.Country,
        _id: props.data._id

    });
    function submitHandler() {
        axios.put('http://localhost:5000/landData', formData)
            .then((data) => { console.log(data) })
            .catch((err) => { console.log(err) });
    }
    return (
        <div className={styles.container}>
            <div className={styles.content}>
                <div className={styles.header}>

                    <h1 className={styles.head}>Edit</h1>
                </div>

                <div className={styles.loginContainer}>
                    <div className={styles.loginContent}>

                        <TextField label="Name" onChange={e => setFormData({ ...formData, Name: e.target.value })} defaultValue={props.data.Name}></TextField><br /><br />
                        <TextField label="Area" onChange={e => setFormData({ ...formData, Area: e.target.value })} defaultValue={props.data.Area}></TextField> <br /><br />
                        <TextField label="City" onChange={e => setFormData({ ...formData, City: e.target.value })} defaultValue={props.data.City}></TextField><br /><br />
                        <TextField label="State" onChange={e => setFormData({ ...formData, State: e.target.value })} defaultValue={props.data.State}></TextField> <br /><br />
                        <TextField label="Country" onChange={e => setFormData({ ...formData, Country: e.target.value })} defaultValue={props.data.Country}></TextField> <br /><br /><br /><br />
                        <Button color="primary" variant="outlined" onClick={submitHandler}>Submit</Button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Edit
