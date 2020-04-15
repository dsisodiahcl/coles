import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrls: ['./side-menu.component.css']
})
export class SideMenuComponent implements OnInit {
  page:string="";
  constructor(public router: Router) { }

  ngOnInit(): void {
  }


  sendPageName() {
    //this.searchPageEvent.emit(this.page.toLowerCase());
    this.goToPage(this.page.toLowerCase());
  }

  goToPage(page:string){

  //navigation link.
  if(page.length==0)
     page="home";
   this.router.navigateByUrl(page);
  }

}
