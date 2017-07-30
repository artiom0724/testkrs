import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { Mydata } from './mydata'

@Component({
    selector: 'my-index',
    templateUrl: '/partial/indexComponent',
    providers: [HttpService]
})

export class IndexComponent implements OnInit { 
    mydata: Mydata;
    testtext: string;
    constructor(public httpService: HttpService) { }
    ngOnInit() {
        this.httpService.getData().subscribe((data: Response) => this.mydata = data.json());
        this.testtext = "qweQQQ";
    }
}
