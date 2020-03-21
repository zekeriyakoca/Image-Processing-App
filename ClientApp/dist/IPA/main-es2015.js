(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./Modules/Home/home.module.ngfactory": [
		"./src/app/Modules/Home/home.module.ngfactory.js",
		"Modules-Home-home-module-ngfactory"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/Core/Authentication/jwt.service.ts":
/*!****************************************************!*\
  !*** ./src/app/Core/Authentication/jwt.service.ts ***!
  \****************************************************/
/*! exports provided: JwtService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JwtService", function() { return JwtService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class JwtService {
    getToken() {
        return window.localStorage['jwtToken'];
    }
    saveToken(token) {
        window.localStorage['jwtToken'] = token;
    }
    destroyToken() {
        window.localStorage.removeItem('jwtToken');
    }
}
JwtService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function JwtService_Factory() { return new JwtService(); }, token: JwtService, providedIn: "root" });


/***/ }),

/***/ "./src/app/Core/Authentication/user.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/Core/Authentication/user.service.ts ***!
  \*****************************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/api.service */ "./src/app/Core/Services/api.service.ts");





class UserService {
    constructor(apiService) {
        this.apiService = apiService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.currentUser = this.currentUserSubject
            .asObservable()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
    }
    populate() {
        this.apiService.post("/Account/GetCurrentUser", null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            if (data !== null) {
                this.setAuth(data.user);
            }
            else {
                this.purgeAuth();
            }
        }, err => this.purgeAuth()));
    }
    setAuth(user) {
        this.currentUserSubject.next(user);
        this.isAuthenticatedSubject.next(true);
    }
    purgeAuth() {
        this.currentUserSubject.next({});
        this.isAuthenticatedSubject.next(false);
    }
    attemptAuth() {
        //Bypassing Authentication.
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
        //Code not removed for future use
        return this.apiService.post("/Account/GetCurrentUser", null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(user => {
            if (user !== null) {
                this.setAuth(user);
                return true;
            }
            else {
                this.navigateToMainApp("/Account/Logon");
                return false;
            }
        }, error => {
            this.navigateToMainApp("/Account/Logon");
            return false;
        }));
    }
    getCurrentUser() {
        return this.currentUserSubject.value;
    }
    navigateToMainApp(url) {
        if (typeof url != 'undefined' && url) {
            window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAppBaseUrl + url;
        }
        window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAppBaseUrl;
    }
}
UserService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({ factory: function UserService_Factory() { return new UserService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_Services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"])); }, token: UserService, providedIn: "root" });


/***/ }),

/***/ "./src/app/Core/Guards/Auth/auth.guard.service.ts":
/*!********************************************************!*\
  !*** ./src/app/Core/Guards/Auth/auth.guard.service.ts ***!
  \********************************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");

class AuthGuard {
    constructor(router, userService) {
        this.router = router;
        this.userService = userService;
    }
    canActivate(route, state) {
        return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
    }
}


/***/ }),

/***/ "./src/app/Core/Interceptors/backend-interpretter.interceptor.ts":
/*!***********************************************************************!*\
  !*** ./src/app/Core/Interceptors/backend-interpretter.interceptor.ts ***!
  \***********************************************************************/
/*! exports provided: BackendInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BackendInterceptor", function() { return BackendInterceptor; });
class BackendInterceptor {
    constructor() { }
    intercept(request, next) {
        // const headersConfig = request.headers.set('Content-Type','application/json').set('Accept', 'application/json')
        // .set('credentials', 'same-origin').set('withCredentials', 'true')
        // const headersConfig = {
        //   'Content-Type': 'application/json',
        //   'Accept': 'application/json',
        //   'credentials': 'same-origin',
        //   'withCredentials' : 'true'
        // };
        // var newRequest = request.clone({headers :headersConfig});
        return next.handle(request);
    }
}


/***/ }),

