import React from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Post () {
   const {id}=useParams();
   console.log(id);
    const [Post,setPost]=React.useState([])
     
    useEffect(() => {
            

        DataLoad();

    },[])

    const DataLoad=async()=>{
        const res =await axios.get(`http://localhost:3008/users/${id}/Posts`)
           
                   console.log(res.data)
                   setPost(res.data)
}
   
  

return(
    <>
    <Table striped bordered hover varient="dark">
<thead>
    <tr>
        <th>Id</th>
        <th>title</th>
        <th>body</th>
        <th>Button</th>
   
        
    </tr>
</thead>
      {Post.map(post => 
           <tbody>
               <tr>
                  
                   <li>{post.id}</li>
                   <td>{post.title}</td>
                   <td>{post.body}</td>
                   <Link  varient="danger" to={`/Comment/${Post.id}`}>Comments</Link>
                  
               </tr>
           </tbody>
           
            )}
              </Table>
           
    </>
) 
    
}