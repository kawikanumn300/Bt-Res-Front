import { Component, PipeTransform, OnInit } from '@angular/core';
import { AsyncPipe, DecimalPipe, NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BtResUserBill, userbill } from 'src/app/service/BtResUserBillService';
import { BtResUser, baseUrl } from 'src/app/service/BtResUserService';
import { BtResFoodList, foodlisturl } from 'src/app/service/BtResFoodListService';

@Component({
  selector: 'app-user-history-order',
  templateUrl: './user-history-order.component.html',
  styleUrls: ['./user-history-order.component.scss']
})
export class UserHistoryOrderComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private modalService: NgbModal) {
  }
  iduser: any;
  billdata: any;
  userdata: any;
  fooddata: any;

  ngOnInit(): void {
    const data = JSON.parse(sessionStorage.getItem('key') || '{}');
    this.iduser = data.Value.USER_ID
    // console.log(this.iduser)

    this.http.get<BtResUserBill>(userbill).subscribe(response => {
      this.billdata = response.Value
    });

    this.http.get<BtResUser>(baseUrl+'/'+this.iduser).subscribe(response => {
      this.userdata = response.Value
    });
    this.http.get<BtResFoodList>(foodlisturl).subscribe(response => {
      this.fooddata = response.Value
      // console.log(this.fooddata)
    });
  }
  autonumber(){

    return
  }
}

