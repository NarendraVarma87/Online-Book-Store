import React from 'react'
import {configureStore} from '@reduxjs/toolkit'
import storeSlice from './storeSlice';

const store = configureStore({
    reducer : {
        storeSlice : storeSlice
    }
})

export default store;