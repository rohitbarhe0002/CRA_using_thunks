
import { GET_COMMENT } from "../acttions/actiontype";

const initialState = {
    comment:[],
   }
   
   export default function comments (state = initialState, action) {
     console.log(state,action.type);
     switch (action.type) {
       case GET_COMMENT:
         return {
           ...state,
           comment: action.payload,
         };
         default:
       return state;
   }
 }


