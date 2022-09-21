import { createSlice } from "@reduxjs/toolkit";

//buat menampilkan total buku di navbar

const getData = JSON.parse(localStorage.getItem("booklist"));
export const counterSlice = createSlice({
  name: "counter",
  initialState: {
    value: getData.length,
  },
  reducers: {},
});

export const {} = counterSlice.actions;

export default counterSlice.reducer;
