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

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing__ = __webpack_require__("../../../../../src/app/app.routing.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_app_shell_app_shell_component__ = __webpack_require__("../../../../../src/app/components/app-shell/app-shell.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_categories_list_categories_list_component__ = __webpack_require__("../../../../../src/app/components/categories-list/categories-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_category_detail_category_detail_component__ = __webpack_require__("../../../../../src/app/components/category-detail/category-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_recipe_list_recipe_list_component__ = __webpack_require__("../../../../../src/app/components/recipe-list/recipe-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__components_recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/components/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__components_planner_home_planner_home_component__ = __webpack_require__("../../../../../src/app/components/planner-home/planner-home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_items_service__ = __webpack_require__("../../../../../src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__services_recipes_service__ = __webpack_require__("../../../../../src/app/services/recipes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__services_form_helper_service__ = __webpack_require__("../../../../../src/app/services/form-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pipes_recipe_type_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/recipe-type-filter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__pipes_has_recipe_type_filter_pipe__ = __webpack_require__("../../../../../src/app/pipes/has-recipe-type-filter.pipe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Components








// Services






// Pipes


var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        providers: [__WEBPACK_IMPORTED_MODULE_5__services_auth_guard__["a" /* AuthGuard */], __WEBPACK_IMPORTED_MODULE_14__services_storage_service__["a" /* StorageService */], __WEBPACK_IMPORTED_MODULE_16__services_categories_service__["a" /* CategoriesService */], __WEBPACK_IMPORTED_MODULE_15__services_account_service__["a" /* AccountService */], __WEBPACK_IMPORTED_MODULE_17__services_items_service__["a" /* ItemsService */], __WEBPACK_IMPORTED_MODULE_18__services_recipes_service__["a" /* RecipesService */], __WEBPACK_IMPORTED_MODULE_19__services_form_helper_service__["a" /* FormHelperService */]],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__components_app_shell_app_shell_component__["a" /* AppShellComponent */],
            __WEBPACK_IMPORTED_MODULE_7__components_categories_list_categories_list_component__["a" /* CategoriesListComponent */],
            __WEBPACK_IMPORTED_MODULE_8__components_category_detail_category_detail_component__["a" /* CategoryDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_9__components_recipe_list_recipe_list_component__["a" /* RecipeListComponent */],
            __WEBPACK_IMPORTED_MODULE_10__components_login_login_component__["a" /* LoginComponent */],
            __WEBPACK_IMPORTED_MODULE_11__components_register_register_component__["a" /* RegisterComponent */],
            __WEBPACK_IMPORTED_MODULE_12__components_recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */],
            __WEBPACK_IMPORTED_MODULE_13__components_planner_home_planner_home_component__["a" /* PlannerHomeComponent */],
            __WEBPACK_IMPORTED_MODULE_20__pipes_recipe_type_filter_pipe__["a" /* RecipeTypeFilterPipe */],
            __WEBPACK_IMPORTED_MODULE_21__pipes_has_recipe_type_filter_pipe__["a" /* RecipeWithTypePipe */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_6__components_app_shell_app_shell_component__["a" /* AppShellComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/app.routing.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_auth_guard__ = __webpack_require__("../../../../../src/app/services/auth-guard.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_categories_list_categories_list_component__ = __webpack_require__("../../../../../src/app/components/categories-list/categories-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_recipe_list_recipe_list_component__ = __webpack_require__("../../../../../src/app/components/recipe-list/recipe-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_category_detail_category_detail_component__ = __webpack_require__("../../../../../src/app/components/category-detail/category-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__ = __webpack_require__("../../../../../src/app/components/login/login.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__ = __webpack_require__("../../../../../src/app/components/register/register.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__components_recipe_detail_recipe_detail_component__ = __webpack_require__("../../../../../src/app/components/recipe-detail/recipe-detail.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__components_planner_home_planner_home_component__ = __webpack_require__("../../../../../src/app/components/planner-home/planner-home.component.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var routes = [
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'categories', component: __WEBPACK_IMPORTED_MODULE_3__components_categories_list_categories_list_component__["a" /* CategoriesListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'categorydetail/:id', component: __WEBPACK_IMPORTED_MODULE_5__components_category_detail_category_detail_component__["a" /* CategoryDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'recipes', component: __WEBPACK_IMPORTED_MODULE_4__components_recipe_list_recipe_list_component__["a" /* RecipeListComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'recipedetail/:id', component: __WEBPACK_IMPORTED_MODULE_8__components_recipe_detail_recipe_detail_component__["a" /* RecipeDetailComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'planner', component: __WEBPACK_IMPORTED_MODULE_9__components_planner_home_planner_home_component__["a" /* PlannerHomeComponent */], canActivate: [__WEBPACK_IMPORTED_MODULE_2__services_auth_guard__["a" /* AuthGuard */]] },
    { path: 'login', component: __WEBPACK_IMPORTED_MODULE_6__components_login_login_component__["a" /* LoginComponent */] },
    { path: 'register', component: __WEBPACK_IMPORTED_MODULE_7__components_register_register_component__["a" /* RegisterComponent */] },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["b" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */].forRoot(routes, { useHash: true })],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ "../../../../../src/app/components/app-shell/app-shell.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default navbar-fixed-top\" *ngIf=\"token != null\">\r\n  <div class=\"container-fluid\">\r\n    <!-- Brand and toggle get grouped for better mobile display -->\r\n    <div class=\"navbar-header\">\r\n      <button type=\"button\" class=\"navbar-toggle collapsed\" (click)=\"toggleCollapse()\" aria-expanded=\"false\">\r\n        <span class=\"sr-only\">Toggle navigation</span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n        <span class=\"icon-bar\"></span>\r\n      </button>\r\n      <a routerLink=\"/\" class=\"navbar-brand\">Kitchen Cupboard</a>\r\n    </div>\r\n\r\n    <!-- Collect the nav links, forms, and other content for toggling -->\r\n    <div class=\"collapse navbar-collapse\" [class.collapse]=\"isCollapsed\">\r\n      <ul class=\"nav navbar-nav\">\r\n        <li><a routerLink=\"/categories\">\r\n          <strong><i class=\"fa fa-database\"></i> Inventory</strong></a>\r\n        </li>\r\n        <li><a routerLink=\"/recipes\">\r\n          <strong><i class=\"fa fa-cutlery\"></i> Recipies</strong></a>\r\n        </li>\r\n        <li><a routerLink=\"/planner\">\r\n          <strong><i class=\"fa fa-calendar\"></i> Planner</strong></a>\r\n        </li>\r\n        <!-- <li><a routerLink=\"/recipes\">\r\n          <strong><i class=\"fa fa-shopping-cart\"></i> Cart <span class=\"badge\">3</span></strong></a>\r\n        </li> -->\r\n      </ul>\r\n      <ul class=\"nav navbar-nav navbar-right\">\r\n        <li>\r\n          <a (click)=\"logout()\"><strong><i class=\"fa fa-sign-out\"></i> Logout</strong></a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<nav class=\"navbar navbar-default navbar-fixed-top\" *ngIf=\"token == null\">\r\n  <div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <h4>Kitchen Cupboard</h4>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</nav>\r\n\r\n<div class=\"container-fluid\">\r\n  <router-outlet></router-outlet>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/app-shell/app-shell.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".navbar-default .navbar-brand {\n  color: #666666;\n}\n.navbar-default .navbar-brand:hover {\n  color: #666666;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/app-shell/app-shell.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
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
    function AppShellComponent(storage, router) {
        this.storage = storage;
        this.router = router;
    }
    AppShellComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.storage.loggedInUserToken.subscribe(function (value) { return _this.token = value; });
        this.router.events.subscribe(function (evt) { return _this.isCollapsed = true; });
        this.isCollapsed = true;
    };
    AppShellComponent.prototype.toggleCollapse = function () {
        this.isCollapsed = !this.isCollapsed;
    };
    AppShellComponent.prototype.logout = function () {
        this.storage.clear();
        this.router.navigate(['/login']);
    };
    return AppShellComponent;
}());
AppShellComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-shell',
        template: __webpack_require__("../../../../../src/app/components/app-shell/app-shell.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/app-shell/app-shell.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2_app_services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_app_services_storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AppShellComponent);

var _a, _b;
//# sourceMappingURL=app-shell.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/baseComponent.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseComponent; });
var BaseComponent = (function () {
    function BaseComponent(router) {
        this.router = router;
    }
    BaseComponent.prototype.handleError = function (error) {
        if (error.status === 401) {
            this.router.navigate(['/login']);
        }
        this.failure = error.message;
    };
    return BaseComponent;
}());

//# sourceMappingURL=baseComponent.js.map

/***/ }),

