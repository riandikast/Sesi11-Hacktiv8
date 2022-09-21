import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './features/counter/counterSlice'
import booksCRUD from './features/booksCRUD'

export default configureStore({
  reducer: {
    counter: counterReducer,
    books: booksCRUD,
  },
})