import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';
import { adduser1 } from './acttions';
import { useSelector,useDispatch } from 'react-redux';
import { requestadduser } from './thunks/request';

const AddUser1 = () =>{


        const dispatch = useDispatch ();
        let history=useHistory();
   
        const Adduser = useSelector((state) => state.adduser.adduser1);

        const{useid,name,email,phone}=Adduser;

        const InputChange = (event) =>{
        dispatch(adduser1({...Adduser,[event.target.name]:event.target.value}));
    };
 
    
          const onSubmit = async(event)=>{
            event.preventDefault();
            dispatch(requestadduser(Adduser))
            // await axios.post('http://localhost:3008/users',Adduser);
            history.push('./User');
        };

        return(
            <div>
                <form onSubmit={onSubmit}>

                <div> 
                    <label>Id:
                        <input type="text" name="useid" value={useid} autoComplete="off"
                        onChange={e=>InputChange(e)}/>
                    </label>
                    </div>

                    <div> 
                    <label>username:
                        <input type="text" name="name" value={name} autoComplete="off"
                        onChange={e=>InputChange(e)}/>
                    </label>
                    </div>

                    <div>
                    <label>Email:
                        <input type="text" name="email" value={email} autoComplete="off"
                        onChange={e=>InputChange(e)}/>

                    </label>
                    </div>

                   <div>
                    <label>Phone:
                        <input type="text" name="phone" value={phone} autoComplete="off"
                        onChange={e=>InputChange(e)}/>
                        </label>
                  </div>

                  <div>
                      <input type="submit" value="submit"/>
                  </div>
                </form>
            </div>
        )
}
export default AddUser1;