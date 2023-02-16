import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { payurl } from 'src/app/service/BtResUserPayService';
import { BtResUser, baseUrl } from 'src/app/service/BtResUserService';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.scss']
})
export class UserPaymentComponent implements OnInit {
  constructor(private http: HttpClient,private rounte :Router) {

  }
  iSelect: any = 'B';
  getuser: any;
  userdata: any
  userbalane: any
  response: any;
  money: any;
  img: any;
  value: any;
  showImage = false;
  imageUrl: any;
  onSelectChange(event: any) {
    this.iSelect = event.target.value;
    console.log(this.iSelect)
  }

  ngOnInit(): void {
    const data = JSON.parse(sessionStorage.getItem('key') || '{}');
    this.getuser = data.Value
    console.log(this.getuser.USER_NAME)
    this.http.get<BtResUser>(baseUrl + '/' + this.getuser.USER_ID).subscribe(response => {
      this.userdata = response.Value
      this.userbalane = this.userdata.USER_BALANCE
    })
  }
  public onUploadFinished = (event: any) => {
    this.response = event;
    this.img = this.response.Value.fileUrl;
    console.log(this.response.Value.fileUrl);
    if (this.img != null) {
      this.showImage = true
      this.imageUrl = 'https://utcc-prc.demotoday.net/bt-order-api' + this.img
    }
  }
  submit() {
    const data = {
      PAY_AMOUNT: this.userbalane,
      USER_ID: this.getuser.USER_ID,
      PAY_IMAGE: this.img,
      USER_STATUS: 'A',
      CREATE_USER_ID: this.getuser.USER_ID,
      UPDATE_USER_ID: this.getuser.USER_ID,
      PAY_STATUS :"C"
    };
    console.log(data)
    this.http.post(payurl, data)
    .subscribe(async response => {
      this.value = response;
      // console.log(this.value);
      this.rounte.navigate(["/mainmenu"])
    })
  }
}

