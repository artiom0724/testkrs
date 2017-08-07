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

    getCommentUsers(reqestId: number) {
        return this.http.get('http://localhost:62429/Partial/GetUsersByComments?_instructionId='+reqestId);
    }

    getAuthorInstruction(reqestId: number) {
        return this.http.get('http://localhost:62429/Partial/GetAuthorInstruction?_instructionId=' + reqestId);
    }

    getCommentForSteps(reqestId: number) {
        return this.http.get('http://localhost:62429/Partial/GetCommentsForSteps?_instructionId=' + reqestId);
    }
    //*******************************************************************************************************
    getProfile(reqestId: string) {
        return this.http.get('http://localhost:62429/Partial/GetProfile?_ProfileId='+reqestId);
    }

    getInstructionByUser(reqestId: string) {
        return this.http.get('http://localhost:62429/Partial/GetInstructionByUser?_userPath=' + reqestId);
    }

    getPopylarInstruction(reqestId: string) {
        return this.http.get('http://localhost:62429/Partial/GetPopularityInstruction?_userPath=' + reqestId);
    }
    //*******************************************************************************************************

    searchInstructions(reqest: string)    {
        return this.http.get('http://localhost:62429/Partial/GetSearchResult?_reqest=' + reqest);
    }
}