import { Injectable } from '@angular/core';
import { AlbumGateway } from '../../../domain/gateway/album.gateway';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Album } from '../../../domain/interface/album.interface';

@Injectable({
  providedIn: 'root'
})
export class AlbumService  extends AlbumGateway{

  private urlApi = 'https://jsonplaceholder.typicode.com/albums/';

  constructor(private httpClient: HttpClient) {
    super();
  }

  getByID(id: number): Observable<Album> {
    return this.httpClient.get<Album>(this.urlApi + id).pipe((res) => res);
  }

  getAll(): Observable<Array<Album>> {
    return this.httpClient.get<Array<Album>>(this.urlApi);
  }

}
