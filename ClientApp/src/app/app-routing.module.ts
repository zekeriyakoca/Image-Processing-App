import { AppRoutes } from './app-routes';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


@NgModule({
  imports: [RouterModule.forRoot(AppRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
