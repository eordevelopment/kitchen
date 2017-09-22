webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app-shell/app-shell.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" *ngIf=\"isLoggedIn\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleCollapse()\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/\" class=\"navbar-brand\">Kitchen Cupboard</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" [class.collapse]=\"isCollapsed\">\r\n      <ul class=\"nav navbar-nav\" (click)=\"collapse()\">\r\n        <li><a routerLink=\"/categories\">\r\n          <strong><i class=\"fa fa-database\"></i> Inventory</strong></a>\r\n        </li>\r\n        <li><a routerLink=\"/recipes\">\r\n          <strong><i class=\"fa fa-cutlery\"></i> Recipies</strong></a>\r\n        </li>\r\n        <li><a routerLink=\"/planner\">\r\n          <strong><i class=\"fa fa-calendar\"></i> Planner</strong></a>\r\n        </li>\r\n        <li><a routerLink=\"/shopping\">\r\n          <strong><i class=\"fa fa-shopping-cart\"></i> Shopping List</strong></a>\r\n        </li>\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a (click)=\"logout()\"><strong><i class=\"fa fa-sign-out\"></i> Logout</strong></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-top\" *ngIf=\"!isLoggedIn\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <h4>Kitchen Cupboard</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/app-shell/app-shell.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-default .navbar-brand {\n  color: #666666;\n}\n.navbar-default .navbar-brand:hover {\n  color: #666666;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app-shell/app-shell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__ = __webpack_require__("../../../../rxjs/add/operator/filter.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppShellComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AppShellComponent = (function () {
    function AppShellComponent(sessionManager, router, location) {
        this.sessionManager = sessionManager;
        this.router = router;
        this.location = location;
    }
    AppShellComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.sessionManager.loggedInUser.subscribe(function (session) {
            setTimeout(function () {
                if (session && session.userToken != null && session.userToken.length > 0) {
                    _this.isLoggedIn = true;
                }
                else {
                    _this.isLoggedIn = false;
                }
            });
        });
        this.location.subscribe(function (ev) {
            _this.lastPoppedUrl = ev.url;
        });
        this.router.events.filter(function (event) { return event instanceof __WEBPACK_IMPORTED_MODULE_3__angular_router__["d" /* NavigationEnd */]; }).subscribe(function (evt) {
            _this.isCollapsed = true;
            if (evt.url === _this.lastPoppedUrl) {
                _this.lastPoppedUrl = undefined;
            }
            else {
                window.scrollTo(0, 0);
            }
            var elements = document.getElementsByClassName('modal-backdrop');
            while (elements.length > 0) {
                elements[0].parentNode.removeChild(elements[0]);
            }
        });
        this.isCollapsed = true;
        this.shoppingQuantity = 30;
    };
    AppShellComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    AppShellComponent.prototype.collapse = function () {
        this.isCollapsed = true;
    };
    AppShellComponent.prototype.logout = function () {
        this.sessionManager.logout();
        this.router.navigate(['/welcome']);
    };
    return AppShellComponent;
}());
AppShellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
        selector: 'app-shell',
        template: __webpack_require__("../../../../../src/app/app-shell/app-shell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app-shell/app-shell.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_session_service__["a" /* SessionService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["c" /* Location */]) === "function" && _c || Object])
], AppShellComponent);

var _a, _b, _c;
//# sourceMappingURL=app-shell.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__services_items_service__ = __webpack_require__("../../../../../src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__services_recipes_service__ = __webpack_require__("../../../../../src/app/services/recipes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__services_form_helper_service__ = __webpack_require__("../../../../../src/app/services/form-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__services_plan_service__ = __webpack_require__("../../../../../src/app/services/plan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_services_shopping_list_service__ = __webpack_require__("../../../../../src/app/services/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_app_shell_app_shell_component__ = __webpack_require__("../../../../../src/app/app-shell/app-shell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_modules_recipe_recipe_module__ = __webpack_require__("../../../../../src/app/modules/recipe/recipe.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_modules_inventory_inventory_module__ = __webpack_require__("../../../../../src/app/modules/inventory/inventory.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_modules_plan_plan_module__ = __webpack_require__("../../../../../src/app/modules/plan/plan.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_app_modules_welcome_welcome_module__ = __webpack_require__("../../../../../src/app/modules/welcome/welcome.module.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





// Services










// Feature modules




var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [
            __WEBPACK_IMPORTED_MODULE_4__services_auth_guard__["a" /* AuthGuard */],
            __WEBPACK_IMPORTED_MODULE_13_app_services_session_service__["a" /* SessionService */],
            __WEBPACK_IMPORTED_MODULE_5__services_storage_service__["a" /* StorageService */],
            __WEBPACK_IMPORTED_MODULE_7__services_categories_service__["a" /* CategoriesService */],
            __WEBPACK_IMPORTED_MODULE_6__services_account_service__["a" /* AccountService */],
            __WEBPACK_IMPORTED_MODULE_8__services_items_service__["a" /* ItemsService */],
            __WEBPACK_IMPORTED_MODULE_9__services_recipes_service__["a" /* RecipesService */],
            __WEBPACK_IMPORTED_MODULE_11__services_plan_service__["a" /* PlanService */],
            __WEBPACK_IMPORTED_MODULE_10__services_form_helper_service__["a" /* FormHelperService */],
            __WEBPACK_IMPORTED_MODULE_12_app_services_shopping_list_service__["a" /* ShoppingListService */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_14_app_app_shell_app_shell_component__["a" /* AppShellComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_3__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* JsonpModule */],
            __WEBPACK_IMPORTED_MODULE_15_app_modules_recipe_recipe_module__["a" /* RecipeModule */],
            __WEBPACK_IMPORTED_MODULE_16_app_modules_inventory_inventory_module__["a" /* InventoryModule */],
            __WEBPACK_IMPORTED_MODULE_17_app_modules_plan_plan_module__["a" /* PlanModule */],
            __WEBPACK_IMPORTED_MODULE_18_app_modules_welcome_welcome_module__["a" /* WelcomeModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_14_app_app_shell_app_shell_component__["a" /* AppShellComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/classes/LoginDto.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginDto; });
var LoginDto = (function () {
    function LoginDto(token) {
        this.idToken = token;
    }
    return LoginDto;
}());

//# sourceMappingURL=LoginDto.js.map

/***/ }),

/***/ "../../../../../src/app/classes/baseComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
var BaseComponent = (function () {
    function BaseComponent(router, title) {
        this.router = router;
        this.title = title;
    }
    BaseComponent.prototype.handleError = function (error) {
        if (error.status === 401) {
            this.router.navigate(['/welcome']);
        }
        this.failure = error.message;
    };
    return BaseComponent;
}());

//# sourceMappingURL=baseComponent.js.map

/***/ }),

/***/ "../../../../../src/app/classes/error.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ServiceError; });
var ServiceError = (function () {
    function ServiceError() {
    }
    return ServiceError;
}());

//# sourceMappingURL=error.js.map

/***/ }),

/***/ "../../../../../src/app/classes/selectItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectItem; });
var SelectItem = (function () {
    function SelectItem(key, value) {
        this.key = key;
        this.value = value;
    }
    SelectItem.prototype.asId = function (prefix) {
        return "" + prefix + this.value;
    };
    return SelectItem;
}());

//# sourceMappingURL=selectItem.js.map

/***/ }),

/***/ "../../../../../src/app/classes/userSession.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserSession; });
var UserSession = (function () {
    function UserSession(source) {
        if (source) {
            this.id = source.getId();
            this.fullName = source.getName();
            this.givenName = source.getGivenName();
            this.familyName = source.getFamilyName();
            this.email = source.getEmail();
            this.imageUrl = source.getImageUrl();
            this.userToken = null;
            this.loginError = null;
        }
    }
    return UserSession;
}());

//# sourceMappingURL=userSession.js.map

/***/ }),

/***/ "../../../../../src/app/modules/inventory/components/categories-list/categories-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" *ngIf=\"!categories\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <i *ngIf=\"!failure\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n        <span *ngIf=\"failure\" class=\"text-danger\">{{failure}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\" *ngIf=\"categories && categories.length <= 0\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <span><strong>You have not created any inventory collections.</strong></span><br><br>\r\n        <span class=\"text-info\">Use this page to keep track of all your kitchen inventory.</span><br>\r\n        <span class=\"text-info\">\r\n          To make keeping track of what you have in your kitchen easier you can use this page to break up your kitchen into smaller, more manageable collections\r\n          such as <strong>Fridge</strong>, <strong>Freezer</strong>, <strong>Pantry</strong> etc\r\n        </span><hr>\r\n        <span class=\"text-info\">As you cook recipes or complete shopping lists, the quantity of items in your inventory will automatically be adjusted.</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"categories && categories.length > 0\">\r\n  <div class=\"col-sm-4\" *ngFor=\"let category of categories\">\r\n    <div (click)=\"onSelect(category)\" class=\"panel panel-default pointer\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <h3>{{category.name | titlecase}}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <a routerLink=\"/categorydetail/0\" class=\"btn btn-success btn-lg\"><i class=\"fa fa-plus\"></i> Add Collection</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/inventory/components/categories-list/categories-list.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/inventory/components/categories-list/categories-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_classes_baseComponent__ = __webpack_require__("../../../../../src/app/classes/baseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var CategoriesListComponent = (function (_super) {
    __extends(CategoriesListComponent, _super);
    function CategoriesListComponent(categoriesService, title, router) {
        var _this = _super.call(this, router, title) || this;
        _this.categoriesService = categoriesService;
        return _this;
    }
    CategoriesListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.categoriesService
            .getCategories()
            .subscribe(function (values) { return _this.categories = values; }, function (error) { return _this.handleError(error); });
    };
    CategoriesListComponent.prototype.onSelect = function (category) {
        this.selectedCategory = category;
        this.router.navigate(['/categorydetail', this.selectedCategory.id]);
    };
    return CategoriesListComponent;
}(__WEBPACK_IMPORTED_MODULE_3_app_classes_baseComponent__["a" /* BaseComponent */]));
CategoriesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-categories-list',
        template: __webpack_require__("../../../../../src/app/modules/inventory/components/categories-list/categories-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/inventory/components/categories-list/categories-list.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_categories_service__["a" /* CategoriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _c || Object])
], CategoriesListComponent);

var _a, _b, _c;
//# sourceMappingURL=categories-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/inventory/components/category-detail/category-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" *ngIf=\"!category\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <i *ngIf=\"!failure\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n        <span *ngIf=\"failure\" class=\"text-danger\">{{failure}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<form [formGroup]=\"categoryForm\" (ngSubmit)=\"saveCategory()\" *ngIf=\"category\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-sm-offset-3\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"category.formErrors.name\">\r\n                <div class=\"input-group\">\r\n                  <input [ngModel]=\"category.name | titlecase\" (ngModelChange)=\"updateCategory($event)\" type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" required placeholder=\"Name. (e.g. Fridge, Pantry, etc)\"\r\n                    autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"category.formErrors.name\">\r\n                  <span class=\"text-danger field-validation-error\">{{ category.formErrors.name }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <ul class=\"list-group\" *ngIf=\"category.items && category.items !== null && category.items.length > 0\">\r\n            <li *ngFor=\"let item of category.items; let idx = index\" class=\"list-group-item pointer\" data-toggle=\"modal\" data-target=\"#itemFormModal\"\r\n              (click)=\"setItem(idx, item)\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-9\" [class.text-warning]=\"item.quantity === 1\" [class.text-danger]=\"item.quantity < 1\">\r\n                  {{item.name | titlecase}}\r\n                </div>\r\n                <div class=\"col-xs-3 text-right\">\r\n                  <span [class.text-primary]=\"item.quantity > 1\" [class.text-warning]=\"item.quantity === 1\" [class.text-danger]=\"item.quantity < 1\">\r\n                    <strong><span *ngIf=\"item.quantity >= 1\">x</span>{{item.quantity}} {{item.unitType}}</strong>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 text-center\">\r\n              <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#itemFormModal\" (click)=\"setItem(-1)\"><i class=\"fa fa-plus\"></i> Add Item</button>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"row\" *ngIf=\"failure\">\r\n            <div class=\"col-sm-12\">\r\n              <div>\r\n                <span class=\"text-danger field-validation-error\">{{failure}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 text-right\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-primary pull-left\" (click)=\"goBack()\">Back</button>\r\n              <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n                <button *ngIf=\"category && category.id && category.id.length > 0\" type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCategory()\">Remove</button>\r\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!categoryForm.valid\">Save</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n\r\n<div class=\"modal\" id=\"itemFormModal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n\r\n        <div *ngIf=\"activeItem && activeItem.id && activeItem.id.length > 0; then editItemBtn else addItemBtn\"></div>\r\n        <ng-template #editItemBtn>\r\n          <h4 class=\"modal-title\">Edit Item</h4>\r\n        </ng-template>\r\n        <ng-template #addItemBtn>\r\n          <h4 class=\"modal-title\">Add Item</h4>\r\n        </ng-template>\r\n      </div>\r\n\r\n      <form [formGroup]=\"itemForm\" *ngIf=\"activeItem\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"activeItem.formErrors.itemName\">\r\n                <div class=\"input-group\">\r\n                  <input [ngModel]=\"activeItem.name | titlecase\" (ngModelChange)=\"updateItem($event)\" type=\"text\" id=\"itemName\" class=\"form-control\" formControlName=\"itemName\" required placeholder=\"Item name\"\r\n                    autocomplete=\"off\" (keyup)=\"search()\">\r\n                </div>\r\n                <div *ngIf=\"activeItem.formErrors.itemName\">\r\n                  <span class=\"text-danger field-validation-error\">{{ activeItem.formErrors.itemName }}</span>\r\n                </div>\r\n                 <div class=\"typeahead\">\r\n                  <ul class=\"list-group\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let searchResult of itemsSearchResult | async\" (click)=\"selectSearchItem(searchResult)\">\r\n                      {{searchResult.name | titlecase}}\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\" [class.has-error]=\"activeItem.formErrors.quantity\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"activeItem.quantity\" type=\"number\" id=\"quantity\" class=\"form-control\" formControlName=\"quantity\" required\r\n                    placeholder=\"Quantity\" autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"activeItem.formErrors.quantity\">\r\n                  <span class=\"text-danger field-validation-error\">{{ activeItem.formErrors.quantity }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input [ngModel]=\"activeItem.unitType | lowercase\" (ngModelChange)=\"updateUnit($event)\" type=\"text\" placeholder=\"Unit. (e.g. tsp, Kg)\" class=\"form-control\" formControlName=\"unitType\"/>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-default pull-left\" data-dismiss=\"modal\" id=\"mdDismis\">Cancel</button>\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n            <button *ngIf=\"activeItem && activeItem.id && activeItem.id.length > 0\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteItem()\">Remove</button>\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!itemForm.valid\" data-dismiss=\"modal\" (click)=\"saveItem()\">Save</button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/inventory/components/category-detail/category-detail.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item .col-xs-9,\n.list-group-item .col-xs-3 {\n  padding-left: 5px;\n  padding-right: 1px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/inventory/components/category-detail/category-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_classes_baseComponent__ = __webpack_require__("../../../../../src/app/classes/baseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_services_items_service__ = __webpack_require__("../../../../../src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_services_form_helper_service__ = __webpack_require__("../../../../../src/app/services/form-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_modules_inventory_model_category__ = __webpack_require__("../../../../../src/app/modules/inventory/model/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_modules_inventory_model_item__ = __webpack_require__("../../../../../src/app/modules/inventory/model/item.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoryDetailComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var CategoryDetailComponent = (function (_super) {
    __extends(CategoryDetailComponent, _super);
    function CategoryDetailComponent(categoriesService, itemsService, route, location, formHelper, title, router) {
        var _this = _super.call(this, router, title) || this;
        _this.categoriesService = categoriesService;
        _this.itemsService = itemsService;
        _this.route = route;
        _this.location = location;
        _this.formHelper = formHelper;
        _this.searchTerms = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        return _this;
    }
    CategoryDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.categoriesService.getCategory(params.get('id')); })
            .subscribe(function (category) {
            _this.category = new __WEBPACK_IMPORTED_MODULE_15_app_modules_inventory_model_category__["a" /* Category */](category);
            _this.categoryForm = _this.formHelper.buildForm(_this.category);
        });
        this.itemsSearchResult = this.searchTerms
            .debounceTime(150)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.itemsService.getItems(term) : __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of([]);
        });
    };
    CategoryDetailComponent.prototype.setItem = function (idx, item) {
        this.activeItemIdx = idx;
        this.activeItem = new __WEBPACK_IMPORTED_MODULE_16_app_modules_inventory_model_item__["a" /* Item */](item);
        this.itemForm = this.formHelper.buildForm(this.activeItem);
    };
    CategoryDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    CategoryDetailComponent.prototype.updateCategory = function (event) {
        var _this = this;
        setTimeout(function () { _this.category.name = event; });
    };
    CategoryDetailComponent.prototype.updateItem = function (event) {
        var _this = this;
        setTimeout(function () { _this.activeItem.name = event; });
    };
    CategoryDetailComponent.prototype.updateUnit = function (event) {
        var _this = this;
        setTimeout(function () { _this.activeItem.unitType = event; });
    };
    CategoryDetailComponent.prototype.deleteCategory = function () {
        var _this = this;
        this.categoriesService.deleteCategory(this.category.id)
            .subscribe(function (response) {
            _this.categoryForm.reset();
            _this.router.navigate(['/categories']);
        }, function (error) { return _this.handleError(error); });
    };
    CategoryDetailComponent.prototype.saveCategory = function () {
        var _this = this;
        this.categoriesService.saveCategory(this.category)
            .subscribe(function (response) {
            _this.categoryForm.reset();
            _this.router.navigate(['/categories']);
        }, function (error) { return _this.handleError(error); });
    };
    CategoryDetailComponent.prototype.saveItem = function () {
        if (this.activeItemIdx >= 0) {
            this.category.updateItem(this.activeItemIdx, this.activeItem);
        }
        else {
            this.category.insertItem(this.activeItem);
        }
    };
    CategoryDetailComponent.prototype.deleteItem = function () {
        this.category.removeItem(this.activeItem);
    };
    CategoryDetailComponent.prototype.selectSearchItem = function (searchResult) {
        this.activeItem.name = searchResult.name;
        this.activeItem.quantity = searchResult.quantity;
        this.activeItem.unitType = searchResult.unitType;
        this.activeItem.id = searchResult.id;
        this.searchTerms.next(null);
    };
    CategoryDetailComponent.prototype.search = function () {
        this.searchTerms.next(this.activeItem.name);
    };
    return CategoryDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_11_app_classes_baseComponent__["a" /* BaseComponent */]));
CategoryDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["c" /* Component */])({
        selector: 'app-category-detail',
        template: __webpack_require__("../../../../../src/app/modules/inventory/components/category-detail/category-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/inventory/components/category-detail/category-detail.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_12_app_services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_app_services_categories_service__["a" /* CategoriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_13_app_services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_app_services_items_service__["a" /* ItemsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_common__["c" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_14_app_services_form_helper_service__["a" /* FormHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14_app_services_form_helper_service__["a" /* FormHelperService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_platform_browser__["c" /* Title */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["a" /* Router */]) === "function" && _g || Object])
], CategoryDetailComponent);

var _a, _b, _c, _d, _e, _f, _g;
//# sourceMappingURL=category-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/inventory/inventory.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_modules_inventory_inventory_routing__ = __webpack_require__("../../../../../src/app/modules/inventory/inventory.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_inventory_components_categories_list_categories_list_component__ = __webpack_require__("../../../../../src/app/modules/inventory/components/categories-list/categories-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_modules_inventory_components_category_detail_category_detail_component__ = __webpack_require__("../../../../../src/app/modules/inventory/components/category-detail/category-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var InventoryModule = (function () {
    function InventoryModule() {
    }
    return InventoryModule;
}());
InventoryModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_app_modules_inventory_inventory_routing__["a" /* InventoryRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4_app_modules_inventory_components_categories_list_categories_list_component__["a" /* CategoriesListComponent */],
            __WEBPACK_IMPORTED_MODULE_5_app_modules_inventory_components_category_detail_category_detail_component__["a" /* CategoryDetailComponent */]
        ]
    })
], InventoryModule);

//# sourceMappingURL=inventory.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/inventory/inventory.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_modules_inventory_components_categories_list_categories_list_component__ = __webpack_require__("../../../../../src/app/modules/inventory/components/categories-list/categories-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_inventory_components_category_detail_category_detail_component__ = __webpack_require__("../../../../../src/app/modules/inventory/components/category-detail/category-detail.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InventoryRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_3_app_modules_inventory_components_categories_list_categories_list_component__["a" /* CategoriesListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_app_services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'categorydetail/:id', component: __WEBPACK_IMPORTED_MODULE_4_app_modules_inventory_components_category_detail_category_detail_component__["a" /* CategoryDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_app_services_auth_guard__["a" /* AuthGuard */]] }
];
var InventoryRoutingModule = (function () {
    function InventoryRoutingModule() {
    }
    return InventoryRoutingModule;
}());
InventoryRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], InventoryRoutingModule);

//# sourceMappingURL=inventory.routing.js.map

/***/ }),

/***/ "../../../../../src/app/modules/inventory/model/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_modules_inventory_model_item__ = __webpack_require__("../../../../../src/app/modules/inventory/model/item.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Category; });


var Category = (function () {
    function Category(source) {
        this.formErrors = {
            'name': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
            }
        };
        if (source) {
            this.id = source.id;
            this.name = source.name;
            this.items = source.items;
        }
        if (!this.items) {
            this.items = new Array();
        }
    }
    Category.prototype.getFormConfig = function () {
        return {
            'name': [this.name, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]]
        };
    };
    Category.prototype.removeItem = function (source) {
        if (source) {
            this.items = this.items.filter(function (x) { return x.id !== source.id; });
        }
    };
    Category.prototype.updateItem = function (idx, source) {
        if (idx >= 0 && idx < this.items.length) {
            this.items[idx].name = source.name;
            this.items[idx].quantity = source.quantity;
            this.items[idx].unitType = source.unitType;
            this.items[idx].id = source.id;
        }
    };
    Category.prototype.insertItem = function (source) {
        var item = new __WEBPACK_IMPORTED_MODULE_1_app_modules_inventory_model_item__["a" /* Item */]();
        item.name = source.name;
        item.quantity = source.quantity;
        item.unitType = source.unitType;
        item.id = source.id;
        this.items.push(item);
    };
    return Category;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ "../../../../../src/app/modules/inventory/model/item.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Item; });

