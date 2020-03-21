import { Injectable } from "@angular/core";
import { ApiService } from "../Services/api.service";
import { Observable, BehaviorSubject, Subscription, of } from "rxjs";
import { take, map, distinctUntilChanged } from "rxjs/operators";
import { UserService } from '../Authentication/user.service';

@Injectable({
  providedIn: "root"
})
export class CoreService {
  private appVersion$: BehaviorSubject<string> = new BehaviorSubject("");
  public appVersion = this.appVersion$.asObservable().pipe(distinctUntilChanged());

  private auths$: BehaviorSubject<string[]> = new BehaviorSubject([]);
  public auths = this.auths$.asObservable().pipe(distinctUntilChanged());

  private initialDataFetched$: BehaviorSubject<Boolean> = new BehaviorSubject(false);
  public initialDataFetched = this.initialDataFetched$.asObservable().pipe(distinctUntilChanged());

  private subscriptions: Subscription[] = [];

  constructor(private apiService: ApiService,
  private userService:UserService) {}

  getVersion() {
    return this.appVersion$.asObservable();
  }

  getAuths() {
    return this.auths$.asObservable();
  }

  fetchInitialInfo(): Observable<Boolean> {
    //bypassing data initialization
    return of(true);

    // Code not removed for later usage
    return this.apiService.post("Corporate/Dbs/GetInitialInfo", {}).pipe(
      take(1),
      map(
        data => {
          if (data == null) return false;
          this.appVersion$.next(data.AppVersion);
          this.auths$.next(data.Auths);
          this.checkIfInitialDataFetched();
          return true;
        },
        error => {
          return false;
        }
      )
    );
  }
  private checkIfInitialDataFetched(){
    if(this.appVersion$.value && this.auths && this.userService.currentUser)
    this.initialDataFetched$.next(true);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach(item => {
      item.unsubscribe();
    });
  }
}
