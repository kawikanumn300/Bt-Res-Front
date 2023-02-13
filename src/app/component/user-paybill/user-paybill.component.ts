
import { baseUrl, BtResUser } from 'src/app/service/BtResUserService';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-paybill',
  templateUrl: './user-paybill.component.html',
  styleUrls: ['./user-paybill.component.scss']
})
export class UserPaybillComponent implements OnInit {
  constructor(private route: ActivatedRoute, private http: HttpClient) { }
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
  datenow = new Date();
  userbalance: any;
  adduserbalance: any;
  foodid: any;
  resid: any;
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
    this.foodid = this.route.snapshot.paramMap.get('foodid');
    this.resid = this.route.snapshot.paramMap.get('resid');

    this.http.get<BtResUser>(baseUrl + "/" + this.iduser).subscribe(response => {
      this.userbalance = response.Value
      console.log(this.userbalance.USER_BALANCE);
      this.adduserbalance = parseInt(this.result) + this.userbalance.USER_BALANCE
      console.log(this.adduserbalance);
      console.log(this.foodid);
      console.log(this.resid);
    })
  }

  foodselect() {
    const datatouser = {
      USER_BALANCE: this.adduserbalance
    }
    this.http.put(baseUrl + "/" + this.iduser, datatouser).subscribe(response => {
      console.log(response);
    });

    const databill = {
      USER_ID: this.iduser,
      FOOD_ID: this.foodid,
      RES_ID: this.resid,
      BILL_RESULT: this.result,
      RECORD_STATUS: "A",
      CREATE_USER_ID:  this.iduser,
      UPDATE_USER_ID: this.iduser,
      USER_STATUS: "A",
      BILL_NOTE: this.option,
      BILL_OPTION: this.fooddetail
    }

  }
}