var Item = (function () {
    function Item(source) {
        this.formErrors = {
            'itemName': '',
            'quantity': ''
        };
        this.validationMessages = {
            'itemName': {
                'required': 'Item name is required.',
            },
            'quantity': {
                'required': 'Qantity is required.',
            }
        };
        if (source) {
            this.id = source.id;
            this.name = source.name;
            this.quantity = source.quantity;
            this.unitType = source.unitType;
        }
    }
    Item.prototype.getFormConfig = function () {
        return {
            'itemName': [this.name, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]],
            'quantity': [this.quantity, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]],
            'unitType': [this.unitType]
        };
    };
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ "../../../../../src/app/modules/plan/components/planner-home/planner-home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\" *ngIf=\"!openPlans\">\r\n  <div class=\"col-sm-12 text-center\">\r\n    <i *ngIf=\"!failure\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n    <span *ngIf=\"failure\" class=\"text-danger\">{{failure}}</span>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"openPlans && recipeSelect && recipeSelect.length <= 0; then noPlanner else planner\">\r\n\r\n</div>\r\n\r\n<ng-template #planner>\r\n  <div class=\"row\" *ngIf=\"openPlans && openPlans.length > 0\">\r\n    <div class=\"col-sm-4\" *ngFor=\"let plan of openPlans\">\r\n      <div class=\"panel panel-default pointer\" data-toggle=\"modal\" data-target=\"#dayPlanModal\" (click)=\"selectPlan(plan)\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row row-eq-height planner-day\">\r\n            <div class=\"col-xs-3\">\r\n              <span class=\"text-primary\"><strong>{{plan.dateTimeMt.format(\"dddd\")}}</strong></span><br/>\r\n              <span class=\"text-muted\"><em>{{plan.dateTimeMt.format(\"MMM Do\")}}</em></span>\r\n            </div>\r\n            <div class=\"col-xs-9\">\r\n              <div *ngIf=\"plan.items && plan.items.length > 0;then planItems else planEmpty\"></div>\r\n              <ng-template #planItems>\r\n                <div *ngFor=\"let item of plan.items\" [class.text-muted]=\"item.isDone\">\r\n                  {{item.recipeName | titlecase}}\r\n                </div>\r\n              </ng-template>\r\n              <ng-template #planEmpty>\r\n                <span class=\"text-muted\">Nothing yet.</span>\r\n              </ng-template>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"!currentShoppingList\">\r\n    <div class=\"col-sm-12 text-center\">\r\n      <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!hasPlan\" (click)=\"generateList()\"><i class=\"fa fa-shopping-basket\"></i> Create Shopping List</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"currentShoppingList\">\r\n    <div class=\"col-sm-12 text-center\">\r\n      <button type=\"button\" class=\"btn btn-success\" (click)=\"viewList()\"><i class=\"fa fa-shopping-basket\"></i> View Shopping List</button>\r\n    </div>\r\n  </div>\r\n\r\n  <hr/>\r\n\r\n  <div class=\"row\" *ngIf=\"!closedPlans && !hasLoadedPlans\">\r\n    <div class=\"col-sm-12 text-center text-muted\">\r\n      No previous plans\r\n    </div>\r\n  </div>\r\n    <div class=\"row\" *ngIf=\"!closedPlans && hasLoadedPlans\">\r\n    <div class=\"col-sm-12 text-center\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"loadMore()\">Show previous plans</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"closedPlans && closedPlans.length > 0\">\r\n    <div class=\"col-sm-12 text-center text-muted\">\r\n      Recent items\r\n    </div>\r\n  </div>\r\n  <br/>\r\n  <div class=\"row\" *ngIf=\"closedPlans && closedPlans.length > 0\">\r\n    <div class=\"col-sm-4\" *ngFor=\"let plan of closedPlans\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row planner-day\">\r\n            <div class=\"col-xs-3\">\r\n              <span class=\"text-muted\"><strong>{{plan.dateTimeMt.format(\"dddd\")}}</strong></span><br/>\r\n              <span class=\"text-muted\"><em>{{plan.dateTimeMt.format(\"MMM Do\")}}</em></span>\r\n            </div>\r\n            <div class=\"col-xs-9 text-muted\">\r\n              <div *ngFor=\"let item of plan.items\">\r\n                {{item.recipeName | titlecase}}\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"closedPlans && hasLoadedPlans\">\r\n    <div class=\"col-sm-12 text-center\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"loadMore()\">Load More</button>\r\n    </div>\r\n  </div>\r\n  <br/>\r\n\r\n  <!-- Modal for plan details -->\r\n  <div class=\"modal\" id=\"dayPlanModal\" tabindex=\"-1\" role=\"dialog\" *ngIf=\"activePlan\">\r\n    <div class=\"modal-dialog\">\r\n      <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n          <h4 class=\"modal-title\">{{activePlan.dateTimeMt.format(\"dddd, MMM Do\")}}</h4>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n          <div class=\"well plan-item\" *ngFor=\"let item of activePlan.items\">\r\n            <div *ngIf=\"item.isDone;then itemReadonly else itemEdit\"></div>\r\n            <ng-template #itemEdit>\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-12\">\r\n                  <div class=\"form-group\">\r\n                  <div class=\"input-group\">\r\n                    <select [(ngModel)]=\"item.recipeId\" class=\"form-control\" (change)=\"itemChanged(item)\">\r\n                      <option *ngFor=\"let recipe of recipeSelect\" [value]=\"recipe.key\">{{recipe.value | titlecase}}</option>\r\n                  </select>\r\n                  </div>\r\n                </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-12 text-center\">\r\n                <div class=\"btn-group btn-group-xs\" *ngIf=\"item.recipeId && item.recipeId.length > 0\">\r\n                  <button class=\"btn btn-danger\" (click)=\"removeItem(item)\"><i class=\"fa fa-times\"></i> Remove</button>\r\n                  <button class=\"btn btn-primary\" (click)=\"completeItem(item)\"><i class=\"fa fa-check\"></i> Cooked</button>\r\n                </div>\r\n              </div>\r\n              </div>\r\n            </ng-template>\r\n            <ng-template #itemReadonly>\r\n              <h4 class=\"text-muted\">{{item.recipeName | titlecase}}</h4>\r\n            </ng-template>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-12 text-center\">\r\n              <button class=\"btn btn-sm btn-success\" (click)=\"addItem()\"><i class=\"fa fa-plus\"></i> Add</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-default pull-left\" data-dismiss=\"modal\">Cancel</button>\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!planChanged\" data-dismiss=\"modal\" (click)=\"savePlan()\">Save</button>\r\n          </div>\r\n\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</ng-template>\r\n\r\n<ng-template #noPlanner>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n          <span><strong>You have not created any recipes.</strong></span><br><br>\r\n          <span class=\"text-muted\">Once you have created some recipes you can use this page to plan out your meals and create your shopping list.</span>\r\n        </div>\r\n      </div>\r\n      <br>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n          <a class=\"btn btn-lg btn-primary\" routerLink=\"/recipes\" role=\"button\">Go »</a>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<div class=\"alert alert-info snackbar\" [class.show]=\"showNotification\">Inventory stock has been updated.</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/plan/components/planner-home/planner-home.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".planner-day .col-xs-3 {\n  padding-left: 5px;\n  padding-right: 2px;\n  border-right: 1px solid #ddd;\n}\n.planner-day .col-xs-9 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.plan-item h4 {\n  font-size: 18px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/plan/components/planner-home/planner-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_classes_baseComponent__ = __webpack_require__("../../../../../src/app/classes/baseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_plan_service__ = __webpack_require__("../../../../../src/app/services/plan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_recipes_service__ = __webpack_require__("../../../../../src/app/services/recipes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_services_shopping_list_service__ = __webpack_require__("../../../../../src/app/services/shopping-list.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_classes_selectItem__ = __webpack_require__("../../../../../src/app/classes/selectItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_modules_plan_model_plan__ = __webpack_require__("../../../../../src/app/modules/plan/model/plan.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlannerHomeComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PlannerHomeComponent = (function (_super) {
    __extends(PlannerHomeComponent, _super);
    function PlannerHomeComponent(service, recipesService, shoppingListService, title, router) {
        var _this = _super.call(this, router, title) || this;
        _this.service = service;
        _this.recipesService = recipesService;
        _this.shoppingListService = shoppingListService;
        return _this;
    }
    PlannerHomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hasPlan = false;
        this.closedPlansPage = 0;
        this.hasLoadedPlans = true;
        this.service.getUpcomingPlans()
            .subscribe(function (values) { return _this.setOpenPlans(values); }, function (error) { return _this.handleError(error); });
        this.recipesService.getRecipies()
            .subscribe(function (values) { return _this.loadRecipes(values); }, function (error) { return _this.handleError(error); });
        this.shoppingListService.getOpenList()
            .subscribe(function (value) { return _this.currentShoppingList = value; }, function (error) { return _this.handleError(error); });
    };
    PlannerHomeComponent.prototype.selectPlan = function (source) {
        this.planChanged = false;
        this.activePlan = new __WEBPACK_IMPORTED_MODULE_9_app_modules_plan_model_plan__["a" /* Plan */](source);
        this.itemClosed = false;
    };
    PlannerHomeComponent.prototype.addItem = function () {
        this.activePlan.addItem();
    };
    PlannerHomeComponent.prototype.removeItem = function (source) {
        this.planChanged = true;
        this.activePlan.items = this.activePlan.items.filter(function (x) { return x.recipeId !== source.recipeId; });
    };
    PlannerHomeComponent.prototype.completeItem = function (source) {
        this.planChanged = true;
        source.isDone = true;
        this.itemClosed = true;
    };
    PlannerHomeComponent.prototype.itemChanged = function (source) {
        this.planChanged = true;
        source.recipeId = source.recipeId;
        var recipe = this.recipeSelect.filter(function (x) { return x.key === source.recipeId; })[0];
        source.recipeName = recipe.value;
    };
    PlannerHomeComponent.prototype.savePlan = function () {
        var _this = this;
        var plan = __WEBPACK_IMPORTED_MODULE_9_app_modules_plan_model_plan__["b" /* kitchen */].plan.getPlanByDate(this.activePlan.dateTime, this.openPlans);
        if (plan) {
            plan.upsertItems(this.activePlan.items);
            if (plan.isDone()) {
                if (!this.closedPlans) {
                    this.closedPlans = new Array();
                }
                this.closedPlans.push(plan);
                this.closedPlans.sort(__WEBPACK_IMPORTED_MODULE_9_app_modules_plan_model_plan__["b" /* kitchen */].plan.sortDesc);
            }
            if (this.itemClosed) {
                this.showSnackbar();
            }
            this.service.savePlan(plan).subscribe(function (response) {
                _this.service.getUpcomingPlans()
                    .subscribe(function (values) { return _this.setOpenPlans(values); }, function (error) { return _this.handleError(error); });
            }, function (error) { return _this.handleError(error); });
            this.activePlan = undefined;
        }
    };
    PlannerHomeComponent.prototype.loadMore = function () {
        var _this = this;
        this.service.getPreviousPlans(this.closedPlansPage)
            .subscribe(function (values) { return _this.setClosedPlans(values); }, function (error) { return _this.handleError(error); });
        this.closedPlansPage += 1;
    };
    PlannerHomeComponent.prototype.generateList = function () {
        var _this = this;
        this.shoppingListService.generateList().subscribe(function (res) {
            _this.router.navigate(['/shopping', res]);
        }, function (error) { return _this.handleError(error); });
    };
    PlannerHomeComponent.prototype.viewList = function () {
        this.router.navigate(['/shopping', this.currentShoppingList.id]);
    };
    PlannerHomeComponent.prototype.setOpenPlans = function (source) {
        this.openPlans = new Array();
        for (var _i = 0, source_1 = source; _i < source_1.length; _i++) {
            var plan = source_1[_i];
            this.openPlans.push(new __WEBPACK_IMPORTED_MODULE_9_app_modules_plan_model_plan__["a" /* Plan */](plan));
            if (plan.items && plan.items.length > 0) {
                this.hasPlan = true;
            }
        }
        this.openPlans.sort(__WEBPACK_IMPORTED_MODULE_9_app_modules_plan_model_plan__["b" /* kitchen */].plan.sortAsc);
    };
    PlannerHomeComponent.prototype.setClosedPlans = function (values) {
        if (!values || values.length <= 0) {
            this.hasLoadedPlans = false;
            return;
        }
        if (!this.closedPlans) {
            this.closedPlans = new Array();
        }
        for (var i = 0; i < values.length; i++) {
            this.closedPlans.push(new __WEBPACK_IMPORTED_MODULE_9_app_modules_plan_model_plan__["a" /* Plan */](values[i]));
        }
        this.closedPlans.sort(__WEBPACK_IMPORTED_MODULE_9_app_modules_plan_model_plan__["b" /* kitchen */].plan.sortDesc);
    };
    PlannerHomeComponent.prototype.loadRecipes = function (values) {
        var types = __WEBPACK_IMPORTED_MODULE_0_underscore__["uniq"](values, function (value) { return value.recipeType.id; });
        this.recipeSelect = new Array();
        var _loop_1 = function (type) {
            var recipes = values.filter(function (x) { return x.recipeType.id === type.recipeType.id; });
            recipes.sort(this_1.sortAsc);
            var recipeTypeSelect = new Array();
            for (var _i = 0, recipes_1 = recipes; _i < recipes_1.length; _i++) {
                var recipe = recipes_1[_i];
                recipeTypeSelect.push(new __WEBPACK_IMPORTED_MODULE_8_app_classes_selectItem__["a" /* SelectItem */](recipe.id, recipe.name));
            }
            this_1.recipeSelect = this_1.recipeSelect.concat(recipeTypeSelect);
        };
        var this_1 = this;
        for (var _i = 0, types_1 = types; _i < types_1.length; _i++) {
            var type = types_1[_i];
            _loop_1(type);
        }
    };
    PlannerHomeComponent.prototype.showSnackbar = function () {
        var _this = this;
        this.showNotification = true;
        setTimeout(function () { _this.showNotification = false; }, 3000);
    };
    PlannerHomeComponent.prototype.sortAsc = function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    };
    return PlannerHomeComponent;
}(__WEBPACK_IMPORTED_MODULE_4_app_classes_baseComponent__["a" /* BaseComponent */]));
PlannerHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["c" /* Component */])({
        selector: 'app-planner-home',
        template: __webpack_require__("../../../../../src/app/modules/plan/components/planner-home/planner-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/plan/components/planner-home/planner-home.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_plan_service__["a" /* PlanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_plan_service__["a" /* PlanService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6_app_services_recipes_service__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_services_recipes_service__["a" /* RecipesService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_7_app_services_shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7_app_services_shopping_list_service__["a" /* ShoppingListService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */]) === "function" && _e || Object])
], PlannerHomeComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=planner-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/plan/components/shopping-list/shopping-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"currentList && currentList.id && currentList.id.length > 0; then currentListDisplay\"></div>\r\n\r\n<div *ngIf=\"currentList && currentList.id && currentList.id.length <= 0; then newListDisplay\"></div>\r\n<div *ngIf=\"!openList; then newListOption\"></div>\r\n<hr>\r\n<div *ngIf=\"openList && currentList && openList.id != currentList.id; then openListDisplay\"></div>\r\n<div *ngIf=\"!pastLists; then noPastList else pastListDisplay\">\r\n\r\n</div>\r\n\r\n<ng-template #currentListDisplay>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-sm-offset-4\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">{{this.currentList.name}}</h3>\r\n        </div>\r\n        <div class=\"panel-body shopping-list\">\r\n          <div *ngIf=\"!currentList.isDone && currentList.items.length > 0;then neddedItems\"></div>\r\n          <div *ngIf=\"currentList.isDone && currentList.items.length > 0;then neddedItemsReadOnly\"></div>\r\n          <br>\r\n          <div *ngIf=\"!currentList.isDone && currentList.optionalItems.length > 0;then optionalItems\"></div>\r\n        </div>\r\n        <div class=\"panel-footer\" *ngIf=\"!currentList.isDone\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-3 text-left\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-danger pull-left\" (click)=\"deleteList()\">delete</button>\r\n            </div>\r\n            <div class=\"col-xs-6 text-center\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"closeList()\">I'm done with this list</button>\r\n            </div>\r\n            <div class=\"col-xs-3 text-right\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"saveList()\">Save</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #newListDisplay>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-sm-offset-4\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <h3 class=\"panel-title\">{{this.currentList.name}}</h3>\r\n        </div>\r\n        <div class=\"panel-body shopping-list\">\r\n          <div *ngIf=\"currentList.items.length > 0;then neddedItems\"></div>\r\n        </div>\r\n        <div class=\"panel-footer\" *ngIf=\"!currentList.isDone\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-6 text-left\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-danger pull-left\">Canel</button>\r\n            </div>\r\n            <div class=\"col-xs-6 text-right\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-success\">Save</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #neddedItemsReadOnly>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\" *ngFor=\"let item of currentList.items\">\r\n      <div class=\"row text-muted\">\r\n        <div class=\"col-xs-9\">\r\n          <div class=\"checkbox\">\r\n            <label>\r\n              <input disabled=\"disabled\" [(ngModel)]=\"item.isDone\" type=\"checkbox\" [checked]=\"item.isDone\" > {{item.item.name | titlecase}}\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-3\">\r\n          <span>{{item.amount}} {{item.item.unitType}}</span>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <p class=\"list-group-item-text\">\r\n            <em>({{item.item.quantity}} {{item.item.unitType}} in stock, {{item.totalAmount}} {{item.item.unitType}} needed)</em>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n\r\n<ng-template #neddedItems>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\" *ngFor=\"let item of currentList.items\">\r\n      <div class=\"row\" [class.text-muted]=\"item.isDone\">\r\n        <div class=\"col-xs-9\">\r\n          <div class=\"checkbox\">\r\n            <label>\r\n              <input [(ngModel)]=\"item.isDone\" type=\"checkbox\" [checked]=\"item.isDone\" > {{item.item.name | titlecase}}\r\n            </label>\r\n          </div>\r\n        </div>\r\n        <div class=\"col-xs-3\" [class.text-muted]=\"item.isDone\">\r\n          <div *ngIf=\"item.isDone; then qtyDisplay else qtyInput\"></div>\r\n          <ng-template #qtyDisplay>\r\n            <span>{{item.amount}} {{item.item.unitType}}</span>\r\n          </ng-template>\r\n          <ng-template #qtyInput>\r\n            <div class=\"input-group\">\r\n              <input type=\"number\" class=\"form-control input-sm\" [(ngModel)]=\"item.amount\">\r\n              <div class=\"input-group-addon\">{{item.item.unitType}}</div>\r\n            </div>\r\n          </ng-template>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-12\">\r\n          <p class=\"list-group-item-text\">\r\n            <br>\r\n            <a (click)=\"removeFromList(item)\">remove from list</a>\r\n            <em>({{item.item.quantity}} {{item.item.unitType}} in stock, {{item.totalAmount}} {{item.item.unitType}} needed)</em>\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n\r\n<ng-template #optionalItems>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 text-center text-info\">\r\n      Items you may not need\r\n    </div>\r\n  </div>\r\n  <ul class=\"list-group\">\r\n    <li class=\"list-group-item\" *ngFor=\"let item of currentList.optionalItems\">\r\n      <div class=\"row\">\r\n        <div class=\"col-xs-10 text-muted\">\r\n          {{item.item.name | titlecase}} - ({{item.amount}} {{item.item.unitType}})\r\n          <p class=\"list-group-item-text\">{{item.item.quantity}} left in stock</p>\r\n        </div>\r\n        <div class=\"col-xs-2 text-right\">\r\n          <button type=\"button\" class=\"btn btn-xs btn-success\" (click)=\"addToList(item)\"><i class=\"fa fa-plus\"></i></button>\r\n        </div>\r\n      </div>\r\n    </li>\r\n  </ul>\r\n</ng-template>\r\n\r\n\r\n<ng-template #noPastList>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 text-center text-muted\">\r\n      No previous shopping lists\r\n    </div>\r\n  </div>\r\n  <div class=\"row\" *ngIf=\"hasLoadedLists\">\r\n    <div class=\"col-sm-12 text-center\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"loadMore()\">Show previous Lists</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #pastListDisplay>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 text-center text-muted\">\r\n      Past Lists\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"pastLists && pastLists.length > 0\">\r\n    <div class=\"col-sm-4\" *ngFor=\"let pastList of pastLists\">\r\n      <div class=\"panel panel-default pointer\" (click)=\"showList(pastList)\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row planner-day\">\r\n            <div class=\"col-xs-12 text-muted\">\r\n              {{pastList.name}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"row\" *ngIf=\"hasLoadedLists\">\r\n    <div class=\"col-sm-12 text-center\">\r\n      <button type=\"button\" class=\"btn btn-default\" (click)=\"loadMore()\">Load More</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #openListDisplay>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\">\r\n      <div class=\"panel panel-default pointer\" (click)=\"showList()\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row planner-day\">\r\n            <div class=\"col-xs-12 text-info\">\r\n              {{openList.name}}\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #newListOption>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n      <button disabled=\"disabled\" type=\"button\" class=\"btn btn-success\" (click)=\"newList()\"><i class=\"fa fa-shopping-basket\"></i> Create Shopping List</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/plan/components/shopping-list/shopping-list.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".shopping-list {\n  padding: 0;\n}\n.shopping-list .list-group {\n  margin-left: -1px;\n  margin-right: -1px;\n}\n.shopping-list .list-group .checkbox {\n  margin-top: 5px;\n  margin-bottom: 5px;\n}\n.shopping-list .list-group .input-group-addon {\n  padding: 2px;\n}\n.panel-footer .col-xs-3,\n.panel-footer col-xs-6 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/plan/components/shopping-list/shopping-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_modules_plan_model_shoppingList__ = __webpack_require__("../../../../../src/app/modules/plan/model/shoppingList.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_classes_baseComponent__ = __webpack_require__("../../../../../src/app/classes/baseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_services_shopping_list_service__ = __webpack_require__("../../../../../src/app/services/shopping-list.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ShoppingListComponent = (function (_super) {
    __extends(ShoppingListComponent, _super);
    function ShoppingListComponent(route, shoppingListService, title, router) {
        var _this = _super.call(this, router, title) || this;
        _this.route = route;
        _this.shoppingListService = shoppingListService;
        _this.listGetIds = new __WEBPACK_IMPORTED_MODULE_4_rxjs_Subject__["Subject"]();
        return _this;
    }
    ShoppingListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            var id = params.get('id');
            if (id) {
                return _this.shoppingListService.getList(id);
            }
            else {
                return _this.shoppingListService.getOpenList();
            }
        })
            .subscribe(function (source) { return _this.handleServiceResponse(source); });
        this.listGetResult = this.listGetIds
            .distinctUntilChanged()
            .switchMap(function (id) { return id ? _this.shoppingListService.getList(id) : __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(null); })
            .catch(function (error) {
            _this.handleError(error);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(null);
        });
        this.listGetResult.subscribe(function (value) {
            if (value && value !== null) {
                _this.currentList = new __WEBPACK_IMPORTED_MODULE_7_app_modules_plan_model_shoppingList__["a" /* ShoppingList */](value);
            }
        });
        this.pastListsPage = 0;
        this.hasLoadedLists = true;
    };
    ShoppingListComponent.prototype.addToList = function (item) {
        this.currentList.addToList(item);
    };
    ShoppingListComponent.prototype.removeFromList = function (item) {
        this.currentList.removeFromList(item);
    };
    ShoppingListComponent.prototype.deleteList = function () {
        var _this = this;
        this.shoppingListService.deleteList(this.currentList.id)
            .subscribe(function (response) {
            _this.currentList = undefined;
        }, function (error) { return _this.handleError(error); });
    };
    ShoppingListComponent.prototype.closeList = function () {
        this.currentList.isDone = true;
        this.saveList();
    };
    ShoppingListComponent.prototype.saveList = function () {
        var _this = this;
        this.shoppingListService.updateList(this.currentList)
            .subscribe(function (response) { return _this.handleServiceResponse(response); }, function (error) { return _this.handleError(error); });
    };
    ShoppingListComponent.prototype.loadMore = function () {
        var _this = this;
        this.shoppingListService.getPreviousLists(this.pastListsPage)
            .subscribe(function (values) { _this.setClosedLists(values); }, function (error) { return _this.handleError(error); });
        this.pastListsPage += 1;
    };
    ShoppingListComponent.prototype.showList = function (pastList) {
        if (pastList) {
            if (this.openList && this.currentList.id === this.openList.id) {
                this.openList = this.currentList;
            }
            this.listGetIds.next(pastList.id);
        }
        else {
            this.listGetIds.next(null);
            this.currentList = new __WEBPACK_IMPORTED_MODULE_7_app_modules_plan_model_shoppingList__["a" /* ShoppingList */](this.openList);
        }
    };
    ShoppingListComponent.prototype.newList = function () {
        var mt = __WEBPACK_IMPORTED_MODULE_0_moment__();
        this.currentList = new __WEBPACK_IMPORTED_MODULE_7_app_modules_plan_model_shoppingList__["a" /* ShoppingList */]();
        this.currentList.id = '';
        this.currentList.name = mt.format('ddd, MMM-DD YYYY');
        this.openList = this.currentList;
    };
    ShoppingListComponent.prototype.handleServiceResponse = function (source) {
        {
            if (source) {
                this.currentList = new __WEBPACK_IMPORTED_MODULE_7_app_modules_plan_model_shoppingList__["a" /* ShoppingList */](source);
                if (!this.currentList.isDone) {
                    this.openList = new __WEBPACK_IMPORTED_MODULE_7_app_modules_plan_model_shoppingList__["a" /* ShoppingList */](source);
                }
                else {
                    this.openList = undefined;
                }
            }
        }
    };
    ShoppingListComponent.prototype.setClosedLists = function (values) {
        if (!values || values.length <= 0) {
            this.hasLoadedLists = false;
            return;
        }
        if (!this.pastLists) {
            this.pastLists = new Array();
        }
        for (var i = 0; i < values.length; i++) {
            this.pastLists.push(values[i]);
        }
    };
    return ShoppingListComponent;
}(__WEBPACK_IMPORTED_MODULE_8_app_classes_baseComponent__["a" /* BaseComponent */]));
ShoppingListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["c" /* Component */])({
        selector: 'app-shopping-list',
        template: __webpack_require__("../../../../../src/app/modules/plan/components/shopping-list/shopping-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/plan/components/shopping-list/shopping-list.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["c" /* ActivatedRoute */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_9_app_services_shopping_list_service__["a" /* ShoppingListService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9_app_services_shopping_list_service__["a" /* ShoppingListService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser__["c" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]) === "function" && _d || Object])
], ShoppingListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=shopping-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/plan/model/plan.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_modules_plan_model_planItem__ = __webpack_require__("../../../../../src/app/modules/plan/model/planItem.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Plan; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return kitchen; });


var Plan = (function () {
    function Plan(source) {
        if (source) {
            this.id = source.id;
            this.items = new Array();
            if (source.items) {
                for (var i = 0; i < source.items.length; i++) {
                    this.items.push(new __WEBPACK_IMPORTED_MODULE_1_app_modules_plan_model_planItem__["a" /* PlanItem */](source.items[i]));
                }
            }
            if (source.dateTime) {
                this.dateTime = source.dateTime;
                this.dateTimeMt = __WEBPACK_IMPORTED_MODULE_0_moment__(source.dateTime);
            }
        }
        this.newItemId = -1;
    }
    Plan.prototype.addRecipe = function (recipe) {
        if (!this.items || this.items == null) {
            this.items = new Array();
        }
        var item = new __WEBPACK_IMPORTED_MODULE_1_app_modules_plan_model_planItem__["a" /* PlanItem */]();
        item.recipeId = recipe.id;
        item.isDone = false;
        item.recipeName = recipe.name;
        this.items.push(item);
    };
    Plan.prototype.addItem = function () {
        var item = new __WEBPACK_IMPORTED_MODULE_1_app_modules_plan_model_planItem__["a" /* PlanItem */]();
        item.isDone = false;
        item.recipeName = '';
        this.items.push(item);
    };
    Plan.prototype.upsertItems = function (source) {
        this.items = source;
    };
    Plan.prototype.isDone = function () {
        if (!this.id || !this.items || this.items.length === 0) {
            return false;
        }
        for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
            var item = _a[_i];
            if (!item.isDone) {
                return false;
            }
        }
        return true;
    };
    return Plan;
}());

var kitchen;
(function (kitchen) {
    var plan;
    (function (plan_1) {
        function sortAsc(a, b) {
            if (a.dateTimeMt.valueOf() < b.dateTimeMt.valueOf()) {
                return -1;
            }
            if (a.dateTimeMt.valueOf() > b.dateTimeMt.valueOf()) {
                return 1;
            }
            return 0;
        }
        plan_1.sortAsc = sortAsc;
        function sortDesc(a, b) {
            if (a.dateTimeMt.valueOf() < b.dateTimeMt.valueOf()) {
                return 1;
            }
            if (a.dateTimeMt.valueOf() > b.dateTimeMt.valueOf()) {
                return -1;
            }
            return 0;
        }
        plan_1.sortDesc = sortDesc;
        function getPlanByDate(dateTime, plans) {
            for (var _i = 0, plans_1 = plans; _i < plans_1.length; _i++) {
                var plan_2 = plans_1[_i];
                if (dateTime === plan_2.dateTime) {
                    return plan_2;
                }
            }
            return undefined;
        }
        plan_1.getPlanByDate = getPlanByDate;
        function getPlan(planId, plans) {
            var id = planId;
            for (var _i = 0, plans_2 = plans; _i < plans_2.length; _i++) {
                var plan_3 = plans_2[_i];
                if (id === plan_3.id) {
                    return plan_3;
                }
            }
            return undefined;
        }
        plan_1.getPlan = getPlan;
    })(plan = kitchen.plan || (kitchen.plan = {}));
})(kitchen || (kitchen = {}));
//# sourceMappingURL=plan.js.map

/***/ }),

