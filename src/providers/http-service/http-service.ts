import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable()
export class HttpServiceProvider {
  private url:string = 'https://jsonplaceholder.typicode.com';

  constructor(public http: HttpClient) {
    console.log('Hello HttpServiceProvider Provider');
  }

  getAll(endpoint) {
    return this.http.get(`${this.url}/${endpoint}`).map(res => {return res});
  }

  get(endpoint, id) {
    return this.http.get(`${this.url}/${endpoint}/${id}`).map(res => {return res})
  }

  save(endpoint, resources) {
    return fetch(`${this.url}/${endpoint}`, {
      method: 'POST',
      body: JSON.stringify(resources),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      }
    })
  }
}
