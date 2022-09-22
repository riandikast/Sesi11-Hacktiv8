import { configureStore } from '@reduxjs/toolkit'

import postReducer from './features/postSlice';
import logger from 'redux-logger'
export default configureStore({
  reducer: {
 
    post: postReducer,
  
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger)
})