/***/ "../../../../../src/app/components/categories-list/categories-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" *ngIf=\"!categories\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <i *ngIf=\"!failure\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n        <span *ngIf=\"failure\" class=\"text-danger\">{{failure}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\" *ngIf=\"categories && categories.length <= 0\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <span class=\"text-muted\">You have not created any inventory sections.</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"categories && categories.length > 0\">\r\n  <div class=\"col-sm-4\" *ngFor=\"let category of categories\">\r\n    <div (click)=\"onSelect(category)\" class=\"panel panel-default pointer\">\r\n      <div class=\"panel-body\">\r\n        <div class=\"row\">\r\n          <div class=\"col-sm-12 text-center\">\r\n            <h3>{{category.name}}</h3>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <a routerLink=\"/categorydetail/0\" class=\"btn btn-success btn-lg\"><i class=\"fa fa-plus\"></i> Add Section</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/categories-list/categories-list.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/categories-list/categories-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_baseComponent__ = __webpack_require__("../../../../../src/app/components/baseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
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
    function CategoriesListComponent(categoriesService, router) {
        var _this = _super.call(this, router) || this;
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
}(__WEBPACK_IMPORTED_MODULE_2_app_components_baseComponent__["a" /* BaseComponent */]));
CategoriesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-categories-list',
        template: __webpack_require__("../../../../../src/app/components/categories-list/categories-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/categories-list/categories-list.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_categories_service__["a" /* CategoriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], CategoriesListComponent);

var _a, _b;
//# sourceMappingURL=categories-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/category-detail/category-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" *ngIf=\"!category\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <i *ngIf=\"!failure\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n        <span *ngIf=\"failure\" class=\"text-danger\">{{failure}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<form [formGroup]=\"categoryForm\" (ngSubmit)=\"saveCategory()\" *ngIf=\"category\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-sm-offset-3\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"category.formErrors.name\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"category.name\" type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" required placeholder=\"Name. (e.g. Fridge, Pantry, etc)\"\r\n                    autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"category.formErrors.name\">\r\n                  <span class=\"text-danger field-validation-error\">{{ category.formErrors.name }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <ul class=\"list-group\" *ngIf=\"category.items && category.items !== null && category.items.length > 0\">\r\n            <li *ngFor=\"let item of category.items\" class=\"list-group-item item-name\" data-toggle=\"modal\" data-target=\"#itemFormModal\"\r\n              (click)=\"setItem(item)\">\r\n              <div class=\"row\">\r\n                <div class=\"col-xs-10\" [class.text-warning]=\"item.quantity === 1\" [class.text-danger]=\"item.quantity < 1\">\r\n                  {{item.name}}\r\n                </div>\r\n                <div class=\"col-xs-2 text-right\">\r\n                  <span [class.text-primary]=\"item.quantity > 1\" [class.text-warning]=\"item.quantity === 1\" [class.text-danger]=\"item.quantity < 1\">\r\n                    <strong><span *ngIf=\"item.quantity >= 1\">x</span>{{item.quantity}}</strong>\r\n                  </span>\r\n                </div>\r\n              </div>\r\n            </li>\r\n          </ul>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 text-center\">\r\n              <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#itemFormModal\" (click)=\"setItem()\"><i class=\"fa fa-plus\"></i> Add Item</button>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"row\" *ngIf=\"failure\">\r\n            <div class=\"col-sm-12\">\r\n              <div>\r\n                <span class=\"text-danger field-validation-error\">{{failure}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 text-right\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-primary pull-left\" (click)=\"goBack()\">Back</button>\r\n              <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n                <button *ngIf=\"category && category.id && category.id > 0\" type=\"button\" class=\"btn btn-danger\" (click)=\"deleteCategory()\">Remove</button>\r\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!categoryForm.valid\">Save</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n\r\n<div class=\"modal\" id=\"itemFormModal\" tabindex=\"-1\" role=\"dialog\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 *ngIf=\"activeItem && activeItem.id > 0\" class=\"modal-title\">Edit Item</h4>\r\n        <h4 *ngIf=\"!activeItem || !activeItem.id || activeItem.id <= 0\" class=\"modal-title\">Add Item</h4>\r\n      </div>\r\n\r\n      <form [formGroup]=\"itemForm\" *ngIf=\"activeItem\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"activeItem.formErrors.itemName\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"activeItem.name\" type=\"text\" id=\"itemName\" class=\"form-control\" formControlName=\"itemName\" required placeholder=\"Item name\"\r\n                    autocomplete=\"off\" (keyup)=\"search()\">\r\n                </div>\r\n                <div *ngIf=\"activeItem.formErrors.itemName\">\r\n                  <span class=\"text-danger field-validation-error\">{{ activeItem.formErrors.itemName }}</span>\r\n                </div>\r\n                 <div class=\"typeahead\">\r\n                  <ul class=\"list-group\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let searchResult of itemsSearchResult | async\" (click)=\"selectSearchItem(searchResult)\">\r\n                      {{searchResult.name}}\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"activeItem.formErrors.quantity\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"activeItem.quantity\" type=\"number\" id=\"quantity\" class=\"form-control\" formControlName=\"quantity\" required\r\n                    placeholder=\"Quantity\" autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"activeItem.formErrors.quantity\">\r\n                  <span class=\"text-danger field-validation-error\">{{ activeItem.formErrors.quantity }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-default pull-left\" data-dismiss=\"modal\" id=\"mdDismis\">Cancel</button>\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n            <button *ngIf=\"activeItem && activeItem.id > 0\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteItem()\">Remove</button>\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!itemForm.valid\" data-dismiss=\"modal\" (click)=\"saveItem()\">Save</button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/category-detail/category-detail.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-name {\n  cursor: pointer;\n}\n.item-name:hover {\n  background: #f7f7f7;\n}\n.item-name .col-xs-10,\n.item-name .col-xs-2 {\n  padding-left: 5px;\n  padding-right: 1px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/category-detail/category-detail.component.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_components_baseComponent__ = __webpack_require__("../../../../../src/app/components/baseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_services_categories_service__ = __webpack_require__("../../../../../src/app/services/categories.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_services_items_service__ = __webpack_require__("../../../../../src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_services_form_helper_service__ = __webpack_require__("../../../../../src/app/services/form-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_category__ = __webpack_require__("../../../../../src/app/models/category.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_item__ = __webpack_require__("../../../../../src/app/models/item.ts");
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
    function CategoryDetailComponent(categoriesService, itemsService, route, location, formHelper, router) {
        var _this = _super.call(this, router) || this;
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
            .switchMap(function (params) { return _this.categoriesService.getCategory(+params.get('id')); })
            .subscribe(function (category) {
            _this.category = new __WEBPACK_IMPORTED_MODULE_14__models_category__["a" /* Category */](category);
            _this.categoryForm = _this.formHelper.buildForm(_this.category);
        });
        this.itemsSearchResult = this.searchTerms
            .debounceTime(150)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.itemsService.getItems(term) : __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of([]);
        });
    };
    CategoryDetailComponent.prototype.setItem = function (item) {
        this.activeItem = new __WEBPACK_IMPORTED_MODULE_15__models_item__["a" /* Item */](item);
        this.itemForm = this.formHelper.buildForm(this.activeItem);
    };
    CategoryDetailComponent.prototype.goBack = function () {
        this.location.back();
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
        this.category.upsertItem(this.activeItem);
    };
    CategoryDetailComponent.prototype.deleteItem = function () {
        this.category.removeItem(this.activeItem);
    };
    CategoryDetailComponent.prototype.selectSearchItem = function (searchResult) {
        this.activeItem.name = searchResult.name;
        this.searchTerms.next(null);
    };
    CategoryDetailComponent.prototype.search = function () {
        this.searchTerms.next(this.activeItem.name);
    };
    return CategoryDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_10_app_components_baseComponent__["a" /* BaseComponent */]));
CategoryDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_14" /* Component */])({
        selector: 'app-category-detail',
        template: __webpack_require__("../../../../../src/app/components/category-detail/category-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/category-detail/category-detail.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_11_app_services_categories_service__["a" /* CategoriesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_app_services_categories_service__["a" /* CategoriesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_12_app_services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_app_services_items_service__["a" /* ItemsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_common__["g" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_13_app_services_form_helper_service__["a" /* FormHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_app_services_form_helper_service__["a" /* FormHelperService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */]) === "function" && _f || Object])
], CategoryDetailComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=category-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-sm-offset-4\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"account.formErrors.name\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"account.userName\" type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" required placeholder=\"User name\" autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"account.formErrors.name\">\r\n                  <span class=\"text-danger field-validation-error\">{{ account.formErrors.name }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"account.formErrors.password\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"account.hashedPassword\" type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" required placeholder=\"Password\" autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"account.formErrors.password\">\r\n                  <span class=\"text-danger field-validation-error\">{{ account.formErrors.password }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <br>\r\n          <div class=\"row\" *ngIf=\"failure\">\r\n            <div class=\"col-sm-12\">\r\n              <div>\r\n                  <span class=\"text-danger field-validation-error\">{{failure}}</span>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 text-center\">\r\n              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!loginForm.valid\">Login</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<br>\r\n<div class=\"row\">\r\n  <div class=\"col-sm-12 text-center\">\r\n      <span>No account? </span> <a routerLink=\"/register\">register here</a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/login/login.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_account__ = __webpack_require__("../../../../../src/app/models/account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_form_helper_service__ = __webpack_require__("../../../../../src/app/services/form-helper.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = (function () {
    function LoginComponent(accountService, router, storage, formHelper) {
        this.accountService = accountService;
        this.router = router;
        this.storage = storage;
        this.formHelper = formHelper;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.storage.clear();
        this.account = new __WEBPACK_IMPORTED_MODULE_2__models_account__["a" /* Account */]();
        this.loginForm = this.formHelper.buildForm(this.account);
    };
    LoginComponent.prototype.onSubmit = function () {
        var _this = this;
        this.failure = null;
        this.accountService
            .login(this.account)
            .subscribe(function (response) { return _this.handleSuccess(response); }, function (error) { return _this.handleError(error); });
    };
    LoginComponent.prototype.handleSuccess = function (token) {
        this.storage.setToken(token);
        this.router.navigate(['/']);
    };
    LoginComponent.prototype.handleError = function (error) {
        this.failure = error.message;
    };
    return LoginComponent;
}());
LoginComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-login',
        template: __webpack_require__("../../../../../src/app/components/login/login.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/login/login.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_storage_service__["a" /* StorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_form_helper_service__["a" /* FormHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_form_helper_service__["a" /* FormHelperService */]) === "function" && _d || Object])
], LoginComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=login.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/planner-home/planner-home.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  planner-home\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/components/planner-home/planner-home.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/planner-home/planner-home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlannerHomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PlannerHomeComponent = (function () {
    function PlannerHomeComponent() {
    }
    PlannerHomeComponent.prototype.ngOnInit = function () {
    };
    return PlannerHomeComponent;
}());
PlannerHomeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-planner-home',
        template: __webpack_require__("../../../../../src/app/components/planner-home/planner-home.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/planner-home/planner-home.component.less")]
    }),
    __metadata("design:paramtypes", [])
], PlannerHomeComponent);