/***/ "./src/app/Core/Layout/app-footer/app-footer.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/Core/Layout/app-footer/app-footer.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_AppFooterComponent, View_AppFooterComponent_0, View_AppFooterComponent_Host_0, AppFooterComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppFooterComponent", function() { return RenderType_AppFooterComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppFooterComponent_0", function() { return View_AppFooterComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppFooterComponent_Host_0", function() { return View_AppFooterComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponentNgFactory", function() { return AppFooterComponentNgFactory; });
/* harmony import */ var _app_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-footer.component.scss.shim.ngstyle */ "./src/app/Core/Layout/app-footer/app-footer.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-footer.component */ "./src/app/Core/Layout/app-footer/app-footer.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_AppFooterComponent = [_app_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppFooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppFooterComponent, data: {} });

function View_AppFooterComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [], null, null); }
function View_AppFooterComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-footer", [], null, null, null, View_AppFooterComponent_0, RenderType_AppFooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_footer_component__WEBPACK_IMPORTED_MODULE_2__["AppFooterComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppFooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-footer", _app_footer_component__WEBPACK_IMPORTED_MODULE_2__["AppFooterComponent"], View_AppFooterComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/Core/Layout/app-footer/app-footer.component.scss.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/Core/Layout/app-footer/app-footer.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = [".navigable[_ngcontent-%COMP%]   .big-menu[_ngcontent-%COMP%]   .navigable-current[_ngcontent-%COMP%] {\n  color: #b02b31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29yZS9MYXlvdXQvYXBwLWZvb3Rlci9DOlxcVXNlcnNcXHpla2VyXFxzb3VyY2VcXHJlcG9zXFxJbWFnZVByb2NcXENsaWVudEFwcC9zcmNcXGFwcFxcQ29yZVxcTGF5b3V0XFxhcHAtZm9vdGVyXFxhcHAtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db3JlL0xheW91dC9hcHAtZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxjQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9Db3JlL0xheW91dC9hcHAtZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5uYXZpZ2FibGUgLmJpZy1tZW51IC5uYXZpZ2FibGUtY3VycmVudCB7XHJcbiAgICAgIGNvbG9yOiAjYjAyYjMxO1xyXG4gICAgfSIsIi5uYXZpZ2FibGUgLmJpZy1tZW51IC5uYXZpZ2FibGUtY3VycmVudCB7XG4gIGNvbG9yOiAjYjAyYjMxO1xufSJdfQ== */"];



/***/ }),

/***/ "./src/app/Core/Layout/app-footer/app-footer.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Core/Layout/app-footer/app-footer.component.ts ***!
  \****************************************************************/
/*! exports provided: AppFooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function() { return AppFooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class AppFooterComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/Core/Layout/app-header/app-header.component.ngfactory.js":
/*!**************************************************************************!*\
  !*** ./src/app/Core/Layout/app-header/app-header.component.ngfactory.js ***!
  \**************************************************************************/
/*! exports provided: RenderType_AppHeaderComponent, View_AppHeaderComponent_0, View_AppHeaderComponent_Host_0, AppHeaderComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppHeaderComponent", function() { return RenderType_AppHeaderComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppHeaderComponent_0", function() { return View_AppHeaderComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppHeaderComponent_Host_0", function() { return View_AppHeaderComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponentNgFactory", function() { return AppHeaderComponentNgFactory; });
/* harmony import */ var _app_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-header.component.scss.shim.ngstyle */ "./src/app/Core/Layout/app-header/app-header.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_header_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-header.component */ "./src/app/Core/Layout/app-header/app-header.component.ts");
/* harmony import */ var _Authentication_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../Authentication/user.service */ "./src/app/Core/Authentication/user.service.ts");
/* harmony import */ var _Services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../Services/core.service */ "./src/app/Core/Services/core.service.ts");
/* harmony import */ var _Services_modal_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../Services/modal.service */ "./src/app/Core/Services/modal.service.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 






