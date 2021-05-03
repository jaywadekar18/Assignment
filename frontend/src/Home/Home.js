import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '../Authentication/login.module.css'
function Home(props) {
    let [landData, setLandData] = useState([]);
    useEffect(() => {
        getLands();
    }, [])
    function getLands() {
        axios.get('http://localhost:5000/landData')
            .then((response) => { console.log(response.data); setLandData(response.data) })
            .catch((err) => { console.log(err) })
    }
    function clickHandler() {
        props.history.push('/Login');

    }
    return (
        <div  >
            <div >
                <div  >
                    <h1>Lands</h1>
                    {landData.length == 0 ? <h4>No data currenty</h4> :
                        landData.map((land) => (
                            <div className={styles.loginContent}>
                                <h3>Name -{land.Name}</h3>
                                <p>ID -{land._id}</p>
                                <p>Area -{land.Area}</p>
                                <p>City-{land.City}</p>
                                <p>State-{land.State}</p>
                                <p>Country-{land.Country}</p>
                                <br /> <br /> <br />
                            </div>
                        )

                        )
                    }
                    <button onClick={clickHandler}>Click here to perform CRUD Operation on any land data</button><br /><br /><br /><br />

                </div>
            </div>

        </div>
    )
}

export default Home
