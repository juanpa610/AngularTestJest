import { Inject, Injectable } from "@angular/core";
import { AlbumGateway } from "../../domain/gateway/album.gateway";
import { Observable } from 'rxjs';
import { User } from "../../domain/interface/user.intefaces";
import { UserGateway } from "../../domain/gateway/user.gateway";

@Injectable({
    providedIn: 'root'
})
export class UserUseCase {
    constructor(private readonly _userGateWay: UserGateway) { }

    getUsers(): Observable<User[]> {
        return this._userGateWay.getUsers();
    }

    getUserByID(id: number): Observable<User> {
        return this._userGateWay.getUserById(id);
    }
}