import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const bookmarkSlice = createSlice({
    name: 'bookmarkes',
    initialState,
    reducers: {
        addToBookmarks(state,action){
            // console.log(action);
            
            state.push(action.payload)
        },
        removeFromBookmarks(state,action){
            // console.log("state" +state);
            // console.log("action" + action.payload);
            
            return state.filter((item)=> item._id !== action.payload)
        }
    }
})

export const {addToBookmarks, removeFromBookmarks} = bookmarkSlice.actions;
export default bookmarkSlice.reducer;