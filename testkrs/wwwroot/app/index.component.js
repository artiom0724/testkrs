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
var http_service_1 = require("./http.service");
var IndexComponent = (function () {
    function IndexComponent(httpService) {
        this.httpService = httpService;
        this.mydatas = [];
        this.mycategories = [];
        this.myhashtegs = [];
    }
    IndexComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.httpService.getData().subscribe(function (data) { return _this.mydatas = data.json(); });
        this.httpService.getCategories().subscribe(function (data) { return _this.mycategories = data.json(); });
        this.httpService.getHashtegs().subscribe(function (data) { return _this.myhashtegs = data.json(); });
    };
    return IndexComponent;
}());
IndexComponent = __decorate([
    core_1.Component({
        selector: 'my-index',
        templateUrl: '/partial/indexComponent',
        providers: [http_service_1.HttpService]
    }),
    __metadata("design:paramtypes", [http_service_1.HttpService])
], IndexComponent);
exports.IndexComponent = IndexComponent;
//# sourceMappingURL=index.component.js.map