import { Component, OnInit, AfterContentInit, AfterViewInit, AfterViewChecked } from '@angular/core';
import { User } from 'src/app/Shared/Models/Authentication/User';
import { UserService } from '../../Authentication/user.service';
import { Observable, of } from 'rxjs';
import { CoreService } from '../../Services/core.service';
import { filter, take } from 'rxjs/operators';
import { NotFoundComponent } from '../../Pages/NotFound/NotFound.component';
import { ModalService } from '../../Services/modal.service';

declare const window: any;

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.scss']
})
export class AppHeaderComponent implements OnInit , AfterViewChecked{
 

  public mainLogoPath:Observable<string>;
  constructor(public userService:UserService, public coreService:CoreService, public modalService:ModalService) { 
    
    this.mainLogoPath = of("../../../../assets/Images/logo-light.png");
  }

  ngOnInit(): void {
    
  }
  ngAfterViewChecked(): void {
    let inputs = {
      isMobile: false
    }
   
  }

}