//# sourceMappingURL=planner-home.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/recipe-detail/recipe-detail.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" *ngIf=\"!recipe\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <i *ngIf=\"!failure\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n        <span *ngIf=\"failure\" class=\"text-danger\">{{failure}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<form [formGroup]=\"recipeForm\" (ngSubmit)=\"save()\" *ngIf=\"recipe\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-6 col-sm-offset-3\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-9\">\r\n              <div class=\"form-group\" [class.has-error]=\"recipe.formErrors.name\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"recipe.name\" type=\"text\" class=\"form-control\" formControlName=\"name\" required placeholder=\"Name\"\r\n                    autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"recipe.formErrors.name\">\r\n                  <span class=\"text-danger field-validation-error\">{{ recipe.formErrors.name }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-3 text-center pad-0\">\r\n              <button class=\"btn btn-xs btn-primary disabled\" disabled><i class=\"fa fa-plus\"></i> Planner</button>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-9\">\r\n              <div class=\"form-group\" [class.has-error]=\"recipe.formErrors.type\">\r\n                <div class=\"input-group\">\r\n                  <select [(ngModel)]=\"recipe.type\" class=\"form-control\" formControlName=\"type\">\r\n                      <option *ngFor=\"let type of types\" [value]=\"type.key\">{{type.value}}</option>\r\n                  </select>\r\n                </div>\r\n                <div *ngIf=\"recipe.formErrors.type\">\r\n                  <span class=\"text-danger field-validation-error\">{{ recipe.formErrors.type }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br/>\r\n\r\n          <div class=\"panel panel-primary\">\r\n            <div class=\"panel-heading pointer\" data-toggle=\"collapse\" data-target=\"#collapseIngredients\" aria-expanded=\"true\" aria-controls=\"collapseIngredients\">Ingredients</div>\r\n            <div class=\"panel-body list-ingredients collapse in\" id=\"collapseIngredients\">\r\n              <ul class=\"list-group\" *ngIf=\"recipe.hasItems()\">\r\n                <li *ngFor=\"let item of recipe.recipeItems\" class=\"list-group-item item-name\" data-toggle=\"modal\" data-target=\"#itemFormModal\" (click)=\"selectItem(item)\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col-xs-9\">\r\n                      {{item.item.name}}\r\n                      <span class=\"text-muted\" *ngIf=\"item.instructions\">\r\n                        <em>({{item.instructions}})</em>\r\n                      </span>\r\n                    </div>\r\n                    <div class=\"col-xs-3 text-right\">\r\n                      <span class=\"text-primary\"><strong>{{item.ammount}} {{item.unitType}}</strong></span>\r\n                    </div>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n              <div class=\"row\">\r\n                <div class=\"col-sm-12 text-center\">\r\n                  <button type=\"button\" class=\"btn btn-success\"data-toggle=\"modal\" data-target=\"#itemFormModal\" (click)=\"selectItem()\"><i class=\"fa fa-plus\"></i> Ingredient</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br/>\r\n\r\n          <div class=\"well\" *ngFor=\"let step of recipe.recipeSteps\">\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-2\">\r\n                <h4 class=\"text-primary\">{{step.stepNumber}}</h4>\r\n              </div>\r\n              <div class=\"col-xs-10\">{{step.description}}</div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col-xs-12 text-right\">\r\n                <button type=\"button\" class=\"btn btn-xs btn-primary\" data-toggle=\"modal\" data-target=\"#stepFormModal\" (click)=\"selectStep(step)\"><i class=\"fa fa-edit\"></i> Edit</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 text-center\">\r\n              <button type=\"button\" class=\"btn btn-success\" data-toggle=\"modal\" data-target=\"#stepFormModal\" (click)=\"selectStep()\"><i class=\"fa fa-plus\"></i> Cooking Step</button>\r\n            </div>\r\n          </div>\r\n\r\n          <br/>\r\n          <div class=\"row\" *ngIf=\"failure\">\r\n            <div class=\"col-sm-12\">\r\n              <div>\r\n                <span class=\"text-danger field-validation-error\">{{failure}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 text-right\">\r\n              <button type=\"button\" class=\"btn btn-sm btn-primary pull-left\" (click)=\"goBack()\">Back</button>\r\n              <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n                <button *ngIf=\"recipe && recipe.id && recipe.id > 0\" type=\"button\" class=\"btn btn-danger\" (click)=\"delete()\">Remove</button>\r\n                <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!recipeForm.valid\">Save</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n\r\n<!-- Modal for recipe step -->\r\n<div class=\"modal\" id=\"stepFormModal\" tabindex=\"-1\" role=\"dialog\" *ngIf=\"selectedStep\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 *ngIf=\"selectedStep && selectedStep.id > 0\" class=\"modal-title\">Edit Step</h4>\r\n        <h4 *ngIf=\"!selectedStep || !selectedStep.id || selectedStep.id <= 0\" class=\"modal-title\">Add Step</h4>\r\n      </div>\r\n\r\n      <form [formGroup]=\"stepForm\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"selectedStep.formErrors.description\">\r\n                <div class=\"input-group\">\r\n                  <textarea [(ngModel)]=\"selectedStep.description\" class=\"form-control\" rows=\"5\" formControlName=\"description\"\r\n                    required placeholder=\"Enter cooking steps...\"></textarea>\r\n                </div>\r\n                <div *ngIf=\"selectedStep.formErrors.description\">\r\n                  <span class=\"text-danger field-validation-error\">{{ selectedStep.formErrors.description }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-default pull-left\" data-dismiss=\"modal\">Close</button>\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n            <button *ngIf=\"selectedStep && selectedStep.id > 0\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteStep()\">Remove</button>\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!stepForm.valid\" data-dismiss=\"modal\" (click)=\"saveStep()\">Save</button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Modal for recipe item -->\r\n<div class=\"modal\" id=\"itemFormModal\" tabindex=\"-1\" role=\"dialog\" *ngIf=\"selectedItem\">\r\n  <div class=\"modal-dialog\">\r\n    <div class=\"modal-content\">\r\n      <div class=\"modal-header\">\r\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">&times;</button>\r\n        <h4 *ngIf=\"selectedItem && selectedItem.id > 0\" class=\"modal-title\">Edit Ingredient</h4>\r\n        <h4 *ngIf=\"!selectedItem || !selectedItem.id || selectedItem.id <= 0\" class=\"modal-title\">Add Ingredient</h4>\r\n      </div>\r\n\r\n      <form [formGroup]=\"itemForm\">\r\n        <div class=\"modal-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"selectedItem.formErrors.name\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"selectedItem.item.name\" type=\"text\" class=\"form-control\" formControlName=\"name\" required placeholder=\"Name\"\r\n                    autocomplete=\"off\" (keyup)=\"search()\">\r\n                </div>\r\n                <div *ngIf=\"selectedItem.formErrors.name\">\r\n                  <span class=\"text-danger field-validation-error\">{{ selectedItem.formErrors.name }}</span>\r\n                </div>\r\n                <div class=\"typeahead\">\r\n                  <ul class=\"list-group\">\r\n                    <li class=\"list-group-item\" *ngFor=\"let searchResult of itemsSearchResult | async\" (click)=\"selectSearchItem(searchResult)\">\r\n                      {{searchResult.name}}\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\" [class.has-error]=\"selectedItem.formErrors.ammount\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"selectedItem.ammount\" type=\"number\" class=\"form-control\" formControlName=\"ammount\" required placeholder=\"Ammount\"\r\n                    autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"selectedItem.formErrors.ammount\">\r\n                  <span class=\"text-danger field-validation-error\">{{ selectedItem.formErrors.ammount }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"col-xs-6\">\r\n              <div class=\"form-group\">\r\n                 <div class=\"input-group\">\r\n                   <input [(ngModel)]=\"selectedItem.unitType\" type=\"text\" placeholder=\"Unit. (e.g. tsp)\" class=\"form-control\" formControlName=\"unitType\" />\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br/><br/>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"selectedItem.instructions\" type=\"text\" class=\"form-control\" formControlName=\"instructions\" placeholder=\"Notes. (e.g. diced)\" autocomplete=\"off\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"modal-footer\">\r\n          <button type=\"button\" class=\"btn btn-sm btn-default pull-left\" data-dismiss=\"modal\">Cancel</button>\r\n          <div class=\"btn-group btn-group-sm\" role=\"group\">\r\n            <button *ngIf=\"selectedItem && selectedItem.id > 0\" type=\"button\" class=\"btn btn-danger\" data-dismiss=\"modal\" (click)=\"deleteItem()\">Remove</button>\r\n            <button type=\"button\" class=\"btn btn-success\" [disabled]=\"!itemForm.valid\" data-dismiss=\"modal\" (click)=\"saveItem()\">Save</button>\r\n          </div>\r\n\r\n        </div>\r\n      </form>\r\n\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/recipe-detail/recipe-detail.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".item-name {\n  cursor: pointer;\n}\n.item-name:hover {\n  background: #f7f7f7;\n}\n.item-name .col-xs-9,\n.item-name .col-xs-3 {\n  padding-left: 5px;\n  padding-right: 5px;\n}\n.list-ingredients {\n  padding: 0 0 20px 0;\n}\n.list-ingredients ul {\n  margin-left: -1px;\n  margin-right: -1px;\n  margin-bottom: 0;\n}\n.list-ingredients button {\n  margin-top: 20px;\n}\n.well {\n  background: #f7f7f7;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/recipe-detail/recipe-detail.component.ts":
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_app_components_baseComponent__ = __webpack_require__("../../../../../src/app/components/baseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_app_services_recipes_service__ = __webpack_require__("../../../../../src/app/services/recipes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_app_services_items_service__ = __webpack_require__("../../../../../src/app/services/items.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_app_services_form_helper_service__ = __webpack_require__("../../../../../src/app/services/form-helper.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__models_recipe__ = __webpack_require__("../../../../../src/app/models/recipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__models_recipestep__ = __webpack_require__("../../../../../src/app/models/recipestep.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__models_recipeitem__ = __webpack_require__("../../../../../src/app/models/recipeitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__models_selectItem__ = __webpack_require__("../../../../../src/app/models/selectItem.ts");
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
    function RecipeDetailComponent(recipesService, itemsService, route, location, formHelper, router) {
        var _this = _super.call(this, router) || this;
        _this.recipesService = recipesService;
        _this.itemsService = itemsService;
        _this.route = route;
        _this.location = location;
        _this.formHelper = formHelper;
        _this.searchTerms = new __WEBPACK_IMPORTED_MODULE_6_rxjs_Subject__["Subject"]();
        return _this;
    }
    RecipeDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.paramMap
            .switchMap(function (params) { return _this.recipesService.getRecipe(+params.get('id')); })
            .subscribe(function (source) {
            _this.recipe = new __WEBPACK_IMPORTED_MODULE_14__models_recipe__["a" /* Recipe */](source);
            _this.recipeForm = _this.formHelper.buildForm(_this.recipe);
        });
        this.types = new Array();
        for (var item in __WEBPACK_IMPORTED_MODULE_14__models_recipe__["b" /* RecipeType */]) {
            if (!isNaN(Number(item))) {
                this.types.push(new __WEBPACK_IMPORTED_MODULE_17__models_selectItem__["a" /* SelectItem */](Number(item), __WEBPACK_IMPORTED_MODULE_14__models_recipe__["b" /* RecipeType */][item].toString()));
            }
        }
        this.itemsSearchResult = this.searchTerms
            .debounceTime(150)
            .distinctUntilChanged()
            .switchMap(function (term) { return term ? _this.itemsService.getItems(term) : __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of([]); })
            .catch(function (error) {
            console.log(error);
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of([]);
        });
    };
    RecipeDetailComponent.prototype.goBack = function () {
        this.location.back();
    };
    RecipeDetailComponent.prototype.save = function () {
        var _this = this;
        this.recipesService.saveRecipe(this.recipe)
            .subscribe(function (response) {
            _this.recipeForm.reset();
            _this.router.navigate(['/recipes']);
        }, function (error) { return _this.handleError(error); });
    };
    RecipeDetailComponent.prototype.selectStep = function (source) {
        this.selectedStep = new __WEBPACK_IMPORTED_MODULE_15__models_recipestep__["a" /* RecipeStep */](source);
        this.stepForm = this.formHelper.buildForm(this.selectedStep);
    };
    RecipeDetailComponent.prototype.saveStep = function () {
        this.recipe.upsertStep(this.selectedStep);
    };
    RecipeDetailComponent.prototype.deleteStep = function () {
        this.recipe.removeStep(this.selectedStep);
    };
    RecipeDetailComponent.prototype.selectItem = function (source) {
        this.selectedItem = new __WEBPACK_IMPORTED_MODULE_16__models_recipeitem__["a" /* RecipeItem */](source);
        this.itemForm = this.formHelper.buildForm(this.selectedItem);
        console.log(this.selectedItem);
    };
    RecipeDetailComponent.prototype.saveItem = function () {
        this.recipe.upsertItem(this.selectedItem);
    };
    RecipeDetailComponent.prototype.deleteItem = function () {
        this.recipe.removeItem(this.selectedItem);
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
        this.searchTerms.next(null);
    };
    RecipeDetailComponent.prototype.search = function () {
        this.searchTerms.next(this.selectedItem.item.name);
    };
    return RecipeDetailComponent;
}(__WEBPACK_IMPORTED_MODULE_10_app_components_baseComponent__["a" /* BaseComponent */]));
RecipeDetailComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__angular_core__["_14" /* Component */])({
        selector: 'app-recipe-detail',
        template: __webpack_require__("../../../../../src/app/components/recipe-detail/recipe-detail.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/recipe-detail/recipe-detail.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_11_app_services_recipes_service__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11_app_services_recipes_service__["a" /* RecipesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_12_app_services_items_service__["a" /* ItemsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12_app_services_items_service__["a" /* ItemsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* ActivatedRoute */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["b" /* ActivatedRoute */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_9__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__angular_common__["g" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_13_app_services_form_helper_service__["a" /* FormHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13_app_services_form_helper_service__["a" /* FormHelperService */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__angular_router__["c" /* Router */]) === "function" && _f || Object])
], RecipeDetailComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=recipe-detail.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/recipe-list/recipe-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"panel panel-default\" *ngIf=\"!allRecipes\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <i *ngIf=\"!failure\" class=\"fa fa-spinner fa-spin fa-3x fa-fw\"></i>\r\n        <span *ngIf=\"failure\" class=\"text-danger\">{{failure}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\" *ngIf=\"allRecipes && allRecipes.length <= 0\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <span class=\"text-muted\">You have not created any recipes.</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<div id=\"recipeContainer\" *ngIf=\"allRecipes && allRecipes.length > 0\">\r\n\r\n  <div class=\"panel panel-primary\" *ngFor=\"let type of types  | hasRecipeWithType:allRecipes; let index = index\">\r\n    <div class=\"panel-heading pointer\" data-toggle=\"collapse\" [attr.data-target]=\"type.asId('#collapse')\" data-parent=\"#recipeContainer\">{{type.value | titlecase}}</div>\r\n    <ul class=\"list-group collapse\" [class.in]=\"index == 0\" id=\"collapse{{type.value}}\">\r\n      <li class=\"list-group-item pointer\" *ngFor=\"let recipe of allRecipes | recipeTypeFilter:type.key\" (click)=\"onSelect(recipe)\">\r\n        {{recipe.name}}\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"panel panel-default\">\r\n  <div class=\"panel-body\">\r\n    <div class=\"row\">\r\n      <div class=\"col-sm-12 text-center\">\r\n        <a routerLink=\"/recipedetail/0\" class=\"btn btn-success btn-sm\"><i class=\"fa fa-plus\"></i> Add Recipe</a>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/recipe-list/recipe-list.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#recipeContainer .list-group-item {\n  padding: 10px 15px;\n}\n#recipeContainer .list-group-item:hover {\n  background: #f7f7f7;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/recipe-list/recipe-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_components_baseComponent__ = __webpack_require__("../../../../../src/app/components/baseComponent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_services_recipes_service__ = __webpack_require__("../../../../../src/app/services/recipes.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_recipe__ = __webpack_require__("../../../../../src/app/models/recipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__models_selectItem__ = __webpack_require__("../../../../../src/app/models/selectItem.ts");
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
    function RecipeListComponent(service, router) {
        var _this = _super.call(this, router) || this;
        _this.service = service;
        return _this;
    }
    RecipeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.getRecipies().subscribe(function (values) { return _this.setRecipies(values); }, function (error) { return _this.handleError(error); });
        this.types = new Array();
        for (var item in __WEBPACK_IMPORTED_MODULE_4__models_recipe__["b" /* RecipeType */]) {
            if (!isNaN(Number(item))) {
                this.types.push(new __WEBPACK_IMPORTED_MODULE_5__models_selectItem__["a" /* SelectItem */](Number(item), __WEBPACK_IMPORTED_MODULE_4__models_recipe__["b" /* RecipeType */][item].toString()));
            }
        }
    };
    RecipeListComponent.prototype.onSelect = function (recipe) {
        this.selectedRecipe = recipe;
        this.router.navigate(['/recipedetail', this.selectedRecipe.id]);
    };
    RecipeListComponent.prototype.setRecipies = function (values) {
        this.allRecipes = values;
    };
    return RecipeListComponent;
}(__WEBPACK_IMPORTED_MODULE_2_app_components_baseComponent__["a" /* BaseComponent */]));
RecipeListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-recipe-list',
        template: __webpack_require__("../../../../../src/app/components/recipe-list/recipe-list.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/recipe-list/recipe-list.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3_app_services_recipes_service__["a" /* RecipesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_app_services_recipes_service__["a" /* RecipesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], RecipeListComponent);

var _a, _b;
//# sourceMappingURL=recipe-list.component.js.map

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.html":
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n  <div class=\"row\">\r\n    <div class=\"col-sm-4 col-sm-offset-4\">\r\n      <div class=\"panel panel-default\">\r\n        <div class=\"panel-body\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 text-info\">\r\n              To register, please fill in the form below.\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"account.formErrors.name\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"account.userName\" type=\"text\" id=\"name\" class=\"form-control\" formControlName=\"name\" required placeholder=\"Enter a user name\" autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"account.formErrors.name\">\r\n                  <span class=\"text-danger field-validation-error\">{{ account.formErrors.name }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <br>\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12\">\r\n              <div class=\"form-group\" [class.has-error]=\"account.formErrors.password\">\r\n                <div class=\"input-group\">\r\n                  <input [(ngModel)]=\"account.hashedPassword\" type=\"password\" id=\"password\" class=\"form-control\" formControlName=\"password\" required placeholder=\"Enter a password\" autocomplete=\"off\">\r\n                </div>\r\n                <div *ngIf=\"account.formErrors.password\">\r\n                  <span class=\"text-danger field-validation-error\">{{ account.formErrors.password }}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <br>\r\n          <div class=\"row\" *ngIf=\"failure\">\r\n            <div class=\"col-sm-12\">\r\n              <div>\r\n                  <span class=\"text-danger field-validation-error\">{{failure}}</span>\r\n                </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"panel-footer\">\r\n          <div class=\"row\">\r\n            <div class=\"col-sm-12 text-center\">\r\n              <button type=\"button\" class=\"btn btn-danger\" (click)=\"goBack()\">Back</button>\r\n              <button type=\"submit\" class=\"btn btn-success\" [disabled]=\"!registerForm.valid\">Register</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/components/register/register.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/@angular/router.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("../../../common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_account__ = __webpack_require__("../../../../../src/app/models/account.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_app_services_account_service__ = __webpack_require__("../../../../../src/app/services/account.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_app_services_storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_app_services_form_helper_service__ = __webpack_require__("../../../../../src/app/services/form-helper.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var RegisterComponent = (function () {
    function RegisterComponent(accountService, router, storage, location, formHelper) {
        this.accountService = accountService;
        this.router = router;
        this.storage = storage;
        this.location = location;
        this.formHelper = formHelper;
    }
    RegisterComponent.prototype.ngOnInit = function () {
        this.account = new __WEBPACK_IMPORTED_MODULE_3__models_account__["a" /* Account */]();
        this.registerForm = this.formHelper.buildForm(this.account);
    };
    RegisterComponent.prototype.onSubmit = function () {
        var _this = this;
        this.failure = null;
        this.accountService
            .register(this.account)
            .subscribe(function (response) { return _this.handleSuccess(response); }, function (error) { return _this.handleError(error); });
    };
    RegisterComponent.prototype.goBack = function () {
        this.location.back();
    };
    RegisterComponent.prototype.handleSuccess = function (token) {
        this.storage.setToken(token);
        this.router.navigate(['/']);
    };
    RegisterComponent.prototype.handleError = function (error) {
        this.failure = error.message;
    };
    return RegisterComponent;
}());
RegisterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* Component */])({
        selector: 'app-register',
        template: __webpack_require__("../../../../../src/app/components/register/register.component.html"),
        styles: [__webpack_require__("../../../../../src/app/components/register/register.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_app_services_account_service__["a" /* AccountService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_app_services_account_service__["a" /* AccountService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5_app_services_storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5_app_services_storage_service__["a" /* StorageService */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_common__["g" /* Location */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_6_app_services_form_helper_service__["a" /* FormHelperService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6_app_services_form_helper_service__["a" /* FormHelperService */]) === "function" && _e || Object])
], RegisterComponent);

var _a, _b, _c, _d, _e;
//# sourceMappingURL=register.component.js.map

/***/ }),

