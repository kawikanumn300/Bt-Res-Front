import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';
import { BtResNameList, namelisturl} from 'src/app/service/BtResNameListService';
import { BtResFoodList, foodlisturl} from 'src/app/service/BtResFoodListService';

@Component({
  selector: 'app-food-list-menu',
  templateUrl: './food-list-menu.component.html',
  styleUrls: ['./food-list-menu.component.scss']
})
export class FoodListMenuComponent {
  resdata : any ;
  idf : any ; 
  foodlistdata : any ;
  foodid : any ;


  constructor(private http: HttpClient, private router: Router ,private route: ActivatedRoute) {
  }
  ngOnInit() {
    this.idf = this.route.snapshot.paramMap.get('id');
    console.log(this.idf);
    
    this.http.get<BtResNameList>(namelisturl+'/'+this.idf).subscribe(response => {
      this.resdata = response.Value;
      console.log(this.resdata+'ข้อมูลร้านอาหาร');
    })
    this.http.get<BtResFoodList>(foodlisturl+"/"+this.foodid).subscribe(response => {
      this.foodlistdata = response.Value;
      console.log(this.foodlistdata+'ข้อมูลรายการอาหาร');
    })
  }
  
}
