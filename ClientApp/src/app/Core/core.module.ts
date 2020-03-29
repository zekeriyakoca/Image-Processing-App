import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AppHeaderComponent } from "./Layout/app-header/app-header.component";
import { AppFooterComponent } from "./Layout/app-footer/app-footer.component";
import { UserService } from "./Authentication/user.service";
import { JwtService } from "./Authentication/jwt.service";
import { ApiService } from "./Services/api.service";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { BackendInterceptor } from "./Interceptors/backend-interpretter.interceptor";
import { CoreService } from "./Services/core.service";
import { AuthGuard } from "./Guards/Auth/auth.guard.service";
import { RedirectionResolver } from "./Resolvers/redirection-resolver.service";
import { DataInitResolver } from "./Resolvers/data-init-resolver.service";
import { NotFoundComponent } from "./Pages/NotFound/NotFound.component";
import { EmptyComponent } from "./Pages/Empty/Empty.component";
import { DomService } from "./Services/dom.service";
import { ModalService } from "./Services/modal.service";
import { LoggerService } from "./Services/logger.service";
import { FirebaseService } from './Services/Firebase.service';

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppFooterComponent,
    NotFoundComponent,
    EmptyComponent
  ],
  imports: [CommonModule, HttpClientModule],
  exports: [AppHeaderComponent, AppFooterComponent],
  providers: [
    ApiService,
    JwtService,
    UserService,
    CoreService,
    AuthGuard,
    RedirectionResolver,
    DataInitResolver,
    DomService,
    ModalService,
    LoggerService,
    FirebaseService,
    { provide: HTTP_INTERCEPTORS, useClass: BackendInterceptor, multi: true }
  ]
})
export class CoreModule {}
