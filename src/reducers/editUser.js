import { EDIT_USER } from "../acttions/actiontype";

const initialState = {
    edituser:{
        useid:"",
        name:"",
        email:"",
        phone:""
    },
   }
   
   export default function EditUsers (state = initialState, action) {
     console.log(state,action.type);
     switch (action.type) {
       case EDIT_USER:
         return {
           ...state,
           edituder: action.payload,
         };
         default:
       return state;
   }
 }