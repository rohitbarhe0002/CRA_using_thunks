import React from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router';


const AddUser1 = () =>{
    let history=useHistory();
    const [user,setUser] = useState(
        {
            useid:"",
            name:"",
            email:"",
            phone:""
        });

        const{useid,name,email,phone}=user;

        const InputChange = (event) =>{
            setUser({...user,[event.target.name]:event.target.value});
        };

        const onSubmit = async(event)=>{
            event.preventDefault();
            await axios.post('http://localhost:3008/users',user);
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