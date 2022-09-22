import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  entities: [],
  loading: false
}
export const fetchData = createAsyncThunk('post/fetchData',
  async() => {
  const response = await axios.get(URL)
    return response.data;
})

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.entities.push(...action.payload)
      state.loading = false
    })
    builder.addCase(fetchData.pending, (state, action) => {
      state.loading = true
    
    })
    builder.addCase(fetchData.rejected, (state, action) => {
      state.loading = false
      alert('Kalau Bisa Jangan Salah');
    })
  }
})

export default postSlice.reducer;

