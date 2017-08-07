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
    author: Myprofile = new Myprofile();
    myhashtegs: string[] = [];
    mysteps: Mystep[] = [];
    myblocks: Myblock[] = [];

    mycomments: Mycomment[] = [];
    stepcomments: Mycomment[] = [];
    myprofiles: Myprofile[] = [];

    noMyUserClick: boolean = false;

    nomyprofile: Myprofile = new Myprofile();
    popdata: Mydata = new Mydata();
    mydatas: Mydata[] = [];

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
        this.myhttpService.getAuthorInstruction(reqestId)
            .subscribe((data: Response) => this.author = data.json());
        this.myhttpService.getSteps(reqestId)
            .subscribe((data: Response) => this.mysteps = data.json());      
        this.myhttpService.getComments(reqestId)
            .subscribe((data: Response) => this.mycomments = data.json());        
        this.myhttpService.getBlocks(reqestId)
            .subscribe((data: Response) => this.myblocks = data.json());           
        this.myhttpService.getCommentUsers(reqestId)
            .subscribe((data: Response) => this.myprofiles = data.json());
        this.myhttpService.getCommentForSteps(reqestId)
            .subscribe((data: Response) => this.stepcomments = data.json());
    }   

    setNoMyprofile(profileid: string) {
        this.noMyUserClick = true;
        this.myhttpService.getProfile(profileid)
            .subscribe((data: Response) => this.nomyprofile = data.json());
        this.myhttpService.getInstructionByUser(profileid)
            .subscribe((data: Response) => this.mydatas = data.json());
        this.myhttpService.getPopylarInstruction(profileid)
            .subscribe((data: Response) => this.popdata = data.json());
    }
}
