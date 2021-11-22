import React from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { getodos } from './acttions';
import { useSelector,useDispatch } from 'react-redux';
import { requestTodos } from './thunks/request';

export default function Todos (props) {
    const dispatch = useDispatch();
    const {id}=useParams();



    // const user = useSelector((state) => state.getUsers.user);
    const todos = useSelector((state) => state.todos.todos);
    console.log(todos)
    
          
    useEffect(() => {
        dispatch(requestTodos(id));
      }, []);

//     const todos = useSelector((state) => state.todos.todos);
//      const dispatch=useDispatch();

//      useEffect(() => {
//       LoadTodos();     
//      },[])

//   const LoadTodos= async()=> {
//     const result = await axios.get(`http://localhost:3008/users/${id}/todos`)
//     const  getTodosAction = getodos(result.data)
//     dispatch(getTodosAction);

//     }

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

      {todos.map(todos => 
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