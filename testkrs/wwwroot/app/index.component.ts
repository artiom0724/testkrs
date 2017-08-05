import { Component, OnInit } from '@angular/core';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { AboutComponent } from './about.component';
import { Mydata, Mycategory, Myhashteg } from './mydata'


@Component({
    selector: 'my-index',
    templateUrl: '/partial/indexComponent',
    providers: [HttpService]
})

export class IndexComponent implements OnInit { 
    mydatas: Mydata[] = [];
    mycategories: Mycategory[] = [];
    myhashtegs: Myhashteg[] = [];

    constructor(public httpService: HttpService) { }
    ngOnInit() {
        this.httpService.getData().subscribe((data: Response) => this.mydatas = data.json());
        this.httpService.getCategories().subscribe((data: Response) => this.mycategories = data.json());
        this.httpService.getHashtegs().subscribe((data: Response) => this.myhashtegs = data.json());    
    }

}
