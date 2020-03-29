import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { FirebaseService } from 'src/app/Core/Services/Firebase.service';
import { take, filter, takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-Uploader',
  templateUrl: './Uploader.component.html',
  styleUrls: ['./Uploader.component.css']
})
export class UploaderComponent {

  @ViewChild('labelImport', { static: true })
  labelImport: ElementRef;

  formImport: FormGroup;
  fileToUpload: File = null;
  progress: number;
  message: string;
  resultImageUrl: string;

  constructor(private http: HttpClient, private firebaseService: FirebaseService) {
    this.formImport = new FormGroup({
      importFile: new FormControl('', Validators.required)
    });
  }


  onFileChange(files: FileList) {
    this.fileToUpload = files.item(0);
    if (this.fileToUpload.type.split('/')[0] !== 'image') {
      alert("You can only upload image!");
      return;
    }
    this.labelImport.nativeElement.innerText = Array.from(files)
      .map(f => f.name)
      .join(', ');

  }

  Upload(): void {
    if (this.fileToUpload == null) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
    const url = environment.backEndUrl + "/api/image/process";

    this.http.post(url, formData, { reportProgress: true, observe: 'events' })
      .subscribe(event => {

        if (event.type === HttpEventType.UploadProgress) {
          this.progress = Math.round(100 * event.loaded / event.total);
        }

        else if (event.type === HttpEventType.Response) {
          var result = event.body.toString();
          if (result.startsWith('http')) { // direct image url
            this.resultImageUrl = result;
            this.message = "Your image is succesffully processed";
            return;
          }
          this.firebaseService.getObject(`${environment.firebase.imagesKey}/${result}`)
            .pipe(filter(x => x != null), take(1))
            .subscribe(result => {
              this.resultImageUrl = result.url;
              this.message = "Your image is succesffully processed";
            });
          this.message = "Your image is being processed";
        }
      });
  }

}
