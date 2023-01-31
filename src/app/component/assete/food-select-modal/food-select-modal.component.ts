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
  foodnormal = 0;
  foodspecial = 0;
  foodprice: string = "";
  foodoption: any;
  result = 0;
  optionprice: string = "";
  option: any;

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
  checkprice(event: any) {
    this.foodoption = event.target.value
    if (this.foodoption === "ธรรมดา") {
      this.foodprice = this.foodnormal.toString()
      if (this.optionprice == "") {
        this.result = parseInt(this.foodprice)
        console.log(this.result)
      } else {
        this.result = parseInt(this.foodprice) + parseInt(this.optionprice);
        console.log(this.result)
      }
    } else if (this.foodoption === "พิเศษ") {
      this.foodprice = this.foodspecial.toString()
      if (this.optionprice == "") {
        this.result = parseInt(this.foodprice)
        console.log(this.result)
      } else {
        this.result = parseInt(this.foodprice) + parseInt(this.optionprice);
        console.log(this.result)
      }
    }
  }
  checkoption(event: any) {
    this.option = event.target.value
    if (this.option === "ไข่ดาว") {
      this.optionprice = '10'
      if (this.foodprice == "") {
        this.result = parseInt(this.optionprice)
      } else {
        this.result = parseInt(this.foodprice) + parseInt(this.optionprice);
        console.log(this.result)
      }
    } else if (this.option === "ไข่เจียว") {
      this.optionprice = '10'
      if (this.foodprice == "") {
        this.result = parseInt(this.optionprice)
      } else {
        this.result = parseInt(this.foodprice) + parseInt(this.optionprice);
        console.log(this.result)
      }
    }

  }
}