var styles_AppHeaderComponent = [_app_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppHeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppHeaderComponent, data: {} });

function View_AppHeaderComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [], null, null); }
function View_AppHeaderComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_AppHeaderComponent_0, RenderType_AppHeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8503296, null, 0, _app_header_component__WEBPACK_IMPORTED_MODULE_2__["AppHeaderComponent"], [_Authentication_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"], _Services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"], _Services_modal_service__WEBPACK_IMPORTED_MODULE_5__["ModalService"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var AppHeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _app_header_component__WEBPACK_IMPORTED_MODULE_2__["AppHeaderComponent"], View_AppHeaderComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/Core/Layout/app-header/app-header.component.scss.shim.ngstyle.js":
/*!**********************************************************************************!*\
  !*** ./src/app/Core/Layout/app-header/app-header.component.scss.shim.ngstyle.js ***!
  \**********************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvcmUvTGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/Core/Layout/app-header/app-header.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/Core/Layout/app-header/app-header.component.ts ***!
  \****************************************************************/
/*! exports provided: AppHeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function() { return AppHeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class AppHeaderComponent {
    constructor(userService, coreService, modalService) {
        this.userService = userService;
        this.coreService = coreService;
        this.modalService = modalService;
        this.mainLogoPath = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])("../../../../assets/Images/logo-light.png");
    }
    ngOnInit() {
    }
    ngAfterViewChecked() {
        let inputs = {
            isMobile: false
        };
    }
}


/***/ }),

/***/ "./src/app/Core/Resolvers/data-init-resolver.service.ts":
/*!**************************************************************!*\
  !*** ./src/app/Core/Resolvers/data-init-resolver.service.ts ***!
  \**************************************************************/
/*! exports provided: DataInitResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataInitResolver", function() { return DataInitResolver; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Authentication_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Authentication/user.service */ "./src/app/Core/Authentication/user.service.ts");
/* harmony import */ var _Services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Services/core.service */ "./src/app/Core/Services/core.service.ts");





class DataInitResolver {
    constructor(userService, coreService) {
        this.userService = userService;
        this.coreService = coreService;
    }
    resolve(route, state) {
        // console.error("route include corporate : "+route.url[0].path.toLocaleLowerCase().includes("corporate"));
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])({
            isAuthenticated: this.userService.attemptAuth(),
            isInitialDataFetched: this.coreService.fetchInitialInfo()
        }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(results => results.isAuthenticated && results.isInitialDataFetched));
    }
}
DataInitResolver.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function DataInitResolver_Factory() { return new DataInitResolver(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_Authentication_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_Services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"])); }, token: DataInitResolver, providedIn: "root" });


/***/ }),

/***/ "./src/app/Core/Resolvers/redirection-resolver.service.ts":
/*!****************************************************************!*\
  !*** ./src/app/Core/Resolvers/redirection-resolver.service.ts ***!
  \****************************************************************/
/*! exports provided: RedirectionResolver */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedirectionResolver", function() { return RedirectionResolver; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");


class RedirectionResolver {
    constructor(router) {
        this.router = router;
    }
    resolve(route, state) {
        var prefix = route.data["pathPrefix"] || "";
        window.location = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].mainAppBaseUrl + prefix + route.url.join('/');
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
    }
}


/***/ }),

/***/ "./src/app/Core/Services/api.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Core/Services/api.service.ts ***!
  \**********************************************/
/*! exports provided: ApiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiService", function() { return ApiService; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");






class ApiService {
    constructor(http) {
        this.http = http;
    }
    formatErrors(error) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error);
    }
    get(path, params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]()) {
        return this.http.get(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backEndUrl}${path}`, { params })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
    put(path, body = {}) {
        return this.http.put(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backEndUrl}${path}`, JSON.stringify(body), { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
    post(path, body = {}) {
        return this.http.post(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backEndUrl}${path}`, JSON.stringify(body), { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
    delete(path) {
        return this.http.delete(`${_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backEndUrl}${path}`, { withCredentials: true }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
    }
}
ApiService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({ factory: function ApiService_Factory() { return new ApiService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"])); }, token: ApiService, providedIn: "root" });


/***/ }),

