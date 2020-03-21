import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { CoreService } from '../Services/core.service';
import { UserService } from '../Authentication/user.service';
import { forkJoin } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataInitResolver implements Resolve<any>{

  constructor(private userService: UserService,
    private coreService: CoreService) { }

  resolve(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot) {
    // console.error("route include corporate : "+route.url[0].path.toLocaleLowerCase().includes("corporate"));
    return forkJoin(
      {
        isAuthenticated: this.userService.attemptAuth(),
        isInitialDataFetched: this.coreService.fetchInitialInfo()
      }).pipe(
        map(results => results.isAuthenticated && results.isInitialDataFetched)
      );
  }

}
