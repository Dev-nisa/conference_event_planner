import { createSlice } from "@reduxjs/toolkit";

export const avSlice = createSlice({
  name: "av",
  initialState: [
    {
        img: "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_1280.jpg",
        name: "Projectors",
        cost: 200,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2020/06/06/21/19/music-5268289_1280.jpg",
        name: "Speaker",
        cost: 35,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2017/08/16/04/42/microphone-2646432_640.jpg",
        name: "Microphones",
        cost: 45,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2015/10/13/11/41/cup-985958_640.jpg",
        name: "Whiteboards",
        cost: 80,
        quantity: 0,
    },
    {
        img: "https://cdn.pixabay.com/photo/2013/11/28/11/30/wooden-220248_640.jpg",
        name: "Signage",
        cost: 80,
        quantity: 0,
    },
  ],


  reducers: {
    incrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item) {
        item.quantity++;
      }
    },
    decrementAvQuantity: (state, action) => {
      const item = state[action.payload];
      if (item && item.quantity > 0) {
        item.quantity--;
      }
    },
  },
});

export const { incrementAvQuantity, decrementAvQuantity } = avSlice.actions;

export default avSlice.reducer;
