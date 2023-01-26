import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { BtResNameList, namelisturl } from 'src/app/service/BtResNameListService';
import { NavbarService } from '../assete/NavbarService';
@Component({
  selector: 'app-mainmenu',
  templateUrl: './mainmenu.component.html',
  styleUrls: ['./mainmenu.component.scss']
})
export class MainmenuComponent implements OnInit {
  resdata: any;
  resname: any;
  resimg: any;
  showImg: boolean = true;

  constructor(private http: HttpClient, private router: Router ,private navbarService: NavbarService) {
  }
  ngOnInit() {
    this.http.get<BtResNameList>(namelisturl).subscribe(response => {
      this.resdata = response.Value;
      console.log(this.resdata);
    })
  }handleClick() {
    this.navbarService.showNavbar(false);
  }


  handleError() {
    this.showImg = false;
  }
  selectmenu(item: any) {
    console.log(item);
    this.router.navigate(['/food-list-menu' ,{ id : item}]);

  }
}
