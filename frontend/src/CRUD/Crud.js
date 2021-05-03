import React, { useState, useEffect } from 'react'
import Tables from '../Tables/Table'
import axios from 'axios'
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button'
import Edit from './Edit';


function Crud(props) {
    let [landData, setLandData] = useState([]);
    const [refresh, setrefresh] = useState(1);
    let [edit,setEdit] = useState(null);

    useEffect(() => {
        getLands();
    }, [refresh])

    function getLands() {
        axios.get('http://localhost:5000/landData')
            .then((response) => { setLandData(response.data) })
            .catch((err) => { console.log(err) })
    }
    function deleteLand(_id) {
        console.log(_id)
        axios.delete('http://localhost:5000/landData', { data: { _id: _id } })
            .then((data) => { console.log(data); setrefresh((data) => (data + 1)) })
            .catch((err) => { console.log(err) });
    }
    

    return (
        <div>
             
            <Button style={{float: 'right', margin:'20px 20px'}} color="primary" variant="outlined" onClick={ ()=>{ localStorage.removeItem('auth');props.history.push('/login')}}>Logout</Button>
            <Button style={{float: 'right' ,margin:'20px 20px'}} color="primary" variant="outlined"  onClick={() => {
                props.history.push('/Add');
            }}>Add a Land</Button>
            <Tables
                Delete={(_id) => { deleteLand(_id) }}
                Edit={(data) => { setEdit(data)}}
                rows={landData} columns={['ID', 'Name', 'Area', 'City', 'State', 'Country', 'Actions']}
            />
            {
                edit && <Edit data={edit}/>
            }
           
        </div>
    )
}

export default Crud;