/***/ "./src/app/Core/Services/core.service.ts":
/*!***********************************************!*\
  !*** ./src/app/Core/Services/core.service.ts ***!
  \***********************************************/
/*! exports provided: CoreService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreService", function() { return CoreService; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./api.service */ "./src/app/Core/Services/api.service.ts");
/* harmony import */ var _Authentication_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Authentication/user.service */ "./src/app/Core/Authentication/user.service.ts");





class CoreService {
    constructor(apiService, userService) {
        this.apiService = apiService;
        this.userService = userService;
        this.appVersion$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]("");
        this.appVersion = this.appVersion$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        this.auths$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]([]);
        this.auths = this.auths$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        this.initialDataFetched$ = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"](false);
        this.initialDataFetched = this.initialDataFetched$.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        this.subscriptions = [];
    }
    getVersion() {
        return this.appVersion$.asObservable();
    }
    getAuths() {
        return this.auths$.asObservable();
    }
    fetchInitialInfo() {
        //bypassing data initialization
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true);
        // Code not removed for later usage
        return this.apiService.post("Corporate/Dbs/GetInitialInfo", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(data => {
            if (data == null)
                return false;
            this.appVersion$.next(data.AppVersion);
            this.auths$.next(data.Auths);
            this.checkIfInitialDataFetched();
            return true;
        }, error => {
            return false;
        }));
    }
    checkIfInitialDataFetched() {
        if (this.appVersion$.value && this.auths && this.userService.currentUser)
            this.initialDataFetched$.next(true);
    }
    ngOnDestroy() {
        this.subscriptions.forEach(item => {
            item.unsubscribe();
        });
    }
}
CoreService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ factory: function CoreService_Factory() { return new CoreService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_Authentication_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"])); }, token: CoreService, providedIn: "root" });


/***/ }),

/***/ "./src/app/Core/Services/dom.service.ts":
/*!**********************************************!*\
  !*** ./src/app/Core/Services/dom.service.ts ***!
  \**********************************************/
/*! exports provided: DomService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DomService", function() { return DomService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class DomService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    appendComponentTo(parentId, child, childConfig) {
        // Create a component reference from the component 
        const childComponentRef = this.componentFactoryResolver
            .resolveComponentFactory(child)
            .create(this.injector);
        // Attach the config to the child (inputs and outputs)
        this.attachConfig(childConfig, childComponentRef);
        this.childComponentRef = childComponentRef;
        // Attach component to the appRef so that it's inside the ng component tree
        this.appRef.attachView(childComponentRef.hostView);
        // Get DOM element from component
        const childDomElem = childComponentRef.hostView
            .rootNodes[0];
        // Append DOM element to the body
        document.getElementById(parentId).appendChild(childDomElem);
    }
    removeComponent() {
        this.appRef.detachView(this.childComponentRef.hostView);
        this.childComponentRef.destroy();
    }
    attachConfig(config, componentRef) {
        let inputs = config.inputs;
        let outputs = config.outputs;
        for (var key in inputs) {
            componentRef.instance[key] = inputs[key];
        }
        for (var key in outputs) {
            componentRef.instance[key] = outputs[key];
        }
    }
}


/***/ }),

/***/ "./src/app/Core/Services/globalErrorHandler.service.ts":
/*!*************************************************************!*\
  !*** ./src/app/Core/Services/globalErrorHandler.service.ts ***!
  \*************************************************************/
/*! exports provided: GlobalErrorHandler */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function() { return GlobalErrorHandler; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class GlobalErrorHandler {
    constructor(injector) {
        this.injector = injector;
    }
    handleError(error) {
        // const router = this.injector.get(Router);
        //We need to redirect to error page here.
        console.error(error);
        // console.error("ERROR :"+error);
    }
}


/***/ }),

