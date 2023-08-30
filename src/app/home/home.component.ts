import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {


websiteDescription: string = 'Unlimited movies, TV shows, and more';
pricePlans:string='Plans now start at EGP70/month.';
memberShip:string='Ready to watch? Enter your email to create or restart your membership.'

constructor() {}

ngOnInit(): void {}
}

