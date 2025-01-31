import { Observable } from "rxjs";
import { Album } from "../interface/album.interface";

export abstract class AlbumGateway {
    abstract getByID(id: number): Observable<Album>;
    abstract getAll(): Observable<Array<Album>>;
}