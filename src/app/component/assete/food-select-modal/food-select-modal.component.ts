import { foodlisturl, BtResFoodList } from 'src/app/service/BtResFoodListService';
import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-select-modal',
  templateUrl: './food-select-modal.component.html',
  styleUrls: ['./food-select-modal.component.scss']
})
export class FoodSelectModalComponent implements OnInit {
  @Input() fooditem!: any;
  @Input() resid!: any;
  fooddata: any;
  foodname: any;
  foodnormal = 0;
  foodspecial = 0;
  foodprice: string = "";
  foodoption: any;
  result = 0;
  optionprice: string = "";
  option: any;
  foodid: any;
  fooddetail:string ="";


  constructor(public activeModal: NgbActiveModal, private http: HttpClient ,private rounte : Router) {

  }
  ngOnInit(): void {
    this.http.get<BtResFoodList>(foodlisturl + '/' + this.fooditem).subscribe(response => {
      this.fooddata = response.Value;
      this.foodname = this.fooddata.FOOD_NAME
      this.foodid = this.fooddata.FOOD_ID
      this.foodnormal = this.fooddata.FOOD_NORMAL
      this.foodspecial = this.fooddata.FOOD_SPECIAL
    });

  }
  checkprice(event: any) {
    this.foodoption = event.target.value
    if (this.foodoption === "ธรรมดา") {
      this.foodprice = this.foodnormal.toString()
      if (this.optionprice == "") {
        this.result = parseInt(this.foodprice)
        console.log(this.result)
        console.log(this.resid);
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
    console.log(this.option)
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
  checkoptionnooder(event: any) {
    this.option = event.target.value
    this.optionprice = '0'
    this.result = parseInt(this.foodprice) + parseInt(this.optionprice);
    console.log(this.option)
    console.log(this.result)
  }
  onValueChange(event: Event): void {
    const value = (event.target as any).value;
    this.fooddetail = value;
  }
  submit(){
    if(this.result <= 10){
      return
    }else{
      const data ={
      result: this.result,
      foodname: this.foodname,
      foodoption:this.foodoption,
      option: this.option,
      fooddetail : this.fooddetail,
      foodprice : this.foodprice,
      optionprice:this.optionprice,
      foodid: this.foodid,
      resid:this.resid

    }
    this.activeModal.close(true)
    this.rounte.navigate(['/user-paybill',data],{ skipLocationChange: true })
    }

  }
}
