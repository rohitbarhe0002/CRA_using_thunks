import { GET_TODOS } from "../acttions/actiontype";
const initialState = {
    todos:[],
   }
   
   export default function todos (state = initialState, action) {
     console.log(state,action.type);
     switch (action.type) {
       case GET_TODOS:
         return {
           ...state,
           todos: action.payload,
         };
         default:
       return state;
   }
 }