/***/ "../../../../../src/app/modules/plan/model/planItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanItem; });
var PlanItem = (function () {
    function PlanItem(source) {
        if (source) {
            this.isDone = source.isDone;
            this.recipeId = source.recipeId;
            this.recipeName = source.recipeName;
        }
    }
    return PlanItem;
}());

//# sourceMappingURL=planItem.js.map

/***/ }),

/***/ "../../../../../src/app/modules/plan/model/shoppingList.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_app_modules_plan_model_shoppingListItem__ = __webpack_require__("../../../../../src/app/modules/plan/model/shoppingListItem.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingList; });

var ShoppingList = (function () {
    function ShoppingList(source) {
        this.items = new Array();
        this.optionalItems = new Array();
        if (source) {
            this.id = source.id;
            this.name = source.name;
            this.isDone = source.isDone;
            if (source.items) {
                for (var _i = 0, _a = source.items; _i < _a.length; _i++) {
                    var item = _a[_i];
                    this.items.push(new __WEBPACK_IMPORTED_MODULE_0_app_modules_plan_model_shoppingListItem__["a" /* ShoppingListItem */](item));
                }
            }
            if (source.optionalItems) {
                for (var _b = 0, _c = source.optionalItems; _b < _c.length; _b++) {
                    var item = _c[_b];
                    this.optionalItems.push(new __WEBPACK_IMPORTED_MODULE_0_app_modules_plan_model_shoppingListItem__["a" /* ShoppingListItem */](item));
                }
            }
        }
    }
    ShoppingList.prototype.removeFromList = function (item) {
        this.items = this.items.filter(function (x) { return x.item.id !== item.item.id; });
        if (!this.containsItem(this.optionalItems, item)) {
            this.optionalItems.push(item);
            this.optionalItems.sort(this.sortAsc);
        }
    };
    ShoppingList.prototype.addToList = function (item) {
        this.optionalItems = this.optionalItems.filter(function (x) { return x.item.id !== item.item.id; });
        if (!this.containsItem(this.items, item)) {
            this.items.push(item);
            this.items.sort(this.sortAsc);
        }
    };
    ShoppingList.prototype.containsItem = function (items, item) {
        for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
            var existing = items_1[_i];
            if (existing.item.id === item.item.id) {
                return true;
            }
        }
        return false;
    };
    ShoppingList.prototype.sortAsc = function (a, b) {
        if (a.item.name < b.item.name) {
            return -1;
        }
        if (a.item.name > b.item.name) {
            return 1;
        }
        return 0;
    };
    return ShoppingList;
}());

//# sourceMappingURL=shoppingList.js.map

/***/ }),

/***/ "../../../../../src/app/modules/plan/model/shoppingListItem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListItem; });
var ShoppingListItem = (function () {
    function ShoppingListItem(source) {
        if (source) {
            this.isDone = source.isDone;
            this.item = source.item;
            this.amount = source.amount;
            this.totalAmount = source.totalAmount;
        }
    }
    return ShoppingListItem;
}());

//# sourceMappingURL=shoppingListItem.js.map

/***/ }),

/***/ "../../../../../src/app/modules/plan/plan.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_modules_plan_plan_routing__ = __webpack_require__("../../../../../src/app/modules/plan/plan.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_plan_components_planner_home_planner_home_component__ = __webpack_require__("../../../../../src/app/modules/plan/components/planner-home/planner-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_modules_plan_components_shopping_list_shopping_list_component__ = __webpack_require__("../../../../../src/app/modules/plan/components/shopping-list/shopping-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var PlanModule = (function () {
    function PlanModule() {
    }
    return PlanModule;
}());
PlanModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_app_modules_plan_plan_routing__["a" /* PlanRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4_app_modules_plan_components_planner_home_planner_home_component__["a" /* PlannerHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_5_app_modules_plan_components_shopping_list_shopping_list_component__["a" /* ShoppingListComponent */]
        ]
    })
], PlanModule);

//# sourceMappingURL=plan.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/plan/plan.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_modules_plan_components_planner_home_planner_home_component__ = __webpack_require__("../../../../../src/app/modules/plan/components/planner-home/planner-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_plan_components_shopping_list_shopping_list_component__ = __webpack_require__("../../../../../src/app/modules/plan/components/shopping-list/shopping-list.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'planner', component: __WEBPACK_IMPORTED_MODULE_3_app_modules_plan_components_planner_home_planner_home_component__["a" /* PlannerHomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_app_services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'shopping', component: __WEBPACK_IMPORTED_MODULE_4_app_modules_plan_components_shopping_list_shopping_list_component__["a" /* ShoppingListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_app_services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'shopping/:id', component: __WEBPACK_IMPORTED_MODULE_4_app_modules_plan_components_shopping_list_shopping_list_component__["a" /* ShoppingListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_app_services_auth_guard__["a" /* AuthGuard */]] }
];
var PlanRoutingModule = (function () {
    function PlanRoutingModule() {
    }
    return PlanRoutingModule;
}());
PlanRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], PlanRoutingModule);

//# sourceMappingURL=plan.routing.js.map

/***/ }),

