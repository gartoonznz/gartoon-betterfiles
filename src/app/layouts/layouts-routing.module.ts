import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminHomeComponent } from './pages/admin-home/admin-home.component';
import { ListTeacherComponent } from './pages/list-teacher/list-teacher.component';
import { DocumentComponent } from './pages/document/document.component';
import { ExecutiveTeacherComponent } from './pages/executive-teacher/executive-teacher.component';
import { AddDocumentComponent } from './pages/add-document/add-document.component';

const routes: Routes = [
{ path: 'admin-home', component: AdminHomeComponent }, 
{ path: 'list-teacher', component: ListTeacherComponent }, 
{ path: 'document', component: DocumentComponent }, 
{ path: 'executive-teacher', component: ExecutiveTeacherComponent }, 
{ path: 'add-ducument', component: AddDocumentComponent }, 



   

  { path: '', redirectTo: 'admin-home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }