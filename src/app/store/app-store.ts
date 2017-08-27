import { InjectionToken } from '@angular/core';
import { Store, createStore, combineReducers } from 'redux';
import { ApplicationState, ROOT_REDUCER } from './root.reducer';

export function appStoreFactory() {
  return createStore(combineReducers(ROOT_REDUCER)) as Store<ApplicationState>;
}

export const APP_STORE = new InjectionToken('appStore');

export const APP_STORE_PROVIDER = { provide: APP_STORE, useFactory: appStoreFactory }