/***/ "./src/app/Core/Services/logger.service.ts":
/*!*************************************************!*\
  !*** ./src/app/Core/Services/logger.service.ts ***!
  \*************************************************/
/*! exports provided: LoggerService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoggerService", function() { return LoggerService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class LoggerService {
    constructor() { }
}
LoggerService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ factory: function LoggerService_Factory() { return new LoggerService(); }, token: LoggerService, providedIn: "root" });


/***/ }),

/***/ "./src/app/Core/Services/modal.service.ts":
/*!************************************************!*\
  !*** ./src/app/Core/Services/modal.service.ts ***!
  \************************************************/
/*! exports provided: ModalService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ModalService", function() { return ModalService; });
class ModalService {
    constructor(domService) {
        this.domService = domService;
        this.modalElementId = 'modal-container';
        this.overlayElementId = 'overlay';
    }
    init(component, inputs, outputs) {
        let componentConfig = {
            inputs: inputs,
            outputs: outputs
        };
        this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
        document.getElementById(this.modalElementId).className = 'show';
        document.getElementById(this.overlayElementId).className = 'show';
    }
    destroy() {
        this.domService.removeComponent();
        document.getElementById(this.modalElementId).className = 'hidden';
        document.getElementById(this.overlayElementId).className = 'hidden';
    }
}


/***/ }),

/***/ "./src/app/Core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/Core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
class CoreModule {
}


/***/ }),

/***/ "./src/app/Core/loweCaseUrlSerializer.ts":
/*!***********************************************!*\
  !*** ./src/app/Core/loweCaseUrlSerializer.ts ***!
  \***********************************************/
/*! exports provided: LowerCaseUrlSerializer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LowerCaseUrlSerializer", function() { return LowerCaseUrlSerializer; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");

class LowerCaseUrlSerializer extends _angular_router__WEBPACK_IMPORTED_MODULE_0__["DefaultUrlSerializer"] {
    parse(url) {
        return super.parse(url.toLowerCase());
    }
}


/***/ }),

/***/ "./src/app/Modules/Home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Modules/Home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
class HomeModule {
}


/***/ }),

/***/ "./src/app/Modules/Home/pages/home/home.component.ngfactory.js":
/*!*********************************************************************!*\
  !*** ./src/app/Modules/Home/pages/home/home.component.ngfactory.js ***!
  \*********************************************************************/
/*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function() { return RenderType_HomeComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function() { return View_HomeComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function() { return View_HomeComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function() { return HomeComponentNgFactory; });
/* harmony import */ var _home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.component.scss.shim.ngstyle */ "./src/app/Modules/Home/pages/home/home.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _home_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./home.component */ "./src/app/Modules/Home/pages/home/home.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 



var styles_HomeComponent = [_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_HomeComponent, data: {} });

function View_HomeComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["home-page works!"]))], null, null); }
function View_HomeComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], [], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_2__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/Modules/Home/pages/home/home.component.scss.shim.ngstyle.js":
/*!*****************************************************************************!*\
  !*** ./src/app/Modules/Home/pages/home/home.component.scss.shim.ngstyle.js ***!
  \*****************************************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvSG9tZS9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"];



/***/ }),

/***/ "./src/app/Modules/Home/pages/home/home.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/Modules/Home/pages/home/home.component.ts ***!
  \***********************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");

class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
}


/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
class AppRoutingModule {
}


/***/ }),

/***/ "./src/app/app.component.ngfactory.js":
/*!********************************************!*\
  !*** ./src/app/app.component.ngfactory.js ***!
  \********************************************/
/*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function() { return RenderType_AppComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function() { return View_AppComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function() { return View_AppComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function() { return AppComponentNgFactory; });
/* harmony import */ var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.component.scss.shim.ngstyle */ "./src/app/app.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 




