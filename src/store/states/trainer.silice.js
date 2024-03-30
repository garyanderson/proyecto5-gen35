import { createSlice } from "@reduxjs/toolkit";

export const trainerSilice = createSlice({
    name: 'trainer',
    initialState: '',
    reducers: {
        setTrainer: (state, action) => action.payload
        }
    
})

export const { setTrainer } = trainerSilice.actions;

export default trainerSilice.reducer