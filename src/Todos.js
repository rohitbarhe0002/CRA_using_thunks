import React from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {useEffect} from 'react';
import { useParams} from 'react-router-dom';

export default function Todos () {
 const {id}=useParams();
   console.log(id);
    const [Todos,setTodos]=React.useState([])
     

    useEffect(() => {
            

        LoadData();

    },[])

    const LoadData=async()=>{
        const res =await axios.get(`http://localhost:3008/users/${id}/todos`)
           
                   console.log(res.data)
                   setTodos(res.data)
}
   
  

return(
    <>
    <Table striped bordered hover varient="dark">
<thead>
    <tr>
        <th>Id</th>
        <th>title</th>
        <th>userId</th>
   
        
    </tr>
</thead>
      {Todos.map(todos => 
           <tbody>
               <tr>
                  
                   <li>{todos.id}</li>
                   <td>{todos.title}</td>
                   <td>{todos.userId}</td>
                  
               </tr>
           </tbody>
           
            )}
              </Table>
           
    </>
) 
    
}