/***/ "../../../../../src/app/models/account.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Account; });

var Account = (function () {
    function Account(source) {
        this.formErrors = {
            'name': '',
            'password': ''
        };
        this.validationMessages = {
            'name': {
                'required': 'Username is required.',
            },
            'password': {
                'required': 'Password is required.'
            }
        };
        if (source) {
            this.userName = source.userName;
            this.hashedPassword = source.hashedPassword;
            this.token = source.token;
        }
    }
    Account.prototype.getFormConfig = function () {
        return {
            'name': [this.userName, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]],
            'password': [this.hashedPassword, __WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]
        };
    };
    return Account;
}());

//# sourceMappingURL=account.js.map

/***/ }),

/***/ "../../../../../src/app/models/category.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_models_item__ = __webpack_require__("../../../../../src/app/models/item.ts");
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
    Category.prototype.upsertItem = function (source) {
        if (source && (!source.id || source.id === 0)) {
            var item = new __WEBPACK_IMPORTED_MODULE_1_app_models_item__["a" /* Item */]();
            item.id = -Math.abs(this.items.length);
            item.name = source.name;
            item.quantity = source.quantity;
            this.items.push(item);
        }
        else {
            for (var _i = 0, _a = this.items; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.id === source.id) {
                    item.name = source.name;
                    item.quantity = source.quantity;
                    break;
                }
            }
        }
    };
    return Category;
}());

