import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-paybill',
  templateUrl: './user-paybill.component.html',
  styleUrls: ['./user-paybill.component.scss']
})
export class UserPaybillComponent implements OnInit {
  constructor(private route: ActivatedRoute) { }
  iduser: any;
  fname: any;
  lname: any;
  result: any;
  foodname: any;
  foodoption: any;
  option: any;
  fooddetail: any;
  optionprice: any;
  foodprice: any;
  datenow =new Date() ;
  ngOnInit(): void {
    const data = JSON.parse(sessionStorage.getItem('key') || '{}');
    this.iduser = data.Value.USER_ID
    this.fname = data.Value.USER_NAME
    this.lname = data.Value.USER_LASTNAME
    this.result = this.route.snapshot.paramMap.get('result');
    this.foodname = this.route.snapshot.paramMap.get('foodname');
    this.foodoption = this.route.snapshot.paramMap.get('foodoption');
    this.option = this.route.snapshot.paramMap.get('option');
    this.fooddetail = this.route.snapshot.paramMap.get('fooddetail');
    this.optionprice = this.route.snapshot.paramMap.get('optionprice');
    this.foodprice = this.route.snapshot.paramMap.get('foodprice');
  }

}
