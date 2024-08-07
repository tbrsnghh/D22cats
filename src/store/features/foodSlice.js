import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    food:[],
    currentPage:1,
    status:"start",
    error:""
}
const url="https://foodie-api-vetn.onrender.com/restaurants"

export const fetchFood=createAsyncThunk('food/fetchFood', async()=>{
    const res=await axios.get(url)
    return res.data
})

const foodSlice=createSlice({
    name: "food",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchFood.pending, state=>{
            state.status="loading"
        })
        .addCase(fetchFood.fulfilled, (state, action)=>{
            state.status="succeeded"

            state.food=action.payload
        })
        .addCase(fetchFood.rejected, (state, action)=>{
            state.status="failed"
            state.error=action.error.message
        })
    }
})
export default foodSlice.reducer;