import { Action } from '@ngrx/store';
import { Contact } from '../../models/contact';

export enum ContactsActionTypes {
   LOAD_CONTACTS_SUCCESS = 'Load Success' 
}

/** Implement LoadContactsSuccessAction here */
export class LoadContactsSuccessAction implements Action {
  readonly type = ContactsActionTypes.LOAD_CONTACTS_SUCCESS;
  constructor(public payload: Array<Contact>){}
}

export type ContactsActions = LoadContactsSuccessAction;