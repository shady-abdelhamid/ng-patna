import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



@NgModule({
  declarations: [NavbarComponent, WelcomeComponent, PageNotFoundComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [NavbarComponent]
})
export class CoreModule { }