/***/ "../../../../../src/app/modules/recipe/components/recipe-detail/recipe-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"!recipe; then noRecipe else hasRecipe\">\r\n</div>\r\n\r\n<ng-template #noRecipe>\r\n  <div class=\"panel panel-default\">\r\n    <div class=\"panel-body\">\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n          <i *ngIf=\"!failure\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n          <span *ngIf=\"failure\" class=\"text-danger\">{{failure}}</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #hasRecipe>\r\n  <form [formGroup]=\"recipeForm\" (ngSubmit)=\"save()\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-6 col-sm-offset-3\">\r\n        <div class=\"panel panel-default\">\r\n          <div class=\"panel-body\">\r\n            <div *ngIf=\"recipe && recipe.id && recipe.id.length > 0; then recipePlan\">\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12\">\r\n                <div class=\"form-group\" [class.has-error]=\"recipe.formErrors.name\">\r\n                  <div class=\"input-group\">\r\n                    <input [ngModel]=\"recipe.name | titlecase\" (ngModelChange)=\"updateRecipeName($event)\" type=\"text\" class=\"form-control\" formControlName=\"name\" required placeholder=\"Name\" autocomplete=\"off\">\r\n                  </div>\r\n                  <div *ngIf=\"recipe.formErrors.name\">\r\n                    <span class=\"text-danger field-validation-error\">{{ recipe.formErrors.name }}</span>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12\">\r\n                <span class=\"text-muted\">Recipe Group: </span>\r\n                <span class=\"text-info\">{{recipe.recipeType.name | titlecase}}</span>\r\n              </div>\r\n            </div>\r\n            <br/>\r\n\r\n            <ng-container *ngTemplateOutlet=\"recipeIngredients\"></ng-container>\r\n            <br/>\r\n            <ng-container *ngTemplateOutlet=\"recipeSteps\"></ng-container>\r\n\r\n            <br/>\r\n            <div class=\"row\" *ngIf=\"failure\">\r\n              <div class=\"col-sm-12\">\r\n                <div>\r\n                  <span class=\"text-danger field-validation-error\">{{failure}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"panel-footer\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-3 text-left\">\r\n                <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"goBack()\">Back</button>\r\n              </div>\r\n              <div class=\"col-xs-3 text-center\">\r\n                <button *ngIf=\"recipe.key\" type=\"button\" class=\"btn btn-sm btn-default\" data-toggle=\"modal\" data-target=\"#shareModal\"><i class=\"fa fa-share-alt\"></i> Share</button>\r\n              </div>\r\n              <div class=\"col-xs-6 text-right\">\r\n                <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n                  <button *ngIf=\"recipe && recipe.id && recipe.id.length > 0\" type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Remove</button>\r\n                  <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!recipeForm.valid\">Save</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</ng-template>\r\n\r\n<ng-template #recipePlan>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12 text-center\">\r\n      <div *ngIf=\"recipe.assignedPlans && recipe.assignedPlans.length > 0;then onPlan else addToPlan\"></div>\r\n      <ng-template #addToPlan>\r\n        <button type=\"button\" class=\"btn btn-sm btn-default\" data-toggle=\"modal\" data-target=\"#dayPlanModal\" (click)=\"getPlans()\"><i class=\"fa fa-plus\"></i> Add to plan</button>\r\n      </ng-template>\r\n      <ng-template #onPlan>\r\n        <span class=\"text-info\">You next plan on cooking this on</span><br/>\r\n        <a routerLink=\"/planner\" class=\"btn btn-default btn-sm\">{{recipe.nextPlan().format(\"dddd, MMM Do\")}}</a>\r\n      </ng-template>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-xs-12\">\r\n      <br/>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #recipeIngredients>\r\n  <div class=\"panel panel-primary\">\r\n    <div class=\"panel-heading pointer\" data-toggle=\"collapse\" data-target=\"#collapseIngredients\" aria-expanded=\"true\" aria-controls=\"collapseIngredients\">Ingredients</div>\r\n    <div class=\"panel-body list-ingredients collapse in\" id=\"collapseIngredients\">\r\n      <ul class=\"list-group\" *ngIf=\"recipe.hasItems()\">\r\n        <li *ngFor=\"let item of recipe.recipeItems; let idx = index\" class=\"list-group-item pointer\" data-toggle=\"modal\" data-target=\"#itemFormModal\"\r\n          (click)=\"selectItem(idx, item)\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-9\">\r\n              {{item.item.name | titlecase}}\r\n              <span class=\"text-muted\" *ngIf=\"item.instructions\">\r\n                <em>({{item.instructions | lowercase}})</em>\r\n              </span>\r\n            </div>\r\n            <div class=\"col-xs-3 text-right\">\r\n              <span class=\"text-primary\"><strong>{{item.amount}} {{item.item.unitType | lowercase}}</strong></span>\r\n            </div>\r\n          </div>\r\n        </li>\r\n      </ul>\r\n      <div class=\"row\">\r\n        <div class=\"col-sm-12 text-center\">\r\n          <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#itemFormModal\" (click)=\"selectItem(-1)\"><i class=\"fa fa-plus\"></i> Ingredient</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<ng-template #recipeSteps>\r\n  <div class=\"well\" *ngFor=\"let step of recipe.recipeSteps; let idx = index\">\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-2\">\r\n        <h4 class=\"text-primary\">{{step.stepNumber}}</h4>\r\n      </div>\r\n      <div class=\"col-xs-10\">{{step.description}}</div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col-xs-12 text-right\">\r\n        <button type=\"button\" class=\"btn btn-xs btn-primary\" data-toggle=\"modal\" data-target=\"#stepFormModal\" (click)=\"selectStep(idx, step)\"><i class=\"fa fa-edit\"></i> Edit</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-12 text-center\">\r\n      <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#stepFormModal\" (click)=\"selectStep(-1)\"><i class=\"fa fa-plus\"></i> Cooking Step</button>\r\n    </div>\r\n  </div>\r\n</ng-template>\r\n\r\n<!-- Modal for recipe step -->\r\n<div class=\"modal\" id=\"stepFormModal\" tabindex=\"-1\" role=\"dialog\" *ngIf=\"selectedStep\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4>Recipe Step</h4>\r\n      </div>\r\n\r\n      <form [formGroup]=\"stepForm\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"selectedStep.formErrors.description\">\r\n                <div class=\"input-group\">\r\n                  <textarea [(ngModel)]=\"selectedStep.description\" class=\"form-control\" rows=\"5\" formControlName=\"description\" required placeholder=\"Enter cooking steps...\"></textarea>\r\n                </div>\r\n                <div *ngIf=\"selectedStep.formErrors.description\">\r\n                  <span class=\"text-danger field-validation-error\">{{ selectedStep.formErrors.description }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-default pull-left\" data-dismiss=\"modal\">Close</button>\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n            <button *ngIf=\"selectedStep && selectedStepIdx >= 0\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteStep()\">Remove</button>\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!stepForm.valid\" data-dismiss=\"modal\" (click)=\"saveStep()\">Save</button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal for recipe item -->\r\n<div class=\"modal\" id=\"itemFormModal\" tabindex=\"-1\" role=\"dialog\" *ngIf=\"selectedItem\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 class=\"modal-title\">Recipe Ingredient</h4>\r\n      </div>\r\n\r\n      <form [formGroup]=\"itemForm\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"selectedItem.formErrors.name\">\r\n                <div class=\"input-group\">\r\n                  <input [ngModel]=\"selectedItem.item.name | titlecase\" (ngModelChange)=\"updateItemName($event)\" type=\"text\" class=\"form-control\" formControlName=\"name\" required placeholder=\"Name\"\r\n                    autocomplete=\"off\" (keyup)=\"search()\">\r\n                </div>\r\n                <div *ngIf=\"selectedItem.formErrors.name\">\r\n                  <span class=\"text-danger field-validation-error\">{{ selectedItem.formErrors.name }}</span>\r\n                </div>\r\n                <div class=\"typeahead\">\r\n                  <ul class=\"list-group\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let searchResult of itemsSearchResult | async\" (click)=\"selectSearchItem(searchResult)\">\r\n                      {{searchResult.name | titlecase}}\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\" [class.has-error]=\"selectedItem.formErrors.amount\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"selectedItem.amount\" type=\"number\" class=\"form-control\" formControlName=\"amount\" required placeholder=\"Amount\"\r\n                    autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"selectedItem.formErrors.amount\">\r\n                  <span class=\"text-danger field-validation-error\">{{ selectedItem.formErrors.amount }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input [ngModel]=\"selectedItem.item.unitType | lowercase\" (ngModelChange)=\"updateUnit($event)\" type=\"text\" placeholder=\"Unit. (e.g. tsp)\" class=\"form-control\" formControlName=\"unitType\"\r\n                  />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br/><br/>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input [ngModel]=\"selectedItem.instructions | lowercase\"  (ngModelChange)=\"updateInstructions($event)\" type=\"text\" class=\"form-control\" formControlName=\"instructions\" placeholder=\"Notes. (e.g. diced)\"\r\n                    autocomplete=\"off\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-default pull-left\" data-dismiss=\"modal\">Cancel</button>\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n            <button *ngIf=\"selectedItem && selectedItemIdx >= 0\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteItem()\">Remove</button>\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!itemForm.valid\" data-dismiss=\"modal\" (click)=\"saveItem()\">Save</button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal for plan -->\r\n<div class=\"modal\" id=\"dayPlanModal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <span class=\"modal-title\"><strong>When would you like to cook this?</strong></span>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <select [(ngModel)]=\"selectedPlanId\" class=\"form-control\">\r\n                      <option *ngFor=\"let plan of plansSelect | async\" [value]=\"plan.key\">{{plan.value}}</option>\r\n                  </select>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-sm btn-default pull-left\" data-dismiss=\"modal\">Cancel</button>\r\n        <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n          <button type=\"button\" class=\"btn btn-success\" data-dismiss=\"modal\" (click)=\"savePlan()\">Save</button>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal for share -->\r\n<div class=\"modal\" id=\"shareModal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <span class=\"modal-title\"><strong>To share this recipe, simply use the following link</strong></span>\r\n      </div>\r\n      <div class=\"modal-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-xs-12\">\r\n            <div class=\"form-group\">\r\n              <div class=\"input-group\">\r\n                <input type=\"text\" class=\"form-control\" value=\"{{shareUrl}}\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"modal-footer\">\r\n        <button type=\"button\" class=\"btn btn-sm btn-default\" data-dismiss=\"modal\">Close</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/recipe/components/recipe-detail/recipe-detail.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item .col-xs-9,\n.list-group-item .col-xs-3 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.list-ingredients {\n  padding: 0 0 20px 0;\n}\n.list-ingredients ul {\n  margin-left: -1px;\n  margin-right: -1px;\n  margin-bottom: 0;\n}\n.list-ingredients button {\n  margin-top: 20px;\n}\n.well {\n  background: #f7f7f7;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/recipe/components/recipe-detail/recipe-detail.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__ = __webpack_require__("../../../../rxjs/add/operator/switchMap.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__ = __webpack_require__("../../../../rxjs/add/operator/debounceTime.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__("../../../../rxjs/add/operator/distinctUntilChanged.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_classes_baseComponent__ = __webpack_require__("../../../../../src/app/classes/baseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_services_recipes_service__ = __webpack_require__("../../../../../src/app/services/recipes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_app_services_plan_service__ = __webpack_require__("../../../../../src/app/services/plan.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_app_services_items_service__ = __webpack_require__("../../../../../src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_app_services_form_helper_service__ = __webpack_require__("../../../../../src/app/services/form-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17_app_classes_selectItem__ = __webpack_require__("../../../../../src/app/classes/selectItem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_app_modules_recipe_model_recipe__ = __webpack_require__("../../../../../src/app/modules/recipe/model/recipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20_app_modules_recipe_model_recipestep__ = __webpack_require__("../../../../../src/app/modules/recipe/model/recipestep.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21_app_modules_recipe_model_recipeitem__ = __webpack_require__("../../../../../src/app/modules/recipe/model/recipeitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22_app_modules_plan_model_plan__ = __webpack_require__("../../../../../src/app/modules/plan/model/plan.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23_app_modules_recipe_model_recipeType__ = __webpack_require__("../../../../../src/app/modules/recipe/model/recipeType.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeDetailComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

























var RecipeDetailComponent = (function (_super) {
    __extends(RecipeDetailComponent, _super);
    function RecipeDetailComponent(recipesService, planService, itemsService, route, location, formHelper, title, router) {
        var _this = _super.call(this, router, title) || this;
        _this.recipesService = recipesService;
        _this.planService = planService;
        _this.itemsService = itemsService;
        _this.route = route;
        _this.location = location;
        _this.formHelper = formHelper;
        _this.searchTerms = new __WEBPACK_IMPORTED_MODULE_7_rxjs_Subject__["Subject"]();
        return _this;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) {
            var typeId = params.get('rti');
            var typeName = params.get('rtn');
            if (typeId && typeName) {
                _this.selectedType = new __WEBPACK_IMPORTED_MODULE_23_app_modules_recipe_model_recipeType__["a" /* RecipeType */]();
                _this.selectedType.id = typeId;
                _this.selectedType.name = typeName;
            }
            return _this.recipesService.getRecipe(params.get('id'));
        })
            .subscribe(function (source) {
            _this.recipe = new __WEBPACK_IMPORTED_MODULE_19_app_modules_recipe_model_recipe__["a" /* Recipe */](source);
            if (!_this.recipe.recipeType) {
                _this.recipe.recipeType = _this.selectedType;
            }
            _this.recipeForm = _this.formHelper.buildForm(_this.recipe);
            _this.shareUrl = __WEBPACK_IMPORTED_MODULE_18_environments_environment__["a" /* environment */].recipeViewUrl + _this.recipe.key;
        });
        this.itemsSearchResult = this.searchTerms
            .debounceTime(150)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.itemsService.getItems(term) : __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            return __WEBPACK_IMPORTED_MODULE_6_rxjs_Observable__["Observable"].of([]);
        });
    };
    RecipeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    RecipeDetailComponent.prototype.updateRecipeName = function (event) {
        var _this = this;
        setTimeout(function () { _this.recipe.name = event; });
    };
    RecipeDetailComponent.prototype.updateItemName = function (event) {
        var _this = this;
        setTimeout(function () { _this.selectedItem.item.name = event; });
    };
    RecipeDetailComponent.prototype.updateUnit = function (event) {
        var _this = this;
        setTimeout(function () { _this.selectedItem.item.unitType = event; });
    };
    RecipeDetailComponent.prototype.updateInstructions = function (event) {
        var _this = this;
        setTimeout(function () { _this.selectedItem.instructions = event; });
    };
    RecipeDetailComponent.prototype.save = function () {
        var _this = this;
        this.recipesService.saveRecipe(this.recipe)
            .subscribe(function (response) {
            _this.recipeForm.reset();
            _this.router.navigate(['/recipes']);
        }, function (error) { return _this.handleError(error); });
    };
    RecipeDetailComponent.prototype.selectStep = function (idx, source) {
        this.selectedStepIdx = idx;
        this.selectedStep = new __WEBPACK_IMPORTED_MODULE_20_app_modules_recipe_model_recipestep__["a" /* RecipeStep */](source);
        this.stepForm = this.formHelper.buildForm(this.selectedStep);
    };
    RecipeDetailComponent.prototype.saveStep = function () {
        if (this.selectedStepIdx >= 0) {
            this.recipe.updateStep(this.selectedStepIdx, this.selectedStep);
        }
        else {
            this.recipe.insertStep(this.selectedStep);
        }
    };
    RecipeDetailComponent.prototype.deleteStep = function () {
        this.recipe.removeStep(this.selectedStep);
    };
    RecipeDetailComponent.prototype.selectItem = function (idx, source) {
        this.selectedItemIdx = idx;
        this.selectedItem = new __WEBPACK_IMPORTED_MODULE_21_app_modules_recipe_model_recipeitem__["a" /* RecipeItem */](source);
        this.itemForm = this.formHelper.buildForm(this.selectedItem);
    };
    RecipeDetailComponent.prototype.saveItem = function () {
        if (this.selectedItemIdx >= 0) {
            this.recipe.updateItem(this.selectedItemIdx, this.selectedItem);
        }
        else {
            this.recipe.insertItem(this.selectedItem);
        }
    };
    RecipeDetailComponent.prototype.deleteItem = function () {
        this.recipe.removeItem(this.selectedItemIdx);
    };
    RecipeDetailComponent.prototype.delete = function () {
        var _this = this;
        this.recipesService.deleteRecipe(this.recipe.id)
            .subscribe(function (response) {
            _this.recipeForm.reset();
            _this.router.navigate(['/recipes']);
        }, function (error) { return _this.handleError(error); });
    };
    RecipeDetailComponent.prototype.selectSearchItem = function (searchResult) {
        this.selectedItem.item.name = searchResult.name;
        this.selectedItem.item.id = searchResult.id;
        this.selectedItem.item.unitType = searchResult.unitType;
        this.searchTerms.next(null);
    };
    RecipeDetailComponent.prototype.getPlans = function () {
        var _this = this;
        this.plansSelect = this.planService.getUpcomingPlans().map(function (values) {
            var selectItems = new Array();
            _this.plans = new Array();
            if (values.length > 0) {
                for (var i = 0; i < values.length; i++) {
                    selectItems.push(new __WEBPACK_IMPORTED_MODULE_17_app_classes_selectItem__["a" /* SelectItem */](String(i), __WEBPACK_IMPORTED_MODULE_0_moment__(values[i].dateTime).format('dddd, MMM Do')));
                    _this.plans.push(new __WEBPACK_IMPORTED_MODULE_22_app_modules_plan_model_plan__["a" /* Plan */](values[i]));
                }
                _this.selectedPlanId = values[0].id;
            }
            return selectItems;
        });
    };
    RecipeDetailComponent.prototype.savePlan = function () {
        var _this = this;
        var plan = this.plans[Number(this.selectedPlanId)];
        plan.addRecipe(this.recipe);
        this.planService.savePlan(plan).subscribe(function (response) {
            _this.recipe.assignedPlans = new Array();
            _this.recipe.assignedPlans.push(plan);
        }, function (error) { return _this.handleError(error); });
    };
    RecipeDetailComponent.prototype.search = function () {
        this.searchTerms.next(this.selectedItem.item.name);
    };
    return RecipeDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_12_app_classes_baseComponent__["a" /* BaseComponent */]));
RecipeDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__angular_core__["c" /* Component */])({
        selector: 'app-recipe-detail',
        template: __webpack_require__("../../../../../src/app/modules/recipe/components/recipe-detail/recipe-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/recipe/components/recipe-detail/recipe-detail.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_13_app_services_recipes_service__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_app_services_recipes_service__["a" /* RecipesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_14_app_services_plan_service__["a" /* PlanService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14_app_services_plan_service__["a" /* PlanService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_15_app_services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15_app_services_items_service__["a" /* ItemsService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["c" /* ActivatedRoute */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_10__angular_common__["c" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__angular_common__["c" /* Location */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_16_app_services_form_helper_service__["a" /* FormHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16_app_services_form_helper_service__["a" /* FormHelperService */]) === "function" && _f || Object, typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__angular_platform_browser__["c" /* Title */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_router__["a" /* Router */]) === "function" && _h || Object])
], RecipeDetailComponent);

var _a, _b, _c, _d, _e, _f, _g, _h;
//# sourceMappingURL=recipe-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/recipe/components/recipe-list/recipe-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" *ngIf=\"!allRecipes && !types\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <i *ngIf=\"!failure\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n        <span *ngIf=\"failure\" class=\"text-danger\">{{failure}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\" *ngIf=\"types && types.length <= 0\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <span><strong>You have not created any recipes.</strong></span><br><br>\r\n        <span class=\"text-info\">Use this page to keep track of all your recipes</span><br><br>\r\n        <span class=\"text-info\">\r\n          To make keeping track of your recipes easier you can use this page to group similar recipes\r\n          such as <strong>Lunch</strong>, <strong>Diner</strong>, <strong>Baking</strong> etc\r\n        </span>\r\n        <hr>\r\n        <span class=\"text-info\">\r\n          Once you have your recipes you can add them to your meal planner and your shopping basket.\r\n        </span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div *ngIf=\"types && types.length > 0\">\r\n\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4\" *ngFor=\"let type of types\">\r\n      <div class=\"panel panel-primary\">\r\n        <div class=\"panel-heading\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-8 text-left pointer\" data-toggle=\"collapse\" [attr.data-target]=\"asTypeId(type)\">\r\n              {{type.name | titlecase}}\r\n            </div>\r\n            <div class=\"col-xs-4 text-right\">\r\n              <button type=\"button\" class=\"btn btn-xs btn-default pull-right\" data-toggle=\"modal\" data-target=\"#recipeTypeModal\" (click)=\"selectType(type)\">Edit</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"allRecipes && allRecipes != null\" class=\"recipe-list collapse in\" id=\"collapse{{type.id}}\">\r\n          <ul class=\"list-group\">\r\n            <li class=\"list-group-item pointer\" *ngFor=\"let recipe of allRecipes | recipeTypeFilter:type\" (click)=\"onSelect(recipe)\">\r\n              {{recipe.name | titlecase}}\r\n            </li>\r\n          </ul>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 text-center\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-success\" (click)=\"addRecipe(type)\"><i class=\"fa fa-plus\"></i> Recipe</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"!allRecipes || allRecipes == null\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 text-center recipe-await\">\r\n              <i *ngIf=\"!failure\" class=\"fa fa-spinner fa-spin fa-2x fa-fw\"></i>\r\n              <span *ngIf=\"failure\" class=\"text-danger\">{{failure}}</span>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <button class=\"btn btn-lg btn-success\" data-toggle=\"modal\" data-target=\"#recipeTypeModal\" (click)=\"selectType()\"><i class=\"fa fa-plus\"></i> Add Recipe Group</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"modal\" id=\"recipeTypeModal\" tabindex=\"-1\" role=\"dialog\" *ngIf=\"selectedType\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 *ngIf=\"selectedType && selectedType.id && selectedType.id.length > 0\" class=\"modal-title\">Edit Recipe Group</h4>\r\n        <h4 *ngIf=\"!selectedType || !selectedType.id || selectedType.id.length <= 0\" class=\"modal-title\">Add Recipe Group</h4>\r\n        <span class=\"text-info\" *ngIf=\"!selectedType || !selectedType.id || selectedType.id.length <= 0\">Recipe groups are useful for grouping similar recipes, such as all your meals, lunches, snacks, etc.</span>\r\n      </div>\r\n\r\n      <form [formGroup]=\"recipeTypeForm\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"selectedType.formErrors.name\">\r\n                <div class=\"input-group\">\r\n                  <input [ngModel]=\"selectedType.name | titlecase\" (ngModelChange)=\"updateTypeName($event)\" type=\"text\" class=\"form-control\"\r\n                    formControlName=\"name\" required placeholder=\"Name. (e.g. lunches, baking, etc)\" autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"selectedType.formErrors.name\">\r\n                  <span class=\"text-danger field-validation-error\">{{ selectedType.formErrors.name }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-default pull-left\" data-dismiss=\"modal\">Close</button>\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!recipeTypeForm.valid\" data-dismiss=\"modal\" (click)=\"saveType()\">Save</button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/recipe/components/recipe-list/recipe-list.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".recipe-list {\n  padding: 0 0 20px 0;\n}\n.recipe-list ul {\n  margin-left: -1px;\n  margin-right: -1px;\n  margin-bottom: 0;\n}\n.recipe-list button {\n  margin-top: 20px;\n}\n.recipe-await {\n  padding: 20px 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/recipe/components/recipe-list/recipe-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_classes_baseComponent__ = __webpack_require__("../../../../../src/app/classes/baseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_recipes_service__ = __webpack_require__("../../../../../src/app/services/recipes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_form_helper_service__ = __webpack_require__("../../../../../src/app/services/form-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_modules_recipe_model_recipeType__ = __webpack_require__("../../../../../src/app/modules/recipe/model/recipeType.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeListComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipeListComponent = (function (_super) {
    __extends(RecipeListComponent, _super);
    function RecipeListComponent(service, formHelper, title, router) {
        var _this = _super.call(this, router, title) || this;
        _this.service = service;
        _this.formHelper = formHelper;
        return _this;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getRecipies().subscribe(function (values) {
            _this.allRecipes = values;
            _this.allRecipes.sort(_this.sortAsc);
        }, function (error) { return _this.handleError(error); });
        this.service.getRecipieTypes().subscribe(function (values) { return _this.types = values; }, function (error) { return _this.handleError(error); });
    };
    RecipeListComponent.prototype.updateTypeName = function (event) {
        var _this = this;
        setTimeout(function () { _this.selectedType.name = event; });
    };
    RecipeListComponent.prototype.asTypeId = function (source) {
        return "#collapse" + source.id;
    };
    RecipeListComponent.prototype.onSelect = function (recipe) {
        this.selectedRecipe = recipe;
        this.router.navigate(['/recipedetail', this.selectedRecipe.id]);
    };
    RecipeListComponent.prototype.selectType = function (type) {
        this.selectedType = new __WEBPACK_IMPORTED_MODULE_6_app_modules_recipe_model_recipeType__["a" /* RecipeType */](type);
        this.recipeTypeForm = this.formHelper.buildForm(this.selectedType);
    };
    RecipeListComponent.prototype.saveType = function () {
        var _this = this;
        this.service.saveRecipeType(this.selectedType)
            .subscribe(function (response) {
            _this.selectedType.id = response;
            _this.updateTypes();
        }, function (error) { return _this.handleError(error); });
    };
    RecipeListComponent.prototype.addRecipe = function (type) {
        this.router.navigate(['/recipedetail', 0, { rti: type.id, rtn: type.name }]);
    };
    RecipeListComponent.prototype.updateTypes = function () {
        var type = this.findType(this.selectedType.id);
        if (type) {
            type.name = this.selectedType.name;
        }
        else {
            this.types.push(this.selectedType);
        }
    };
    RecipeListComponent.prototype.findType = function (id) {
        for (var _i = 0, _a = this.types; _i < _a.length; _i++) {
            var type = _a[_i];
            if (type.id === id) {
                return type;
            }
        }
        return undefined;
    };
    RecipeListComponent.prototype.sortAsc = function (a, b) {
        if (a.name < b.name) {
            return -1;
        }
        if (a.name > b.name) {
            return 1;
        }
        return 0;
    };
    return RecipeListComponent;
}(__WEBPACK_IMPORTED_MODULE_3_app_classes_baseComponent__["a" /* BaseComponent */]));
RecipeListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-recipe-list',
        template: __webpack_require__("../../../../../src/app/modules/recipe/components/recipe-list/recipe-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/recipe/components/recipe-list/recipe-list.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_recipes_service__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_recipes_service__["a" /* RecipesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_form_helper_service__["a" /* FormHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_form_helper_service__["a" /* FormHelperService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _d || Object])
], RecipeListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=recipe-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/recipe/components/recipe-view/recipe-view.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" *ngIf=\"!recipe\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <i *ngIf=\"!failure\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n        <span *ngIf=\"failure\" class=\"text-danger\">{{failure}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"recipe\">\r\n  <div class=\"col-sm-6 col-sm-offset-3\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n\r\n        <div *ngIf=\"token\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 text-center\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-primary\" (click)=\"saveRecipe()\"><i class=\"fa fa-plus\"></i> Add to my collection</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"failure\">\r\n            <div class=\"col-sm-12 text-center\">\r\n              <div>\r\n                <span class=\"text-danger field-validation-error\">{{failure}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"token\">\r\n            <div class=\"col-sm-12 text-center\">\r\n              <br/>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <h4>{{recipe.name | titlecase}}</h4>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"panel panel-primary\">\r\n          <div class=\"panel-heading pointer\" data-toggle=\"collapse\" data-target=\"#collapseIngredients\" aria-expanded=\"true\" aria-controls=\"collapseIngredients\">Ingredients</div>\r\n          <ul class=\"list-group list-ingredients collapse in\" id=\"collapseIngredients\" *ngIf=\"recipe.recipeItems && recipe.recipeItems.length > 0\">\r\n            <li *ngFor=\"let item of recipe.recipeItems\" class=\"list-group-item\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-9\">\r\n                  {{item.item.name | titlecase}}\r\n                  <span class=\"text-muted\" *ngIf=\"item.instructions\">\r\n                        <em>({{item.instructions | lowercase}})</em>\r\n                      </span>\r\n                </div>\r\n                <div class=\"col-xs-3 text-right\">\r\n                  <span class=\"text-primary\"><strong>{{item.amount}} {{item.item.unitType | lowercase}}</strong></span>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n        <br/>\r\n\r\n        <div class=\"well\" *ngFor=\"let step of recipe.recipeSteps\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-2\">\r\n              <h4 class=\"text-primary\">{{step.stepNumber}}</h4>\r\n            </div>\r\n            <div class=\"col-xs-10\">{{step.description}}</div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/recipe/components/recipe-view/recipe-view.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".list-group-item .col-xs-9,\n.list-group-item .col-xs-3 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.list-ingredients {\n  padding: 0;\n}\n.list-ingredients ul {\n  margin-left: -1px;\n  margin-right: -1px;\n  margin-bottom: 0;\n}\n.list-ingredients button {\n  margin-top: 20px;\n}\n.well {\n  background: #f7f7f7;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/recipe/components/recipe-view/recipe-view.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_classes_baseComponent__ = __webpack_require__("../../../../../src/app/classes/baseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_recipes_service__ = __webpack_require__("../../../../../src/app/services/recipes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeViewComponent; });
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RecipeViewComponent = (function (_super) {
    __extends(RecipeViewComponent, _super);
    function RecipeViewComponent(recipesService, route, sessionManager, title, router) {
        var _this = _super.call(this, router, title) || this;
        _this.recipesService = recipesService;
        _this.route = route;
        _this.sessionManager = sessionManager;
        return _this;
    }
    RecipeViewComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.recipesService.getRecipeView(params.get('id')); })
            .subscribe(function (source) {
            _this.recipe = source;
            _this.title.setTitle(_this.recipe.name);
        });
        this.sessionManager.loggedInUser.subscribe(function (value) {
            if (value && value != null) {
                _this.token = value.userToken;
            }
        });
    };
    RecipeViewComponent.prototype.saveRecipe = function () {
        var _this = this;
        this.recipesService.saveRecipe(this.recipe)
            .subscribe(function (response) {
            _this.router.navigate(['/recipedetail', response]);
        }, function (error) { return _this.handleError(error); });
    };
    return RecipeViewComponent;
}(__WEBPACK_IMPORTED_MODULE_3_app_classes_baseComponent__["a" /* BaseComponent */]));
RecipeViewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-recipe-view',
        template: __webpack_require__("../../../../../src/app/modules/recipe/components/recipe-view/recipe-view.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/recipe/components/recipe-view/recipe-view.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_recipes_service__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_recipes_service__["a" /* RecipesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* ActivatedRoute */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_session_service__["a" /* SessionService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* Title */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _e || Object])
], RecipeViewComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=recipe-view.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/recipe/model/recipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__("../../../../moment/moment.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_modules_recipe_model_recipestep__ = __webpack_require__("../../../../../src/app/modules/recipe/model/recipestep.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_recipe_model_recipeitem__ = __webpack_require__("../../../../../src/app/modules/recipe/model/recipeitem.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });





var Recipe = (function () {
    function Recipe(source) {
        this.formErrors = {
            'name': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
            }
        };
        if (source) {
            this.id = source.id;
            this.name = source.name;
            this.recipeType = source.recipeType;
            this.recipeSteps = source.recipeSteps;
            this.recipeItems = source.recipeItems;
            this.assignedPlans = source.assignedPlans;
            this.key = source.key;
        }
        if (!this.recipeSteps) {
            this.recipeSteps = new Array();
        }
        else {
            this.recipeSteps = __WEBPACK_IMPORTED_MODULE_0_underscore__["sortBy"](this.recipeSteps, 'stepNumber');
        }
        if (!this.recipeItems) {
            this.recipeItems = new Array();
        }
    }
    Recipe.prototype.getFormConfig = function () {
        return {
            'name': [this.name, [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["c" /* Validators */].required]]
        };
    };
    Recipe.prototype.nextPlan = function () {
        if (this.assignedPlans && this.assignedPlans.length > 0) {
            return __WEBPACK_IMPORTED_MODULE_1_moment__(this.assignedPlans[0].dateTime);
        }
        return undefined;
    };
    Recipe.prototype.hasItems = function () {
        return this.recipeItems && this.recipeItems != null && this.recipeItems.length > 0;
    };
    Recipe.prototype.removeStep = function (source) {
        if (source) {
            var steps = new Array();
            for (var i = 0; i < this.recipeSteps.length; i++) {
                var step = this.recipeSteps[i];
                if (step.stepNumber === source.stepNumber) {
                    continue;
                }
                step.stepNumber = steps.length + 1;
                steps.push(step);
            }
            this.recipeSteps = steps;
        }
    };
    Recipe.prototype.updateStep = function (idx, source) {
        if (idx < this.recipeSteps.length) {
            this.recipeSteps[idx].stepNumber = source.stepNumber;
            this.recipeSteps[idx].description = source.description;
        }
    };
    Recipe.prototype.insertStep = function (source) {
        var item = new __WEBPACK_IMPORTED_MODULE_3_app_modules_recipe_model_recipestep__["a" /* RecipeStep */]();
        item.description = source.description;
        item.stepNumber = this.recipeSteps.length + 1;
        this.recipeSteps.push(item);
    };
    Recipe.prototype.removeItem = function (idx) {
        if (idx >= 0 && idx < this.recipeItems.length) {
            var items = new Array();
            for (var i = 0; i < this.recipeItems.length; i++) {
                if (i !== idx) {
                    items.push(this.recipeItems[i]);
                }
            }
            this.recipeItems = items;
        }
    };
    Recipe.prototype.updateItem = function (idx, source) {
        if (idx < this.recipeItems.length) {
            this.recipeItems[idx].amount = source.amount;
            this.recipeItems[idx].instructions = source.instructions;
            this.recipeItems[idx].item = source.item;
            this.recipeItems[idx].item.unitType = source.item.unitType;
        }
    };
    Recipe.prototype.insertItem = function (source) {
        var item = new __WEBPACK_IMPORTED_MODULE_4_app_modules_recipe_model_recipeitem__["a" /* RecipeItem */]();
        item.amount = source.amount;
        item.instructions = source.instructions;
        item.item = source.item;
        item.item.unitType = source.item.unitType;
        this.recipeItems.push(item);
    };
    return Recipe;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ "../../../../../src/app/modules/recipe/model/recipeType.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeType; });

var RecipeType = (function () {
    function RecipeType(source) {
        this.formErrors = {
            'name': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Name is required.',
            }
        };
        if (source) {
            this.id = source.id;
            this.name = source.name;
        }
    }
    RecipeType.prototype.getFormConfig = function () {
        return {
            'name': [this.name, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]]
        };
    };
    return RecipeType;
}());

//# sourceMappingURL=recipeType.js.map

/***/ }),

