import { foodlisturl, BtResFoodList } from 'src/app/service/BtResFoodListService';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-food-select-modal',
  templateUrl: './food-select-modal.component.html',
  styleUrls: ['./food-select-modal.component.scss']
})
export class FoodSelectModalComponent implements OnInit {
  @Input() fooditem!: any;
  fooddata: any;
  foodname: any;
  foodnormal: any;
  foodspecial: any;
  foodprice: number =0;
  result = 0;
  constructor(public activeModal: NgbActiveModal, private http: HttpClient) {

  }
  ngOnInit(): void {
    this.http.get<BtResFoodList>(foodlisturl + '/' + this.fooditem).subscribe(response => {
      this.fooddata = response.Value;
      this.foodname = this.fooddata.FOOD_NAME
      this.foodnormal = this.fooddata.FOOD_NORMAL
      this.foodspecial = this.fooddata.FOOD_SPECIAL
    })
  }
  checkoption(event: any) {
    this.foodprice = event.target.value
    this.result = this.foodprice + this.foodprice
    console.log(this.foodprice)
  }
}
