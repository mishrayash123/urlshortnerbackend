import express from 'express';

import { getAllUsers} from '../controllers/users.js';

export default (router) => {
  router.post('/users', getAllUsers);
};
