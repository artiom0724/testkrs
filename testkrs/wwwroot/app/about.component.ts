import { Component, OnInit , Input} from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { HttpService } from './http.service';
import { Mydata, Mystep, Myblock, Mycomment, Myprofile } from './mydata'

//import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'my-about',
    templateUrl: '/partial/aboutComponent',
    providers: [HttpService]
})

export class AboutComponent implements OnInit{
    mydata: Mydata = new Mydata();
    myhashtegs: string[] = [];
    mysteps: Mystep[] = [];
    myblocks: Myblock[] = [];
    mycomments: Mycomment[] = [];
    myprofiles: Myprofile[] = [];

    constructor(public myhttpService: HttpService,
        private route: ActivatedRoute,
        private location: Location,
        public sanitizer: DomSanitizer
    ) { }
    ngOnInit() {      
        this.route.params
            .subscribe(params => {
                this.mydata.instructionId = params['InstructionId'], 
                this.mydata.InstructionId = params['InstructionId'] 
            });
        const reqestId = this.mydata.InstructionId;
        this.myhttpService.getInstruction(reqestId)
            .subscribe((data: Response) => this.mydata = data.json());
        this.myhttpService.getSteps(reqestId)
            .subscribe((data: Response) => this.mysteps = data.json());      
        this.myhttpService.getComments(reqestId)
            .subscribe((data: Response) => this.mycomments = data.json());        
        this.myhttpService.getBlocks(reqestId)
            .subscribe((data: Response) => this.myblocks = data.json());   
        let sendComments: Mycomment = new Mycomment();
        sendComments = this.mycomments[0];
        this.myhttpService.getCommentUsers(sendComments)
            .subscribe((data: Response) => this.myprofiles = data.json());
    }   
}
