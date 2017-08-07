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
var http_1 = require("@angular/http");
var HttpService = (function () {
    function HttpService(http) {
        this.http = http;
    }
    HttpService.prototype.getData = function () {
        return this.http.get('http://localhost:62429/Partial/GetData/'); //http://localhost:62429/
    };
    HttpService.prototype.getCategories = function () {
        return this.http.get('http://localhost:62429/Partial/GetCategories/');
    };
    HttpService.prototype.getHashtegs = function () {
        return this.http.get('http://localhost:62429/Partial/GetHashtegs/');
    };
    //***************************************************************************************************
    HttpService.prototype.getInstruction = function (reqestId) {
        return this.http.get('http://localhost:62429/Partial/GetAboutInstruction?_InstructionId=' + reqestId);
    };
    HttpService.prototype.getSteps = function (reqestId) {
        return this.http.get('http://localhost:62429/Partial/GetInstructionSteps?_InstructionId=' + reqestId);
    };
    HttpService.prototype.getComments = function (reqestId) {
        return this.http.get('http://localhost:62429/Partial/GetInstructionComments?_instructionId=' + reqestId);
    };
    HttpService.prototype.getBlocks = function (reqestId) {
        return this.http.get('http://localhost:62429/Partial/GetBlocks?_instructionId=' + reqestId);
    };
    HttpService.prototype.getCommentUsers = function (reqestId) {
        return this.http.get('http://localhost:62429/Partial/GetUsersByComments?_instructionId=' + reqestId);
    };
    HttpService.prototype.getAuthorInstruction = function (reqestId) {
        return this.http.get('http://localhost:62429/Partial/GetAuthorInstruction?_instructionId=' + reqestId);
    };
    HttpService.prototype.getCommentForSteps = function (reqestId) {
        return this.http.get('http://localhost:62429/Partial/GetCommentsForSteps?_instructionId=' + reqestId);
    };
    //*******************************************************************************************************
    HttpService.prototype.getProfile = function (reqestId) {
        return this.http.get('http://localhost:62429/Partial/GetProfile?_ProfileId=' + reqestId);
    };
    HttpService.prototype.getInstructionByUser = function (reqestId) {
        return this.http.get('http://localhost:62429/Partial/GetInstructionByUser?_userPath=' + reqestId);
    };
    HttpService.prototype.getPopylarInstruction = function (reqestId) {
        return this.http.get('http://localhost:62429/Partial/GetPopularityInstruction?_userPath=' + reqestId);
    };
    //*******************************************************************************************************
    HttpService.prototype.searchInstructions = function (reqest) {
        return this.http.get('http://localhost:62429/Partial/GetSearchResult?_reqest=' + reqest);
    };
    return HttpService;
}());
HttpService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], HttpService);
exports.HttpService = HttpService;
//# sourceMappingURL=http.service.js.map