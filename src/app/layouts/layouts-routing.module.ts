import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDocumentComponent } from './pages/admin/add-document/add-document.component';
import { ExecutiveTeacherComponent } from './pages/admin/executive-teacher/executive-teacher.component';
import { DocumentComponent } from './pages/admin/document/document.component';
import { ListTeacherComponent } from './pages/admin/list-teacher/list-teacher.component';
import { AdminHomeComponent } from './pages/admin/admin-home/admin-home.component';
import { ExSelectRoleComponent } from './pages/exam-teacher/ex-select-role/ex-select-role.component';
import { ExHomeComponent } from './pages/exam-teacher/ex-home/ex-home.component';


const routes: Routes = [
{ path: 'admin-home', 
component: AdminHomeComponent,
data: { animation: 'AdminHomeComponent' } }, 
{ path: 'list-teacher', component: ListTeacherComponent,data: { animation: 'ListTeacherComponent' } }, 
{ path: 'document', component: DocumentComponent }, 
{ path: 'executive-teacher', component: ExecutiveTeacherComponent }, 
{ path: 'add-ducument', component: AddDocumentComponent }, 
{ path: 'ex-select-role', component: ExSelectRoleComponent }, 
{ path: 'ex-home', component: ExHomeComponent }, 




   

  { path: '', redirectTo: 'admin-home', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutsRoutingModule { }