function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _get(target, property, receiver) { if (typeof Reflect !== "undefined" && Reflect.get) { _get = Reflect.get; } else { _get = function _get(target, property, receiver) { var base = _superPropBase(target, property); if (!base) return; var desc = Object.getOwnPropertyDescriptor(base, property); if (desc.get) { return desc.get.call(receiver); } return desc.value; }; } return _get(target, property, receiver || target); }

function _superPropBase(object, property) { while (!Object.prototype.hasOwnProperty.call(object, property)) { object = _getPrototypeOf(object); if (object === null) break; } return object; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports, __webpack_require__) {
    var map = {
      "./Modules/Home/home.module.ngfactory": ["./src/app/Modules/Home/home.module.ngfactory.js", "Modules-Home-home-module-ngfactory"]
    };

    function webpackAsyncContext(req) {
      if (!__webpack_require__.o(map, req)) {
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      var ids = map[req],
          id = ids[0];
      return __webpack_require__.e(ids[1]).then(function () {
        return __webpack_require__(id);
      });
    }

    webpackAsyncContext.keys = function webpackAsyncContextKeys() {
      return Object.keys(map);
    };

    webpackAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    module.exports = webpackAsyncContext;
    /***/
  },

  /***/
  "./src/app/Core/Authentication/jwt.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/Core/Authentication/jwt.service.ts ***!
    \****************************************************/

  /*! exports provided: JwtService */

  /***/
  function srcAppCoreAuthenticationJwtServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JwtService", function () {
      return JwtService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var JwtService =
    /*#__PURE__*/
    function () {
      function JwtService() {
        _classCallCheck(this, JwtService);
      }

      _createClass(JwtService, [{
        key: "getToken",
        value: function getToken() {
          return window.localStorage['jwtToken'];
        }
      }, {
        key: "saveToken",
        value: function saveToken(token) {
          window.localStorage['jwtToken'] = token;
        }
      }, {
        key: "destroyToken",
        value: function destroyToken() {
          window.localStorage.removeItem('jwtToken');
        }
      }]);

      return JwtService;
    }();

    JwtService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function JwtService_Factory() {
        return new JwtService();
      },
      token: JwtService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/Core/Authentication/user.service.ts":
  /*!*****************************************************!*\
    !*** ./src/app/Core/Authentication/user.service.ts ***!
    \*****************************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppCoreAuthenticationUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Services_api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/api.service */
    "./src/app/Core/Services/api.service.ts");

    var UserService =
    /*#__PURE__*/
    function () {
      function UserService(apiService) {
        _classCallCheck(this, UserService);

        this.apiService = apiService;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["BehaviorSubject"]({});
        this.currentUser = this.currentUserSubject.asObservable().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["distinctUntilChanged"])());
        this.isAuthenticatedSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__["ReplaySubject"](1);
        this.isAuthenticated = this.isAuthenticatedSubject.asObservable();
      }

      _createClass(UserService, [{
        key: "populate",
        value: function populate() {
          var _this = this;

          this.apiService.post("/Account/GetCurrentUser", null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            if (data !== null) {
              _this.setAuth(data.user);
            } else {
              _this.purgeAuth();
            }
          }, function (err) {
            return _this.purgeAuth();
          }));
        }
      }, {
        key: "setAuth",
        value: function setAuth(user) {
          this.currentUserSubject.next(user);
          this.isAuthenticatedSubject.next(true);
        }
      }, {
        key: "purgeAuth",
        value: function purgeAuth() {
          this.currentUserSubject.next({});
          this.isAuthenticatedSubject.next(false);
        }
      }, {
        key: "attemptAuth",
        value: function attemptAuth() {
          var _this2 = this;

          //Bypassing Authentication.
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true); //Code not removed for future use

          return this.apiService.post("/Account/GetCurrentUser", null).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (user) {
            if (user !== null) {
              _this2.setAuth(user);

              return true;
            } else {
              _this2.navigateToMainApp("/Account/Logon");

              return false;
            }
          }, function (error) {
            _this2.navigateToMainApp("/Account/Logon");

            return false;
          }));
        }
      }, {
        key: "getCurrentUser",
        value: function getCurrentUser() {
          return this.currentUserSubject.value;
        }
      }, {
        key: "navigateToMainApp",
        value: function navigateToMainApp(url) {
          if (typeof url != 'undefined' && url) {
            window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAppBaseUrl + url;
          }

          window.location.href = _environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].mainAppBaseUrl;
        }
      }]);

      return UserService;
    }();

    UserService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
      factory: function UserService_Factory() {
        return new UserService(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵinject"](_Services_api_service__WEBPACK_IMPORTED_MODULE_4__["ApiService"]));
      },
      token: UserService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/Core/Guards/Auth/auth.guard.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/Core/Guards/Auth/auth.guard.service.ts ***!
    \********************************************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppCoreGuardsAuthAuthGuardServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuard =
    /*#__PURE__*/
    function () {
      function AuthGuard(router, userService) {
        _classCallCheck(this, AuthGuard);

        this.router = router;
        this.userService = userService;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate(route, state) {
          return this.userService.isAuthenticated.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1));
        }
      }]);

      return AuthGuard;
    }();
    /***/

  },

  /***/
  "./src/app/Core/Interceptors/backend-interpretter.interceptor.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/Core/Interceptors/backend-interpretter.interceptor.ts ***!
    \***********************************************************************/

  /*! exports provided: BackendInterceptor */

  /***/
  function srcAppCoreInterceptorsBackendInterpretterInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BackendInterceptor", function () {
      return BackendInterceptor;
    });

    var BackendInterceptor =
    /*#__PURE__*/
    function () {
      function BackendInterceptor() {
        _classCallCheck(this, BackendInterceptor);
      }

      _createClass(BackendInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
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
      }]);

      return BackendInterceptor;
    }();
    /***/

  },

  /***/
  "./src/app/Core/Layout/app-footer/app-footer.component.ngfactory.js":
  /*!**************************************************************************!*\
    !*** ./src/app/Core/Layout/app-footer/app-footer.component.ngfactory.js ***!
    \**************************************************************************/

  /*! exports provided: RenderType_AppFooterComponent, View_AppFooterComponent_0, View_AppFooterComponent_Host_0, AppFooterComponentNgFactory */

  /***/
  function srcAppCoreLayoutAppFooterAppFooterComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppFooterComponent", function () {
      return RenderType_AppFooterComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppFooterComponent_0", function () {
      return View_AppFooterComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppFooterComponent_Host_0", function () {
      return View_AppFooterComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppFooterComponentNgFactory", function () {
      return AppFooterComponentNgFactory;
    });
    /* harmony import */


    var _app_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app-footer.component.scss.shim.ngstyle */
    "./src/app/Core/Layout/app-footer/app-footer.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_footer_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app-footer.component */
    "./src/app/Core/Layout/app-footer/app-footer.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppFooterComponent = [_app_footer_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppFooterComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppFooterComponent,
      data: {}
    });

    function View_AppFooterComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [], null, null);
    }

    function View_AppFooterComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-footer", [], null, null, null, View_AppFooterComponent_0, RenderType_AppFooterComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _app_footer_component__WEBPACK_IMPORTED_MODULE_2__["AppFooterComponent"], [], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AppFooterComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-footer", _app_footer_component__WEBPACK_IMPORTED_MODULE_2__["AppFooterComponent"], View_AppFooterComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/Core/Layout/app-footer/app-footer.component.scss.shim.ngstyle.js":
  /*!**********************************************************************************!*\
    !*** ./src/app/Core/Layout/app-footer/app-footer.component.scss.shim.ngstyle.js ***!
    \**********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppCoreLayoutAppFooterAppFooterComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".navigable[_ngcontent-%COMP%]   .big-menu[_ngcontent-%COMP%]   .navigable-current[_ngcontent-%COMP%] {\n  color: #b02b31;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQ29yZS9MYXlvdXQvYXBwLWZvb3Rlci9DOlxcVXNlcnNcXHpla2VyXFxzb3VyY2VcXHJlcG9zXFxJbWFnZVByb2NcXENsaWVudEFwcC9zcmNcXGFwcFxcQ29yZVxcTGF5b3V0XFxhcHAtZm9vdGVyXFxhcHAtZm9vdGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9Db3JlL0xheW91dC9hcHAtZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0k7RUFDRSxjQUFBO0FDQU4iLCJmaWxlIjoic3JjL2FwcC9Db3JlL0xheW91dC9hcHAtZm9vdGVyL2FwcC1mb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuICAgIC5uYXZpZ2FibGUgLmJpZy1tZW51IC5uYXZpZ2FibGUtY3VycmVudCB7XHJcbiAgICAgIGNvbG9yOiAjYjAyYjMxO1xyXG4gICAgfSIsIi5uYXZpZ2FibGUgLmJpZy1tZW51IC5uYXZpZ2FibGUtY3VycmVudCB7XG4gIGNvbG9yOiAjYjAyYjMxO1xufSJdfQ== */"];
    /***/
  },

  /***/
  "./src/app/Core/Layout/app-footer/app-footer.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Core/Layout/app-footer/app-footer.component.ts ***!
    \****************************************************************/

  /*! exports provided: AppFooterComponent */

  /***/
  function srcAppCoreLayoutAppFooterAppFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppFooterComponent", function () {
      return AppFooterComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppFooterComponent =
    /*#__PURE__*/
    function () {
      function AppFooterComponent() {
        _classCallCheck(this, AppFooterComponent);
      }

      _createClass(AppFooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppFooterComponent;
    }();
    /***/

  },

  /***/
  "./src/app/Core/Layout/app-header/app-header.component.ngfactory.js":
  /*!**************************************************************************!*\
    !*** ./src/app/Core/Layout/app-header/app-header.component.ngfactory.js ***!
    \**************************************************************************/

  /*! exports provided: RenderType_AppHeaderComponent, View_AppHeaderComponent_0, View_AppHeaderComponent_Host_0, AppHeaderComponentNgFactory */

  /***/
  function srcAppCoreLayoutAppHeaderAppHeaderComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppHeaderComponent", function () {
      return RenderType_AppHeaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppHeaderComponent_0", function () {
      return View_AppHeaderComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppHeaderComponent_Host_0", function () {
      return View_AppHeaderComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHeaderComponentNgFactory", function () {
      return AppHeaderComponentNgFactory;
    });
    /* harmony import */


    var _app_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app-header.component.scss.shim.ngstyle */
    "./src/app/Core/Layout/app-header/app-header.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _app_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-header.component */
    "./src/app/Core/Layout/app-header/app-header.component.ts");
    /* harmony import */


    var _Authentication_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../Authentication/user.service */
    "./src/app/Core/Authentication/user.service.ts");
    /* harmony import */


    var _Services_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../Services/core.service */
    "./src/app/Core/Services/core.service.ts");
    /* harmony import */


    var _Services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../Services/modal.service */
    "./src/app/Core/Services/modal.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppHeaderComponent = [_app_header_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppHeaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppHeaderComponent,
      data: {}
    });

    function View_AppHeaderComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 12, "nav", [["class", "navbar navbar-expand-lg navbar-dark bg-primary py-0 px-0 mb-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 2, "a", [["class", "navbar-brand py-0 px-3"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](2, 0, null, null, 1, "img", [["height", "50px"]], [[8, "src", 4]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵpid"](131072, _angular_common__WEBPACK_IMPORTED_MODULE_2__["AsyncPipe"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "button", [["aria-controls", "navbarsExampleDefault"], ["aria-expanded", "false"], ["aria-label", "Toggle navigation"], ["class", "navbar-toggler"], ["data-target", "#navbarsExampleDefault"], ["data-toggle", "collapse"], ["type", "button"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 0, "span", [["class", "navbar-toggler-icon"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 6, "div", [["class", "collapse navbar-collapse"], ["id", "navbarsExampleDefault"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 3, "ul", [["class", "navbar-nav mr-auto"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 2, "li", [["class", "nav-item active"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 1, "a", [["class", "nav-link"], ["href", "#"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Image Processing"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](11, 0, null, null, 1, "div", [["class", "float-right pr-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](12, 0, null, null, 0, "span", [["class", "navbar-text text-white"]], null, null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵunv"](_v, 2, 0, _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 3).transform(_co.mainLogoPath));

        _ck(_v, 2, 0, currVal_0);
      });
    }

    function View_AppHeaderComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-header", [], null, null, null, View_AppHeaderComponent_0, RenderType_AppHeaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 8503296, null, 0, _app_header_component__WEBPACK_IMPORTED_MODULE_3__["AppHeaderComponent"], [_Authentication_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _Services_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"], _Services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var AppHeaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-header", _app_header_component__WEBPACK_IMPORTED_MODULE_3__["AppHeaderComponent"], View_AppHeaderComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/Core/Layout/app-header/app-header.component.scss.shim.ngstyle.js":
  /*!**********************************************************************************!*\
    !*** ./src/app/Core/Layout/app-header/app-header.component.scss.shim.ngstyle.js ***!
    \**********************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppCoreLayoutAppHeaderAppHeaderComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0NvcmUvTGF5b3V0L2FwcC1oZWFkZXIvYXBwLWhlYWRlci5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/Core/Layout/app-header/app-header.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Core/Layout/app-header/app-header.component.ts ***!
    \****************************************************************/

  /*! exports provided: AppHeaderComponent */

  /***/
  function srcAppCoreLayoutAppHeaderAppHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppHeaderComponent", function () {
      return AppHeaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AppHeaderComponent =
    /*#__PURE__*/
    function () {
      function AppHeaderComponent(userService, coreService, modalService) {
        _classCallCheck(this, AppHeaderComponent);

        this.userService = userService;
        this.coreService = coreService;
        this.modalService = modalService;
        this.mainLogoPath = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])("../../../../assets/Images/logo-light.png");
      }

      _createClass(AppHeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          var inputs = {
            isMobile: false
          };
        }
      }]);

      return AppHeaderComponent;
    }();
    /***/

  },

  /***/
  "./src/app/Core/Resolvers/data-init-resolver.service.ts":
  /*!**************************************************************!*\
    !*** ./src/app/Core/Resolvers/data-init-resolver.service.ts ***!
    \**************************************************************/

  /*! exports provided: DataInitResolver */

  /***/
  function srcAppCoreResolversDataInitResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DataInitResolver", function () {
      return DataInitResolver;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Authentication_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Authentication/user.service */
    "./src/app/Core/Authentication/user.service.ts");
    /* harmony import */


    var _Services_core_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Services/core.service */
    "./src/app/Core/Services/core.service.ts");

    var DataInitResolver =
    /*#__PURE__*/
    function () {
      function DataInitResolver(userService, coreService) {
        _classCallCheck(this, DataInitResolver);

        this.userService = userService;
        this.coreService = coreService;
      }

      _createClass(DataInitResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          // console.error("route include corporate : "+route.url[0].path.toLocaleLowerCase().includes("corporate"));
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["forkJoin"])({
            isAuthenticated: this.userService.attemptAuth(),
            isInitialDataFetched: this.coreService.fetchInitialInfo()
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (results) {
            return results.isAuthenticated && results.isInitialDataFetched;
          }));
        }
      }]);

      return DataInitResolver;
    }();

    DataInitResolver.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function DataInitResolver_Factory() {
        return new DataInitResolver(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_Authentication_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_Services_core_service__WEBPACK_IMPORTED_MODULE_4__["CoreService"]));
      },
      token: DataInitResolver,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/Core/Resolvers/redirection-resolver.service.ts":
  /*!****************************************************************!*\
    !*** ./src/app/Core/Resolvers/redirection-resolver.service.ts ***!
    \****************************************************************/

  /*! exports provided: RedirectionResolver */

  /***/
  function srcAppCoreResolversRedirectionResolverServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RedirectionResolver", function () {
      return RedirectionResolver;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var RedirectionResolver =
    /*#__PURE__*/
    function () {
      function RedirectionResolver(router) {
        _classCallCheck(this, RedirectionResolver);

        this.router = router;
      }

      _createClass(RedirectionResolver, [{
        key: "resolve",
        value: function resolve(route, state) {
          var prefix = route.data["pathPrefix"] || "";
          window.location = _environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].mainAppBaseUrl + prefix + route.url.join('/');
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true);
        }
      }]);

      return RedirectionResolver;
    }();
    /***/

  },

  /***/
  "./src/app/Core/Services/Messaging.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/Core/Services/Messaging.service.ts ***!
    \****************************************************/

  /*! exports provided: MessagingService */

  /***/
  function srcAppCoreServicesMessagingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MessagingService", function () {
      return MessagingService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/fire/messaging */
    "./node_modules/@angular/fire/messaging/es2015/index.js");

    var MessagingService = function MessagingService(fireMessaging) {
      var _this3 = this;

      _classCallCheck(this, MessagingService);

      this.fireMessaging = fireMessaging;

      this.requestPermission = function () {
        return _this3.fireMessaging.requestToken;
      };

      this.receiveMessage = function () {
        return _this3.fireMessaging.messages;
      };

      this.fireMessaging.messaging.subscribe(function (messagingContext) {
        messagingContext.onMessage = messagingContext.onMessage.bind(messagingContext);
        messagingContext.onTokenRefresh = messagingContext.onTokenRefresh.bind(messagingContext);
      });
    };

    MessagingService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function MessagingService_Factory() {
        return new MessagingService(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_1__["AngularFireMessaging"]));
      },
      token: MessagingService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/Core/Services/api.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/Core/Services/api.service.ts ***!
    \**********************************************/

  /*! exports provided: ApiService */

  /***/
  function srcAppCoreServicesApiServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ApiService", function () {
      return ApiService;
    });
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ApiService =
    /*#__PURE__*/
    function () {
      function ApiService(http) {
        _classCallCheck(this, ApiService);

        this.http = http;
      }

      _createClass(ApiService, [{
        key: "formatErrors",
        value: function formatErrors(error) {
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error.error);
        }
      }, {
        key: "get",
        value: function get(path) {
          var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
          return this.http.get("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backEndUrl).concat(path), {
            params: params
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
        }
      }, {
        key: "put",
        value: function put(path) {
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.http.put("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backEndUrl).concat(path), JSON.stringify(body), {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
        }
      }, {
        key: "post",
        value: function post(path) {
          var body = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
          return this.http.post("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backEndUrl).concat(path), JSON.stringify(body), {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
        }
      }, {
        key: "delete",
        value: function _delete(path) {
          return this.http.delete("".concat(_environments_environment__WEBPACK_IMPORTED_MODULE_0__["environment"].backEndUrl).concat(path), {
            withCredentials: true
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.formatErrors));
        }
      }]);

      return ApiService;
    }();

    ApiService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
      factory: function ApiService_Factory() {
        return new ApiService(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]));
      },
      token: ApiService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/Core/Services/core.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/Core/Services/core.service.ts ***!
    \***********************************************/

  /*! exports provided: CoreService */

  /***/
  function srcAppCoreServicesCoreServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreService", function () {
      return CoreService;
    });
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./api.service */
    "./src/app/Core/Services/api.service.ts");
    /* harmony import */


    var _Authentication_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Authentication/user.service */
    "./src/app/Core/Authentication/user.service.ts");

    var CoreService =
    /*#__PURE__*/
    function () {
      function CoreService(apiService, userService) {
        _classCallCheck(this, CoreService);

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

      _createClass(CoreService, [{
        key: "getVersion",
        value: function getVersion() {
          return this.appVersion$.asObservable();
        }
      }, {
        key: "getAuths",
        value: function getAuths() {
          return this.auths$.asObservable();
        }
      }, {
        key: "fetchInitialInfo",
        value: function fetchInitialInfo() {
          var _this4 = this;

          //bypassing data initialization
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["of"])(true); // Code not removed for later usage

          return this.apiService.post("Corporate/Dbs/GetInitialInfo", {}).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])(function (data) {
            if (data == null) return false;

            _this4.appVersion$.next(data.AppVersion);

            _this4.auths$.next(data.Auths);

            _this4.checkIfInitialDataFetched();

            return true;
          }, function (error) {
            return false;
          }));
        }
      }, {
        key: "checkIfInitialDataFetched",
        value: function checkIfInitialDataFetched() {
          if (this.appVersion$.value && this.auths && this.userService.currentUser) this.initialDataFetched$.next(true);
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.subscriptions.forEach(function (item) {
            item.unsubscribe();
          });
        }
      }]);

      return CoreService;
    }();

    CoreService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
      factory: function CoreService_Factory() {
        return new CoreService(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"]), _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](_Authentication_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]));
      },
      token: CoreService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/Core/Services/dom.service.ts":
  /*!**********************************************!*\
    !*** ./src/app/Core/Services/dom.service.ts ***!
    \**********************************************/

  /*! exports provided: DomService */

  /***/
  function srcAppCoreServicesDomServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DomService", function () {
      return DomService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var DomService =
    /*#__PURE__*/
    function () {
      function DomService(componentFactoryResolver, appRef, injector) {
        _classCallCheck(this, DomService);

        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
      }

      _createClass(DomService, [{
        key: "appendComponentTo",
        value: function appendComponentTo(parentId, child, childConfig) {
          // Create a component reference from the component 
          var childComponentRef = this.componentFactoryResolver.resolveComponentFactory(child).create(this.injector); // Attach the config to the child (inputs and outputs)

          this.attachConfig(childConfig, childComponentRef);
          this.childComponentRef = childComponentRef; // Attach component to the appRef so that it's inside the ng component tree

          this.appRef.attachView(childComponentRef.hostView); // Get DOM element from component

          var childDomElem = childComponentRef.hostView.rootNodes[0]; // Append DOM element to the body

          document.getElementById(parentId).appendChild(childDomElem);
        }
      }, {
        key: "removeComponent",
        value: function removeComponent() {
          this.appRef.detachView(this.childComponentRef.hostView);
          this.childComponentRef.destroy();
        }
      }, {
        key: "attachConfig",
        value: function attachConfig(config, componentRef) {
          var inputs = config.inputs;
          var outputs = config.outputs;

          for (var key in inputs) {
            componentRef.instance[key] = inputs[key];
          }

          for (var key in outputs) {
            componentRef.instance[key] = outputs[key];
          }
        }
      }]);

      return DomService;
    }();
    /***/

  },

  /***/
  "./src/app/Core/Services/globalErrorHandler.service.ts":
  /*!*************************************************************!*\
    !*** ./src/app/Core/Services/globalErrorHandler.service.ts ***!
    \*************************************************************/

  /*! exports provided: GlobalErrorHandler */

  /***/
  function srcAppCoreServicesGlobalErrorHandlerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalErrorHandler", function () {
      return GlobalErrorHandler;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var GlobalErrorHandler =
    /*#__PURE__*/
    function () {
      function GlobalErrorHandler(injector) {
        _classCallCheck(this, GlobalErrorHandler);

        this.injector = injector;
      }

      _createClass(GlobalErrorHandler, [{
        key: "handleError",
        value: function handleError(error) {
          // const router = this.injector.get(Router);
          //We need to redirect to error page here.
          console.error(error); // console.error("ERROR :"+error);
        }
      }]);

      return GlobalErrorHandler;
    }();
    /***/

  },

  /***/
  "./src/app/Core/Services/logger.service.ts":
  /*!*************************************************!*\
    !*** ./src/app/Core/Services/logger.service.ts ***!
    \*************************************************/

  /*! exports provided: LoggerService */

  /***/
  function srcAppCoreServicesLoggerServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoggerService", function () {
      return LoggerService;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoggerService = function LoggerService() {
      _classCallCheck(this, LoggerService);
    };

    LoggerService.ngInjectableDef = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
      factory: function LoggerService_Factory() {
        return new LoggerService();
      },
      token: LoggerService,
      providedIn: "root"
    });
    /***/
  },

  /***/
  "./src/app/Core/Services/modal.service.ts":
  /*!************************************************!*\
    !*** ./src/app/Core/Services/modal.service.ts ***!
    \************************************************/

  /*! exports provided: ModalService */

  /***/
  function srcAppCoreServicesModalServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ModalService", function () {
      return ModalService;
    });

    var ModalService =
    /*#__PURE__*/
    function () {
      function ModalService(domService) {
        _classCallCheck(this, ModalService);

        this.domService = domService;
        this.modalElementId = 'modal-container';
        this.overlayElementId = 'overlay';
      }

      _createClass(ModalService, [{
        key: "init",
        value: function init(component, inputs, outputs) {
          var componentConfig = {
            inputs: inputs,
            outputs: outputs
          };
          this.domService.appendComponentTo(this.modalElementId, component, componentConfig);
          document.getElementById(this.modalElementId).className = 'show';
          document.getElementById(this.overlayElementId).className = 'show';
        }
      }, {
        key: "destroy",
        value: function destroy() {
          this.domService.removeComponent();
          document.getElementById(this.modalElementId).className = 'hidden';
          document.getElementById(this.overlayElementId).className = 'hidden';
        }
      }]);

      return ModalService;
    }();
    /***/

  },

  /***/
  "./src/app/Core/core.module.ts":
  /*!*************************************!*\
    !*** ./src/app/Core/core.module.ts ***!
    \*************************************/

  /*! exports provided: CoreModule */

  /***/
  function srcAppCoreCoreModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CoreModule", function () {
      return CoreModule;
    });

    var CoreModule = function CoreModule() {
      _classCallCheck(this, CoreModule);
    };
    /***/

  },

  /***/
  "./src/app/Core/loweCaseUrlSerializer.ts":
  /*!***********************************************!*\
    !*** ./src/app/Core/loweCaseUrlSerializer.ts ***!
    \***********************************************/

  /*! exports provided: LowerCaseUrlSerializer */

  /***/
  function srcAppCoreLoweCaseUrlSerializerTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LowerCaseUrlSerializer", function () {
      return LowerCaseUrlSerializer;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var LowerCaseUrlSerializer =
    /*#__PURE__*/
    function (_angular_router__WEBP) {
      _inherits(LowerCaseUrlSerializer, _angular_router__WEBP);

      function LowerCaseUrlSerializer() {
        _classCallCheck(this, LowerCaseUrlSerializer);

        return _possibleConstructorReturn(this, _getPrototypeOf(LowerCaseUrlSerializer).apply(this, arguments));
      }

      _createClass(LowerCaseUrlSerializer, [{
        key: "parse",
        value: function parse(url) {
          return _get(_getPrototypeOf(LowerCaseUrlSerializer.prototype), "parse", this).call(this, url.toLowerCase());
        }
      }]);

      return LowerCaseUrlSerializer;
    }(_angular_router__WEBPACK_IMPORTED_MODULE_0__["DefaultUrlSerializer"]);
    /***/

  },

  /***/
  "./src/app/Global/Global.module.ts":
  /*!*****************************************!*\
    !*** ./src/app/Global/Global.module.ts ***!
    \*****************************************/

  /*! exports provided: GlobalModule */

  /***/
  function srcAppGlobalGlobalModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GlobalModule", function () {
      return GlobalModule;
    });

    var GlobalModule = function GlobalModule() {
      _classCallCheck(this, GlobalModule);
    };
    /***/

  },

  /***/
  "./src/app/Global/Uploader/Uploader.component.css.shim.ngstyle.js":
  /*!************************************************************************!*\
    !*** ./src/app/Global/Uploader/Uploader.component.css.shim.ngstyle.js ***!
    \************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppGlobalUploaderUploaderComponentCssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = [".image-preview[_ngcontent-%COMP%]{\r\n    max-width: 300px;\r\n    padding: 20px;\r\n    -webkit-box-align: cente;\r\n            align-items: cente;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvR2xvYmFsL1VwbG9hZGVyL1VwbG9hZGVyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLHdCQUFrQjtZQUFsQixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9HbG9iYWwvVXBsb2FkZXIvVXBsb2FkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZS1wcmV2aWV3e1xyXG4gICAgbWF4LXdpZHRoOiAzMDBweDtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGU7XHJcbn0iXX0= */"];
    /***/
  },

  /***/
  "./src/app/Global/Uploader/Uploader.component.ngfactory.js":
  /*!*****************************************************************!*\
    !*** ./src/app/Global/Uploader/Uploader.component.ngfactory.js ***!
    \*****************************************************************/

  /*! exports provided: RenderType_UploaderComponent, View_UploaderComponent_0, View_UploaderComponent_Host_0, UploaderComponentNgFactory */

  /***/
  function srcAppGlobalUploaderUploaderComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_UploaderComponent", function () {
      return RenderType_UploaderComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_UploaderComponent_0", function () {
      return View_UploaderComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_UploaderComponent_Host_0", function () {
      return View_UploaderComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploaderComponentNgFactory", function () {
      return UploaderComponentNgFactory;
    });
    /* harmony import */


    var _Uploader_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./Uploader.component.css.shim.ngstyle */
    "./src/app/Global/Uploader/Uploader.component.css.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Uploader_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Uploader.component */
    "./src/app/Global/Uploader/Uploader.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_UploaderComponent = [_Uploader_component_css_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_UploaderComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_UploaderComponent,
      data: {}
    });

    function View_UploaderComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 0, "img", [["alt", ""], ["class", "image-preview"]], [[8, "src", 4]], null, null, null, null))], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵinlineInterpolate"](1, "", _co.resultImageUrl, "");

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_UploaderComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "upload"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", "% "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.progress;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_UploaderComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "span", [["class", "upload"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](1, null, [" ", " "]))], null, function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.message;

        _ck(_v, 1, 0, currVal_0);
      });
    }

    function View_UploaderComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵqud"](402653184, 1, {
        labelImport: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 32, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UploaderComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](3, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](4, 0, null, null, 1, "div", [["class", "card-header"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, ["Form"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](6, 0, null, null, 27, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 1, "p", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Select Your File "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](9, 0, null, null, 24, "form", [["novalidate", ""]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "submit"], [null, "reset"]], function (_v, en, $event) {
        var ad = true;

        if ("submit" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onSubmit($event) !== false;
          ad = pd_0 && ad;
        }

        if ("reset" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 11).onReset() !== false;
          ad = pd_1 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](10, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_z"], [], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](11, 540672, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"], [[8, null], [8, null]], {
        form: [0, "form"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroupDirective"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](13, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatusGroup"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](14, 0, null, null, 10, "div", [["class", "input-group mb-3"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](15, 0, null, null, 9, "div", [["class", "custom-file"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](16, 0, null, null, 5, "input", [["class", "custom-file-input"], ["formControlName", "importFile"], ["id", "importFile"], ["multiple", ""], ["type", "file"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "change"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 17)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("change" === en) {
          var pd_4 = _co.onFileChange($event.target.files) !== false;
          ad = pd_4 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](17, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](19, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"], [[3, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ControlContainer"]], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"]], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_forms_forms_q"]]], {
        name: [0, "name"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵprd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControlName"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](21, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NgControl"]]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](22, 0, [[1, 0], ["labelImport", 1]], null, 2, "label", [["class", "custom-file-label"], ["for", "importFile"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](23, 0, null, null, 0, "i", [["class", "fas fa-search"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Choose file"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](25, 0, null, null, 4, "div", [["class", "input-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UploaderComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](27, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵand"](16777216, null, null, 1, null, View_UploaderComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](29, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](30, 0, null, null, 3, "div", [["class", "form-group"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](31, 0, null, null, 2, "button", [["class", "btn btn-outline-secondary"], ["type", "button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.import() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](32, 0, null, null, 0, "i", [["class", "fas fa-file-import"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵted"](-1, null, [" Upload "]))], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.resultImageUrl;

        _ck(_v, 3, 0, currVal_0);

        var currVal_8 = _co.formImport;

        _ck(_v, 11, 0, currVal_8);

        var currVal_16 = "importFile";

        _ck(_v, 19, 0, currVal_16);

        var currVal_17 = _co.progress > 0;

        _ck(_v, 27, 0, currVal_17);

        var currVal_18 = _co.message;

        _ck(_v, 29, 0, currVal_18);
      }, function (_ck, _v) {
        var currVal_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassUntouched;

        var currVal_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassTouched;

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPristine;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassDirty;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassValid;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassInvalid;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 13).ngClassPending;

        _ck(_v, 9, 0, currVal_1, currVal_2, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7);

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassUntouched;

        var currVal_10 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassTouched;

        var currVal_11 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPristine;

        var currVal_12 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassDirty;

        var currVal_13 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassValid;

        var currVal_14 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassInvalid;

        var currVal_15 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵnov"](_v, 21).ngClassPending;

        _ck(_v, 16, 0, currVal_9, currVal_10, currVal_11, currVal_12, currVal_13, currVal_14, currVal_15);
      });
    }

    function View_UploaderComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-Uploader", [], null, null, null, View_UploaderComponent_0, RenderType_UploaderComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _Uploader_component__WEBPACK_IMPORTED_MODULE_4__["UploaderComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]], null, null)], null, null);
    }

    var UploaderComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-Uploader", _Uploader_component__WEBPACK_IMPORTED_MODULE_4__["UploaderComponent"], View_UploaderComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/Global/Uploader/Uploader.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/Global/Uploader/Uploader.component.ts ***!
    \*******************************************************/

  /*! exports provided: UploaderComponent */

  /***/
  function srcAppGlobalUploaderUploaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UploaderComponent", function () {
      return UploaderComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../environments/environment */
    "./src/environments/environment.ts");

    var UploaderComponent =
    /*#__PURE__*/
    function () {
      function UploaderComponent(http) {
        _classCallCheck(this, UploaderComponent);

        this.http = http;
        this.fileToUpload = null;
        this.formImport = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
          importFile: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required)
        });
      }

      _createClass(UploaderComponent, [{
        key: "onFileChange",
        value: function onFileChange(files) {
          this.fileToUpload = files.item(0);

          if (this.fileToUpload.type.split('/')[0] !== 'image') {
            alert("You can only upload image!");
            return;
          }

          this.labelImport.nativeElement.innerText = Array.from(files).map(function (f) {
            return f.name;
          }).join(', ');
        }
      }, {
        key: "import",
        value: function _import() {
          var _this5 = this;

          if (this.fileToUpload == null) {
            return;
          }

          var formData = new FormData();
          formData.append('file', this.fileToUpload, this.fileToUpload.name);
          var url = _environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].backEndUrl + "/api/image/process";
          this.http.post(url, formData, {
            reportProgress: true,
            observe: 'events'
          }).subscribe(function (event) {
            if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].UploadProgress) _this5.progress = Math.round(100 * event.loaded / event.total);else if (event.type === _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpEventType"].Response) {
              var resultMessage = event.body.toString();

              if (resultMessage.startsWith('http')) {
                _this5.resultImageUrl = resultMessage;
                _this5.message = "Your image is processed";
                return;
              }

              _this5.message = resultMessage;
            }
          });
        }
      }]);

      return UploaderComponent;
    }();
    /***/

  },

  /***/
  "./src/app/Modules/Home/home.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/Modules/Home/home.module.ts ***!
    \*********************************************/

  /*! exports provided: HomeModule */

  /***/
  function srcAppModulesHomeHomeModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeModule", function () {
      return HomeModule;
    });

    var HomeModule = function HomeModule() {
      _classCallCheck(this, HomeModule);
    };
    /***/

  },

  /***/
  "./src/app/Modules/Home/pages/home/home.component.ngfactory.js":
  /*!*********************************************************************!*\
    !*** ./src/app/Modules/Home/pages/home/home.component.ngfactory.js ***!
    \*********************************************************************/

  /*! exports provided: RenderType_HomeComponent, View_HomeComponent_0, View_HomeComponent_Host_0, HomeComponentNgFactory */

  /***/
  function srcAppModulesHomePagesHomeHomeComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_HomeComponent", function () {
      return RenderType_HomeComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HomeComponent_0", function () {
      return View_HomeComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_HomeComponent_Host_0", function () {
      return View_HomeComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponentNgFactory", function () {
      return HomeComponentNgFactory;
    });
    /* harmony import */


    var _home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./home.component.scss.shim.ngstyle */
    "./src/app/Modules/Home/pages/home/home.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Global_Uploader_Uploader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../Global/Uploader/Uploader.component.ngfactory */
    "./src/app/Global/Uploader/Uploader.component.ngfactory.js");
    /* harmony import */


    var _Global_Uploader_Uploader_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../../Global/Uploader/Uploader.component */
    "./src/app/Global/Uploader/Uploader.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./home.component */
    "./src/app/Modules/Home/pages/home/home.component.ts");
    /* harmony import */


    var _Core_Services_Messaging_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../Core/Services/Messaging.service */
    "./src/app/Core/Services/Messaging.service.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_HomeComponent = [_home_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_HomeComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_HomeComponent,
      data: {}
    });

    function View_HomeComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 2, "div", [["class", "container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-Uploader", [], null, null, null, _Global_Uploader_Uploader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_UploaderComponent_0"], _Global_Uploader_Uploader_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_UploaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 49152, null, 0, _Global_Uploader_Uploader_component__WEBPACK_IMPORTED_MODULE_3__["UploaderComponent"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]], null, null)], null, null);
    }

    function View_HomeComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-home", [], null, null, null, View_HomeComponent_0, RenderType_HomeComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], [_Core_Services_Messaging_service__WEBPACK_IMPORTED_MODULE_6__["MessagingService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var HomeComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-home", _home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"], View_HomeComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/Modules/Home/pages/home/home.component.scss.shim.ngstyle.js":
  /*!*****************************************************************************!*\
    !*** ./src/app/Modules/Home/pages/home/home.component.scss.shim.ngstyle.js ***!
    \*****************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppModulesHomePagesHomeHomeComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL01vZHVsZXMvSG9tZS9wYWdlcy9ob21lL2hvbWUuY29tcG9uZW50LnNjc3MifQ== */"];
    /***/
  },

  /***/
  "./src/app/Modules/Home/pages/home/home.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/Modules/Home/pages/home/home.component.ts ***!
    \***********************************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppModulesHomePagesHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HomeComponent =
    /*#__PURE__*/
    function () {
      function HomeComponent(messagingService) {
        _classCallCheck(this, HomeComponent);

        this.messagingService = messagingService;
      }

      _createClass(HomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.messagingService.requestPermission().subscribe();
          this.messagingService.receiveMessage().subscribe(function (payload) {
            console.error(JSON.stringify('test'));
          });
        }
      }]);

      return HomeComponent;
    }();
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/app.component.ngfactory.js":
  /*!********************************************!*\
    !*** ./src/app/app.component.ngfactory.js ***!
    \********************************************/

  /*! exports provided: RenderType_AppComponent, View_AppComponent_0, View_AppComponent_Host_0, AppComponentNgFactory */

  /***/
  function srcAppAppComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_AppComponent", function () {
      return RenderType_AppComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_0", function () {
      return View_AppComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_AppComponent_Host_0", function () {
      return View_AppComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponentNgFactory", function () {
      return AppComponentNgFactory;
    });
    /* harmony import */


    var _app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./app.component.scss.shim.ngstyle */
    "./src/app/app.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_AppComponent = [_app_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_AppComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_AppComponent,
      data: {}
    });

    function View_AppComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    function View_AppComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-root", [], null, null, null, View_AppComponent_0, RenderType_AppComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 49152, null, 0, _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], [], null, null)], null, null);
    }

    var AppComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-root", _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], View_AppComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/app.component.scss.shim.ngstyle.js":
  /*!****************************************************!*\
    !*** ./src/app/app.component.scss.shim.ngstyle.js ***!
    \****************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppAppComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'IPA';
    };
    /***/

  },

  /***/
  "./src/app/app.module.ngfactory.js":
  /*!*****************************************!*\
    !*** ./src/app/app.module.ngfactory.js ***!
    \*****************************************/

  /*! exports provided: AppModuleNgFactory */

  /***/
  function srcAppAppModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModuleNgFactory", function () {
      return AppModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./main/main.component.ngfactory */
    "./src/app/main/main.component.ngfactory.js");
    /* harmony import */


    var _Modules_Home_pages_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Modules/Home/pages/home/home.component.ngfactory */
    "./src/app/Modules/Home/pages/home/home.component.ngfactory.js");
    /* harmony import */


    var _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./app.component.ngfactory */
    "./src/app/app.component.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _Core_Interceptors_backend_interpretter_interceptor__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./Core/Interceptors/backend-interpretter.interceptor */
    "./src/app/Core/Interceptors/backend-interpretter.interceptor.ts");
    /* harmony import */


    var _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/fire/messaging */
    "./node_modules/@angular/fire/messaging/es2015/index.js");
    /* harmony import */


    var _Core_Services_api_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Core/Services/api.service */
    "./src/app/Core/Services/api.service.ts");
    /* harmony import */


    var _Core_Authentication_jwt_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./Core/Authentication/jwt.service */
    "./src/app/Core/Authentication/jwt.service.ts");
    /* harmony import */


    var _Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./Core/Authentication/user.service */
    "./src/app/Core/Authentication/user.service.ts");
    /* harmony import */


    var _Core_Services_core_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./Core/Services/core.service */
    "./src/app/Core/Services/core.service.ts");
    /* harmony import */


    var _Core_Guards_Auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./Core/Guards/Auth/auth.guard.service */
    "./src/app/Core/Guards/Auth/auth.guard.service.ts");
    /* harmony import */


    var _Core_Resolvers_redirection_resolver_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./Core/Resolvers/redirection-resolver.service */
    "./src/app/Core/Resolvers/redirection-resolver.service.ts");
    /* harmony import */


    var _Core_Resolvers_data_init_resolver_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./Core/Resolvers/data-init-resolver.service */
    "./src/app/Core/Resolvers/data-init-resolver.service.ts");
    /* harmony import */


    var _Core_Services_dom_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./Core/Services/dom.service */
    "./src/app/Core/Services/dom.service.ts");
    /* harmony import */


    var _Core_Services_modal_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./Core/Services/modal.service */
    "./src/app/Core/Services/modal.service.ts");
    /* harmony import */


    var _Core_Services_logger_service__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./Core/Services/logger.service */
    "./src/app/Core/Services/logger.service.ts");
    /* harmony import */


    var _Core_Services_Messaging_service__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./Core/Services/Messaging.service */
    "./src/app/Core/Services/Messaging.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _Core_Services_globalErrorHandler_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./Core/Services/globalErrorHandler.service */
    "./src/app/Core/Services/globalErrorHandler.service.ts");
    /* harmony import */


    var _Core_loweCaseUrlSerializer__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./Core/loweCaseUrlSerializer */
    "./src/app/Core/loweCaseUrlSerializer.ts");
    /* harmony import */


    var _main_main_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./main/main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _Modules_Home_pages_home_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./Modules/Home/pages/home/home.component */
    "./src/app/Modules/Home/pages/home/home.component.ts");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _Core_core_module__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./Core/core.module */
    "./src/app/Core/core.module.ts");
    /* harmony import */


    var _Global_Global_module__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./Global/Global.module */
    "./src/app/Global/Global.module.ts");
    /* harmony import */


    var _Modules_Home_home_module__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./Modules/Home/home.module */
    "./src/app/Modules/Home/home.module.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var AppModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](_app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ɵangular_packages_router_router_lNgFactory"], _main_main_component_ngfactory__WEBPACK_IMPORTED_MODULE_4__["MainComponentNgFactory"], _Modules_Home_pages_home_home_component_ngfactory__WEBPACK_IMPORTED_MODULE_5__["HomeComponentNgFactory"], _app_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["AppComponentNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_p"], [[3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_ba"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_r"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_f"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_n"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵangular_packages_core_core_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSanitizerImpl"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Sanitizer"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["DomSanitizer"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HammerGestureConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], function (p0_0, p0_1, p0_2, p1_0, p2_0, p2_1, p2_2, p2_3) {
        return [new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomEventsPlugin"](p0_0, p0_1, p0_2), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵKeyEventsPlugin"](p1_0), new _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵHammerGesturesPlugin"](p2_0, p2_1, p2_2, p2_3)];
      }, [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_GESTURE_CONFIG"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], [2, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["HAMMER_LOADER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EVENT_MANAGER_PLUGINS"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["EventManager"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_core__WEBPACK_IMPORTED_MODULE_0__["RendererFactory2"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomRendererFactory2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵSharedStylesHost"], null, [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵDomSharedStylesHost"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Testability"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_g"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_9__["NoPreloading"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["NoPreloading"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadingStrategy"], null, [_angular_router__WEBPACK_IMPORTED_MODULE_9__["NoPreloading"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterPreloader"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterPreloader"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadingStrategy"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadAllModules"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["PreloadAllModules"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_o"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_c"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["ViewportScroller"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_INITIALIZER"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_j"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_BOOTSTRAP_LISTENER"], function (p0_0) {
        return [p0_0];
      }, [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_INITIALIZER"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_fire__WEBPACK_IMPORTED_MODULE_10__["FirebaseApp"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["_firebaseAppFactory"], [_angular_fire__WEBPACK_IMPORTED_MODULE_10__["FirebaseOptionsToken"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_10__["FirebaseNameOrConfigToken"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_g"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_e"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXsrfTokenExtractor"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_f"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](5120, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HTTP_INTERCEPTORS"], function (p0_0) {
        return [p0_0, new _Core_Interceptors_backend_interpretter_interceptor__WEBPACK_IMPORTED_MODULE_12__["BackendInterceptor"]()];
      }, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["XhrFactory"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_d"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["XhrFactory"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](6144, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpBackend"], null, [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpXhrBackend"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHandler"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵHttpInterceptingHandler"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpBackend"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpHandler"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_13__["AngularFireMessaging"], _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_13__["AngularFireMessaging"], [_angular_fire__WEBPACK_IMPORTED_MODULE_10__["FirebaseOptionsToken"], [2, _angular_fire__WEBPACK_IMPORTED_MODULE_10__["FirebaseNameOrConfigToken"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"], _Core_Services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"], [_angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClient"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Authentication_jwt_service__WEBPACK_IMPORTED_MODULE_15__["JwtService"], _Core_Authentication_jwt_service__WEBPACK_IMPORTED_MODULE_15__["JwtService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], _Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], [_Core_Services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](135680, _Core_Services_core_service__WEBPACK_IMPORTED_MODULE_17__["CoreService"], _Core_Services_core_service__WEBPACK_IMPORTED_MODULE_17__["CoreService"], [_Core_Services_api_service__WEBPACK_IMPORTED_MODULE_14__["ApiService"], _Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Guards_Auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"], _Core_Guards_Auth_auth_guard_service__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Resolvers_redirection_resolver_service__WEBPACK_IMPORTED_MODULE_19__["RedirectionResolver"], _Core_Resolvers_redirection_resolver_service__WEBPACK_IMPORTED_MODULE_19__["RedirectionResolver"], [_angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Resolvers_data_init_resolver_service__WEBPACK_IMPORTED_MODULE_20__["DataInitResolver"], _Core_Resolvers_data_init_resolver_service__WEBPACK_IMPORTED_MODULE_20__["DataInitResolver"], [_Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_16__["UserService"], _Core_Services_core_service__WEBPACK_IMPORTED_MODULE_17__["CoreService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Services_dom_service__WEBPACK_IMPORTED_MODULE_21__["DomService"], _Core_Services_dom_service__WEBPACK_IMPORTED_MODULE_21__["DomService"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Services_modal_service__WEBPACK_IMPORTED_MODULE_22__["ModalService"], _Core_Services_modal_service__WEBPACK_IMPORTED_MODULE_22__["ModalService"], [_Core_Services_dom_service__WEBPACK_IMPORTED_MODULE_21__["DomService"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Services_logger_service__WEBPACK_IMPORTED_MODULE_23__["LoggerService"], _Core_Services_logger_service__WEBPACK_IMPORTED_MODULE_23__["LoggerService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _Core_Services_Messaging_service__WEBPACK_IMPORTED_MODULE_24__["MessagingService"], _Core_Services_Messaging_service__WEBPACK_IMPORTED_MODULE_24__["MessagingService"], [_angular_fire_messaging__WEBPACK_IMPORTED_MODULE_13__["AngularFireMessaging"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _Core_Services_globalErrorHandler_service__WEBPACK_IMPORTED_MODULE_26__["GlobalErrorHandler"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"], function () {
        return [_angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_b"]()];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"], function (p0_0, p1_0) {
        return [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["ɵangular_packages_platform_browser_platform_browser_j"](p0_0), _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_i"](p1_0)];
      }, [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgProbeToken"]], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_h"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"], [[2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["APP_INITIALIZER"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](131584, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵConsole"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ErrorHandler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationInitStatus"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"], [[3, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_8__["BrowserModule"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_e"], [[3, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_9__["UrlSerializer"], _Core_loweCaseUrlSerializer__WEBPACK_IMPORTED_MODULE_27__["LowerCaseUrlSerializer"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"], {}, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_d"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_7__["APP_BASE_HREF"]], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], [_angular_common__WEBPACK_IMPORTED_MODULE_7__["LocationStrategy"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["PlatformLocation"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoader"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], [2, _angular_core__WEBPACK_IMPORTED_MODULE_0__["SystemJsNgModuleLoaderConfig"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], function () {
        return [[{
          path: "",
          redirectTo: "home",
          pathMatch: "full"
        }, {
          path: "home",
          component: _main_main_component__WEBPACK_IMPORTED_MODULE_28__["MainComponent"],
          resolve: {
            initialDataFetched: _Core_Resolvers_data_init_resolver_service__WEBPACK_IMPORTED_MODULE_20__["DataInitResolver"]
          },
          children: [{
            path: "",
            loadChildren: "./Modules/Home/home.module#HomeModule"
          }]
        }], [{
          path: "",
          component: _Modules_Home_pages_home_home_component__WEBPACK_IMPORTED_MODULE_29__["HomeComponent"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_f"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ApplicationRef"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["UrlSerializer"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ChildrenOutletContexts"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleFactoryLoader"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Compiler"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTES"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ROUTER_CONFIGURATION"], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["UrlHandlingStrategy"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouteReuseStrategy"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["ɵangular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_routing_module__WEBPACK_IMPORTED_MODULE_30__["AppRoutingModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_30__["AppRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"], _angular_fire__WEBPACK_IMPORTED_MODULE_10__["AngularFireModule"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientXsrfModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientXsrfModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_13__["AngularFireMessagingModule"], _angular_fire_messaging__WEBPACK_IMPORTED_MODULE_13__["AngularFireMessagingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _Core_core_module__WEBPACK_IMPORTED_MODULE_31__["CoreModule"], _Core_core_module__WEBPACK_IMPORTED_MODULE_31__["CoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ɵangular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_25__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _Global_Global_module__WEBPACK_IMPORTED_MODULE_32__["GlobalModule"], _Global_Global_module__WEBPACK_IMPORTED_MODULE_32__["GlobalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _Modules_Home_home_module__WEBPACK_IMPORTED_MODULE_33__["HomeModule"], _Modules_Home_home_module__WEBPACK_IMPORTED_MODULE_33__["HomeModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], _app_module__WEBPACK_IMPORTED_MODULE_1__["AppModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵAPP_ROOT"], true, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_fire__WEBPACK_IMPORTED_MODULE_10__["FirebaseOptionsToken"], {
        apiKey: "AIzaSyDhVyh4zEobt49oneT5fi6ohlz3nqLvyhs",
        authDomain: "imageproc-kodilist.firebaseapp.com",
        databaseURL: "https://imageproc-kodilist.firebaseio.com",
        projectId: "imageproc-kodilist",
        storageBucket: "imageproc-kodilist.appspot.com",
        messagingSenderId: "318349712429",
        appId: "1:318349712429:web:f0b695db5c91e68b78aca4"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_fire__WEBPACK_IMPORTED_MODULE_10__["FirebaseNameOrConfigToken"], "imageProc", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_e"], "XSRF-TOKEN", []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](256, _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["ɵangular_packages_common_http_http_f"], "X-XSRF-TOKEN", [])]);
    });
    /***/

  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };
    /***/

  },

  /***/
  "./src/app/main/main.component.ngfactory.js":
  /*!**************************************************!*\
    !*** ./src/app/main/main.component.ngfactory.js ***!
    \**************************************************/

  /*! exports provided: RenderType_MainComponent, View_MainComponent_0, View_MainComponent_Host_0, MainComponentNgFactory */

  /***/
  function srcAppMainMainComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_MainComponent", function () {
      return RenderType_MainComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MainComponent_0", function () {
      return View_MainComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_MainComponent_Host_0", function () {
      return View_MainComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponentNgFactory", function () {
      return MainComponentNgFactory;
    });
    /* harmony import */


    var _main_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./main.component.scss.shim.ngstyle */
    "./src/app/main/main.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _Core_Layout_app_header_app_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../Core/Layout/app-header/app-header.component.ngfactory */
    "./src/app/Core/Layout/app-header/app-header.component.ngfactory.js");
    /* harmony import */


    var _Core_Layout_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../Core/Layout/app-header/app-header.component */
    "./src/app/Core/Layout/app-header/app-header.component.ts");
    /* harmony import */


    var _Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../Core/Authentication/user.service */
    "./src/app/Core/Authentication/user.service.ts");
    /* harmony import */


    var _Core_Services_core_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../Core/Services/core.service */
    "./src/app/Core/Services/core.service.ts");
    /* harmony import */


    var _Core_Services_modal_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../Core/Services/modal.service */
    "./src/app/Core/Services/modal.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Core_Layout_app_footer_app_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../Core/Layout/app-footer/app-footer.component.ngfactory */
    "./src/app/Core/Layout/app-footer/app-footer.component.ngfactory.js");
    /* harmony import */


    var _Core_Layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../Core/Layout/app-footer/app-footer.component */
    "./src/app/Core/Layout/app-footer/app-footer.component.ts");
    /* harmony import */


    var _main_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./main.component */
    "./src/app/main/main.component.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_MainComponent = [_main_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_MainComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵcrt"]({
      encapsulation: 0,
      styles: styles_MainComponent,
      data: {}
    });

    function View_MainComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 6, "div", [["class", "app-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](1, 0, null, null, 1, "app-header", [], null, null, null, _Core_Layout_app_header_app_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_AppHeaderComponent_0"], _Core_Layout_app_header_app_header_component_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_AppHeaderComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](2, 8503296, null, 0, _Core_Layout_app_header_app_header_component__WEBPACK_IMPORTED_MODULE_3__["AppHeaderComponent"], [_Core_Authentication_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"], _Core_Services_core_service__WEBPACK_IMPORTED_MODULE_5__["CoreService"], _Core_Services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](3, 16777216, null, null, 1, "router-outlet", [], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](4, 212992, null, 0, _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterOutlet"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ChildrenOutletContexts"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ComponentFactoryResolver"], [8, null], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](5, 0, null, null, 1, "app-footer", [], null, null, null, _Core_Layout_app_footer_app_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["View_AppFooterComponent_0"], _Core_Layout_app_footer_app_footer_component_ngfactory__WEBPACK_IMPORTED_MODULE_8__["RenderType_AppFooterComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](6, 114688, null, 0, _Core_Layout_app_footer_app_footer_component__WEBPACK_IMPORTED_MODULE_9__["AppFooterComponent"], [], null, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](7, 0, null, null, 0, "div", [["class", "hidden"], ["id", "modal-container"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](8, 0, null, null, 0, "div", [["class", "hidden"], ["id", "overlay"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.removeModal() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null))], function (_ck, _v) {
        _ck(_v, 2, 0);

        _ck(_v, 4, 0);

        _ck(_v, 6, 0);
      }, null);
    }

    function View_MainComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵeld"](0, 0, null, null, 1, "app-main", [], null, null, null, View_MainComponent_0, RenderType_MainComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵdid"](1, 114688, null, 0, _main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"], [_angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"], _Core_Services_modal_service__WEBPACK_IMPORTED_MODULE_6__["ModalService"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Meta"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_11__["Title"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var MainComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵccf"]("app-main", _main_component__WEBPACK_IMPORTED_MODULE_10__["MainComponent"], View_MainComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/main/main.component.scss.shim.ngstyle.js":
  /*!**********************************************************!*\
    !*** ./src/app/main/main.component.scss.shim.ngstyle.js ***!
    \**********************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppMainMainComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyJ9 */"];
    /***/
  },

  /***/
  "./src/app/main/main.component.ts":
  /*!****************************************!*\
    !*** ./src/app/main/main.component.ts ***!
    \****************************************/

  /*! exports provided: MainComponent */

  /***/
  function srcAppMainMainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainComponent", function () {
      return MainComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var MainComponent =
    /*#__PURE__*/
    function () {
      function MainComponent(router, modalService, meta, title) {
        var _this6 = this;

        _classCallCheck(this, MainComponent);

        this.router = router;
        this.modalService = modalService;
        title.setTitle("Image Processing");
        this.appVersion = "1.1";
        meta.addTags([{
          name: "author",
          content: ""
        }, {
          name: "keywords",
          content: " "
        }, {
          name: "description",
          content: ""
        }]);
        this.router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]) {
            _this6.currentUrl = event.url;
          }
        });
      }

      _createClass(MainComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "removeModal",
        value: function removeModal() {
          this.modalService.destroy();
        }
      }]);

      return MainComponent;
    }();
    /***/

  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    }); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false,
      backEndUrl: 'https://localhost:44372',
      mainAppBaseUrl: 'http://localhost:62119/',
      firebase: {
        apiKey: "AIzaSyDhVyh4zEobt49oneT5fi6ohlz3nqLvyhs",
        authDomain: "imageproc-kodilist.firebaseapp.com",
        databaseURL: "https://imageproc-kodilist.firebaseio.com",
        projectId: "imageproc-kodilist",
        storageBucket: "imageproc-kodilist.appspot.com",
        messagingSenderId: "318349712429",
        appId: "1:318349712429:web:f0b695db5c91e68b78aca4"
      }
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");
    /* harmony import */


    var _app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./app/app.module.ngfactory */
    "./src/app/app.module.ngfactory.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
    }

    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModuleFactory(_app_app_module_ngfactory__WEBPACK_IMPORTED_MODULE_2__["AppModuleNgFactory"]).catch(function (err) {
      return console.error(err);
    });
    /***/

  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! C:\Users\zeker\source\repos\ImageProc\ClientApp\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map