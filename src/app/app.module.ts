import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { Cpwmsd521Component } from './cpwmsd521/cpwmsd521.component';
import { Cpwmva319Component } from './cpwmva319/cpwmva319.component';
import { FormsModule } from "@angular/forms";
import { AllprodpageComponent } from './allprodpage/allprodpage.component';
import { Wpwmxrprod155vmComponent } from './wpwmxrprod155vm/wpwmxrprod155vm.component';
import { Upwmva10Component } from './upwmva10/upwmva10.component';
import { Upwmva11Component } from './upwmva11/upwmva11.component';
import { Upwmvd10Component } from './upwmvd10/upwmvd10.component';
import { Upwmvd11Component } from './upwmvd11/upwmvd11.component';
import { Cpwmvd319Component } from './cpwmvd319/cpwmvd319.component';
import { Cpwmsa521Component } from './cpwmsa521/cpwmsa521.component';
import { Upwmsd10Component } from './upwmsd10/upwmsd10.component';
import { Upwmsd11Component } from './upwmsd11/upwmsd11.component';
import { Upwmsa10Component } from './upwmsa10/upwmsa10.component';
import { FfixComponent } from './ffix/ffix.component';
import { McfgComponent } from './mcfg/mcfg.component';
import { ConvComponent } from './conv/conv.component';
import { DevComponent } from './dev/dev.component';
import { PreimpComponent } from './preimp/preimp.component';   

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SideMenuComponent,
    Cpwmsd521Component,
    Cpwmva319Component,
    AllprodpageComponent,
    Wpwmxrprod155vmComponent,
    Upwmva10Component,
    Upwmva11Component,
    Upwmvd10Component,
    Upwmvd11Component,
    Cpwmvd319Component,
    Cpwmsa521Component,
    Upwmsd10Component,
    Upwmsd11Component,
    Upwmsa10Component,
    FfixComponent,
    McfgComponent,
    ConvComponent,
    DevComponent,
    PreimpComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
