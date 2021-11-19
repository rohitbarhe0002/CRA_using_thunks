import { combineReducers } from 'redux';
import getUsers from './getUsers';
import todos from './getTodos'
import getPost from './getPost'
import getComment from './getComment';
import adduser from './addUser';
import editUser from './editUser';

export default combineReducers({
    getUsers,
    todos,
    getPost,
    getComment,
    adduser,
  editUser,


});