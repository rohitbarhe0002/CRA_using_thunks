import { GET_Post } from "../acttions/actiontype";

const initialState = {
    post:[],
   }
   
   export default function posts (state = initialState, action) {
     console.log(state,action.type);
     switch (action.type) {
       case GET_Post:
         return {
           ...state,
           post: action.payload,
         };
         default:
       return state;
   }
 }