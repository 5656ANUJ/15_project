import {configureStore} from '@reduxjs/toolkit';
import { Storage } from 'appwrite';
import authReducer from './authSlice';

const store = configureStore({
    reducer:{
        auth: authReducer
    }
});

export default store;