import React from 'react';
import axios from 'axios';
import { Table, Button } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';

export default function Comment() {
    const { id } = useParams();
    console.log(id);
    const [Comment, setTodos] = React.useState([])


    useEffect(() => {


        LoadData();

    }, [])

    const LoadData = async() => {
        const res = await axios.get(` http://localhost:3008/users/${id}/comments`)

        console.log(res.data)
        setTodos(res.data)
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
                <
                tr >

                <td > { comment.id } </td> 
                <td >  { comment.email } </td>


                </tr> 
                </tbody>

            )
        } </Table>

        </>
    )

}