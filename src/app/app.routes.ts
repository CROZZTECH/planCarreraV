import { Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { TableComponent } from './table/table.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
    { path: '', redirectTo: '/table', pathMatch: 'full' },
    { path: 'form1', component: Form1Component, canActivate: [AuthGuard]},
    { path: 'form1/:id', component: Form1Component, canActivate: [AuthGuard]},
    { path: 'table', component: TableComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent},
];
