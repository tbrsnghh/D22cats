import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import axios from 'axios'

const initialState={
    cats:[],
    currentPage:1,
    status:"start",
    error:""
}
const url="https://66a07b337053166bcabb89f5.mockapi.io/Cats"

export const fetchCats=createAsyncThunk('cats/fetchCats', async()=>{
    const res=await axios.get(url)
    return res.data
})
export const delCats=createAsyncThunk('cats/delCats', async(id)=>{
    await axios.delete(url+"/"+id)
    return id
})
export const AddNewCat=createAsyncThunk('cats/AddNewCat', async(cat)=>{
    const res=await axios.post(url, cat)
    return res.data
})
export const reCheckCat=createAsyncThunk('cats/reCheckCat', async(cat)=>{
    const res=await axios.put(url + "/" + cat.id, {...cat, checked: !cat.checked})
    return res.data
})
const catsSlice=createSlice({
    name: "cats",
    initialState,
    reducers:{},
    extraReducers:(builder)=>{
        builder
        .addCase(fetchCats.pending, state=>{
            state.status="loading"
        })
        .addCase(fetchCats.fulfilled, (state, action)=>{
            state.status="succeeded"
            state.cats=action.payload
        })
        .addCase(fetchCats.rejected, (state, action)=>{
            state.status="failed"
            state.error=action.error.message
        })
        .addCase(delCats.fulfilled,(state, action)=>{
            state.cats=state.cats.filter(item=> item.id!==action.payload)
        })
        .addCase(AddNewCat.fulfilled,(state, action)=>{
            state.cats=[...state.cats, action.payload]
        })
        .addCase(reCheckCat.fulfilled,(state, action)=>{
            state.cats=state.cats.map(item=>item.id===action.payload.id?{...item, checked:true}:item)
        })
    }
})
export default catsSlice.reducer;