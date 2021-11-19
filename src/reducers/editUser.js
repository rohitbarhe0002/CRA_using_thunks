import { EDIT_USER } from "../acttions/actiontype";

const initialState = {
    edituser:{
        userid:"",
        name:"",
        email:"",
        phone:""
    },
   }
   
   export default function EditUsers (state = initialState, action) {
     
     switch (action.type) {
       case EDIT_USER:
         return {
           ...state,
           edituser: action.payload,
         };
         default:
       return state;
   }
 }