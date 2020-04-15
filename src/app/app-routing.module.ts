import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AllprodpageComponent } from './allprodpage/allprodpage.component';
import { HomeComponent } from './home/home.component';
import { Cpwmsd521Component } from './cpwmsd521/cpwmsd521.component';
import { Cpwmva319Component } from './cpwmva319/cpwmva319.component';
import { Upwmsd10Component } from './upwmsd10/upwmsd10.component';
import { Upwmva11Component } from './Upwmva11/upwmva11.component';
import { Upwmvd10Component } from './Upwmvd10/upwmvd10.component';
import { Cpwmsa521Component } from './Cpwmsa521/cpwmsa521.component';
import { Cpwmvd319Component } from './Cpwmvd319/cpwmvd319.component';
import { Upwmsd11Component } from './Upwmsd11/upwmsd11.component';
import { ConvComponent } from   './conv/conv.component';
import { FfixComponent } from './Ffix/Ffix.component';
import { DevComponent } from './Dev/Dev.component';
import { McfgComponent } from './Mcfg/Mcfg.component';
import { PreimpComponent } from './Preimp/Preimp.component';




const routes: Routes = [ 
{path:'', component:HomeComponent},
{path: 'allprod' , component: AllprodpageComponent},
{path:'home', component:HomeComponent},
{path:'cpwmsd521', component:Cpwmsd521Component},
{path:'cpwmva319', component:Cpwmva319Component},
{path:'upwmsd10', component:Upwmsd10Component},
{path:'upwmva11', component:Upwmva11Component},
{path:'upwmvd10', component:Upwmvd10Component},
{path:'cpwmsa521', component:Cpwmsa521Component},
{path:'cpwmvd319', component:Cpwmvd319Component},
{path:'upwmsd11', component:Upwmsd11Component},
{path:'conv', component:ConvComponent},
{path:'ffix', component:FfixComponent},
{path:'dev', component:DevComponent},
{path:'mcfg', component:McfgComponent},
{path:'preimp', component:PreimpComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
 
}
