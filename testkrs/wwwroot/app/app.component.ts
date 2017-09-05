import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Response } from '@angular/http';
import { HttpService } from './http.service';
import { Myprofile, Mydata } from './mydata';

@Component({
    selector: 'my-app',
    templateUrl: '/partial/appComponent',
    providers: [HttpService]
})
export class AppComponent {

    myprofile: Myprofile = new Myprofile();
    popdata: Mydata = new Mydata();
    mydatas: Mydata[] = [];

    searchresult: Mydata[] = [];
    searchClick: boolean = false;
    searchingstr = 'asdd';

    angularClientSideData = '';

    public constructor(private titleService: Title,
        public httpService: HttpService) { }
    

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

    public searchInstructions() {
        this.searchClick = true;
        this.httpService.searchInstructions(this.angularClientSideData)
            .subscribe((data: Response) => this.searchresult = data.json());
    }

    public chooseCategory(str:string) {
        this.angularClientSideData = str;
        this.searchInstructions();
    }
}
