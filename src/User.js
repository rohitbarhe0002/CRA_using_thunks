import React, { useEffect } from 'react';
import axios from 'axios';
import {Table,Button} from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';


function User () {

    const [User,setData]=useState([])
     let history = useHistory();




    useEffect(() => {
        axios.get('http://localhost:3008/users')
        .then(res => {
            console.log(res)
            setData(res.data)
        })
    });

     const showTodo=()=>{
        history.push('/Todos.js')
    }
    

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
           {User.map(User => 
           <tbody>
               <tr>
                   <td>{User.id}</td>
                   <td>{User.name}</td>
                   <td>{User.email}</td>
                   <td>{User.phone}</td>
                   <Link  varient="danger" to={`/Todos/${User.id}`}>Todos</Link>
                   <Link  varient="danger" to={`/Post/${User.id}`}>Post</Link>
                   <Link  varient="danger" to={`/EditUsers/${User.id}`}>Edit</Link>
                   
               </tr>
           </tbody>
            )}

       </Table>
       </Container>
       </>
        )
}

export default User;