var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_AppComponent, data: {} });

function View_AppComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
function View_AppComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [], null, null)], null, null); }
var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/app.component.scss.shim.ngstyle.js":
/*!****************************************************!*\
  !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
  \****************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
class AppComponent {
    constructor() {
        this.title = 'IPA';
    }
}


/***/ }),

/***/ "./src/app/app.module.ngfactory.js":
/*!*****************************************!*\
  !*** ./src/app/app.module.ngfactory.js ***!
  \*****************************************/
/*! exports provided: AppModuleNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function() { return AppModuleNgFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.module */ "./src/app/app.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../node_modules/@angular/router/router.ngfactory */ "./node_modules/@angular/router/router.ngfactory.js");
/* harmony import */ var _main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./main/main.component.ngfactory */ "./src/app/main/main.component.ngfactory.js");
/* harmony import */ var _Modules_Home_pages_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Modules/Home/pages/home/home.component.ngfactory */ "./src/app/Modules/Home/pages/home/home.component.ngfactory.js");
/* harmony import */ var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component.ngfactory */ "./src/app/app.component.ngfactory.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm2015/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Core_Interceptors_backend_interpretter_interceptor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./Core/Interceptors/backend-interpretter.interceptor */ "./src/app/Core/Interceptors/backend-interpretter.interceptor.ts");
/* harmony import */ var _Core_Services_api_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Core/Services/api.service */ "./src/app/Core/Services/api.service.ts");
/* harmony import */ var _Core_Authentication_jwt_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./Core/Authentication/jwt.service */ "./src/app/Core/Authentication/jwt.service.ts");
/* harmony import */ var _Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Core/Authentication/user.service */ "./src/app/Core/Authentication/user.service.ts");
/* harmony import */ var _Core_Services_core_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Core/Services/core.service */ "./src/app/Core/Services/core.service.ts");
/* harmony import */ var _Core_Guards_Auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Core/Guards/Auth/auth.guard.service */ "./src/app/Core/Guards/Auth/auth.guard.service.ts");
/* harmony import */ var _Core_Resolvers_redirection_resolver_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Core/Resolvers/redirection-resolver.service */ "./src/app/Core/Resolvers/redirection-resolver.service.ts");
/* harmony import */ var _Core_Resolvers_data_init_resolver_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Core/Resolvers/data-init-resolver.service */ "./src/app/Core/Resolvers/data-init-resolver.service.ts");
/* harmony import */ var _Core_Services_dom_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Core/Services/dom.service */ "./src/app/Core/Services/dom.service.ts");
/* harmony import */ var _Core_Services_modal_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Core/Services/modal.service */ "./src/app/Core/Services/modal.service.ts");
/* harmony import */ var _Core_Services_logger_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Core/Services/logger.service */ "./src/app/Core/Services/logger.service.ts");
/* harmony import */ var _Core_Services_globalErrorHandler_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./Core/Services/globalErrorHandler.service */ "./src/app/Core/Services/globalErrorHandler.service.ts");
/* harmony import */ var _Core_loweCaseUrlSerializer__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./Core/loweCaseUrlSerializer */ "./src/app/Core/loweCaseUrlSerializer.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _Modules_Home_pages_home_home_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./Modules/Home/pages/home/home.component */ "./src/app/Modules/Home/pages/home/home.component.ts");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _Core_core_module__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./Core/core.module */ "./src/app/Core/core.module.ts");
/* harmony import */ var _Modules_Home_home_module__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./Modules/Home/home.module */ "./src/app/Modules/Home/home.module.ts");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 





























