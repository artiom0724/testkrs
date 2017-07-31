import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class HttpService {
    constructor(private http: Http) { }

    getData() {
        return this.http.get('http://localhost:62429/Partial/GetData/');//http://localhost:62429/
    }
}