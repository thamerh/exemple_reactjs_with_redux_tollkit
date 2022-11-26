import {configureStore} from '@reduxjs/toolkit';
import userReducer from './Features/user'
export const store = configureStore({
    reducer : {
        user : userReducer, //NB: the store reducer cancan group many Slice
    }
})