/***/ "../../../../../src/app/modules/recipe/model/recipeitem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_modules_inventory_model_item__ = __webpack_require__("../../../../../src/app/modules/inventory/model/item.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeItem; });


var RecipeItem = (function () {
    function RecipeItem(source) {
        this.formErrors = {
            'amount': '',
            'name': ''
        };
        this.validationMessages = {
            'amount': {
                'required': 'Amount is required.',
            },
            'name': {
                'required': 'Name is required.',
            }
        };
        if (source) {
            this.amount = source.amount;
            this.item = source.item;
            this.instructions = source.instructions;
        }
        if (!this.item) {
            this.item = new __WEBPACK_IMPORTED_MODULE_1_app_modules_inventory_model_item__["a" /* Item */]();
        }
    }
    RecipeItem.prototype.getFormConfig = function () {
        return {
            'amount': [this.amount, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]],
            'name': [this.item.name, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]],
            'unitType': [this.item.unitType],
            'instructions': [this.instructions]
        };
    };
    return RecipeItem;
}());

//# sourceMappingURL=recipeitem.js.map

/***/ }),

/***/ "../../../../../src/app/modules/recipe/model/recipestep.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeStep; });

var RecipeStep = (function () {
    function RecipeStep(source) {
        this.formErrors = {
            'description': ''
        };
        this.validationMessages = {
            'description': {
                'required': 'Description is required.',
            }
        };
        if (source) {
            this.description = source.description;
            this.stepNumber = source.stepNumber;
        }
    }
    RecipeStep.prototype.getFormConfig = function () {
        return {
            'description': [this.description, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]]
        };
    };
    return RecipeStep;
}());

//# sourceMappingURL=recipestep.js.map

/***/ }),

/***/ "../../../../../src/app/modules/recipe/pipes/has-recipe-type-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeWithTypePipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecipeWithTypePipe = (function () {
    function RecipeWithTypePipe() {
    }
    RecipeWithTypePipe.prototype.transform = function (value, allRecipes) {
        var returnValue = new Array();
        var _loop_1 = function (i) {
            var item = value[i];
            if (allRecipes.filter(function (x) { return x.recipeType.id === item.id; }).length > 0) {
                returnValue.push(item);
            }
        };
        for (var i = 0; i < value.length; i++) {
            _loop_1(i);
        }
        return returnValue;
    };
    return RecipeWithTypePipe;
}());
RecipeWithTypePipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'hasRecipeWithType' })
], RecipeWithTypePipe);

//# sourceMappingURL=has-recipe-type-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/modules/recipe/pipes/recipe-type-filter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeTypeFilterPipe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var RecipeTypeFilterPipe = (function () {
    function RecipeTypeFilterPipe() {
    }
    RecipeTypeFilterPipe.prototype.transform = function (value, type) {
        if (!value) {
            return undefined;
        }
        return value.filter(function (x) { return x.recipeType.id === type.id; });
    };
    return RecipeTypeFilterPipe;
}());
RecipeTypeFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({ name: 'recipeTypeFilter' })
], RecipeTypeFilterPipe);

//# sourceMappingURL=recipe-type-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/modules/recipe/recipe.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_recipe_components_recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/modules/recipe/components/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_modules_recipe_components_recipe_list_recipe_list_component__ = __webpack_require__("../../../../../src/app/modules/recipe/components/recipe-list/recipe-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_modules_recipe_components_recipe_view_recipe_view_component__ = __webpack_require__("../../../../../src/app/modules/recipe/components/recipe-view/recipe-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_modules_recipe_recipe_routing__ = __webpack_require__("../../../../../src/app/modules/recipe/recipe.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_modules_recipe_pipes_recipe_type_filter_pipe__ = __webpack_require__("../../../../../src/app/modules/recipe/pipes/recipe-type-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_modules_recipe_pipes_has_recipe_type_filter_pipe__ = __webpack_require__("../../../../../src/app/modules/recipe/pipes/has-recipe-type-filter.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








// Pipes


var RecipeModule = (function () {
    function RecipeModule() {
    }
    return RecipeModule;
}());
RecipeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_7_app_modules_recipe_recipe_routing__["a" /* RecipeRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4_app_modules_recipe_components_recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_5_app_modules_recipe_components_recipe_list_recipe_list_component__["a" /* RecipeListComponent */],
            __WEBPACK_IMPORTED_MODULE_6_app_modules_recipe_components_recipe_view_recipe_view_component__["a" /* RecipeViewComponent */],
            __WEBPACK_IMPORTED_MODULE_8_app_modules_recipe_pipes_recipe_type_filter_pipe__["a" /* RecipeTypeFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_9_app_modules_recipe_pipes_has_recipe_type_filter_pipe__["a" /* RecipeWithTypePipe */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser__["c" /* Title */]
        ]
    })
], RecipeModule);

//# sourceMappingURL=recipe.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/recipe/recipe.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_modules_recipe_components_recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/modules/recipe/components/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_modules_recipe_components_recipe_list_recipe_list_component__ = __webpack_require__("../../../../../src/app/modules/recipe/components/recipe-list/recipe-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_recipe_components_recipe_view_recipe_view_component__ = __webpack_require__("../../../../../src/app/modules/recipe/components/recipe-view/recipe-view.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth-guard.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var routes = [
    { path: 'recipes', component: __WEBPACK_IMPORTED_MODULE_3_app_modules_recipe_components_recipe_list_recipe_list_component__["a" /* RecipeListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5_app_services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'recipedetail/:id', component: __WEBPACK_IMPORTED_MODULE_2_app_modules_recipe_components_recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_5_app_services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'recipeview/:id', component: __WEBPACK_IMPORTED_MODULE_4_app_modules_recipe_components_recipe_view_recipe_view_component__["a" /* RecipeViewComponent */] }
];
var RecipeRoutingModule = (function () {
    function RecipeRoutingModule() {
    }
    return RecipeRoutingModule;
}());
RecipeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], RecipeRoutingModule);

//# sourceMappingURL=recipe.routing.js.map

/***/ }),

/***/ "../../../../../src/app/modules/welcome/components/home-public/home-public.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n  <div class=\"col-sm-4 col-sm-offset-4\">\r\n    <div class=\"panel panel-default\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12\">\r\n            <h4>Login</h4>\r\n            <span class=\"text-info\">Please login using your Google account.</span>\r\n          </div>\r\n        </div>\r\n        <br>\r\n        <br>\r\n        <div class=\"row\" *ngIf=\"hasFailure()\">\r\n          <div class=\"col-sm-12\">\r\n            <div>\r\n                <span class=\"text-danger field-validation-error\">{{session.loginError}}</span>\r\n              </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"panel-footer\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <button type=\"button\" class=\"btn btn-success\" (click)=\"login()\"><i class=\"fa fa-2x fa-google\"></i> Sign in with Google</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/welcome/components/home-public/home-public.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-success i {\n  margin-right: 10px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/welcome/components/home-public/home-public.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_session_service__ = __webpack_require__("../../../../../src/app/services/session.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePublicComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePublicComponent = (function () {
    function HomePublicComponent(router, sessionManager) {
        this.router = router;
        this.sessionManager = sessionManager;
    }
    HomePublicComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sessionManager.logout();
        this.sessionManager.loggedInUser.subscribe(function (value) {
            _this.session = value;
            if (_this.session && _this.session != null && _this.session.userToken != null) {
                _this.router.navigate(['/home']);
            }
        });
    };
    HomePublicComponent.prototype.login = function () {
        this.sessionManager.login();
    };
    HomePublicComponent.prototype.hasFailure = function () {
        if (this.session && this.session != null && this.session.loginError != null) {
            return true;
        }
        return false;
    };
    return HomePublicComponent;
}());
HomePublicComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-home-public',
        template: __webpack_require__("../../../../../src/app/modules/welcome/components/home-public/home-public.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/welcome/components/home-public/home-public.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_session_service__["a" /* SessionService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_session_service__["a" /* SessionService */]) === "function" && _b || Object])
], HomePublicComponent);