//# sourceMappingURL=category.js.map

/***/ }),

/***/ "../../../../../src/app/models/error.ts":
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

/***/ "../../../../../src/app/models/item.ts":
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
        }
    }
    Item.prototype.getFormConfig = function () {
        return {
            'itemName': [this.name, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]],
            'quantity': [this.quantity, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]]
        };
    };
    return Item;
}());

//# sourceMappingURL=item.js.map

/***/ }),

/***/ "../../../../../src/app/models/recipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore__ = __webpack_require__("../../../../underscore/underscore.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_underscore___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_underscore__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_app_models_recipeitem__ = __webpack_require__("../../../../../src/app/models/recipeitem.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_app_models_recipestep__ = __webpack_require__("../../../../../src/app/models/recipestep.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RecipeType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Recipe; });




var RecipeType;
(function (RecipeType) {
    RecipeType[RecipeType["Meal"] = 0] = "Meal";
    RecipeType[RecipeType["Baking"] = 1] = "Baking";
    RecipeType[RecipeType["Smoothies"] = 2] = "Smoothies";
})(RecipeType || (RecipeType = {}));
var Recipe = (function () {
    function Recipe(source) {
        this.formErrors = {
            'type': '',
            'name': ''
        };
        this.validationMessages = {
            'type': {
                'required': 'Type is required.',
            },
            'name': {
                'required': 'Name is required.',
            }
        };
        if (source) {
            this.id = source.id;
            this.name = source.name;
            this.type = source.type;
            this.recipeSteps = source.recipeSteps;
            this.recipeItems = source.recipeItems;
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
            'type': [this.type, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]],
            'name': [this.name, [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* Validators */].required]]
        };
    };
    Recipe.prototype.hasItems = function () {
        return this.recipeItems && this.recipeItems != null && this.recipeItems.length > 0;
    };
    Recipe.prototype.removeStep = function (source) {
        if (source) {
            var steps = new Array();
            for (var i = 0; i < this.recipeSteps.length; i++) {
                var step = this.recipeSteps[i];
                if (step.id === source.id) {
                    continue;
                }
                step.stepNumber = steps.length + 1;
                steps.push(step);
            }
            this.recipeSteps = steps;
        }
    };
    Recipe.prototype.upsertStep = function (source) {
        if (source && (!source.id || source.id === 0)) {
            var item = new __WEBPACK_IMPORTED_MODULE_3_app_models_recipestep__["a" /* RecipeStep */]();
            item.id = -Math.abs(this.recipeSteps.length);
            item.description = source.description;
            item.stepNumber = this.recipeSteps.length + 1;
            this.recipeSteps.push(item);
        }
        else {
            for (var _i = 0, _a = this.recipeSteps; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.id === source.id) {
                    item.description = source.description;
                    item.stepNumber = source.stepNumber;
                    break;
                }
            }
        }
    };
    Recipe.prototype.removeItem = function (source) {
        if (source) {
            this.recipeItems = this.recipeItems.filter(function (x) { return x.id !== source.id; });
        }
    };
    Recipe.prototype.upsertItem = function (source) {
        if (source && (!source.id || source.id === 0)) {
            var item = new __WEBPACK_IMPORTED_MODULE_2_app_models_recipeitem__["a" /* RecipeItem */]();
            item.id = -Math.abs(this.recipeItems.length);
            item.ammount = source.ammount;
            item.instructions = source.instructions;
            item.item = source.item;
            item.unitType = source.unitType;
            this.recipeItems.push(item);
        }
        else {
            for (var _i = 0, _a = this.recipeItems; _i < _a.length; _i++) {
                var item = _a[_i];
                if (item.id === source.id) {
                    item.ammount = source.ammount;
                    item.instructions = source.instructions;
                    item.item = source.item;
                    item.unitType = source.unitType;
                    break;
                }
            }
        }
    };
    return Recipe;
}());

