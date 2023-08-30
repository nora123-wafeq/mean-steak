import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './products/products.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ProductdetailesComponent } from './productdetailes/productdetailes.component';
import { ContectusComponent } from './contectus/contectus.component';

const routes: Routes = [
{path:'home',component:HomeComponent},
{path:'',component:HomeComponent},
{path:'header',component:HeaderComponent},
{path:'produts',component:ProductComponent},
{path:'productdetailes/:id',component:ProductdetailesComponent},
{path:'about',component:AboutComponent},
{path:'contectus',component:ContectusComponent},
{path:'footer',component:FooterComponent},
{path:'**',component:NotfoundComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
