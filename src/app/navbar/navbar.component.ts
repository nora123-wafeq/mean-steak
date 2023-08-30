import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',

  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
navbarLinks:string[]=['Home','products','show','About','Contect us'];
research:string="Search"
languege:string="english"
isloginin:boolean=true;
constructor(){}
lagugepag(){
this.languege=this.languege == 'english'? 'aribic':'english';
}

}
