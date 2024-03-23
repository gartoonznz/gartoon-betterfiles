import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { common_teacher } from '../../../../shared/interface/teacher';


const RECEIVEINFO: common_teacher[] = [
  {
    academic_position: "ผศ.ดร.",
    tf_name: "กษิติศ",
    tl_name: "ชาณเชี่ยว",
    exam_role:false
  }, { 
    academic_position: "ผศ.ดร.",
    tf_name: "ทรงศักดิ์",
    tl_name: "รองวิริยะพานิช",
    exam_role:false
  }, {
    academic_position: "ผศ.ดร.",
    tf_name: "วิลาวรรณ",
    tl_name: "รักผกาวงศ์",
    exam_role:false
  }, {
    academic_position: "ผศ.ดร.",
    tf_name: "ลัมพาพรรณ",
    tl_name: "พันธ์ชูจิตร์",
    exam_role:true
  }, {
    academic_position: "ผศ.ดร.",
    tf_name: "มนวรรัตน์",
    tl_name: "ผ่องไพบูลย์",
    exam_role:false
  }, {
    academic_position: "ผศ.ดร.",
    tf_name: "วิรัตน์",
    tl_name: "จารีวงศ์ไพบูลย์",
    exam_role:true
  }, {
    academic_position: "ผศ.ดร.",
    tf_name: "ฐาปนา",
    tl_name: "บุญชู",
    exam_role:false
  }

]
const exam_teacher: common_teacher[] = [
  {
    academic_position: "ผศ.ดร.",
    tf_name: "ลัมพาพรรณ",
    tl_name: "พันธ์ชูจิตร์",
    exam_role:true
  }, {
    academic_position: "ผศ.ดร.",
    tf_name: "วิรัตน์",
    tl_name: "จารีวงศ์ไพบูลย์",
    exam_role:true
  }

]

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrl: './list-teacher.component.css'
})
export class ListTeacherComponent {
  common_teacher:common_teacher[] = RECEIVEINFO;
  exam_teacher:common_teacher[] = exam_teacher;
  constructor(private router: Router){
    
  }
  openModalEditExam(){
    const modelDiv = document.getElementById('EditExam');
    if (modelDiv != null) {
      modelDiv.style.display = 'block';
    }
  }
  closeEditExam(){
    const modelDiv = document.getElementById('EditExam');
    if (modelDiv != null) {
      modelDiv.style.display = 'none';
    }
  }
  goToExeTeacher(){
    this.router.navigate(['/executive-teacher']);
  }
  
  backToAdminHome() {
    this.router.navigate(['/admin-home']);
  }
}
