import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-Uploader',
  templateUrl: './Uploader.component.html',
  styleUrls: ['./Uploader.component.css']
})
export class UploaderComponent {

  @ViewChild('labelImport',{static:true})
  labelImport: ElementRef;

  formImport: FormGroup;
  fileToUpload: File = null;
  progress: number;
  message:string ;

  constructor(private http: HttpClient) {
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

  import(): void {
    if (this.fileToUpload == null) {
      return;
    }

    const formData = new FormData();
    formData.append('file', this.fileToUpload, this.fileToUpload.name);
 
    this.http.post(environment.backEndUrl, formData, {reportProgress: true, observe: 'events'})
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress)
          this.progress = Math.round(100 * event.loaded / event.total);
        else if (event.type === HttpEventType.Response) {
          this.message = 'Upload success.';
        }
      });
  }

}
