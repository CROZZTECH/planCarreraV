import { Routes } from '@angular/router';
import { Form1Component } from './form1/form1.component';
import { TableComponent } from './table/table.component';

export const routes: Routes = [
    { path: '', redirectTo: '/table', pathMatch: 'full' },
    { path: 'form1', component: Form1Component},
    { path: 'form1/:id', component: Form1Component},
    { path: 'table', component: TableComponent}
];
