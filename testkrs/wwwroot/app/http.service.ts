import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Mydata } from "./mydata";
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
    getReqest() {
        return this.http.get('http://localhost:62429/Partial/GetReqest/');
    }

    setReqest(instr: string) {     
      this.http.get('http://localhost:62429/Partial/SetReqest?_instructionName='+instr);
    }
}