import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../../../domain/interface/user.intefaces';
import { UserGateway } from '../../../domain/gateway/user.gateway';

@Injectable({
  providedIn: 'root'
})
export class UserService extends UserGateway {

  private urlApi = `https://jsonplaceholder.typicode.com/users`;

  constructor(private httpClient: HttpClient) {
    super();
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.urlApi);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>(`${this.urlApi}/${id}`);
  }

}
