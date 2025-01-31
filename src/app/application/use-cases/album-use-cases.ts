
import { Injectable } from "@angular/core";
import { AlbumGateway } from "../../domain/gateway/album.gateway";
import { Album } from "../../domain/interface/album.interface";
import { Observable } from "rxjs";


@Injectable({
    providedIn: 'root'
})
export class GetAlbumUseCases {
    constructor(private _albumGateWay: AlbumGateway) { }
    getAlbumById(id: number): Observable<Album> {
        return this._albumGateWay.getByID(id);
    }
    getAllAlbum(): Observable<Album[]> {
        return this._albumGateWay.getAll();
    }
}