import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { baseUrl, BtResUser } from 'src/app/service/BtResUserService';
import { LoginModalComponent } from '../login-modal/login-modal.component';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.scss']
})
export class UserEditComponent implements OnInit {
  constructor(private http: HttpClient, private modalService: NgbModal) { }
  getuser: any;
  username: any
  password: any
  name: any
  lastname: any
  email: any
  phone: any
  id: any;
  userdata: any
  passwordMatch: boolean = true;
  confirmPassword: any;
  fulltextkey: boolean = true;

    checkPasswordMatch() {
    if (this.password === this.confirmPassword) {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }

  ngOnInit(): void {
    const data = JSON.parse(sessionStorage.getItem('key') || '{}');
    this.getuser = data.Value
    this.id = this.getuser.USER_ID

    this.http.get<BtResUser>(baseUrl + '/' + this.id).subscribe(response => {
      this.userdata = response.Value
      // console.log(this.userdata)
      this.username = this.userdata.USER_USERNAME
      this.password = this.userdata.USER_PASSWORD
      this.confirmPassword = this.userdata.USER_PASSWORD
      this.name = this.userdata.USER_NAME
      this.lastname = this.userdata.USER_LASTNAME
      this.email = this.userdata.USER_EMAIL
      this.phone = this.userdata.USER_PHONE_NUMBER
    }
    )

  }


  onSubmit() {
    const data = {
      USER_PASSWORD: this.password,
      USER_NAME: this.name,
      USER_LASTNAME: this.lastname,
      USER_EMAIL: this.email,
      USER_PHONE_NUMBER: this.phone,
    };
    // console.log(data)
    this.http.put(baseUrl + '/' + this.id, data)
      .subscribe(response => {
        // console.log(response);
        const modalRef = this.modalService.open(LoginModalComponent);
        modalRef.componentInstance.myData = 'แก้ใขข้อมูลสำเร็จ';
        modalRef.componentInstance.Title = 'สำเร็จ';
      })
  }
}
