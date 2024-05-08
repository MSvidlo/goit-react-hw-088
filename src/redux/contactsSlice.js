import { createSlice } from "@reduxjs/toolkit";
import { CONSTANTS } from './constants.js';
import { fetchContacts,addContact,deleteContact } from "./contactsOps.js";
import { createSelector } from "@reduxjs/toolkit";
import { filter } from "./filtersSlice.js";


const handlePending = (state) => {
  state.isLoading = true;
};

const handleRejected = (state,action) => {
  state.isLoadinf = false;
  state.error = action.payload;
}

const ontactsSlice = createSlice({
    name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
  error:null,},
  extraReducers: builder=> {
      builder
         .addCase(fetchContacts.pending, handlePending)
      .addCase(fetchContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchContacts.rejected, handleRejected)
      .addCase(addContact.pending, handlePending)
      .addCase(addContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items= [...state.items,action.payload];
      })
      .addCase(addContact.rejected, handleRejected)
      .addCase(deleteContact.pending, handlePending)
      .addCase(deleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null ;
      state.items = state.items.filter(
          item => item.id !== action.payload.id
        );
             })
      .addCase(deleteContact.rejected, handleRejected)
      
  },
});


const selectContacts = state => state.contacts.items;
const selectFilters = state => state.filters.name;
export const loading = state=>state.isLoading
export const contactReducer = ontactsSlice.reducer;


export const selectFilteredContacts =createSelector([selectContacts,selectFilters],(contacts,filter)=>{
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  } )