import { Component } from '@angular/core';
import { AlertService } from '../../../../shared/services/alert.service';
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

@Component({
  selector: 'app-executive-teacher',
  templateUrl: './executive-teacher.component.html',
  styleUrl: './executive-teacher.component.css'
})
export class ExecutiveTeacherComponent {
  title = "แก้ไขรายชื่อคณะผู้บริหาร"
  head!:string;
  head2!:string;

  common_teacher:common_teacher[] = RECEIVEINFO;
  constructor(private Alert: AlertService) {}


  async save(){
    if (await this.Alert.AlertConfrim('Confirm', 'ยืนยันแก้ไขข้อมูลคณะผู้บริหารใช่หรือไม่?')) {
        await this.Alert.AlertSuccessToast('Update Success');
    }

  }

}
