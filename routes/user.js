import express from 'express';
import { 
    handleGetAllUsers, 
    handleGetUserById, 
    handleUpdateUserById, 
    handleDeleteUserById, 
    handleCreateNewUser 
} from '../controllers/user.js';

const router = express.Router();

router
    .route('/')
    .get(handleGetAllUsers)
    .post(handleCreateNewUser);

router
    .route('/:id')
    .get(handleGetUserById)
    .put(handleUpdateUserById)
    .delete(handleDeleteUserById);

export default router;