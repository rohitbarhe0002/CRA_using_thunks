import React from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import {useEffect} from 'react';
import { useParams} from 'react-router-dom';
import { Link } from 'react-router-dom';
import { getcomment } from './acttions';
import { useSelector,useDispatch } from 'react-redux';

export default function Comments (props) {

    const {id}=useParams();
    const Comment = useSelector((state) => state.getComment.comment);
     const dispatch=useDispatch();

     useEffect(() => {
      LoadComment();     
     },[])

    const LoadComment= async()=> {
    const result = await axios.get(`http://localhost:3008/users/${id}/comments`)
    dispatch(getcomment(result.data))
    
    }

    return ( 
    <>
        <Table striped bordered hover varient = "dark" >
        <thead>
        <tr>
        <th> Id </th> 
        <th> comments </th>

        </tr> 
        </thead> {
            Comment.map(comment =>
                <tbody >

                <tr>
                <td > { comment.id } </td> 
                <td >  { comment.email } </td>
                </tr> 
                </tbody>
            )
        } </Table>

        </>
    )

}