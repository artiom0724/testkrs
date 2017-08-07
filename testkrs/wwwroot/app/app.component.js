"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var platform_browser_1 = require("@angular/platform-browser");
var http_service_1 = require("./http.service");
var mydata_1 = require("./mydata");
var AppComponent = (function () {
    function AppComponent(titleService, httpService) {
        this.titleService = titleService;
        this.httpService = httpService;
        this.myprofile = new mydata_1.Myprofile();
        this.popdata = new mydata_1.Mydata();
        this.mydatas = [];
        this.searchresult = [];
        this.searchClick = false;
        this.angularClientSideData = 'Angular';
    }
    AppComponent.prototype.setTitle = function (newTitle) {
        this.titleService.setTitle(newTitle);
    };
    AppComponent.prototype.setMyprofile = function (profileid) {
        var _this = this;
        this.httpService.getProfile(profileid)
            .subscribe(function (data) { return _this.myprofile = data.json(); });
        this.httpService.getInstructionByUser(profileid)
            .subscribe(function (data) { return _this.mydatas = data.json(); });
        this.httpService.getPopylarInstruction(profileid)
            .subscribe(function (data) { return _this.popdata = data.json(); });
    };
    AppComponent.prototype.searchInstructions = function () {
        var _this = this;
        this.searchClick = true;
        this.httpService.searchInstructions(this.reqest)
            .subscribe(function (data) { return _this.searchresult = data.json(); });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: 'my-app',
        templateUrl: '/partial/appComponent',
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [platform_browser_1.Title,
        http_service_1.HttpService])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map