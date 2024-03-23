import { Component } from '@angular/core';
import { doc, docType } from '../../../../shared/interface/doc';
import { SwalService } from '../../../../shared/services/swal.service';
import { Router } from '@angular/router';
import { docData } from '../../admin/document/dummy/doc-data';
import { common_teacher } from '../../../../shared/interface/teacher';
import { AllteacherData } from '../../admin/executive-teacher/dummy/all-teacher-data';
import { docTypeData } from '../../admin/document/dummy/doc-type';

@Component({
  selector: 'app-ex-home',
  templateUrl: './ex-home.component.html',
  styleUrl: './ex-home.component.css'
})
export class ExHomeComponent {
  search!:string;
  docList!: doc[];
  common_teacher!: common_teacher[]
  _docList!: doc[];
  docType!: docType[]
  checkListAll!:boolean
  checkList!:boolean
  masterSelected = false

  constructor(private router: Router,
    private swalSrv: SwalService) {
 
      this.docType = docTypeData
      this.common_teacher = AllteacherData
     this.docList = docData;
     this._docList = docData;
 
     console.log(this.docList)
   }

}
