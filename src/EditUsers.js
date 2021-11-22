import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useHistory } from 'react-router';
import { edituser } from './acttions';
import { useSelector,useDispatch } from 'react-redux';
import { requestEdituser, requestEdituser1 } from './thunks/request';


const EditUsers = () => {

    const dispatch = useDispatch ();
    let history=useHistory();
    const{id}=useParams();

    const userData = useSelector((state) => state.editUser.edituser);
    console.log(userData)
    const { userid,name, email, phone } = userData;

    const InputChange = (event) => {
        dispatch(edituser({...userData,[event.target.name]:event.target.value}));
    };
    
    console.log(userData)
        const onSubmit = async(event) => {
        event.preventDefault();
        // await axios.put(`http://localhost:3008/users/${id}`,userData);
        
        dispatch(requestEdituser1(userData,id));
        history.push('/User');
    };

    useEffect(() => {
       
      
        dispatch(requestEdituser(id));
    
    }, [])

    return ( 
    <div>
        <form onSubmit = {onSubmit } >
       
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