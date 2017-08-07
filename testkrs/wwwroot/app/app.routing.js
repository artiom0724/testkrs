"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var router_1 = require("@angular/router");
var about_component_1 = require("./about.component");
var index_component_1 = require("./index.component");
var redactor_component_1 = require("./redactor.component");
var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: index_component_1.IndexComponent, data: { title: 'Home' } },
    { path: 'about/:InstructionId', component: about_component_1.AboutComponent, data: { title: 'About' } },
    { path: 'redactor', component: redactor_component_1.RedactorComponent, data: { title: 'Redactor' } }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
exports.routedComponents = [about_component_1.AboutComponent, index_component_1.IndexComponent, redactor_component_1.RedactorComponent];
//# sourceMappingURL=app.routing.js.map