var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MainComponentNgFactory"], _Modules_Home_pages_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["HomeComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) { return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)]; }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_9__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_9__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) { return [p0_0]; }, [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HTTP_INTERCEPTORS"], function (p0_0) { return [p0_0, new _Core_Interceptors_backend_interpretter_interceptor__WEBPACK_IMPORTED_MODULE_11__["BackendInterceptor"]()]; }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], _Core_Services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Authentication_jwt_service__WEBPACK_IMPORTED_MODULE_13__["JwtService"], _Core_Authentication_jwt_service__WEBPACK_IMPORTED_MODULE_13__["JwtService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], [_Core_Services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _Core_Services_core_service__WEBPACK_IMPORTED_MODULE_15__["CoreService"], _Core_Services_core_service__WEBPACK_IMPORTED_MODULE_15__["CoreService"], [_Core_Services_api_service__WEBPACK_IMPORTED_MODULE_12__["ApiService"], _Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Guards_Auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], _Core_Guards_Auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_16__["AuthGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Resolvers_redirection_resolver_service__WEBPACK_IMPORTED_MODULE_17__["RedirectionResolver"], _Core_Resolvers_redirection_resolver_service__WEBPACK_IMPORTED_MODULE_17__["RedirectionResolver"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Resolvers_data_init_resolver_service__WEBPACK_IMPORTED_MODULE_18__["DataInitResolver"], _Core_Resolvers_data_init_resolver_service__WEBPACK_IMPORTED_MODULE_18__["DataInitResolver"], [_Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"], _Core_Services_core_service__WEBPACK_IMPORTED_MODULE_15__["CoreService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Services_dom_service__WEBPACK_IMPORTED_MODULE_19__["DomService"], _Core_Services_dom_service__WEBPACK_IMPORTED_MODULE_19__["DomService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Services_modal_service__WEBPACK_IMPORTED_MODULE_20__["ModalService"], _Core_Services_modal_service__WEBPACK_IMPORTED_MODULE_20__["ModalService"], [_Core_Services_dom_service__WEBPACK_IMPORTED_MODULE_19__["DomService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Services_logger_service__WEBPACK_IMPORTED_MODULE_21__["LoggerService"], _Core_Services_logger_service__WEBPACK_IMPORTED_MODULE_21__["LoggerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _Core_Services_globalErrorHandler_service__WEBPACK_IMPORTED_MODULE_22__["GlobalErrorHandler"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () { return [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_b"]()]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) { return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_i"](p1_0)]; }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_9__["UrlSerializer"], _Core_loweCaseUrlSerializer__WEBPACK_IMPORTED_MODULE_23__["LowerCaseUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () { return [[{ path: "", redirectTo: "home", pathMatch: "full" }, { path: "home", component: _main_main_component__WEBPACK_IMPORTED_MODULE_24__["MainComponent"], resolve: { initialDataFetched: _Core_Resolvers_data_init_resolver_service__WEBPACK_IMPORTED_MODULE_18__["DataInitResolver"] }, children: [{ path: "", loadChildren: "./Modules/Home/home.module#HomeModule" }] }], [{ path: "", component: _Modules_Home_pages_home_home_component__WEBPACK_IMPORTED_MODULE_25__["HomeComponent"] }]]; }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_26__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _Core_core_module__WEBPACK_IMPORTED_MODULE_27__["CoreModule"], _Core_core_module__WEBPACK_IMPORTED_MODULE_27__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _Modules_Home_home_module__WEBPACK_IMPORTED_MODULE_28__["HomeModule"], _Modules_Home_home_module__WEBPACK_IMPORTED_MODULE_28__["HomeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_10__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]); });



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
class AppModule {
}


/***/ }),

/***/ "./src/app/main/main.component.ngfactory.js":
/*!**************************************************!*\
  !*** ./src/app/main/main.component.ngfactory.js ***!
  \**************************************************/
/*! exports provided: RenderType_MainComponent, View_MainComponent_0, View_MainComponent_Host_0, MainComponentNgFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RenderType_MainComponent", function() { return RenderType_MainComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MainComponent_0", function() { return View_MainComponent_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "View_MainComponent_Host_0", function() { return View_MainComponent_Host_0; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponentNgFactory", function() { return MainComponentNgFactory; });
/* harmony import */ var _main_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.component.scss.shim.ngstyle */ "./src/app/main/main.component.scss.shim.ngstyle.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _Core_Layout_app_header_app_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../Core/Layout/app-header/app-header.component.ngfactory */ "./src/app/Core/Layout/app-header/app-header.component.ngfactory.js");
/* harmony import */ var _Core_Layout_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Core/Layout/app-header/app-header.component */ "./src/app/Core/Layout/app-header/app-header.component.ts");
/* harmony import */ var _Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../Core/Authentication/user.service */ "./src/app/Core/Authentication/user.service.ts");
/* harmony import */ var _Core_Services_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Core/Services/core.service */ "./src/app/Core/Services/core.service.ts");
/* harmony import */ var _Core_Services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../Core/Services/modal.service */ "./src/app/Core/Services/modal.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Core_Layout_app_footer_app_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../Core/Layout/app-footer/app-footer.component.ngfactory */ "./src/app/Core/Layout/app-footer/app-footer.component.ngfactory.js");
/* harmony import */ var _Core_Layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../Core/Layout/app-footer/app-footer.component */ "./src/app/Core/Layout/app-footer/app-footer.component.ts");
/* harmony import */ var _main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 












