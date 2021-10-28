import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({ providedIn: 'root'})

export class GitHubUsersService
{

    constructor(private http: HttpClient) {}


    getData(): Observable<any>
    {
        const url = "https://api.github.com/users"

        return this.http.get<any>(url);
    }
}