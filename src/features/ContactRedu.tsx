import { createSlice } from '@reduxjs/toolkit';


export const  ContactSlice = createSlice({
    name:'contact',
    initialState:{value:[{id:1,fname:'',lname:'',status:''}]},
    reducers:{
        contactstore:(state,action)=>{
            state.value = action.payload;
        }
    }
});


export const {contactstore} = ContactSlice.actions;
export default ContactSlice.reducer;