var styles_MainComponent = [_main_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];
var RenderType_MainComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({ encapsulation: 0, styles: styles_MainComponent, data: {} });

function View_MainComponent_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "app-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-header", [], null, null, null, _Core_Layout_app_header_app_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AppHeaderComponent_0"], _Core_Layout_app_header_app_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AppHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8503296, null, 0, _Core_Layout_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_3__["AppHeaderComponent"], [_Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _Core_Services_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"], _Core_Services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-footer", [], null, null, null, _Core_Layout_app_footer_app_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_AppFooterComponent_0"], _Core_Layout_app_footer_app_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_AppFooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _Core_Layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_9__["AppFooterComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [["class", "hidden"], ["id", "modal-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "hidden"], ["id", "overlay"]], null, [[null, "click"]], function (_v, en, $event) { var ad = true; var _co = _v.component; if (("click" === en)) {
        var pd_0 = (_co.removeModal() !== false);
        ad = (pd_0 && ad);
    } return ad; }, null, null))], function (_ck, _v) { _ck(_v, 2, 0); _ck(_v, 4, 0); _ck(_v, 6, 0); }, null); }
function View_MainComponent_Host_0(_l) { return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-main", [], null, null, null, View_MainComponent_0, RenderType_MainComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _Core_Services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"]], null, null)], function (_ck, _v) { _ck(_v, 1, 0); }, null); }
var MainComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-main", _main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"], View_MainComponent_Host_0, {}, {}, []);



/***/ }),

/***/ "./src/app/main/main.component.scss.shim.ngstyle.js":
/*!**********************************************************!*\
  !*** ./src/app/main/main.component.scss.shim.ngstyle.js ***!
  \**********************************************************/
/*! exports provided: styles */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "styles", function() { return styles; });
/**
 * @fileoverview This file was generated by the Angular template compiler. Do not edit.
 *
 * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
 * tslint:disable
 */ 
var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"];



/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");


class MainComponent {
    constructor(router, modalService, meta, title) {
        this.router = router;
        this.modalService = modalService;
        title.setTitle("Image Processing");
        this.appVersion = "1.1";
        meta.addTags([
            { name: "author", content: "" },
            { name: "keywords", content: " " },
            { name: "description", content: "" }
        ]);
        this.router.events.subscribe(event => {
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
                this.currentUrl = event.url;
            }
        });
    }
    ngOnInit() {
    }
    removeModal() {
        this.modalService.destroy();
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false,
    backEndUrl: 'http://localhost:62119/',
    mainAppBaseUrl: 'http://localhost:62119/'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module.ngfactory */ "./src/app/app.module.ngfactory.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\zeker\source\repos\ImageProc\ClientApp\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map