//# sourceMappingURL=recipe.js.map

/***/ }),

/***/ "../../../../../src/app/models/recipeitem.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_app_models_item__ = __webpack_require__("../../../../../src/app/models/item.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RecipeItem; });


var RecipeItem = (function () {
    function RecipeItem(source) {
        this.formErrors = {
            'ammount': '',
            'name': ''
        };
        this.validationMessages = {
            'ammount': {
                'required': 'Ammount is required.',
            },
            'name': {
                'required': 'Name is required.',
            }
        };
        if (source) {
            this.id = source.id;
            this.ammount = source.ammount;
            this.item = source.item;
            this.instructions = source.instructions;
            this.unitType = source.unitType;
        }
        if (!this.item) {
            this.item = new __WEBPACK_IMPORTED_MODULE_1_app_models_item__["a" /* Item */]();
        }
    }
    RecipeItem.prototype.getFormConfig = function () {
        return {
            'ammount': [this.ammount, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]],
            'name': [this.item.name, [__WEBPACK_IMPORTED_MODULE_0__angular_forms__["c" /* Validators */].required]],
            'unitType': [this.unitType],
            'instructions': [this.instructions]
        };
    };
    return RecipeItem;
}());

//# sourceMappingURL=recipeitem.js.map

/***/ }),

