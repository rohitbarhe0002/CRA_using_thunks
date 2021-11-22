import axios from "axios";
import { adduser1, edituser, getpost, getuser } from "../acttions";
import { getodos } from "../acttions";
import { getcomment } from "../acttions";
import { useParams } from "react-router";
const client = axios.create({
    baseURL: 'http://localhost:3008',
  });
  

  export const requestUsers = () => async (dispatch) => {
    

    try {
      const response = await client.get('/users');
      dispatch(getuser(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }

 
  export const requestTodos = (id) => async (dispatch) => {
    try {
    
      const response = await client.get(`/users/${id}/todos`);
      dispatch(getodos(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }

  export const requestPost = (id) => async (dispatch) => {
    try {
    
      const response = await client.get(`/users/${id}/Posts`);
      dispatch(getpost(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }

  export const requestComment = (id) => async (dispatch) => {
    try {
    
      const response = await client.get(`/users/${id}/Comments`);
      dispatch(getcomment(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }

  export const requestadduser = (Adduser) => async (dispatch) => {
    try {
    
      const response = await client.post('/users',Adduser);
      dispatch(edituser(response.data));
    } catch (err) {
      // logs the error whatever error occured in try block
      console.log(err);
    }
  }

  export const requestEdituser = (id) => async (dispatch) => {

    try {
        const response = await client.get(`http://localhost:3008/users/${id}`);
        dispatch(edituser(response.data));
      } catch (err) {
        // logs the error whatever error occured in try block
        console.log(err);
      }

  }

  export const requestEdituser1 = (userData,id) => async (dispatch) => {

    try {
        const response = await client.put(`http://localhost:3008/users/${id}`,userData);
        dispatch(edituser(response.data));
      } catch (err) {
        // logs the error whatever error occured in try block
        console.log(err);
      }

  }

  