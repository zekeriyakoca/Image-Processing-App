import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';

declare const window: any;

@Injectable()
export class RedirectionResolver implements Resolve<any> {
  constructor(
    private router: Router,
  ) { }

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<any> {

    var prefix = route.data["pathPrefix"] || "" ;
    window.location = environment.mainAppBaseUrl + prefix +route.url.join('/');
    return of(true);
  }
}
