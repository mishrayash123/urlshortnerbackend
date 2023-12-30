import express from 'express';

import { getAllUsers, deleteUser, updateUser } from '../controllers/users.js';
import { isAuthenticated, isOwner } from '../middlewares/index.js';

export default (router) => {
  router.get('/users', isAuthenticated, getAllUsers);
  router.delete('/deleteuser/:id', isAuthenticated, isOwner, deleteUser);
  router.patch('/updateusers/:id', isAuthenticated, isOwner, updateUser);
};
