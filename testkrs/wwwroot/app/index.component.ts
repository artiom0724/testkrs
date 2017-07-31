﻿import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { Mydata } from './mydata'

@Component({
    selector: 'my-index',
    templateUrl: '/partial/indexComponent',
    providers: [HttpService]
})

export class IndexComponent implements OnInit { 
    mydatas: Mydata[] = [];
    testtext: string;
    constructor(public httpService: HttpService) { }
    ngOnInit() {
        this.httpService.getData().subscribe((data: Response) => this.mydatas = data.json());
        this.testtext = "qweQQQ";
    }
}
