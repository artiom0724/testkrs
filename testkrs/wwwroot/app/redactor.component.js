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
var common_1 = require("@angular/common");
var http_service_1 = require("./http.service");
var mydata_1 = require("./mydata");
var RedactorComponent = (function () {
    function RedactorComponent(myhttpService, location, sanitizer) {
        this.myhttpService = myhttpService;
        this.location = location;
        this.sanitizer = sanitizer;
        this.mydata = new mydata_1.Mydata();
        this.author = new mydata_1.Myprofile();
        this.myhashtegs = [];
        this.mysteps = [];
        this.myblocks = [];
        this.numOfStep = 0;
        this.numOfBlock = 0;
        this.blockStep = 0;
        this.noMyUserClick = false;
        this.nomyprofile = new mydata_1.Myprofile();
        this.popdata = new mydata_1.Mydata();
        this.mydatas = [];
        this.tempStep = new mydata_1.Mystep();
        this.tempBlock = new mydata_1.Myblock();
    }
    RedactorComponent.prototype.ngOnInit = function () {
    };
    RedactorComponent.prototype.setNoMyprofile = function (profileid) {
        var _this = this;
        this.noMyUserClick = true;
        this.myhttpService.getProfile(profileid)
            .subscribe(function (data) { return _this.nomyprofile = data.json(); });
        this.myhttpService.getInstructionByUser(profileid)
            .subscribe(function (data) { return _this.mydatas = data.json(); });
        this.myhttpService.getPopylarInstruction(profileid)
            .subscribe(function (data) { return _this.popdata = data.json(); });
    };
    RedactorComponent.prototype.incrNumStep = function () {
        this.tempStep.numStep = this.numOfStep + 1;
        this.mysteps[this.numOfStep] = this.tempStep;
        this.numOfStep++;
    };
    RedactorComponent.prototype.incrNumBlock = function () {
        this.tempBlock.numBlock = this.numOfBlock + 1;
        this.tempBlock.stepPath = this.blockStep;
        this.myblocks[this.numOfBlock] = this.tempBlock;
        this.numOfStep++;
    };
    RedactorComponent.prototype.setStep = function (temp) {
        this.blockStep = temp;
    };
    return RedactorComponent;
}());
RedactorComponent = __decorate([
    core_1.Component({
        selector: 'my-redactor',
        templateUrl: '/partial/redactorComponent',
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService,
        common_1.Location,
        platform_browser_1.DomSanitizer])
], RedactorComponent);
exports.RedactorComponent = RedactorComponent;
//# sourceMappingURL=redactor.component.js.map