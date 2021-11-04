import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { User } from "../_modules/user";
import {catchError, map, tap} from "rxjs/operators"

@Injectable({ providedIn: 'root'})

export class GitHubUsersService
{

    constructor(private http: HttpClient) {}

    private log(message: string):void
    {
        console.log(message);
    }

    private hadleError<T>(operation = 'operation', result?: T)
    {
        return (error: any): Observable<T> => {
            console.error(error);
            this.log(error);
            return of(result as T)
        }
    }

    
    getUsers(): Observable<User[]>
    {
        //const url = "https://api.github.com/users"
        const url = "../assets/users.json"

        return this.http.get<User[]>(url).pipe(
            tap( () => this.log('Servece get all users correctly')),
            catchError(this.hadleError('getUsers',[]))
        );
    }
}