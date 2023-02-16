import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BtResUser, baseUrl } from 'src/app/service/BtResUserService';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.scss']
})
export class UserPaymentComponent implements OnInit {
  constructor(private http: HttpClient) {

  }
  iSelect: any = 'B';
  getuser: any;
  userdata: any
  userbalane: any

  onSelectChange(event: any) {
    this.iSelect = event.target.value;
    // console.log(this.iSelect)
  }

  ngOnInit(): void {
    const data = JSON.parse(sessionStorage.getItem('key') || '{}');
    this.getuser = data.Value
    // console.log(this.getuser.USER_NAME)
    this.http.get<BtResUser>(baseUrl + '/' + this.getuser.USER_ID).subscribe(response => {
      this.userdata = response.Value
      this.userbalane = this.userdata.USER_BALANCE
    })
  }
}

