import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseUrl } from 'src/app/service/BtResUserService';
import { faSubscript } from '@fortawesome/free-solid-svg-icons';
import { async } from '@angular/core/testing';
import { RegisterModalComponent } from '../register-modal/register-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  constructor(private http: HttpClient, private modalService: NgbModal) { }
  username: any;
  password: any;
  fristname: any;
  lastname: any;
  email: any;
  phone: any;
  value: any;
  confirmPassword: any;
  passwordMatch: boolean = true;
  fulltextkey: boolean = true;


  checkPasswordMatch() {
    if (this.password === this.confirmPassword) {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }
  onSubmit() {
    const data = {
      USER_USERNAME: this.username,
      USER_PASSWORD: this.password,
      USER_NAME: this.fristname,
      USER_LASTNAME: this.lastname,
      USER_EMAIL: this.email,
      USER_PHONE_NUMBER: this.phone,
      USER_STATUS: 'A',
      USER_RIGHTS: 'U',
    };
    console.log(data);
    if (this.username === '' || this.password === '' || this.fristname === '' || this.lastname === '' || this.email === '' || this.phone === '') {
      const modalRef = this.modalService.open(RegisterModalComponent);
      modalRef.componentInstance.myData = 'กรุณากรอกข้อมูลให้ครบถ้วน !!';
    }
    else {


      this.http.post(baseUrl, data)
        .subscribe(async response => {
          this.value = response;
          console.log(this.value);
        })

      // console.log(this.username)
      // console.log(this.password)
      // console.log(this.fristname)
      // console.log(this.lastname)
      // console.log(this.email)
      // console.log(this.phone)
      const modalRef = this.modalService.open(RegisterModalComponent);
      modalRef.componentInstance.myData = 'การลงทะเบียนเสร็จสมบูรณ์ กด ยืนยัน เพื่อเข้าสู่ระบบ !!';
    }
  }
}

