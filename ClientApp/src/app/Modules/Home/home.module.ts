
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeRoutes } from './home.routing';
import { HomeComponent } from './pages/home/home.component';
import { GlobalModule } from 'src/app/Global/Global.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(HomeRoutes),
    GlobalModule

  ]
})
export class HomeModule { }
