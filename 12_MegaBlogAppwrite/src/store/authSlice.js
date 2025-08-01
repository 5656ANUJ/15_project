import { createSlice } from "@reduxjs/toolkit";

const initalState = {
    status:false,
    userData:null
}

const authSlice = createSlice({
    name:"auth",
    initialState:initalState,
    reducers:{
        login : (state,action) => {

            state.status = true;
            state.userData = action.payload;
        },
        logout : (state) =>{
            state.status = false;
            state.userData = null;
        }
    }
})
export const {login ,logout} = authSlice.actions
export default authSlice.reducer;