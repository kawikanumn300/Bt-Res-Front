import { payurl } from './../../service/BtResUserPayService';
import { Component, PipeTransform, OnInit } from '@angular/core';
import { AsyncPipe, DecimalPipe, NgFor } from '@angular/common';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { style } from '@angular/animations';
import { HttpClient } from '@angular/common/http';
import { Router, ActivatedRoute } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BtResUserPay } from 'src/app/service/BtResUserPayService';


@Component({
  selector: 'app-user-history-pay',
  templateUrl: './user-history-pay.component.html',
  styleUrls: ['./user-history-pay.component.scss']
})
export class UserHistoryPayComponent implements OnInit {
  constructor(private http: HttpClient, private router: Router, private route: ActivatedRoute, private modalService: NgbModal) {
  }
  iduser: any;
  paydata: any;
  userdata: any;

  ngOnInit(): void {
    const data = JSON.parse(sessionStorage.getItem('key') || '{}');
    this.iduser = data.Value.USER_ID
    // console.log(this.iduser)
    this.http.get<BtResUserPay>(payurl).subscribe(response => {
      this.paydata = response.Value
    });

  }


}
