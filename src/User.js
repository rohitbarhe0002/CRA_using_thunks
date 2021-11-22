import React, { useEffect } from 'react';
import axios from 'axios';
import {Table,Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {getuser} from './acttions/index.js';
import { requestUsers } from './thunks/request';

export default function User (props) {

const dispatch = useDispatch();
// const user = useSelector((state) => state.getUsers.user);
const user = useSelector((state) => state.getUsers.user);
console.log(user)

      
useEffect(() => {
    dispatch(requestUsers(user));
  }, []);
   

    // const LoadUser= async()=> {
    // const result = await axios.get('http://localhost:3008/users')
    // const  getUserAction = getuser(result.data)
    // dispatch(getUserAction);

    
   return(

            <>
         <Container className="fluid">
               
              <h1>User Data</h1>  

       <Table striped bordered hover varient="dark">
           <thead>
               <tr>
                   <th>Id</th>
                   <th>name</th>
                   <th>Email</th>
                   <th>phone</th>
                   <th>Buttons</th>
               </tr>
           </thead>
           {user.map(user => 
           <tbody>
               <tr>
                   
                   <td>{user.id}</td>
                   <td>{user.name}</td>
                   <td>{user.email}</td>
                   <td>{user.phone}</td>
                   <Link  varient="danger" to={`/Todos/${user.id}`}>Todos</Link>
                   <Link  varient="danger" to={`/Post/${user.id}`}>Post</Link>
                   <Link  varient="danger" to={`/EditUsers/${user.id}`}>Edit</Link>
                   
               </tr>
           </tbody>
            )} 

       </Table>
       </Container>
       </>
        )
}

