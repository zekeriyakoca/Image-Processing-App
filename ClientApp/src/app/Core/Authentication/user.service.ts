import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject, ReplaySubject, of } from "rxjs";

import { User } from "../../Shared/Models/Authentication/User";
import { map, distinctUntilChanged } from "rxjs/operators";
import { ApiService } from '../Services/api.service';
import { environment } from "../../../environments/environment";

@Injectable({ providedIn: 'root', })
export class UserService {
  private currentUserSubject = new BehaviorSubject<User>({} as User);
  public currentUser = this.currentUserSubject
    .asObservable()
    .pipe(distinctUntilChanged());

  private isAuthenticatedSubject = new ReplaySubject<boolean>(1);
  public isAuthenticated = this.isAuthenticatedSubject.asObservable();

  constructor(
    private apiService: ApiService
  ) {}

  populate() {
    this.apiService.post("/Account/GetCurrentUser", null).pipe(
      map(
        data => {
          if (data !== null) {
            this.setAuth(data.user);
          } else {
            this.purgeAuth();
          }
        },
        err => this.purgeAuth()
      )
    );
  }

  setAuth(user: User) {
    this.currentUserSubject.next(user);
    this.isAuthenticatedSubject.next(true);
  }

  purgeAuth() {
    this.currentUserSubject.next({} as User);
    this.isAuthenticatedSubject.next(false);
  }

  attemptAuth(): Observable<Boolean> {
    //Bypassing Authentication.
    return of(true);
    
    //Code not removed for future use
    return this.apiService.post("/Account/GetCurrentUser", null).pipe(
      map(
        user => {
          
          if (user !== null) {
            this.setAuth(user);
            return true
          } else {
            this.navigateToMainApp("/Account/Logon");
            return false;
          }
        },
        error => {
          this.navigateToMainApp("/Account/Logon");
          return false;
        }
      )
    );
  }

  getCurrentUser(): User {
    return this.currentUserSubject.value;
  }

  private navigateToMainApp(url:string){
    if(typeof url!='undefined'&& url ){
      window.location.href =  environment.mainAppBaseUrl + url
    }
    window.location.href = environment.mainAppBaseUrl;
  }
}