/***/ "../../../../../src/app/models/recipestep.ts":
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
            this.id = source.id;
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

/***/ "../../../../../src/app/models/selectItem.ts":
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

/***/ "../../../../../src/app/pipes/has-recipe-type-filter.pipe.ts":
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
            if (allRecipes.filter(function (x) { return x.type === item.key; }).length > 0) {
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({ name: 'hasRecipeWithType' })
], RecipeWithTypePipe);

//# sourceMappingURL=has-recipe-type-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/pipes/recipe-type-filter.pipe.ts":
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
        return value.filter(function (x) { return x.type === type; });
    };
    return RecipeTypeFilterPipe;
}());
RecipeTypeFilterPipe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Pipe */])({ name: 'recipeTypeFilter' })
], RecipeTypeFilterPipe);

//# sourceMappingURL=recipe-type-filter.pipe.js.map

/***/ }),

/***/ "../../../../../src/app/services/account.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__models_error__ = __webpack_require__("../../../../../src/app/models/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
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
    AccountService.prototype.register = function (account) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serviceUrl + 'account/register', account, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountService.prototype.login = function (account) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].serviceUrl + 'account/login', account, options)
            .map(this.extractData)
            .catch(this.handleError);
    };
    AccountService.prototype.extractData = function (res) {
        return res.text();
    };
    AccountService.prototype.handleError = function (res) {
        var error = new __WEBPACK_IMPORTED_MODULE_4__models_error__["a" /* ServiceError */]();
        error.status = res.status;
        error.message = res.json().error;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error);
    };
    return AccountService;
}());
AccountService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
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
        this.router.navigate(['/login']);
        return false;
    };
    return AuthGuard;
}());
AuthGuard = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* Router */]) === "function" && _b || Object])
], AuthGuard);

var _a, _b;
//# sourceMappingURL=auth-guard.js.map

/***/ }),

/***/ "../../../../../src/app/services/categories.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_error__ = __webpack_require__("../../../../../src/app/models/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_operator_map__);
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
        if (id <= 0) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(null);
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serviceUrl + 'categories/' + id, options)
                .map(function (response) { return response.json(); })
                .catch(this.handleError);
        }
    };
    CategoriesService.prototype.getCategories = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serviceUrl + 'categories', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    CategoriesService.prototype.saveCategory = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (value.id && value.id > 0) {
            return this.http.put(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serviceUrl + 'categories/' + value.id, value, options)
                .catch(this.handleError);
        }
        else {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serviceUrl + 'categories', value, options)
                .catch(this.handleError);
        }
    };
    CategoriesService.prototype.deleteCategory = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serviceUrl + 'categories/' + id, options)
            .catch(this.handleError);
    };
    CategoriesService.prototype.handleError = function (res) {
        var error = new __WEBPACK_IMPORTED_MODULE_3__models_error__["a" /* ServiceError */]();
        error.status = res.status;
        error.message = res.json().error;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error);
    };
    return CategoriesService;
}());
CategoriesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_forms__["d" /* FormBuilder */]) === "function" && _a || Object])
], FormHelperService);

var _a;
//# sourceMappingURL=form-helper.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/items.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_error__ = __webpack_require__("../../../../../src/app/models/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
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
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serviceUrl + 'items/search?value=' + searchText, options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    ItemsService.prototype.handleError = function (res) {
        var error = new __WEBPACK_IMPORTED_MODULE_3__models_error__["a" /* ServiceError */]();
        error.status = res.status;
        error.message = res.json().error;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error);
    };
    return ItemsService;
}());
ItemsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], ItemsService);

var _a, _b;
//# sourceMappingURL=items.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/recipes.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__storage_service__ = __webpack_require__("../../../../../src/app/services/storage.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__models_error__ = __webpack_require__("../../../../../src/app/models/error.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__ = __webpack_require__("../../../../rxjs/add/operator/catch.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/add/operator/map.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_operator_map__);
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
    RecipesService.prototype.getRecipe = function (id) {
        if (id <= 0) {
            return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].of(null);
        }
        else {
            var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
            var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
            return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serviceUrl + 'recipe/' + id, options)
                .map(function (response) { return response.json(); })
                .catch(this.handleError);
        }
    };
    RecipesService.prototype.getRecipies = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Authorization': "Basic " + this.storageService.getToken() });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.get(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serviceUrl + 'recipe', options)
            .map(function (response) { return response.json(); })
            .catch(this.handleError);
    };
    RecipesService.prototype.saveRecipe = function (value) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        if (value.id && value.id > 0) {
            return this.http.put(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serviceUrl + 'recipe/' + value.id, value, options)
                .catch(this.handleError);
        }
        else {
            return this.http.post(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serviceUrl + 'recipe', value, options)
                .catch(this.handleError);
        }
    };
    RecipesService.prototype.deleteRecipe = function (id) {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Headers */]({ 'Content-Type': 'application/json' });
        headers.append('Authorization', "Basic " + this.storageService.getToken());
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.delete(__WEBPACK_IMPORTED_MODULE_4__environments_environment__["a" /* environment */].serviceUrl + 'recipe/' + id, options)
            .catch(this.handleError);
    };
    RecipesService.prototype.handleError = function (res) {
        var error = new __WEBPACK_IMPORTED_MODULE_3__models_error__["a" /* ServiceError */]();
        error.status = res.status;
        error.message = res.json().error;
        return __WEBPACK_IMPORTED_MODULE_5_rxjs_Observable__["Observable"].throw(error);
    };
    return RecipesService;
}());
RecipesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["e" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__storage_service__["a" /* StorageService */]) === "function" && _b || Object])
], RecipesService);

var _a, _b;
//# sourceMappingURL=recipes.service.js.map

/***/ }),

/***/ "../../../../../src/app/services/storage.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
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
        this.loggedInUserToken = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
        this.loggedInUserToken = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](this.getToken());
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
        this.loggedInUserToken.next(token);
    };
    StorageService.prototype.getToken = function () {
        var token = window.localStorage.getItem(this.tokenKey);
        if (token === 'null') {
            token = null;
            window.localStorage.removeItem(this.tokenKey);
        }
        return token;
    };
    StorageService.prototype.clear = function () {
        window.localStorage.clear();
        this.loggedInUserToken.next(null);
    };
    return StorageService;
}());
StorageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], StorageService);

// var names = [];
// names[0] = prompt("New member name?");
// localStorage.setItem("names", JSON.stringify(names));
// //...
// var storedNames = JSON.parse(localStorage.getItem("names"));
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
    serviceUrl: 'http://localhost:57235/api/'
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

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map