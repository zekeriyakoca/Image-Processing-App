import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  channelName:string = "processed-images";
  constructor( public db: AngularFireDatabase) {
    
  }

  getObject(key:string) : Observable<any> {
    return this.db.object(key).valueChanges();
  }


}
