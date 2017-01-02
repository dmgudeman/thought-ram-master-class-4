import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { API_ENDPOINT } from './app.tokens';

import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  constructor(private http: HttpClient, @Inject(API_ENDPOINT) private apiEndpoint) {}

  getContact (id: string) {
    return this.http.get<any>(`${this.apiEndpoint}/contacts/${id}`)
                    .map(data => data.item);
  }

  getContacts () {
    return this.http.get<any>(`${this.apiEndpoint}/contacts`)
                    .map(data => data.items);
  }
}
