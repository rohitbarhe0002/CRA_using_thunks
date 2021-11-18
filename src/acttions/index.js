import { GET_USER } from "./actiontype";
import { GET_TODOS } from "./actiontype";
import {GET_Post} from "./actiontype";
import { GET_COMMENT } from "./actiontype";
import { ADD_USER1 } from "./actiontype";
import { ADD_USER1 } from "./actiontype";
import { EDIT_USER } from "./actiontype";


export const getuser = (payload) => ({ type: GET_USER, payload });
export  const getodos=(payload) =>({type:GET_TODOS,payload});
export  const getpost=(payload) =>({type:GET_Post,payload});
export  const getcomment=(payload) =>({type:GET_COMMENT,payload});
export const adduser1=(payload)  =>({type:ADD_USER1,payload});
export const edituser=(payload)  =>({type:EDIT_USER,payload});