var _a, _b;
//# sourceMappingURL=home-public.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/welcome/components/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row text-center\">\r\n  <div class=\"col-lg-4\">\r\n    <i class=\"fa fa-database fa-5x\"></i>\r\n    <h3>Manage Inventory</h3>\r\n    <p>\r\n      Keep track of all your kitchen inventory.\r\n    </p>\r\n    <p>\r\n      Break your kitchen down into smaller, more manageable <strong>Collections</strong> such as <em>Fridge</em>, <em>Freezer</em>, <em>Pantry</em> etc.\r\n    </p>\r\n    <p>Add items to each collection along with the current quantity. As you cook meals items will automatically deduct from your inventory based on your recipes and alert you when relevant stocks are low. As you do your shopping items will automatically be added to your inventory.</p>\r\n    <p>\r\n      <a class=\"btn btn-lg btn-primary\" routerLink=\"/categories\" role=\"button\">Go »</a>\r\n    </p>\r\n    <hr/>\r\n  </div>\r\n  <div class=\"col-lg-4\">\r\n    <i class=\"fa fa-cutlery fa-5x\"></i>\r\n    <h3>Save Recipes</h3>\r\n    <p>\r\n      Log all of your recipes\r\n    </p>\r\n    <p>\r\n      Save your recipes in a simple, easy to read format.\r\n    </p>\r\n    <p>\r\n      <a class=\"btn btn-lg btn-primary\" routerLink=\"/recipes\" role=\"button\">Go »</a>\r\n    </p>\r\n    <hr/>\r\n  </div>\r\n  <div class=\"col-lg-4\">\r\n    <i class=\"fa fa-calendar fa-5x\"></i>\r\n    <h3>Plan Meals</h3>\r\n    <p>\r\n      Plan out what you wish to cook day by day and see previous plans.\r\n    </p>\r\n    <p>\r\n      Once you are happy with your plan, simple generate your shopping list. We will inform you of what items are low in your inventory and what you have plenty off.\r\n    </p>\r\n    <p>\r\n      Once you have cooked a meal, simply mark it as <strong>cooked</strong> and we will automatically deduct the relevant items from your inventory.\r\n    </p>\r\n    <p>\r\n      <a class=\"btn btn-lg btn-primary\" routerLink=\"/planner\" role=\"button\">Go »</a>\r\n    </p>\r\n    <hr/>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row text-center\">\r\n  <div class=\"col-lg-4\">\r\n    <i class=\"fa fa-shopping-cart fa-5x\"></i>\r\n    <h3>Smart Shopping List</h3>\r\n    <p>\r\n      Create shopping lists based on recipes and/or plans\r\n    </p>\r\n    <p>\r\n      Add recipes to your shopping list or simply create a shopping list from your meal plan.\r\n    </p>\r\n    <p>Shopping lists will look at what you already have in your inventory and will only add items that you need.</p>\r\n    <p>Once you check off items from your shopping list they will automatically be added to your inventory.</p>\r\n    <p>\r\n      <a class=\"btn btn-lg btn-primary\" routerLink=\"/shopping\" role=\"button\">Go »</a>\r\n    </p>\r\n    <hr/>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/modules/welcome/components/home/home.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/modules/welcome/components/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomeComponent = (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
HomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Component */])({
        selector: 'app-home',
        template: __webpack_require__("../../../../../src/app/modules/welcome/components/home/home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/modules/welcome/components/home/home.component.less")]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ }),

/***/ "../../../../../src/app/modules/welcome/welcome.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_modules_welcome_welcome_routing__ = __webpack_require__("../../../../../src/app/modules/welcome/welcome.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_welcome_components_home_public_home_public_component__ = __webpack_require__("../../../../../src/app/modules/welcome/components/home-public/home-public.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_modules_welcome_components_home_home_component__ = __webpack_require__("../../../../../src/app/modules/welcome/components/home/home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var WelcomeModule = (function () {
    function WelcomeModule() {
    }
    return WelcomeModule;
}());
WelcomeModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_common__["a" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_3_app_modules_welcome_welcome_routing__["a" /* WelcomeRoutingModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4_app_modules_welcome_components_home_public_home_public_component__["a" /* HomePublicComponent */],
            __WEBPACK_IMPORTED_MODULE_5_app_modules_welcome_components_home_home_component__["a" /* HomeComponent */]
        ]
    })
], WelcomeModule);

//# sourceMappingURL=welcome.module.js.map

/***/ }),

/***/ "../../../../../src/app/modules/welcome/welcome.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_modules_welcome_components_home_home_component__ = __webpack_require__("../../../../../src/app/modules/welcome/components/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_modules_welcome_components_home_public_home_public_component__ = __webpack_require__("../../../../../src/app/modules/welcome/components/home-public/home-public.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomeRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3_app_modules_welcome_components_home_home_component__["a" /* HomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2_app_services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'welcome', component: __WEBPACK_IMPORTED_MODULE_4_app_modules_welcome_components_home_public_home_public_component__["a" /* HomePublicComponent */] },
];
var WelcomeRoutingModule = (function () {
    function WelcomeRoutingModule() {
    }
    return WelcomeRoutingModule;
}());
WelcomeRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], WelcomeRoutingModule);

//# sourceMappingURL=welcome.routing.js.map

/***/ }),

/***/ "../../../../../src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_classes_error__ = __webpack_require__("../../../../../src/app/classes/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_app_classes_LoginDto__ = __webpack_require__("../../../../../src/app/classes/LoginDto.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AccountService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var AccountService = (function () {
    function AccountService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    AccountService.prototype.login = function (account) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Content-Type', 'application/x-www-form-urlencoded');
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        var dto = new __WEBPACK_IMPORTED_MODULE_9_app_classes_LoginDto__["a" /* LoginDto */](account.googleToken);
        return this.http.post(__WEBPACK_IMPORTED_MODULE_7__environments_environment__["a" /* environment */].serviceUrl + 'account/login', dto, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountService.prototype.extractData = function (res) {
        return res.text();
    };
    AccountService.prototype.handleError = function (res) {
        var error = new __WEBPACK_IMPORTED_MODULE_8_app_classes_error__["a" /* ServiceError */]();
        error.status = res.status;
        error.message = res.json().error;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(error);
    };
    return AccountService;
}());
AccountService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], AccountService);

var _a, _b;
//# sourceMappingURL=account.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/auth-guard.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AuthGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AuthGuard = (function () {
    function AuthGuard(storageService, router) {
        this.storageService = storageService;
        this.router = router;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.storageService.hasAccessToken()) {
            return true;
        }
        this.router.navigate(['/welcome']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_app_classes_error__ = __webpack_require__("../../../../../src/app/classes/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CategoriesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var CategoriesService = (function () {
    function CategoriesService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    CategoriesService.prototype.getCategory = function (id) {
        if (!id || id.length <= 1) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null);
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
            var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return this.http.get(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].serviceUrl + 'category/' + id, options)
                .map(function (response) { return response.json(); })
                .catch(this.handleError);
        }
    };
    CategoriesService.prototype.getCategories = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].serviceUrl + 'category', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoriesService.prototype.saveCategory = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (value.id && value.id.length > 0) {
            return this.http.put(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].serviceUrl + 'category/' + value.id, value, options)
                .catch(this.handleError);
        }
        else {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].serviceUrl + 'category', value, options)
                .catch(this.handleError);
        }
    };
    CategoriesService.prototype.deleteCategory = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_6__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_9__environments_environment__["a" /* environment */].serviceUrl + 'category/' + id, options)
            .catch(this.handleError);
    };
    CategoriesService.prototype.handleError = function (res) {
        var error = new __WEBPACK_IMPORTED_MODULE_8_app_classes_error__["a" /* ServiceError */]();
        error.status = res.status;
        error.message = res.json().error;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(error);
    };
    return CategoriesService;
}());
CategoriesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_6__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], CategoriesService);

var _a, _b;
//# sourceMappingURL=categories.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/form-helper.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FormHelperService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FormHelperService = (function () {
    function FormHelperService(fb) {
        this.fb = fb;
    }
    FormHelperService.prototype.buildForm = function (model) {
        var _this = this;
        var form = this.fb.group(model.getFormConfig());
        form.valueChanges
            .subscribe(function (data) { return _this.onValueChanged(form, model.formErrors, model.validationMessages, data); });
        this.onValueChanged(form, model.formErrors, model.validationMessages); // (re)set validation messages now
        return form;
    };
    FormHelperService.prototype.onValueChanged = function (form, formErrors, validationMessages, data) {
        if (!form) {
            return;
        }
        // tslint:disable-next-line:forin
        for (var field in formErrors) {
            // clear previous error message (if any)
            formErrors[field] = '';
            var control = form.get(field);
            if (control && control.dirty && !control.valid) {
                var messages = validationMessages[field];
                // tslint:disable-next-line:forin
                for (var key in control.errors) {
                    formErrors[field] += messages[key] + ' ';
                }
            }
        }
    };
    return FormHelperService;
}());
FormHelperService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object])
], FormHelperService);

var _a;
//# sourceMappingURL=form-helper.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/items.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_classes_error__ = __webpack_require__("../../../../../src/app/classes/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ItemsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ItemsService = (function () {
    function ItemsService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    ItemsService.prototype.getItems = function (searchText) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'items/search/' + searchText, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ItemsService.prototype.handleError = function (res) {
        var error = new __WEBPACK_IMPORTED_MODULE_7_app_classes_error__["a" /* ServiceError */]();
        error.status = res.status;
        error.message = res.json().error;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(error);
    };
    return ItemsService;
}());
ItemsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], ItemsService);

var _a, _b;
//# sourceMappingURL=items.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/plan.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_classes_error__ = __webpack_require__("../../../../../src/app/classes/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlanService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var PlanService = (function () {
    function PlanService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    PlanService.prototype.getUpcomingPlans = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'plan/upcoming/14', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PlanService.prototype.getPreviousPlans = function (page) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (!page) {
            page = 0;
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'plan/closed/' + page, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    PlanService.prototype.savePlan = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (value.id && value.id.length > 0) {
            return this.http.put(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'plan/' + value.id, value, options)
                .catch(this.handleError);
        }
        else {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'plan', value, options)
                .catch(this.handleError);
        }
    };
    PlanService.prototype.handleError = function (res) {
        var error = new __WEBPACK_IMPORTED_MODULE_7_app_classes_error__["a" /* ServiceError */]();
        error.status = res.status;
        error.message = res.json().error;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(error);
    };
    return PlanService;
}());
PlanService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], PlanService);

var _a, _b;
//# sourceMappingURL=plan.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/recipes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_classes_error__ = __webpack_require__("../../../../../src/app/classes/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var RecipesService = (function () {
    function RecipesService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    RecipesService.prototype.viewRecipe = function (key) {
        if (!key) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null);
        }
        else {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'recipe/viewrecipe/' + key)
                .map(function (response) { return response.json(); })
                .catch(this.handleError);
        }
    };
    RecipesService.prototype.getRecipeView = function (key) {
        if (!key) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null);
        }
        else {
            return this.http.get(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'recipe/viewrecipe/' + key)
                .map(function (response) { return response.json(); })
                .catch(this.handleError);
        }
    };
    RecipesService.prototype.getRecipe = function (id) {
        if (!id || Number(id) === 0) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null);
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
            var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return this.http.get(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'recipe/' + id, options)
                .map(function (response) { return response.json(); })
                .catch(this.handleError);
        }
    };
    RecipesService.prototype.getRecipies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'recipe', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RecipesService.prototype.getRecipeType = function (id) {
        if (!id) {
            return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of(null);
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
            var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return this.http.get(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'recipetype/' + id, options)
                .map(function (response) { return response.json(); })
                .catch(this.handleError);
        }
    };
    RecipesService.prototype.getRecipieTypes = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'recipetype', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RecipesService.prototype.saveRecipe = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (value.id && value.id.length > 0) {
            return this.http.put(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'recipe/' + value.id, value, options)
                .map(this.extractData)
                .catch(this.handleError);
        }
        else {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'recipe', value, options)
                .map(this.extractData)
                .catch(this.handleError);
        }
    };
    RecipesService.prototype.saveRecipeType = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (value.id && value.id.length > 0) {
            return this.http.put(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'recipetype/' + value.id, value, options)
                .map(this.extractData)
                .catch(this.handleError);
        }
        else {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'recipetype', value, options)
                .map(this.extractData)
                .catch(this.handleError);
        }
    };
    RecipesService.prototype.deleteRecipe = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_8__environments_environment__["a" /* environment */].serviceUrl + 'recipe/' + id, options)
            .catch(this.handleError);
    };
    RecipesService.prototype.extractData = function (res) {
        return res.text();
    };
    RecipesService.prototype.handleError = function (res) {
        var error = new __WEBPACK_IMPORTED_MODULE_7_app_classes_error__["a" /* ServiceError */]();
        error.status = res.status;
        error.message = res.json().error;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(error);
    };
    return RecipesService;
}());
RecipesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], RecipesService);

var _a, _b;
//# sourceMappingURL=recipes.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/session.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_classes_userSession__ = __webpack_require__("../../../../../src/app/classes/userSession.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
///<reference path="../../../node_modules/@types/gapi/index.d.ts"/>
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SessionService = (function () {
    function SessionService(accountService, storage) {
        var _this = this;
        this.accountService = accountService;
        this.storage = storage;
        this.loggedInUser = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.storage.getUser());
        window.addEventListener('signInState', function (evt) {
            _this.handleLogin(evt);
        }, false);
    }
    SessionService.prototype.login = function () {
        gapi.auth2.getAuthInstance().signIn();
    };
    SessionService.prototype.logout = function () {
        this.storage.clear();
        this.loggedInUser.next(null);
    };
    SessionService.prototype.handleLogin = function (evt) {
        var _this = this;
        var auth2 = gapi.auth2.getAuthInstance();
        var isSignedIn = auth2.isSignedIn.get();
        if (isSignedIn) {
            var currentUser = auth2.currentUser.get();
            var profile = currentUser.getBasicProfile();
            var user_1 = new __WEBPACK_IMPORTED_MODULE_4_app_classes_userSession__["a" /* UserSession */](profile);
            user_1.googleToken = currentUser.getAuthResponse().id_token;
            this.loggedInUser.next(user_1);
            this.accountService
                .login(user_1)
                .subscribe(function (response) {
                user_1.userToken = response;
                user_1.loginError = null;
                _this.storage.setToken(response);
                _this.loggedInUser.next(user_1);
            }, function (error) { return _this.handleError(error); });
        }
        else {
            this.storage.clear();
            this.loggedInUser.next(null);
        }
    };
    SessionService.prototype.handleError = function (error) {
        var user = this.storage.getUser();
        user.loginError = error;
        this.loggedInUser.next(user);
    };
    return SessionService;
}());
SessionService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], SessionService);

var _a, _b;
//# sourceMappingURL=session.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/shopping-list.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_app_classes_error__ = __webpack_require__("../../../../../src/app/classes/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var ShoppingListService = (function () {
    function ShoppingListService(http, storageService) {
        this.http = http;
        this.storageService = storageService;
    }
    ShoppingListService.prototype.getOpenList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_8_environments_environment__["a" /* environment */].serviceUrl + 'list/open', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ShoppingListService.prototype.generateList = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_8_environments_environment__["a" /* environment */].serviceUrl + 'list/generate', options)
            .map(function (response) { return String(response.text()); })
            .catch(this.handleError);
    };
    ShoppingListService.prototype.getList = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_8_environments_environment__["a" /* environment */].serviceUrl + 'list/details/' + id, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ShoppingListService.prototype.getPreviousLists = function (page) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (!page) {
            page = 0;
        }
        return this.http.get(__WEBPACK_IMPORTED_MODULE_8_environments_environment__["a" /* environment */].serviceUrl + 'list/closed/' + page, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ShoppingListService.prototype.updateList = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.put(__WEBPACK_IMPORTED_MODULE_8_environments_environment__["a" /* environment */].serviceUrl + 'list/' + value.id, value, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ShoppingListService.prototype.deleteList = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_5__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_8_environments_environment__["a" /* environment */].serviceUrl + 'list/' + id, options)
            .catch(this.handleError);
    };
    ShoppingListService.prototype.handleError = function (res) {
        var error = new __WEBPACK_IMPORTED_MODULE_7_app_classes_error__["a" /* ServiceError */]();
        error.status = res.status;
        error.message = res.json().error;
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(error);
    };
    return ShoppingListService;
}());
ShoppingListService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], ShoppingListService);

