import React from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getpost } from './acttions';
import { useSelector,useDispatch } from 'react-redux';
import { requestPost } from './thunks/request';

export default function Posts (props) {
    const dispatch=useDispatch();
    const {id}=useParams();


    // const post = useSelector((state) => state.getPost.post);
    const post = useSelector((state) => state.getPost.post);


    useEffect(() => {
        dispatch(requestPost(id));
      }, []);
    console.log(post)

//      useEffect(() => {
//       LoadPost();     
//      },[])

//   const LoadPost= async()=> {
//     const result = await axios.get(`http://localhost:3008/users/${id}/posts`)
//     const getPostAction  = getpost(result.data)
//     dispatch(getPostAction);

//     }

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
      {post.map(post => 
           <tbody>
               <tr>
                  
                   <li>{post.id}</li>
                   <td>{post.title}</td>
                   <td>{post.body}</td>
                   <Link  varient="danger" to={`/Comment/${post.id}`}>Comments</Link>
                  
               </tr>
           </tbody>
           
            )}
              </Table>
           
    </>
) 
    
}