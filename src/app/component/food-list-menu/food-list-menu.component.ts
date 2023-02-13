import { FoodSelectModalComponent } from './../assete/food-select-modal/food-select-modal.component';
import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BtResNameList, namelisturl} from 'src/app/service/BtResNameListService';
import { BtResFoodList, foodlisturl} from 'src/app/service/BtResFoodListService';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-food-list-menu',
  templateUrl: './food-list-menu.component.html',
  styleUrls: ['./food-list-menu.component.scss']
})
export class FoodListMenuComponent {
  resphone:any;
  resdata : any ;
  idf : any ;
  foodlistdata : any ;
  foodid : any ;
  resimage:any;
  resname:any;
  resdetail:any;
  foodimg:any;

  constructor(private http: HttpClient, private router: Router ,private route: ActivatedRoute, private modalService: NgbModal) {
  }
  ngOnInit() {
    this.idf = this.route.snapshot.paramMap.get('id');
    console.log(this.idf);

    this.http.get<BtResNameList>(namelisturl+'/'+this.idf).subscribe(response => {
      this.resdata = response.Value;
      console.log('ข้อมูลร้านอาหาร');
      console.log(this.resdata);
      this.resimage ="https://utcc-prc.demotoday.net/bt-order-api"+ this.resdata.RES_IMAGE;
      this.resname =this.resdata.RES_NAME;
      this.resphone =this.resdata.RES_PHONE;
      this.resdetail =this.resdata.RES_DETAIL;

    })
    this.http.get<BtResFoodList>(foodlisturl).subscribe(response => {
      this.foodlistdata = response.Value;
      console.log('ข้อมูลรายการอาหาร');
      console.log(this.foodlistdata);
      this.foodimg = this.foodlistdata.FOOD_IMAGE
      console.log(this.foodimg);
    })
  }
  foodselect(item:any){
    const modalRef = this.modalService.open(FoodSelectModalComponent);
    modalRef.componentInstance.fooditem = item ;
    modalRef.componentInstance.resid = this.idf ;
  }
}
