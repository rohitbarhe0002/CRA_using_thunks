import { ADD_USER1 } from "../acttions/actiontype";

const initialState = {
    adduser1:{
        useid:"",
        name:"",
        email:"",
        phone:""
    },
   }
   
   export default function adduser (state = initialState, action) {
     console.log(state,action.type);
     switch (action.type) {
       case ADD_USER1:
         return {
           ...state,
           adduser1: action.payload,
         };
         default:
       return state;
   }
 }