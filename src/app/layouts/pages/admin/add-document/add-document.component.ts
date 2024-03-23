import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { docTypeData } from '../document/dummy/doc-type';
import { AllteacherData } from '../executive-teacher/dummy/all-teacher-data';
import { common_teacher } from '../../../../shared/interface/teacher';
import { docType } from '../../../../shared/interface/doc';

@Component({
  selector: 'app-add-document',
  templateUrl: './add-document.component.html',
  styleUrl: './add-document.component.css'
})
export class AddDocumentComponent {
  docType!: docType[]
  common_teacher!: common_teacher[]
  expType_id!:number
  
  constructor(private router: Router){
    this.docType = docTypeData
    this.common_teacher = AllteacherData
    console.log("doctype",this.docType)
    console.log("common_teacher", this.common_teacher)  
  }

  
  backToAdminHome() {
    this.router.navigate(['/admin-home']);
  }
}
