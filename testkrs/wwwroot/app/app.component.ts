import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { Myprofile, Mydata } from './mydata';
import { FormsModule } from '@angular/forms';
@Component({
    selector: 'my-app',
    templateUrl: '/partial/appComponent',
    providers: [HttpService]
})
export class AppComponent {
    public constructor(private titleService: Title,
        public httpService: HttpService) { }
    myprofile: Myprofile = new Myprofile();
    popdata: Mydata = new Mydata();
    mydatas: Mydata[] = [];

    searchresult: Mydata[] = [];
    searchClick: boolean = false;

    angularClientSideData = 'Angular';

    public setTitle(newTitle: string) {
        this.titleService.setTitle(newTitle);
    }

    public setMyprofile(profileid:string)
    {        
        this.httpService.getProfile(profileid)
            .subscribe((data: Response) => this.myprofile = data.json());
        this.httpService.getInstructionByUser(profileid)
            .subscribe((data: Response) => this.mydatas = data.json());
        this.httpService.getPopylarInstruction(profileid)
            .subscribe((data: Response) => this.popdata = data.json());
    }

    public searchInstructions(reqest:string) {
        this.searchClick = true;
        this.httpService.searchInstructions(reqest)
            .subscribe((data: Response) => this.searchresult = data.json());
    }
}
