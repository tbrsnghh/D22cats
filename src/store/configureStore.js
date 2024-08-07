import {configureStore} from '@reduxjs/toolkit'
import food from './features/foodSlice'


const store=configureStore({
    reducer:{
        food: food
    }
})
export default store