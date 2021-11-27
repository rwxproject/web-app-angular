import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export interface WebapiResponse {
  host: string;
  time: string;
  userId: string;
}

@Injectable({
  providedIn: 'root',
})
export class WebapiService {
  constructor(private http: HttpClient) {}

  getWebapi() {
    const headers = new HttpHeaders().set('x-user-id', 'user1');
    return this.http.get<WebapiResponse>('http://system1.app.rwx.systems/api', {
      headers: headers,
    });
  }
}
