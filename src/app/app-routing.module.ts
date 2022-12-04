import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RunListComponent } from './run-list/run-list.component';
import { AddRunComponent } from './add-run/add-run.component'; 

const routes: Routes = [
 { path: '', redirectTo: 'runs', pathMatch: 'full' },
 { path: 'runs', component: RunListComponent },
 { path: 'runs/new', component: AddRunComponent },
];
 
@NgModule({
 imports: [RouterModule.forRoot(routes)],
 exports: [RouterModule]
})
export class AppRoutingModule { }