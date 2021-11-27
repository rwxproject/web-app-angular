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

  getWebapi(user: string) {
    console.log(`service request user: ${user}`);
    const headers = new HttpHeaders().set('x-user-id', user);
    return this.http.get<WebapiResponse>('http://system1.app.rwx.systems/api', {
      headers: headers,
    });
  }

  getCommonWebapi() {
    console.log(`service common`);
    // const headers = new HttpHeaders().set('x-user-id', user);
    return this.http.get<WebapiResponse>('http://system1.app.rwx.systems/api', {
      // headers: headers,
    });
  }
}
