import { GET_USER } from "../acttions/actiontype";
  
  const initialState = {
   getuser:[],
  }
  
  export default function users (state = initialState, action) {
    switch (action.type) {
      case GET_USER:
        return {
          ...state,
          getuser: action.payload,
        };
        default:
      return state;
  }
}