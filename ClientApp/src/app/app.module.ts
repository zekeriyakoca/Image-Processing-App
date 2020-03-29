
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { AppComponent } from './app.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './Core/core.module';
import { HomeModule } from './Modules/Home/home.module';
import { GlobalErrorHandler } from './Core/Services/globalErrorHandler.service';
import { UrlSerializer } from '@angular/router';
import { LowerCaseUrlSerializer } from './Core/loweCaseUrlSerializer';
import { environment } from 'src/environments/environment';



@NgModule({
  declarations: [
    AppComponent,
    MainComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase,'imageProc'),
    AngularFireDatabaseModule,
    CoreModule,
    HomeModule
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: GlobalErrorHandler
  },
  {
    provide: UrlSerializer,
    useClass: LowerCaseUrlSerializer
}],
  bootstrap: [AppComponent]
})
export class AppModule { }
