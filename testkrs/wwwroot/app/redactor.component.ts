import { Component, OnInit, Input } from '@angular/core';
import { Response } from '@angular/http';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { DomSanitizer } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { HttpService } from './http.service';
import { Mydata, Mystep, Myblock, Mycomment, Myprofile } from './mydata'
@Component({
    selector: 'my-redactor',
    templateUrl: '/partial/redactorComponent',
    providers: [HttpService]
})

export class RedactorComponent implements OnInit{
    mydata: Mydata = new Mydata();
    author: Myprofile = new Myprofile();
    myhashtegs: string[] = [];
    mysteps: Mystep[] = [];
    myblocks: Myblock[] = [];
    numOfStep: number = 0;
    numOfBlock: number = 0;
    blockStep: number = 0;
    noMyUserClick: boolean = false;

    nomyprofile: Myprofile = new Myprofile();
    popdata: Mydata = new Mydata();
    mydatas: Mydata[] = [];
    tempStep: Mystep = new Mystep();
    tempBlock: Myblock = new Myblock();
    constructor(public myhttpService: HttpService,      
        private location: Location,
        public sanitizer: DomSanitizer
    ) { }

    ngOnInit() {
         
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

    incrNumStep() {      
        this.tempStep.numStep = this.numOfStep+1;
        this.mysteps[this.numOfStep] = this.tempStep;
        this.numOfStep++;
    }

    incrNumBlock() {
        this.tempBlock.numBlock = this.numOfBlock + 1;
        this.tempBlock.stepPath = this.blockStep;
        this.myblocks[this.numOfBlock] = this.tempBlock;
        this.numOfStep++;
    }

    setStep(temp: number) {
        this.blockStep = temp;
    }
}
