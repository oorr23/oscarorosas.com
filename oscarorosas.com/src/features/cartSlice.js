import { createSlice } from '@reduxjs/toolkit';


const cartReducer = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    addToCart: (state, action) => {
      state.value.push(action.payload);
    },
  },
});
export const { increment, decrement, incrementByAmount } = cartReducer.actions;
export default cartReducer.reducer;