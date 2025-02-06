import { Observable } from "rxjs";
import { User } from "../interface/user.intefaces";

export abstract class UserGateway {
    abstract getUsers(): Observable<User[]>;
    abstract getUserById(id: number): Observable<User>;
}