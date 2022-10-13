
import { Injectable, } from '@angular/core';
import { HttpClient, } from '@angular/common/http';
import { Observable, } from 'rxjs';
import { environment, } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ReceiverService {
  url = `${environment.url}:${environment.port}`;
  resource = 'receiver';
  constructor(private http: HttpClient) { }

  findAll(): Observable<any> {
    const url = `${this.url}/${this.resource}`;
    return this.http.get(url);
  }

  create(receiver: any): Observable<any> {
    const url = `${this.url}/${this.resource}`;

    return this.http.post(`${url}`, receiver);
  }
}
