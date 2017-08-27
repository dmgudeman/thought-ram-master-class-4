import { Store, createStore, combineReducers } from 'redux';

import { ROOT_REDUCER, ApplicationState } from './root-reducer';
import { InjectionToken }        from '@angular/core';


let store: Store<ApplicationState>

export const APP_STORE = new InjectionToken('appStore');

export const APP_STORE_PROVIDER = {provide: APP_STORE, useFactory: appStoreFactory}

export function appStoreFactory() {
store = createStore(
  combineReducers(ROOT_REDUCER)
);
}