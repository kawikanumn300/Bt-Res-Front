
import { baseUrl } from '../../../service/BtResUserService';
import { Router } from '@angular/router';
import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Title } from '@angular/platform-browser';
import { custom } from 'devextreme/ui/dialog';
import { style } from '@angular/animations';
import { LoginModalComponent } from '../login-modal/login-modal.component';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = "";
  password: string = "";
  name: string = "";
  lastname: string = "";
  value: any;
  response: any;
  nameofuser: any;
  sess:any;
  constructor(private http: HttpClient, private router: Router, private modalService: NgbModal) { }

  onSubmit() {
    const data = { USER_USERNAME: this.username, USER_PASSWORD: this.password };
    this.http.post(baseUrl + '/login', data, {
      headers: new HttpHeaders().set('Content-Type', 'application/json')
    }).subscribe(async response => {
      this.value = response;
      console.log(this.value);



      if (this.value.IsSuccess === true) {

        const modalRef = this.modalService.open(LoginModalComponent);
        modalRef.componentInstance.myData = 'ยินดีต้อนรับเข้าสู่ระบบคุณ ' + this.value.Value.USER_NAME;


        modalRef.result.then((result) => {
          if (result) {
            sessionStorage.setItem('key', JSON.stringify(this.value));
            this.router.navigate(['/mainmenu']);
          }
        });


      } else {
        const modalRef = this.modalService.open(LoginModalComponent);
        modalRef.componentInstance.myData = 'Username หรือ Password ผิด ';
        console.log("user or pass error");

        this.username = "";
        this.password = "";
      }

    }, error => {
      console.log(error);
    });
    console.log(data);
  }
}
