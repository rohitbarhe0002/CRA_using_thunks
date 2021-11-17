import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import getUsers from './acttions/index';

const EditUsers = () => {

    let history=useHistory();
    const{id}=useParams();

    
    const [user,setUser] = useState({

       id:"",
        name: "",
        email: "",
        phone: ""
    });

    const { name, email, phone } = user;
    console.log(id);
    const InputChange = (event) => {
        setUser({...user, [event.target.name]: event.target.value });
    };

    const onSubmit = async(event) => {
        event.preventDefault();
        await axios.put(`http://localhost:3008/users/${id}`, user);
        history.push('/User');

    };

    useEffect(() => {
        axios.get(`http://localhost:3008/users/${id}`).then((response)=>{
        console.log(response);
        setUser(response.data)
    });
    }, [])

    

    return ( 
    <div>
        <form onSubmit = {onSubmit } >

        
        
        <div >
        <label > id:
        < input type = "text"
        name = "id"
        value = {id}
        onChange = { e => InputChange(e) }
        /> 
        </label> 
        </div>


        <div >
        <label > username:
        < input type = "text"
        name = "name"
        value = {name}
        onChange = { e => InputChange(e) }
        /> 
        </label> 
        </div>

        <div >
        <label > Email:
        <input type = "text"
        name = "email"
        value = {email}
        onChange = { e => InputChange(e) }
        />

        </label>
        </div>

        <div >
        <label> Phone:
        <input type = "text"
        name = "phone"
        value = { phone }
        onChange = { e => InputChange(e) }
        /> </label> </div>

        <div >
        <input type = "submit"
        value = "submit"/>
        </div> 
        </form> 
        </div>
    )
}
export default EditUsers;