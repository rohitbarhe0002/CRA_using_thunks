import logo from './logo.svg';
import './App.css';
import User from './User';
import Todos from './Todos';
import Post from './Post';
import Comment from './Comment';
import AddUser1 from './AddUser1';
import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Link, BrowserRouter as Router } from 'react-router-dom';
import EditUsers from './EditUsers';

function App() {
    return ( 
    <Router >
        <div >
            

        <h1> User Details </h1>

        <li>
        <Link to = "/User"> User </Link> 
        </li>

        <li>
        <Link to = "/Todos/:id"> Todos </Link> 
        </li>

        <li>
        <Link to = "/Post/:id"> Post </Link> 
        </li>
       
        <li>
        <Link to = "/Comment"> Comment </Link> 
        </li>
        <Link to = "/AddUser1"> Adduser1 </Link>

    
        <Route path = "/AddUser1"
        component = {AddUser1}/> 


        <Route exact path = "/User"
        component = {User}/> 

        
        <Route  path = "/Todos/:id"
        component = {Todos}/> 

       <Route  path = "/Post/:id"
        component = {Post}/> 

      <Route  path = "/EditUsers/:id"
        component = {EditUsers}/> 


       <Route path = "/Comment/:id"
        component = {Comment}/> 
        
        </div> 
        </Router>
    );
}

export default App;