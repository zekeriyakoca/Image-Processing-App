import { Component, OnInit } from "@angular/core";
import { Title, Meta } from "@angular/platform-browser";
import { NavigationEnd, Router, ActivatedRoute } from "@angular/router";
import { take, tap } from "rxjs/operators";
import { UserService } from "../Core/Authentication/user.service";
import { User } from "../Shared/Models/Authentication/User";
import { forkJoin } from "rxjs";
import { CoreService } from "../Core/Services/core.service";
import { ModalService } from '../Core/Services/modal.service';

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.scss"]
})
export class MainComponent implements OnInit {
  currentUrl: string;
  appVersion: string;

  constructor(
    public router: Router,
    public modalService:ModalService,
    meta: Meta,
    title: Title
  ) {
    title.setTitle("Image Processing");
    this.appVersion = "1.1";

    meta.addTags([
      { name: "author", content: "" },
      { name: "keywords", content: " " },
      { name: "description", content: "" }
    ]);
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.currentUrl = event.url;
      }
    });
  }

  ngOnInit(): void {

  }
  removeModal(){
    this.modalService.destroy();
  }
  
}
