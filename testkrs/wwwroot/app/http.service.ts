import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Mydata, Mycomment } from "./mydata";
import { Observable } from 'rxjs/Observable'


@Injectable()
export class HttpService {
    constructor(private http: Http) { }
   
    getData() {
        return this.http.get('http://localhost:62429/Partial/GetData/');//http://localhost:62429/
    }

    getCategories() {
        return this.http.get('http://localhost:62429/Partial/GetCategories/');
    }

    getHashtegs() {
        return this.http.get('http://localhost:62429/Partial/GetHashtegs/');
    }
    //***************************************************************************************************
    getInstruction(reqestId: number) {       
        return this.http.get('http://localhost:62429/Partial/GetAboutInstruction?_InstructionId=' + reqestId);
    }

    getSteps(reqestId: number) {
        return this.http.get('http://localhost:62429/Partial/GetInstructionSteps?_InstructionId=' + reqestId);
    }

    getComments(reqestId: number) {
        return this.http.get('http://localhost:62429/Partial/GetInstructionComments?_instructionId=' + reqestId);
    }

    getBlocks(reqestId: number) {
        return this.http.get('http://localhost:62429/Partial/GetBlocks?_instructionId=' + reqestId);
    }

    getCommentUsers(reqest: Mycomment) {
        const _userPath = JSON.stringify(reqest);
        let headers = new Headers({ 'Content-Type': 'application/json;charset=utf-8' });
        return this.http.post('http://localhost:62429/Partial/GetUsersByComments', _userPath, { headers: headers });
    }
}