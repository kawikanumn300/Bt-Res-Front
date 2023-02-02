import { BtResFoodList, foodlisturl } from 'src/app/service/BtResFoodListService';
import { HttpClient } from '@angular/common/http';
import { Component, PipeTransform, OnInit } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { BtResUserBill, userbill } from 'src/app/service/BtResUserBillService';
import { BtResUser, baseUrl } from 'src/app/service/BtResUserService';



@Component({
  selector: 'app-food-list-order-day',
  templateUrl: './food-list-order-day.component.html',
  styleUrls: ['./food-list-order-day.component.scss']
})
export class FoodListOrderDayComponent implements OnInit {
  constructor(private http: HttpClient) {
  }
  filter = new FormControl('', { nonNullable: true });
  billdata: any;
  datenow = Date();
  userdata: any;
  userid: any
  usershow: any
  fooddata: any
  ngOnInit(): void {
    this.http.get<BtResUserBill>(userbill).subscribe(response => {
      this.billdata = response.Value
      console.log(this.billdata)
    });

    this.http.get<BtResUser>(baseUrl).subscribe(response => {
      this.userdata = response.Value
      console.log(this.userdata)
    });
    this.http.get<BtResFoodList>(foodlisturl).subscribe(response => {
      this.fooddata = response.Value
      console.log(this.fooddata)
    });

  }




}





