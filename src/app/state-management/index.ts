import { ActionReducerMap } from '@ngrx/store';
import { contactsReducer, ContactsState } from './contacts/contacts.reducer';
import { Contact } from '../models/contact';

export interface ApplicationState {
  contacts: ContactsState;
}

export const ROOT_REDUCER: ActionReducerMap<ApplicationState> = {
  contacts: contactsReducer
}