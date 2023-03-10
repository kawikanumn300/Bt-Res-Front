import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { baseUrl, BtResUser } from 'src/app/service/BtResUserService';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { RegisterModalComponent } from '../register-modal/register-modal.component';

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
  confirmpassword: any
  passwordMatch = false;
  fulltextkey: boolean = true;
  ngOnInit(): void {
    const data = JSON.parse(sessionStorage.getItem('key') || '{}');
    this.getuser = data.Value
    this.id = this.getuser.USER_ID

    this.http.get<BtResUser>(baseUrl + '/' + this.id).subscribe(response => {
      this.userdata = response.Value
      // console.log(this.userdata)
      this.username = this.userdata.USER_USERNAME
      this.password = this.userdata.USER_PASSWORD
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
    }
    if (this.username === '' || this.password === '' || this.name === '' || this.lastname === '' || this.email === '' || this.phone === '') {
      this.fulltextkey=false
    }
    else {
      // console.log(data)
      this.http.put(baseUrl + '/' + this.id, data)
        .subscribe(response => {
          // console.log(response);
          const modalRef = this.modalService.open(LoginModalComponent);
          modalRef.componentInstance.myData = '???????????????????????????????????????????????????';
          modalRef.componentInstance.Title = '??????????????????';
        })
    }
  }
  checkPasswordMatch() {
    if (this.password === this.confirmpassword) {
      this.passwordMatch = true;
    } else {
      this.passwordMatch = false;
    }
  }
}
