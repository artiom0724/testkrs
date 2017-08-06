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
var router_1 = require("@angular/router");
var platform_browser_1 = require("@angular/platform-browser");
var common_1 = require("@angular/common");
var http_service_1 = require("./http.service");
var mydata_1 = require("./mydata");
//import 'rxjs/add/operator/switchMap';
var AboutComponent = (function () {
    function AboutComponent(myhttpService, route, location, sanitizer) {
        this.myhttpService = myhttpService;
        this.route = route;
        this.location = location;
        this.sanitizer = sanitizer;
        this.mydata = new mydata_1.Mydata();
        this.myhashtegs = [];
        this.mysteps = [];
        this.myblocks = [];
        this.mycomments = [];
        this.myprofiles = [];
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params
            .subscribe(function (params) {
            _this.mydata.instructionId = params['InstructionId'],
                _this.mydata.InstructionId = params['InstructionId'];
        });
        var reqestId = this.mydata.InstructionId;
        this.myhttpService.getInstruction(reqestId)
            .subscribe(function (data) { return _this.mydata = data.json(); });
        this.myhttpService.getSteps(reqestId)
            .subscribe(function (data) { return _this.mysteps = data.json(); });
        this.myhttpService.getComments(reqestId)
            .subscribe(function (data) { return _this.mycomments = data.json(); });
        this.myhttpService.getBlocks(reqestId)
            .subscribe(function (data) { return _this.myblocks = data.json(); });
        var sendComments = new mydata_1.Mycomment();
        sendComments = this.mycomments[0];
        this.myhttpService.getCommentUsers(sendComments)
            .subscribe(function (data) { return _this.myprofiles = data.json(); });
    };
    return AboutComponent;
}());
AboutComponent = __decorate([
    core_1.Component({
        selector: 'my-about',
        templateUrl: '/partial/aboutComponent',
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService,
        router_1.ActivatedRoute,
        common_1.Location,
        platform_browser_1.DomSanitizer])
], AboutComponent);
exports.AboutComponent = AboutComponent;
//# sourceMappingURL=about.component.js.map