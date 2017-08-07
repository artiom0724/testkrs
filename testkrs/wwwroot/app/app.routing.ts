import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './about.component';
import { IndexComponent } from './index.component';
import { RedactorComponent } from './redactor.component';

const appRoutes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: IndexComponent, data: { title: 'Home' } },
    { path: 'about/:InstructionId', component: AboutComponent, data: { title: 'About' } },
    { path: 'redactor', component: RedactorComponent, data: { title: 'Redactor' } }
];

export const routing = RouterModule.forRoot(appRoutes);

export const routedComponents = [AboutComponent, IndexComponent, RedactorComponent];
