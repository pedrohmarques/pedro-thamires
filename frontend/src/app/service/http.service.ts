import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { map } from 'rxjs/operators';
import { environment } from "src/environment/environment";

@Injectable({
    providedIn: 'root'
})
export class HttpService {
    private readonly apiUrl: string = environment.API_URL;
    constructor(private readonly http: HttpClient) {
        this.apiUrl = environment.API_URL
    }

    httpGet<T>(endpoint: string, newUrl?: string): Observable<T> {
        const url = `${newUrl || this.apiUrl}/${endpoint}`
        return this.http.get<T>(url).pipe(map((response: T) => response))
    }

    httpPut<T>(endpoint: string, data: any, newUrl?: string): Observable<T> {
        const url = `${newUrl || this.apiUrl}/${endpoint}`
        return this.http.put<T>(url, data).pipe(map((response: T) => response));
    }
}