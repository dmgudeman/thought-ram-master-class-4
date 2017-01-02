import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import 'rxjs/add/operator/map';

@Injectable()
export class ContactsService {

  private API_ENDPOINT = 'http://localhost:4201/api';

  constructor(private http: HttpClient) {}

  getContact (id: string) {
    return this.http.get<any>(`${this.API_ENDPOINT}/contacts/${id}`)
                    .map(data => data.item);
  }

  getContacts () {
    return this.http.get<any>(`${this.API_ENDPOINT}/contacts`)
                    .map(data => data.items);
  }
}