var _a, _b;
//# sourceMappingURL=shopping-list.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return StorageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var StorageService = (function () {
    function StorageService() {
        this.tokenKey = 'kh_token';
        this.sessionKey = 'kh_suser';
    }
    StorageService.prototype.hasAccessToken = function () {
        var token = this.getToken();
        if (token && token !== null) {
            return true;
        }
        return false;
    };
    StorageService.prototype.setToken = function (token) {
        if (token && token !== 'null') {
            window.localStorage.setItem(this.tokenKey, token);
        }
        else {
            token = null;
            window.localStorage.removeItem(this.tokenKey);
        }
    };
    StorageService.prototype.getToken = function () {
        var token = window.localStorage.getItem(this.tokenKey);
        if (token === 'null') {
            token = null;
            window.localStorage.removeItem(this.tokenKey);
        }
        return token;
    };
    StorageService.prototype.setUser = function (user) {
        if (user && user != null) {
            window.localStorage.setItem(this.sessionKey, JSON.stringify(user));
        }
        else {
            window.localStorage.removeItem(this.sessionKey);
        }
    };
    StorageService.prototype.getUser = function () {
        var userJson = window.localStorage.getItem(this.sessionKey);
        if (!userJson || userJson == null) {
            userJson = null;
            window.localStorage.removeItem(this.sessionKey);
            return null;
        }
        return JSON.parse(userJson);
    };
    StorageService.prototype.clear = function () {
        window.localStorage.clear();
    };
    return StorageService;
}());
StorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["w" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

//# sourceMappingURL=storage.service.js.map

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false,
    serviceUrl: 'http://localhost:57236/api/',
    recipeViewUrl: 'http://localhost:4200/#/recipeview/'
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ "../../../../moment/locale recursive ^\\.\\/.*$":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": "../../../../moment/locale/af.js",
	"./af.js": "../../../../moment/locale/af.js",
	"./ar": "../../../../moment/locale/ar.js",
	"./ar-dz": "../../../../moment/locale/ar-dz.js",
	"./ar-dz.js": "../../../../moment/locale/ar-dz.js",
	"./ar-kw": "../../../../moment/locale/ar-kw.js",
	"./ar-kw.js": "../../../../moment/locale/ar-kw.js",
	"./ar-ly": "../../../../moment/locale/ar-ly.js",
	"./ar-ly.js": "../../../../moment/locale/ar-ly.js",
	"./ar-ma": "../../../../moment/locale/ar-ma.js",
	"./ar-ma.js": "../../../../moment/locale/ar-ma.js",
	"./ar-sa": "../../../../moment/locale/ar-sa.js",
	"./ar-sa.js": "../../../../moment/locale/ar-sa.js",
	"./ar-tn": "../../../../moment/locale/ar-tn.js",
	"./ar-tn.js": "../../../../moment/locale/ar-tn.js",
	"./ar.js": "../../../../moment/locale/ar.js",
	"./az": "../../../../moment/locale/az.js",
	"./az.js": "../../../../moment/locale/az.js",
	"./be": "../../../../moment/locale/be.js",
	"./be.js": "../../../../moment/locale/be.js",
	"./bg": "../../../../moment/locale/bg.js",
	"./bg.js": "../../../../moment/locale/bg.js",
	"./bn": "../../../../moment/locale/bn.js",
	"./bn.js": "../../../../moment/locale/bn.js",
	"./bo": "../../../../moment/locale/bo.js",
	"./bo.js": "../../../../moment/locale/bo.js",
	"./br": "../../../../moment/locale/br.js",
	"./br.js": "../../../../moment/locale/br.js",
	"./bs": "../../../../moment/locale/bs.js",
	"./bs.js": "../../../../moment/locale/bs.js",
	"./ca": "../../../../moment/locale/ca.js",
	"./ca.js": "../../../../moment/locale/ca.js",
	"./cs": "../../../../moment/locale/cs.js",
	"./cs.js": "../../../../moment/locale/cs.js",
	"./cv": "../../../../moment/locale/cv.js",
	"./cv.js": "../../../../moment/locale/cv.js",
	"./cy": "../../../../moment/locale/cy.js",
	"./cy.js": "../../../../moment/locale/cy.js",
	"./da": "../../../../moment/locale/da.js",
	"./da.js": "../../../../moment/locale/da.js",
	"./de": "../../../../moment/locale/de.js",
	"./de-at": "../../../../moment/locale/de-at.js",
	"./de-at.js": "../../../../moment/locale/de-at.js",
	"./de-ch": "../../../../moment/locale/de-ch.js",
	"./de-ch.js": "../../../../moment/locale/de-ch.js",
	"./de.js": "../../../../moment/locale/de.js",
	"./dv": "../../../../moment/locale/dv.js",
	"./dv.js": "../../../../moment/locale/dv.js",
	"./el": "../../../../moment/locale/el.js",
	"./el.js": "../../../../moment/locale/el.js",
	"./en-au": "../../../../moment/locale/en-au.js",
	"./en-au.js": "../../../../moment/locale/en-au.js",
	"./en-ca": "../../../../moment/locale/en-ca.js",
	"./en-ca.js": "../../../../moment/locale/en-ca.js",
	"./en-gb": "../../../../moment/locale/en-gb.js",
	"./en-gb.js": "../../../../moment/locale/en-gb.js",
	"./en-ie": "../../../../moment/locale/en-ie.js",
	"./en-ie.js": "../../../../moment/locale/en-ie.js",
	"./en-nz": "../../../../moment/locale/en-nz.js",
	"./en-nz.js": "../../../../moment/locale/en-nz.js",
	"./eo": "../../../../moment/locale/eo.js",
	"./eo.js": "../../../../moment/locale/eo.js",
	"./es": "../../../../moment/locale/es.js",
	"./es-do": "../../../../moment/locale/es-do.js",
	"./es-do.js": "../../../../moment/locale/es-do.js",
	"./es.js": "../../../../moment/locale/es.js",
	"./et": "../../../../moment/locale/et.js",
	"./et.js": "../../../../moment/locale/et.js",
	"./eu": "../../../../moment/locale/eu.js",
	"./eu.js": "../../../../moment/locale/eu.js",
	"./fa": "../../../../moment/locale/fa.js",
	"./fa.js": "../../../../moment/locale/fa.js",
	"./fi": "../../../../moment/locale/fi.js",
	"./fi.js": "../../../../moment/locale/fi.js",
	"./fo": "../../../../moment/locale/fo.js",
	"./fo.js": "../../../../moment/locale/fo.js",
	"./fr": "../../../../moment/locale/fr.js",
	"./fr-ca": "../../../../moment/locale/fr-ca.js",
	"./fr-ca.js": "../../../../moment/locale/fr-ca.js",
	"./fr-ch": "../../../../moment/locale/fr-ch.js",
	"./fr-ch.js": "../../../../moment/locale/fr-ch.js",
	"./fr.js": "../../../../moment/locale/fr.js",
	"./fy": "../../../../moment/locale/fy.js",
	"./fy.js": "../../../../moment/locale/fy.js",
	"./gd": "../../../../moment/locale/gd.js",
	"./gd.js": "../../../../moment/locale/gd.js",
	"./gl": "../../../../moment/locale/gl.js",
	"./gl.js": "../../../../moment/locale/gl.js",
	"./gom-latn": "../../../../moment/locale/gom-latn.js",
	"./gom-latn.js": "../../../../moment/locale/gom-latn.js",
	"./he": "../../../../moment/locale/he.js",
	"./he.js": "../../../../moment/locale/he.js",
	"./hi": "../../../../moment/locale/hi.js",
	"./hi.js": "../../../../moment/locale/hi.js",
	"./hr": "../../../../moment/locale/hr.js",
	"./hr.js": "../../../../moment/locale/hr.js",
	"./hu": "../../../../moment/locale/hu.js",
	"./hu.js": "../../../../moment/locale/hu.js",
	"./hy-am": "../../../../moment/locale/hy-am.js",
	"./hy-am.js": "../../../../moment/locale/hy-am.js",
	"./id": "../../../../moment/locale/id.js",
	"./id.js": "../../../../moment/locale/id.js",
	"./is": "../../../../moment/locale/is.js",
	"./is.js": "../../../../moment/locale/is.js",
	"./it": "../../../../moment/locale/it.js",
	"./it.js": "../../../../moment/locale/it.js",
	"./ja": "../../../../moment/locale/ja.js",
	"./ja.js": "../../../../moment/locale/ja.js",
	"./jv": "../../../../moment/locale/jv.js",
	"./jv.js": "../../../../moment/locale/jv.js",
	"./ka": "../../../../moment/locale/ka.js",
	"./ka.js": "../../../../moment/locale/ka.js",
	"./kk": "../../../../moment/locale/kk.js",
	"./kk.js": "../../../../moment/locale/kk.js",
	"./km": "../../../../moment/locale/km.js",
	"./km.js": "../../../../moment/locale/km.js",
	"./kn": "../../../../moment/locale/kn.js",
	"./kn.js": "../../../../moment/locale/kn.js",
	"./ko": "../../../../moment/locale/ko.js",
	"./ko.js": "../../../../moment/locale/ko.js",
	"./ky": "../../../../moment/locale/ky.js",
	"./ky.js": "../../../../moment/locale/ky.js",
	"./lb": "../../../../moment/locale/lb.js",
	"./lb.js": "../../../../moment/locale/lb.js",
	"./lo": "../../../../moment/locale/lo.js",
	"./lo.js": "../../../../moment/locale/lo.js",
	"./lt": "../../../../moment/locale/lt.js",
	"./lt.js": "../../../../moment/locale/lt.js",
	"./lv": "../../../../moment/locale/lv.js",
	"./lv.js": "../../../../moment/locale/lv.js",
	"./me": "../../../../moment/locale/me.js",
	"./me.js": "../../../../moment/locale/me.js",
	"./mi": "../../../../moment/locale/mi.js",
	"./mi.js": "../../../../moment/locale/mi.js",
	"./mk": "../../../../moment/locale/mk.js",
	"./mk.js": "../../../../moment/locale/mk.js",
	"./ml": "../../../../moment/locale/ml.js",
	"./ml.js": "../../../../moment/locale/ml.js",
	"./mr": "../../../../moment/locale/mr.js",
	"./mr.js": "../../../../moment/locale/mr.js",
	"./ms": "../../../../moment/locale/ms.js",
	"./ms-my": "../../../../moment/locale/ms-my.js",
	"./ms-my.js": "../../../../moment/locale/ms-my.js",
	"./ms.js": "../../../../moment/locale/ms.js",
	"./my": "../../../../moment/locale/my.js",
	"./my.js": "../../../../moment/locale/my.js",
	"./nb": "../../../../moment/locale/nb.js",
	"./nb.js": "../../../../moment/locale/nb.js",
	"./ne": "../../../../moment/locale/ne.js",
	"./ne.js": "../../../../moment/locale/ne.js",
	"./nl": "../../../../moment/locale/nl.js",
	"./nl-be": "../../../../moment/locale/nl-be.js",
	"./nl-be.js": "../../../../moment/locale/nl-be.js",
	"./nl.js": "../../../../moment/locale/nl.js",
	"./nn": "../../../../moment/locale/nn.js",
	"./nn.js": "../../../../moment/locale/nn.js",
	"./pa-in": "../../../../moment/locale/pa-in.js",
	"./pa-in.js": "../../../../moment/locale/pa-in.js",
	"./pl": "../../../../moment/locale/pl.js",
	"./pl.js": "../../../../moment/locale/pl.js",
	"./pt": "../../../../moment/locale/pt.js",
	"./pt-br": "../../../../moment/locale/pt-br.js",
	"./pt-br.js": "../../../../moment/locale/pt-br.js",
	"./pt.js": "../../../../moment/locale/pt.js",
	"./ro": "../../../../moment/locale/ro.js",
	"./ro.js": "../../../../moment/locale/ro.js",
	"./ru": "../../../../moment/locale/ru.js",
	"./ru.js": "../../../../moment/locale/ru.js",
	"./sd": "../../../../moment/locale/sd.js",
	"./sd.js": "../../../../moment/locale/sd.js",
	"./se": "../../../../moment/locale/se.js",
	"./se.js": "../../../../moment/locale/se.js",
	"./si": "../../../../moment/locale/si.js",
	"./si.js": "../../../../moment/locale/si.js",
	"./sk": "../../../../moment/locale/sk.js",
	"./sk.js": "../../../../moment/locale/sk.js",
	"./sl": "../../../../moment/locale/sl.js",
	"./sl.js": "../../../../moment/locale/sl.js",
	"./sq": "../../../../moment/locale/sq.js",
	"./sq.js": "../../../../moment/locale/sq.js",
	"./sr": "../../../../moment/locale/sr.js",
	"./sr-cyrl": "../../../../moment/locale/sr-cyrl.js",
	"./sr-cyrl.js": "../../../../moment/locale/sr-cyrl.js",
	"./sr.js": "../../../../moment/locale/sr.js",
	"./ss": "../../../../moment/locale/ss.js",
	"./ss.js": "../../../../moment/locale/ss.js",
	"./sv": "../../../../moment/locale/sv.js",
	"./sv.js": "../../../../moment/locale/sv.js",
	"./sw": "../../../../moment/locale/sw.js",
	"./sw.js": "../../../../moment/locale/sw.js",
	"./ta": "../../../../moment/locale/ta.js",
	"./ta.js": "../../../../moment/locale/ta.js",
	"./te": "../../../../moment/locale/te.js",
	"./te.js": "../../../../moment/locale/te.js",
	"./tet": "../../../../moment/locale/tet.js",
	"./tet.js": "../../../../moment/locale/tet.js",
	"./th": "../../../../moment/locale/th.js",
	"./th.js": "../../../../moment/locale/th.js",
	"./tl-ph": "../../../../moment/locale/tl-ph.js",
	"./tl-ph.js": "../../../../moment/locale/tl-ph.js",
	"./tlh": "../../../../moment/locale/tlh.js",
	"./tlh.js": "../../../../moment/locale/tlh.js",
	"./tr": "../../../../moment/locale/tr.js",
	"./tr.js": "../../../../moment/locale/tr.js",
	"./tzl": "../../../../moment/locale/tzl.js",
	"./tzl.js": "../../../../moment/locale/tzl.js",
	"./tzm": "../../../../moment/locale/tzm.js",
	"./tzm-latn": "../../../../moment/locale/tzm-latn.js",
	"./tzm-latn.js": "../../../../moment/locale/tzm-latn.js",
	"./tzm.js": "../../../../moment/locale/tzm.js",
	"./uk": "../../../../moment/locale/uk.js",
	"./uk.js": "../../../../moment/locale/uk.js",
	"./ur": "../../../../moment/locale/ur.js",
	"./ur.js": "../../../../moment/locale/ur.js",
	"./uz": "../../../../moment/locale/uz.js",
	"./uz-latn": "../../../../moment/locale/uz-latn.js",
	"./uz-latn.js": "../../../../moment/locale/uz-latn.js",
	"./uz.js": "../../../../moment/locale/uz.js",
	"./vi": "../../../../moment/locale/vi.js",
	"./vi.js": "../../../../moment/locale/vi.js",
	"./x-pseudo": "../../../../moment/locale/x-pseudo.js",
	"./x-pseudo.js": "../../../../moment/locale/x-pseudo.js",
	"./yo": "../../../../moment/locale/yo.js",
	"./yo.js": "../../../../moment/locale/yo.js",
	"./zh-cn": "../../../../moment/locale/zh-cn.js",
	"./zh-cn.js": "../../../../moment/locale/zh-cn.js",
	"./zh-hk": "../../../../moment/locale/zh-hk.js",
	"./zh-hk.js": "../../../../moment/locale/zh-hk.js",
	"./zh-tw": "../../../../moment/locale/zh-tw.js",
	"./zh-tw.js": "../../../../moment/locale/zh-tw.js"
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "../../../../moment/locale recursive ^\\.\\/.*$";

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map