import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-payment',
  templateUrl: './user-payment.component.html',
  styleUrls: ['./user-payment.component.scss']
})
export class UserPaymentComponent implements OnInit {

  iSelect: any = 'B';
  getuser: any;
  onSelectChange(event: any) {
    this.iSelect = event.target.value;
    console.log(this.iSelect)
  }

  ngOnInit(): void {
    const data = JSON.parse(sessionStorage.getItem('key') || '{}');
    this.getuser = data.Value
    console.log(this.getuser.USER_NAME)
  }
}
