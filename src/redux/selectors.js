import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = (state) => state.contacts.contacts.items;
export const selectLoading = (state) => state.contacts.contacts.loading;
export const selectError = (state) => state.contacts.contacts.error;

export const selectNameFilter = (state) => state.filter.filter.name;

export const selectFilteredContacts = createSelector([selectContacts, selectNameFilter], (contacts, filter) =>{
  return contacts.filter((contact)=> contact.name.toLowerCase().includes(filter.toLowerCase()))
} )