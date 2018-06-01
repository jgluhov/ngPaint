(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n    <div class=\"container\">\n      <app-masthead></app-masthead>\n      <app-toolbar></app-toolbar>\n      <app-options-bar></app-options-bar>\n      <app-users></app-users>\n      <app-canvas></app-canvas>\n    </div>\n  "
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var _store_app_store_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @store/app-store.module */ "./src/app/store/app-store.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tools_tools_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tools/tools.module */ "./src/app/modules/tools/tools.module.ts");
/* harmony import */ var _directives_cursorable_cursorable_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/cursorable/cursorable.directive */ "./src/app/directives/cursorable/cursorable.directive.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @components */ "./src/app/components/index.ts");
/* harmony import */ var _directives_mouse_mouse_service_directive__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @directives/mouse/mouse-service.directive */ "./src/app/directives/mouse/mouse-service.directive.ts");
/* harmony import */ var _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @services/canvas/canvas.service */ "./src/app/services/canvas/canvas.service.ts");
/* harmony import */ var _components_polyline_polyline_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/polyline/polyline.component */ "./src/app/components/polyline/polyline.component.ts");
/* harmony import */ var _components_circle_circle_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/circle/circle.component */ "./src/app/components/circle/circle.component.ts");
/* harmony import */ var _components_rect_rect_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/rect/rect.component */ "./src/app/components/rect/rect.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _directives_cursorable_cursorable_directive__WEBPACK_IMPORTED_MODULE_7__["CursorableDirective"],
                _directives_mouse_mouse_service_directive__WEBPACK_IMPORTED_MODULE_9__["MouseServiceDirective"]
            ].concat(_components__WEBPACK_IMPORTED_MODULE_8__["commonComponents"], [
                _components_polyline_polyline_component__WEBPACK_IMPORTED_MODULE_11__["PolylineComponent"],
                _components_circle_circle_component__WEBPACK_IMPORTED_MODULE_12__["CircleComponent"],
                _components_rect_rect_component__WEBPACK_IMPORTED_MODULE_13__["RectComponent"]
            ]),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _store_app_store_module__WEBPACK_IMPORTED_MODULE_4__["AppStoreModule"],
                _tools_tools_module__WEBPACK_IMPORTED_MODULE_6__["ToolsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [_services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_10__["CanvasService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/canvas/canvas.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/canvas/canvas.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-panel [panelTitle]=\"title\" class=\"canvas__panel\">\n    <svg xmlns=\"http://www.w3.org/2000/svg\"\n      id=\"svg\"\n      viewBox=\"0 0 14000 14000\"\n      width=\"14000\"\n      height=\"14000\"\n      #svg\n      [appCursorable]=\"toolChange\"\n      appMouseService\n    >\n      <defs>\n          <pattern id=\"grid\"\n            patternUnits=\"userSpaceOnUse\"\n            width=\"10\"\n            height=\"10\">\n              <line x1=\"5\" y1=\"0\" x2=\"5\" y2=\"10\" />\n              <line x1=\"0\" y1=\"5\" x2=\"10\" y2=\"5\" />\n          </pattern>\n      </defs>\n      <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n\n      <g id=\"polylines\">\n        <ng-container *ngFor=\"let polyline of canvasService.polylines$ | async\">\n          <g [appPolyline]=\"polyline\" *ngIf=\"!polyline.editing\"></g>\n          <polyline *ngIf=\"polyline.editing\"\n            [attr.points]=\"polyline.toString()\"\n            [attr.fill]=\"polyline.fill\"\n            [attr.stroke]=\"polyline.stroke\"\n            [attr.stroke-width]=\"polyline.strokeWidth\"/>\n        </ng-container>\n      </g>\n\n      <g id=\"circles\">\n        <ng-container *ngFor=\"let circle of canvasService.circles$ | async\">\n          <g [appCircle]=\"circle\" *ngIf=\"!circle.editing\"></g>\n          <circle\n            [attr.cx]=\"circle.cx\"\n            [attr.cy]=\"circle.cy\"\n            [attr.r]=\"circle.r\"\n            [attr.fill]=\"circle.fill\"\n            [attr.stroke]=\"circle.stroke\"\n            [attr.stroke-width]=\"circle.strokeWidth\"\n          />\n        </ng-container>\n      </g>\n\n      <g id=\"rects\">\n        <ng-container *ngFor=\"let rect of canvasService.rects$ | async\">\n          <g [appCircle]=\"rect\" *ngIf=\"!rect.editing\"></g>\n          <rect\n            [attr.x]=\"rect.x\"\n            [attr.y]=\"rect.y\"\n            [attr.width]=\"rect.width\"\n            [attr.height]=\"rect.height\"\n            [attr.fill]=\"rect.fill\"\n            [attr.stroke]=\"rect.stroke\"\n            [attr.rx]=\"rect.rx\"\n            [attr.ry]=\"rect.ry\"\n            [attr.stroke-width]=\"rect.strokeWidth\"\n          />\n        </ng-container>\n      </g>\n\n      <ng-container #vcr></ng-container>\n    </svg>\n</app-panel>\n"

/***/ }),

/***/ "./src/app/components/canvas/canvas.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/canvas/canvas.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#grid > line {\n  stroke: #e0e3e5;\n  stroke-width: 1px; }\n\n.cursor__pencil {\n  cursor: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUzLjI1NSA1My4yNTUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUzLjI1NSA1My4yNTU7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPHBhdGggc3R5bGU9ImZpbGw6I0Q3NUE0QTsiIGQ9Ik0zOS41OTgsMi4zNDNjMy4xMjQtMy4xMjQsOC4xOS0zLjEyNCwxMS4zMTQsMHMzLjEyNCw4LjE5LDAsMTEuMzE0TDM5LjU5OCwyLjM0M3oiLz4KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0VEOEExOTsiIHBvaW50cz0iNDIuNDI2LDE3Ljg5OSAxNi41MTIsNDMuODE0IDE1Ljk4Miw0OC41ODcgNDQuNTQ4LDIwLjAyIDQ0LjU0OCwyMC4wMiAiLz4KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0VEOEExOTsiIHBvaW50cz0iMTAuMzI1LDQyLjkzIDE1LjA5OCw0Mi40IDQxLjAxMiwxNi40ODUgMzYuNzcsMTIuMjQzIDEwLjg1NSwzOC4xNTcgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNFRDhBMTk7IiBwb2ludHM9IjM1LjM1NiwxMC44MjkgMzMuMjM0LDguNzA3IDMzLjIzNCw4LjcwNyA0LjY2OCwzNy4yNzMgOS40NDEsMzYuNzQzICIvPgo8cG9seWdvbiBzdHlsZT0iZmlsbDojQzdDQUM3OyIgcG9pbnRzPSI0OC43OSwxNS43NzggNDguNzksMTUuNzc4IDUwLjkxMiwxMy42NTcgMzkuNTk4LDIuMzQzIDM3LjQ3Niw0LjQ2NSAzNy40NzcsNC40NjUgIi8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNDN0NBQzc7IiBwb2ludHM9IjM2LjA2Miw1Ljg3OSAzNi4wNjIsNS44NzkgMzQuNjQ4LDcuMjkzIDM0LjY0OCw3LjI5MyA0NS45NjIsMTguNjA2IDQ1Ljk2MiwxOC42MDYgICA0Ny4zNzYsMTcuMTkyIDQ3LjM3NiwxNy4xOTIgIi8+CjxwYXRoIHN0eWxlPSJmaWxsOiNGQkNFOUQ7IiBkPSJNMTQuNDI0LDQ0LjQ4OGwtNS4xMjIsMC41NjljLTAuMDM2LDAuMDA0LTAuMDczLDAuMDA2LTAuMTA5LDAuMDA2YzAsMC0wLjAwMSwwLTAuMDAxLDBIOS4xOTJIOS4xOTIgIGMtMC4wMDEsMC0wLjAwMSwwLTAuMDAxLDBjLTAuMDM2LDAtMC4wNzMtMC4wMDItMC4xMDktMC4wMDZjLTAuMDM5LTAuMDA0LTAuMDcxLTAuMDI2LTAuMTA4LTAuMDM1ICBjLTAuMDcyLTAuMDE3LTAuMTQxLTAuMDM1LTAuMjA3LTAuMDY3Yy0wLjA1LTAuMDI0LTAuMDkzLTAuMDUzLTAuMTM4LTAuMDg0Yy0wLjA1Ny0wLjA0LTAuMTA5LTAuMDgzLTAuMTU3LTAuMTM0ICBjLTAuMDM4LTAuMDQtMC4wNjktMC4wODEtMC4xLTAuMTI3Yy0wLjAzOC0wLjA1Ny0wLjA2OS0wLjExNi0wLjA5NS0wLjE4MWMtMC4wMjItMC4wNTQtMC4wMzgtMC4xMDctMC4wNS0wLjE2NSAgYy0wLjAwNy0wLjAzMi0wLjAyNC0wLjA1OS0wLjAyOC0wLjA5MmMtMC4wMDQtMC4wMzgsMC4wMS0wLjA3MywwLjAxLTAuMTFjMC0wLjAzOC0wLjAxNC0wLjA3Mi0wLjAxLTAuMTFsMC41NjktNS4xMjJsLTUuMTIyLDAuNTY5ICBjLTAuMDM3LDAuMDA0LTAuMDc1LDAuMDA2LTAuMTExLDAuMDA2Yy0wLjA3OSwwLTAuMTUyLTAuMDI0LTAuMjI3LTAuMDQyTDAuNDQyLDUxLjM5OWwyLjEwNi0yLjEwNmMwLjM5MS0wLjM5MSwxLjAyMy0wLjM5MSwxLjQxNCwwICBzMC4zOTEsMS4wMjMsMCwxLjQxNGwtMi4xMDYsMi4xMDZsMTIuMDMtMi44NjRjLTAuMDI2LTAuMTA5LTAuMDQzLTAuMjIyLTAuMDMtMC4zMzlMMTQuNDI0LDQ0LjQ4OHoiLz4KPHBhdGggc3R5bGU9ImZpbGw6IzM4NDU0RjsiIGQ9Ik0zLjk2Miw0OS4yOTNjLTAuMzkxLTAuMzkxLTEuMDIzLTAuMzkxLTEuNDE0LDBsLTIuMTA2LDIuMTA2TDAsNTMuMjU1bDEuODU2LTAuNDQybDIuMTA2LTIuMTA2ICBDNC4zNTIsNTAuMzE2LDQuMzUyLDQ5LjY4NCwzLjk2Miw0OS4yOTN6Ii8+Cjxwb2x5Z29uIHN0eWxlPSJmaWxsOiNGMkVDQkY7IiBwb2ludHM9IjQ4Ljc5LDE1Ljc3OCAzNy40NzcsNC40NjUgMzcuNDc2LDQuNDY1IDM2LjA2Miw1Ljg3OSAzNi4wNjIsNS44NzkgNDcuMzc2LDE3LjE5MiAgIDQ3LjM3NiwxNy4xOTIgNDguNzksMTUuNzc4ICIvPgo8cGF0aCBzdHlsZT0iZmlsbDojRUJCQTE2OyIgZD0iTTQxLjAxMiwxNi40ODVMMTUuMDk4LDQyLjRsLTQuNzczLDAuNTNsMC41My00Ljc3M0wzNi43NywxMi4yNDNsLTEuNDE0LTEuNDE0TDkuNDQxLDM2Ljc0MyAgbC00Ljc3MywwLjUzbC0xLjEzMywxLjEzM2wtMC4yMjgsMC45NTdjMC4wNzUsMC4wMTgsMC4xNDcsMC4wNDIsMC4yMjcsMC4wNDJjMC4wMzYsMCwwLjA3NC0wLjAwMiwwLjExMS0wLjAwNmw1LjEyMi0wLjU2OSAgbC0wLjU2OSw1LjEyMmMtMC4wMDQsMC4wMzgsMC4wMSwwLjA3MywwLjAxLDAuMTFjMCwwLjAzOC0wLjAxNCwwLjA3Mi0wLjAxLDAuMTFjMC4wMDQsMC4wMzMsMC4wMjEsMC4wNiwwLjAyOCwwLjA5MiAgYzAuMDEyLDAuMDU3LDAuMDI5LDAuMTEyLDAuMDUsMC4xNjVjMC4wMjYsMC4wNjQsMC4wNTcsMC4xMjQsMC4wOTUsMC4xODFjMC4wMywwLjA0NSwwLjA2MywwLjA4OCwwLjEsMC4xMjcgIGMwLjA0NywwLjA1LDAuMSwwLjA5NCwwLjE1NywwLjEzNGMwLjA0NCwwLjAzMSwwLjA4OSwwLjA2MSwwLjEzOCwwLjA4NGMwLjA2NSwwLjAzMSwwLjEzNSwwLjA1LDAuMjA3LDAuMDY3ICBjMC4wMzgsMC4wMDksMC4wNjksMC4wMywwLjEwOCwwLjAzNWMwLjAzNiwwLjAwNCwwLjA3MiwwLjAwNiwwLjEwOSwwLjAwNmgwLjAwMWgwaDAuMDAxaDAuMDAxYzAsMCwwLjAwMSwwLDAuMDAxLDBoMCAgYzAuMDM1LDAsMC4wNzItMC4wMDIsMC4xMDktMC4wMDZsNS4xMjItMC41NjlsLTAuNTY5LDUuMTIyYy0wLjAxMywwLjExOCwwLjAwNCwwLjIzLDAuMDMsMC4zMzlsMC45NjMtMC4yMjlsMS4xMzMtMS4xMzJsMC41My00Ljc3MyAgbDI1LjkxNC0yNS45MTVMNDEuMDEyLDE2LjQ4NXoiLz4KPHBvbHlnb24gc3R5bGU9ImZpbGw6I0YyRUNCRjsiIHBvaW50cz0iNDUuOTYyLDE4LjYwNiAzNC42NDgsNy4yOTMgMzQuNjQ4LDcuMjkzIDMzLjIzNCw4LjcwNyAzMy4yMzQsOC43MDcgMzUuMzU2LDEwLjgyOSAgIDM2Ljc3LDEyLjI0MyA0MS4wMTIsMTYuNDg1IDQyLjQyNiwxNy44OTkgNDQuNTQ4LDIwLjAyIDQ0LjU0OCwyMC4wMiA0NS45NjIsMTguNjA2ICIvPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K) 0 15, auto; }\n\n.cursor__brush {\n  cursor: url(data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iMTZweCIgaGVpZ2h0PSIxNnB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjU2LDBDMTE0LjgzMywwLDAsMTE0Ljg0NCwwLDI1NnMxMTQuODMzLDI1NiwyNTYsMjU2czI1Ni0xMTQuODQ0LDI1Ni0yNTZTMzk3LjE2NywwLDI1NiwweiBNMjU2LDQ5MC42NjcgICAgQzEyNi42MDQsNDkwLjY2NywyMS4zMzMsMzg1LjM5NiwyMS4zMzMsMjU2UzEyNi42MDQsMjEuMzMzLDI1NiwyMS4zMzNTNDkwLjY2NywxMjYuNjA0LDQ5MC42NjcsMjU2UzM4NS4zOTYsNDkwLjY2NywyNTYsNDkwLjY2N3ogICAgIiBmaWxsPSIjMDAwMDAwIi8+Cgk8L2c+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPGc+CjwvZz4KPC9zdmc+Cg==) 8 8, auto; }\n\n.cursor__rect {\n  cursor: crosshair; }\n"

/***/ }),

/***/ "./src/app/components/canvas/canvas.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/canvas/canvas.component.ts ***!
  \*******************************************************/
/*! exports provided: CanvasComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return CanvasComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/canvas/canvas.service */ "./src/app/services/canvas/canvas.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CanvasComponent = /** @class */ (function () {
    function CanvasComponent(store, componentFactoryResolver, canvasService) {
        var _this = this;
        this.store = store;
        this.componentFactoryResolver = componentFactoryResolver;
        this.canvasService = canvasService;
        this.title = 'Canvas';
        this.loadComponent = function (tool) {
            _this.vcr.clear();
            if (!tool) {
                return;
            }
            var componentFactory = _this.componentFactoryResolver
                .resolveComponentFactory(tool.component);
            var componentRef = _this.vcr.createComponent(componentFactory);
        };
    }
    CanvasComponent.prototype.ngOnInit = function () {
        this.toolChange = this.store
            .select('app')
            .select('selectedTool');
        this.toolChange
            .subscribe(this.loadComponent);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('vcr', { read: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"] }),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"])
    ], CanvasComponent.prototype, "vcr", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('svg'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], CanvasComponent.prototype, "svgRef", void 0);
    CanvasComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-canvas',
            template: __webpack_require__(/*! ./canvas.component.html */ "./src/app/components/canvas/canvas.component.html"),
            styles: [__webpack_require__(/*! ./canvas.component.scss */ "./src/app/components/canvas/canvas.component.scss")]
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_2__["CanvasService"]])
    ], CanvasComponent);
    return CanvasComponent;
}());



/***/ }),

/***/ "./src/app/components/circle/circle.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/circle/circle.component.ts ***!
  \*******************************************************/
/*! exports provided: CircleComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleComponent", function() { return CircleComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shapes_circle_circle__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shapes/circle/circle */ "./src/app/modules/tools/shapes/circle/circle.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CircleComponent = /** @class */ (function () {
    function CircleComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appCircle'),
        __metadata("design:type", _shapes_circle_circle__WEBPACK_IMPORTED_MODULE_1__["CircleShape"])
    ], CircleComponent.prototype, "circle", void 0);
    CircleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[appCircle]',
            template: "\n    <svg:circle\n      [attr.cx]=\"circle.cx\"\n      [attr.cy]=\"circle.cy\"\n      [attr.r]=\"circle.r\"\n      [attr.fill]=\"circle.fill\"\n      [attr.stroke]=\"circle.stroke\"\n      [attr.stroke-width]=\"circle.strokeWidth\"\n    />\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], CircleComponent);
    return CircleComponent;
}());



/***/ }),

/***/ "./src/app/components/color-picker/color-picker.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/color-picker/color-picker.component.ts ***!
  \*******************************************************************/
/*! exports provided: ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return ColorPickerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @store/actions/app.actions */ "./src/app/store/actions/app.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ColorPickerComponent = /** @class */ (function () {
    function ColorPickerComponent(store, renderer) {
        this.store = store;
        this.renderer = renderer;
    }
    ColorPickerComponent.prototype.ngOnInit = function () {
        this.selectedColor$ = this.store
            .select('app')
            .select('selectedColor');
    };
    ColorPickerComponent.prototype.handleChange = function (color) {
        this.store.dispatch(new _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__["SelectColor"](color));
    };
    ColorPickerComponent.prototype.handleOpen = function () {
        this.store.dispatch(new _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_2__["SelectTool"](null));
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"])('colorPicker'),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"])
    ], ColorPickerComponent.prototype, "colorPicker", void 0);
    ColorPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-color-picker',
            template: "\n    <input type=\"color\"\n      #colorPicker\n      (click)=\"handleOpen()\"\n      [ngModel]=\"selectedColor$ | async\"\n      (ngModelChange)=\"handleChange($event)\">\n  ",
            styles: []
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], ColorPickerComponent);
    return ColorPickerComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: commonComponents, MastheadComponent, OptionsBarComponent, PanelComponent, SvgIconComponent, ToolbarComponent, ToolbarItemComponent, UsersComponent, CanvasComponent, ColorPickerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "commonComponents", function() { return commonComponents; });
/* harmony import */ var _masthead_masthead_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./masthead/masthead.component */ "./src/app/components/masthead/masthead.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MastheadComponent", function() { return _masthead_masthead_component__WEBPACK_IMPORTED_MODULE_0__["MastheadComponent"]; });

/* harmony import */ var _options_bar_options_bar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./options-bar/options-bar.component */ "./src/app/components/options-bar/options-bar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "OptionsBarComponent", function() { return _options_bar_options_bar_component__WEBPACK_IMPORTED_MODULE_1__["OptionsBarComponent"]; });

/* harmony import */ var _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./panel/panel.component */ "./src/app/components/panel/panel.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"]; });

/* harmony import */ var _svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./svg-icon/svg-icon.component */ "./src/app/components/svg-icon/svg-icon.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SvgIconComponent", function() { return _svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"]; });

/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"]; });

/* harmony import */ var _toolbar_item_toolbar_item_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toolbar-item/toolbar-item.component */ "./src/app/components/toolbar-item/toolbar-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarItemComponent", function() { return _toolbar_item_toolbar_item_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarItemComponent"]; });

/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"]; });

/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/components/canvas/canvas.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__["CanvasComponent"]; });

/* harmony import */ var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./color-picker/color-picker.component */ "./src/app/components/color-picker/color-picker.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_8__["ColorPickerComponent"]; });










var commonComponents = [
    _masthead_masthead_component__WEBPACK_IMPORTED_MODULE_0__["MastheadComponent"],
    _options_bar_options_bar_component__WEBPACK_IMPORTED_MODULE_1__["OptionsBarComponent"],
    _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"],
    _svg_icon_svg_icon_component__WEBPACK_IMPORTED_MODULE_3__["SvgIconComponent"],
    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarComponent"],
    _toolbar_item_toolbar_item_component__WEBPACK_IMPORTED_MODULE_5__["ToolbarItemComponent"],
    _users_users_component__WEBPACK_IMPORTED_MODULE_6__["UsersComponent"],
    _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_7__["CanvasComponent"],
    _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_8__["ColorPickerComponent"]
];



/***/ }),

/***/ "./src/app/components/masthead/masthead.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/components/masthead/masthead.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".masthead {\n  display: flex;\n  align-items: center;\n  justify-content: flex-start;\n  height: 100%;\n  background-color: #ffffff;\n  box-shadow: 0 0 11px rgba(0, 0, 0, 0.13); }\n  .masthead__logo {\n    display: flex;\n    align-items: center;\n    height: 100%;\n    padding: 0 20px;\n    font-size: 15px;\n    font-weight: 100;\n    background-color: #353c4e;\n    cursor: default; }\n"

/***/ }),

/***/ "./src/app/components/masthead/masthead.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/masthead/masthead.component.ts ***!
  \***********************************************************/
/*! exports provided: MastheadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MastheadComponent", function() { return MastheadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MastheadComponent = /** @class */ (function () {
    function MastheadComponent() {
    }
    MastheadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-masthead',
            template: "\n    <div class=\"masthead\">\n      <div class=\"masthead__logo\">Angular<b>Paint</b></div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./masthead.component.scss */ "./src/app/components/masthead/masthead.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], MastheadComponent);
    return MastheadComponent;
}());



/***/ }),

/***/ "./src/app/components/options-bar/options-bar.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/options-bar/options-bar.component.ts ***!
  \*****************************************************************/
/*! exports provided: OptionsBarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OptionsBarComponent", function() { return OptionsBarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var OptionsBarComponent = /** @class */ (function () {
    function OptionsBarComponent() {
        this.title = 'Adjustments';
    }
    OptionsBarComponent.prototype.ngOnInit = function () {
    };
    OptionsBarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-options-bar',
            template: "\n    <app-panel [panelTitle]=\"title\">\n      <app-color-picker></app-color-picker>\n    </app-panel>\n  "
        }),
        __metadata("design:paramtypes", [])
    ], OptionsBarComponent);
    return OptionsBarComponent;
}());



/***/ }),

/***/ "./src/app/components/panel/panel.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/panel/panel.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: flex;\n  height: 100%;\n  width: 100%; }\n\n.panel {\n  background-color: white;\n  font-size: 12px;\n  border-radius: 1px;\n  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n  color: #505458;\n  overflow: auto;\n  width: 100%; }\n\n.panel__title {\n    font-weight: 600;\n    cursor: default;\n    margin-bottom: 10px;\n    padding: 5px; }\n\n.panel__content {\n    line-height: 16px;\n    padding: 5px; }\n"

/***/ }),

/***/ "./src/app/components/panel/panel.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/panel/panel.component.ts ***!
  \*****************************************************/
/*! exports provided: PanelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PanelComponent", function() { return PanelComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PanelComponent = /** @class */ (function () {
    function PanelComponent() {
    }
    PanelComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], PanelComponent.prototype, "panelTitle", void 0);
    PanelComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-panel',
            template: "\n    <div class=\"panel\">\n      <div class=\"panel__title\" *ngIf=\"panelTitle\">\n          {{panelTitle}}\n      </div>\n      <div class=\"panel__content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./panel.component.scss */ "./src/app/components/panel/panel.component.scss")]
        })
    ], PanelComponent);
    return PanelComponent;
}());



/***/ }),

/***/ "./src/app/components/polyline/polyline.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/polyline/polyline.component.ts ***!
  \***********************************************************/
/*! exports provided: PolylineComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineComponent", function() { return PolylineComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _tools_shapes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tools/shapes */ "./src/app/modules/tools/shapes/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PolylineComponent = /** @class */ (function () {
    function PolylineComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appPolyline'),
        __metadata("design:type", _tools_shapes__WEBPACK_IMPORTED_MODULE_1__["PolylineShape"])
    ], PolylineComponent.prototype, "polyline", void 0);
    PolylineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[appPolyline]',
            template: "\n    <svg:polyline\n      [attr.points]=\"polyline.toString()\"\n      [attr.fill]=\"polyline.fill\"\n      [attr.stroke]=\"polyline.stroke\"\n      [attr.stroke-width]=\"polyline.strokeWidth\"\n    />\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], PolylineComponent);
    return PolylineComponent;
}());



/***/ }),

/***/ "./src/app/components/rect/rect.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/rect/rect.component.ts ***!
  \***************************************************/
/*! exports provided: RectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectComponent", function() { return RectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shapes_rect_rect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shapes/rect/rect */ "./src/app/modules/tools/shapes/rect/rect.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RectComponent = /** @class */ (function () {
    function RectComponent() {
    }
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appRect'),
        __metadata("design:type", _shapes_rect_rect__WEBPACK_IMPORTED_MODULE_1__["RectShape"])
    ], RectComponent.prototype, "rect", void 0);
    RectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[appRect]',
            template: "\n    <svg:rect\n      [attr.x]=\"rect.x\"\n      [attr.y]=\"rect.y\"\n      [attr.width]=\"rect.width\"\n      [attr.height]=\"rect.height\"\n      [attr.fill]=\"rect.fill\"\n      [attr.stroke]=\"rect.stroke\"\n      [attr.rx]=\"rect.rx\"\n      [attr.ry]=\"rect.ry\"\n      [attr.stroke-width]=\"rect.strokeWidth\"\n    />\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        })
    ], RectComponent);
    return RectComponent;
}());



/***/ }),

/***/ "./src/app/components/svg-icon/svg-icon.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/svg-icon/svg-icon.component.ts ***!
  \***********************************************************/
/*! exports provided: SvgIconComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SvgIconComponent", function() { return SvgIconComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/esm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SvgIconComponent = /** @class */ (function () {
    function SvgIconComponent(http, renderer, elementRef) {
        this.http = http;
        this.renderer = renderer;
        this.elementRef = elementRef;
    }
    Object.defineProperty(SvgIconComponent.prototype, "imageUrl", {
        set: function (imageUrl) {
            this.load(imageUrl);
        },
        enumerable: true,
        configurable: true
    });
    SvgIconComponent.prototype.load = function (imageUrl) {
        var _this = this;
        this.http.get(imageUrl)
            .subscribe(function (response) {
            var element = _this.elementRef.nativeElement;
            element.innerHTML = '';
            var iconStr = response.text();
            var parser = new DOMParser();
            var svg = parser.parseFromString(iconStr, 'image/svg+xml');
            _this.renderer.projectNodes(element, [svg.documentElement]);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String),
        __metadata("design:paramtypes", [String])
    ], SvgIconComponent.prototype, "imageUrl", null);
    SvgIconComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-svg-icon',
            template: '<ng-content></ng-content>',
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], SvgIconComponent);
    return SvgIconComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbar-item/toolbar-item.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/toolbar-item/toolbar-item.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tool-item {\n  width: 20px;\n  height: 20px;\n  margin-bottom: 10px; }\n"

/***/ }),

/***/ "./src/app/components/toolbar-item/toolbar-item.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/toolbar-item/toolbar-item.component.ts ***!
  \*******************************************************************/
/*! exports provided: ToolbarItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarItemComponent", function() { return ToolbarItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/esm5/animations.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolbarItemComponent = /** @class */ (function () {
    function ToolbarItemComponent() {
        this.toolState = 'inactive';
        this.select = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    Object.defineProperty(ToolbarItemComponent.prototype, "selected", {
        set: function (isSelected) {
            this.toolState = isSelected ? 'active' : 'inactive';
        },
        enumerable: true,
        configurable: true
    });
    ToolbarItemComponent.prototype.handleSelect = function (evt) {
        evt.stopPropagation();
        this.select.emit(this.tool);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], ToolbarItemComponent.prototype, "select", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ToolbarItemComponent.prototype, "tool", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean),
        __metadata("design:paramtypes", [Boolean])
    ], ToolbarItemComponent.prototype, "selected", null);
    ToolbarItemComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar-item',
            template: "\n    <div class=\"tool-item\" [@toolState]=\"toolState\">\n      <app-svg-icon [imageUrl]=\"tool.imageUrl\"\n        (mousedown)=\"handleSelect($event)\">\n      </app-svg-icon>\n    </div>\n  ",
            animations: [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["trigger"])('toolState', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'scale(1)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["state"])('active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
                        transform: 'scale(1.4)'
                    })),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('inactive => active', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('200ms ease-in-out')),
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["transition"])('active => inactive', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["animate"])('100ms ease-out'))
                ])
            ],
            styles: [__webpack_require__(/*! ./toolbar-item.component.scss */ "./src/app/components/toolbar-item/toolbar-item.component.scss")]
        })
    ], ToolbarItemComponent);
    return ToolbarItemComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".toolbar-list {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap; }\n"

/***/ }),

/***/ "./src/app/components/toolbar/toolbar.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/toolbar/toolbar.component.ts ***!
  \*********************************************************/
/*! exports provided: ToolbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return ToolbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @store/actions/app.actions */ "./src/app/store/actions/app.actions.ts");
/* harmony import */ var _tools_tools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tools/tools */ "./src/app/modules/tools/tools.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};






var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(tools, store) {
        this.tools = tools;
        this.store = store;
        this.title = 'Tools';
        this.destroy$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_4__["Subject"]();
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.store
            .select('app')
            .select('selectedTool')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["takeUntil"])(this.destroy$))
            .subscribe(function (tool) { return _this.selectedTool = tool; });
    };
    ToolbarComponent.prototype.isSelected = function (tool) {
        return this.selectedTool === tool;
    };
    ToolbarComponent.prototype.handleSelect = function (tool) {
        this.store.dispatch(new _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["SelectTool"](tool));
        var thickness = tool.name === 'pencil' ? 2 : 10;
        this.store.dispatch(new _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_1__["ChangeThickness"](thickness));
    };
    ToolbarComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: "\n    <app-panel [panelTitle]=\"title\">\n      <div class=\"toolbar-list\">\n        <app-toolbar-item\n          *ngFor=\"let tool of tools\"\n          [tool]=\"tool\"\n          [selected]=\"isSelected(tool)\"\n          (select)=\"handleSelect($event)\">\n        </app-toolbar-item>\n      </div>\n    </app-panel>\n  ",
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/components/toolbar/toolbar.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tools_tools__WEBPACK_IMPORTED_MODULE_2__["TOOLS_TOKEN"])),
        __metadata("design:paramtypes", [Array, _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["Store"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/users/users.component.ts ***!
  \*****************************************************/
/*! exports provided: UsersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return UsersComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UsersComponent = /** @class */ (function () {
    function UsersComponent() {
        this.title = 'Users';
    }
    UsersComponent.prototype.ngOnInit = function () {
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: "\n    <app-panel [panelTitle]=\"title\">\n      <div>User 1</div>\n      <div>User 1</div>\n      <div>User 1</div>\n      <div>User 1</div>\n      <div>User 1</div>\n      <div>User 1</div>\n      <div>User 1</div>\n      <div>User 1</div>\n      <div>User 1</div>\n    </app-panel>\n  "
        })
    ], UsersComponent);
    return UsersComponent;
}());



/***/ }),

/***/ "./src/app/directives/cursorable/cursorable.directive.ts":
/*!***************************************************************!*\
  !*** ./src/app/directives/cursorable/cursorable.directive.ts ***!
  \***************************************************************/
/*! exports provided: CursorableDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CursorableDirective", function() { return CursorableDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/Observable */ "./node_modules/rxjs/_esm5/Observable.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CursorableDirective = /** @class */ (function () {
    function CursorableDirective(elementRef, renderer) {
        this.elementRef = elementRef;
        this.renderer = renderer;
    }
    CursorableDirective.prototype.ngOnInit = function () {
        var _this = this;
        this.toolChanges
            .subscribe(function (tool) {
            if (_this.selectedTool) {
                _this.renderer.removeClass(_this.elementRef.nativeElement, "cursor__" + _this.selectedTool.name);
            }
            if (!tool) {
                return;
            }
            _this.renderer.addClass(_this.elementRef.nativeElement, "cursor__" + tool.name);
            _this.selectedTool = tool;
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appCursorable'),
        __metadata("design:type", rxjs_Observable__WEBPACK_IMPORTED_MODULE_1__["Observable"])
    ], CursorableDirective.prototype, "toolChanges", void 0);
    CursorableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appCursorable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]])
    ], CursorableDirective);
    return CursorableDirective;
}());



/***/ }),

/***/ "./src/app/directives/mouse/mouse-service.directive.ts":
/*!*************************************************************!*\
  !*** ./src/app/directives/mouse/mouse-service.directive.ts ***!
  \*************************************************************/
/*! exports provided: MouseServiceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MouseServiceDirective", function() { return MouseServiceDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/observable/fromEvent */ "./node_modules/rxjs/_esm5/observable/fromEvent.js");
/* harmony import */ var _math_point2d__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @math/point2d */ "./src/app/math/point2d.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/observable/merge */ "./node_modules/rxjs/_esm5/observable/merge.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MouseServiceDirective = /** @class */ (function () {
    function MouseServiceDirective(elRef) {
        var _this = this;
        this.elRef = elRef;
        this.toCoords = function (evt) {
            var p = _this.elRef.nativeElement.createSVGPoint();
            p.x = evt.clientX;
            p.y = evt.clientY;
            var point = p.matrixTransform(_this.elRef.nativeElement.getScreenCTM().inverse());
            return new _math_point2d__WEBPACK_IMPORTED_MODULE_2__["Point2D"](point.x, point.y);
        };
    }
    MouseServiceDirective.prototype.fromEvent = function (name) {
        return Object(rxjs_observable_fromEvent__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.elRef.nativeElement, name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (evt) { return evt.preventDefault(); }));
    };
    MouseServiceDirective.prototype.onMouseUp = function () {
        return this.fromEvent('mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.toCoords));
    };
    MouseServiceDirective.prototype.onMouseDown = function () {
        return this.fromEvent('mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.toCoords));
    };
    MouseServiceDirective.prototype.onMouseMove = function () {
        return this.fromEvent('mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(this.toCoords));
    };
    MouseServiceDirective.prototype.onMouseLeave = function () {
        return this.fromEvent('mouseleave');
    };
    MouseServiceDirective.prototype.onEnd = function () {
        return Object(rxjs_observable_merge__WEBPACK_IMPORTED_MODULE_4__["merge"])(this.fromEvent('mouseup'), this.fromEvent('mouseleave'));
    };
    MouseServiceDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMouseService]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"]])
    ], MouseServiceDirective);
    return MouseServiceDirective;
}());



/***/ }),

/***/ "./src/app/math/point2d.ts":
/*!*********************************!*\
  !*** ./src/app/math/point2d.ts ***!
  \*********************************/
/*! exports provided: Point2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Point2D", function() { return Point2D; });
var Point2D = /** @class */ (function () {
    function Point2D(x, y) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        this.x = x;
        this.y = y;
    }
    Point2D.add = function (p1, p2) {
        return new Point2D(p1.x + p2.x, p1.y + p2.y);
    };
    Point2D.getMidpoint = function (p1, p2) {
        return Point2D.getDifference(p1, p2).divideBy(2).add(p1);
    };
    Point2D.getDifference = function (p1, p2) {
        return new Point2D(p2.x - p1.x, p2.y - p1.y);
    };
    Point2D.size = function (p1) {
        return Math.sqrt((Math.pow(p1.x, 2) + Math.pow(p1.y, 2)));
    };
    Point2D.prototype.divideBy = function (num) {
        this.x = this.x / num;
        this.y = this.y / num;
        return this;
    };
    Point2D.prototype.add = function (p) {
        this.x += p.x;
        this.y += p.y;
        return this;
    };
    return Point2D;
}());



/***/ }),

/***/ "./src/app/modules/tools/components/drawing-tool/drawing-tool.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/tools/components/drawing-tool/drawing-tool.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DrawingToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawingToolComponent", function() { return DrawingToolComponent; });
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shapes */ "./src/app/modules/tools/shapes/index.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/canvas/canvas.service */ "./src/app/services/canvas/canvas.service.ts");
/* harmony import */ var _directives_mouse_mouse_service_directive__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @directives/mouse/mouse-service.directive */ "./src/app/directives/mouse/mouse-service.directive.ts");
/* harmony import */ var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @store/actions/app.actions */ "./src/app/store/actions/app.actions.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var DrawingToolComponent = /** @class */ (function () {
    function DrawingToolComponent(store, mouseService, canvasService) {
        var _this = this;
        this.store = store;
        this.mouseService = mouseService;
        this.canvasService = canvasService;
        this.destroy$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_0__["Subject"]();
        this.handleMouseDown = function (_a) {
            var p = _a[0], thickness = _a[1], selectedColor = _a[2];
            var circle = new _shapes__WEBPACK_IMPORTED_MODULE_3__["CircleShape"](p, thickness / 2, selectedColor);
            var polyline = new _shapes__WEBPACK_IMPORTED_MODULE_3__["PolylineShape"]([p], thickness, selectedColor);
            Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(p)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["mergeMap"])(function () { return _this.mouseService.onMouseMove(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(_this.mouseService.onEnd()), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(_this.canvasService.canvasShapes$))
                .subscribe(_this.polylineObserver(polyline));
            _this.canvasService.render(circle);
            _this.flushShape(circle);
        };
    }
    DrawingToolComponent.prototype.ngOnInit = function () {
        this.selectedColor$ = this.store
            .select('app')
            .select('selectedColor');
        this.thickness$ = this.store
            .select('app')
            .select('thickness');
        this.mouseService.onMouseDown()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["withLatestFrom"])(this.thickness$, this.selectedColor$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["takeUntil"])(this.destroy$))
            .subscribe(this.handleMouseDown);
    };
    DrawingToolComponent.prototype.polylineObserver = function (polyline) {
        var _this = this;
        return {
            next: function (_a) {
                var pt = _a[0], canvasShapes = _a[1];
                if (!canvasShapes.includes(polyline)) {
                    _this.canvasService.render(polyline);
                }
                polyline.append(pt);
            },
            complete: function () {
                if (!_this.shouldPolylineCreate(polyline)) {
                    return;
                }
                _this.flushShape(polyline);
            }
        };
    };
    DrawingToolComponent.prototype.flushShape = function (shape) {
        this.canvasService.complete(shape);
        this.store.dispatch(new _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_8__["CreateShape"](shape));
    };
    DrawingToolComponent.prototype.shouldPolylineCreate = function (polyline) {
        return polyline.length() > 1;
    };
    DrawingToolComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    DrawingToolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-drawing-tool',
            template: ''
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
            _directives_mouse_mouse_service_directive__WEBPACK_IMPORTED_MODULE_7__["MouseServiceDirective"],
            _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_6__["CanvasService"]])
    ], DrawingToolComponent);
    return DrawingToolComponent;
}());



/***/ }),

/***/ "./src/app/modules/tools/components/geometry-tool/geometry-tool.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/modules/tools/components/geometry-tool/geometry-tool.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GeometryToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GeometryToolComponent", function() { return GeometryToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _directives_mouse_mouse_service_directive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @directives/mouse/mouse-service.directive */ "./src/app/directives/mouse/mouse-service.directive.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var _shapes_rect_rect__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shapes/rect/rect */ "./src/app/modules/tools/shapes/rect/rect.ts");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs/_esm5/observable/of.js");
/* harmony import */ var _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/canvas/canvas.service */ "./src/app/services/canvas/canvas.service.ts");
/* harmony import */ var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @store/actions/app.actions */ "./src/app/store/actions/app.actions.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _tools_types_tools__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @tools/types/tools */ "./src/app/modules/tools/types/tools.ts");
/* harmony import */ var _shapes__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @shapes */ "./src/app/modules/tools/shapes/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











var GeometryToolComponent = /** @class */ (function () {
    function GeometryToolComponent(store, mouseService, canvasService) {
        var _this = this;
        this.store = store;
        this.mouseService = mouseService;
        this.canvasService = canvasService;
        this.destroy$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.handleMouseDown = function (_a) {
            var start = _a[0], selectedTool = _a[1];
            var shape = _this.createShape(start, selectedTool);
            Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_5__["of"])(start)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mergeMap"])(function () { return _this.mouseService.onMouseMove(); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.mouseService.onMouseUp())).subscribe(_this.rectObserver(start, shape));
            _this.canvasService.render(shape);
        };
    }
    GeometryToolComponent.prototype.ngOnInit = function () {
        this.selectedTool$ = this.store
            .select('app')
            .select('selectedTool');
        this.mouseService.onMouseDown()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.selectedTool$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe(this.handleMouseDown);
    };
    GeometryToolComponent.prototype.rectObserver = function (start, rect) {
        var _this = this;
        return {
            next: function (end) {
                rect.transform(start, end);
            },
            complete: function () {
                _this.flushShape(rect);
            }
        };
    };
    GeometryToolComponent.prototype.flushShape = function (shape) {
        this.canvasService.complete(shape);
        this.store.dispatch(new _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_7__["CreateShape"](shape));
    };
    GeometryToolComponent.prototype.createShape = function (start, selectedTool) {
        switch (selectedTool.name) {
            case _tools_types_tools__WEBPACK_IMPORTED_MODULE_9__["Tools"].Rect: {
                return new _shapes_rect_rect__WEBPACK_IMPORTED_MODULE_4__["RectShape"](start.x, start.y);
            }
            case _tools_types_tools__WEBPACK_IMPORTED_MODULE_9__["Tools"].Circle: {
                return new _shapes__WEBPACK_IMPORTED_MODULE_10__["CircleShape"](start);
            }
            default:
                return;
        }
    };
    GeometryToolComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    GeometryToolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-geometry-tool',
            template: ''
        }),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_8__["Store"],
            _directives_mouse_mouse_service_directive__WEBPACK_IMPORTED_MODULE_1__["MouseServiceDirective"],
            _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_6__["CanvasService"]])
    ], GeometryToolComponent);
    return GeometryToolComponent;
}());



/***/ }),

/***/ "./src/app/modules/tools/shapes/circle/circle.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/tools/shapes/circle/circle.ts ***!
  \*******************************************************/
/*! exports provided: CircleShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleShape", function() { return CircleShape; });
/* harmony import */ var _shapes_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shapes/shape */ "./src/app/modules/tools/shapes/shape.ts");
/* harmony import */ var _math_point2d__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @math/point2d */ "./src/app/math/point2d.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var CircleShape = /** @class */ (function (_super) {
    __extends(CircleShape, _super);
    function CircleShape(center, r, fill, strokeWidth) {
        if (r === void 0) { r = 0; }
        if (fill === void 0) { fill = 'none'; }
        if (strokeWidth === void 0) { strokeWidth = 2; }
        var _this = _super.call(this) || this;
        _this.center = center;
        _this.r = r;
        _this.fill = fill;
        _this.strokeWidth = strokeWidth;
        _this.type = 'circle';
        _this.cx = center.x;
        _this.cy = center.y;
        return _this;
    }
    CircleShape.prototype.getRadius = function (start, end) {
        var difference = _math_point2d__WEBPACK_IMPORTED_MODULE_1__["Point2D"].getDifference(start, end);
        return _math_point2d__WEBPACK_IMPORTED_MODULE_1__["Point2D"].size(difference.divideBy(2));
    };
    CircleShape.prototype.moveTo = function (p) {
        this.cx = p.x;
        this.cy = p.y;
        return this;
    };
    CircleShape.prototype.transform = function (start, end) {
        var midpoint = _math_point2d__WEBPACK_IMPORTED_MODULE_1__["Point2D"].getMidpoint(start, end);
        var radius = this.getRadius(start, end);
        this.r = radius;
        this.moveTo(midpoint);
    };
    return CircleShape;
}(_shapes_shape__WEBPACK_IMPORTED_MODULE_0__["Shape"]));



/***/ }),

/***/ "./src/app/modules/tools/shapes/index.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/tools/shapes/index.ts ***!
  \***********************************************/
/*! exports provided: Shape, PolylineShape, RectShape, CircleShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/app/modules/tools/shapes/shape.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return _shape__WEBPACK_IMPORTED_MODULE_0__["Shape"]; });

/* harmony import */ var _shapes_polyline_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shapes/polyline-shape */ "./src/app/modules/tools/shapes/polyline-shape.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PolylineShape", function() { return _shapes_polyline_shape__WEBPACK_IMPORTED_MODULE_1__["PolylineShape"]; });

/* harmony import */ var _shapes_circle_circle__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shapes/circle/circle */ "./src/app/modules/tools/shapes/circle/circle.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CircleShape", function() { return _shapes_circle_circle__WEBPACK_IMPORTED_MODULE_2__["CircleShape"]; });

/* harmony import */ var _shapes_rect_rect__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shapes/rect/rect */ "./src/app/modules/tools/shapes/rect/rect.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "RectShape", function() { return _shapes_rect_rect__WEBPACK_IMPORTED_MODULE_3__["RectShape"]; });








/***/ }),

/***/ "./src/app/modules/tools/shapes/polyline-shape.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/tools/shapes/polyline-shape.ts ***!
  \********************************************************/
/*! exports provided: PolylineShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineShape", function() { return PolylineShape; });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape */ "./src/app/modules/tools/shapes/shape.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var PolylineShape = /** @class */ (function (_super) {
    __extends(PolylineShape, _super);
    function PolylineShape(points, strokeWidth, stroke) {
        if (points === void 0) { points = []; }
        var _this = _super.call(this) || this;
        _this.points = points;
        _this.strokeWidth = strokeWidth;
        _this.stroke = stroke;
        _this.type = 'polyline';
        _this.fill = 'none';
        _this.strokeLinecap = 'round';
        return _this;
    }
    PolylineShape.prototype.toString = function () {
        return this.points
            .map(function (point) { return point.x + "," + point.y; })
            .join(' ');
    };
    PolylineShape.prototype.append = function (p) {
        this.points.push(p);
    };
    PolylineShape.prototype.length = function () {
        return this.points.length;
    };
    PolylineShape.prototype.transform = function () {
    };
    return PolylineShape;
}(_shape__WEBPACK_IMPORTED_MODULE_0__["Shape"]));



/***/ }),

/***/ "./src/app/modules/tools/shapes/rect/rect.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/tools/shapes/rect/rect.ts ***!
  \***************************************************/
/*! exports provided: RectShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectShape", function() { return RectShape; });
/* harmony import */ var _shapes_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shapes/shape */ "./src/app/modules/tools/shapes/shape.ts");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var RectShape = /** @class */ (function (_super) {
    __extends(RectShape, _super);
    function RectShape(x, y, width, height, rx, ry, fill, strokeWidth) {
        if (x === void 0) { x = 0; }
        if (y === void 0) { y = 0; }
        if (width === void 0) { width = 0; }
        if (height === void 0) { height = 0; }
        if (rx === void 0) { rx = 2; }
        if (ry === void 0) { ry = 2; }
        if (fill === void 0) { fill = 'none'; }
        if (strokeWidth === void 0) { strokeWidth = 2; }
        var _this = _super.call(this) || this;
        _this.x = x;
        _this.y = y;
        _this.width = width;
        _this.height = height;
        _this.rx = rx;
        _this.ry = ry;
        _this.fill = fill;
        _this.strokeWidth = strokeWidth;
        _this.type = 'rect';
        return _this;
    }
    RectShape.prototype.getBoundingRect = function (start, end) {
        if (start.x <= end.x && start.y <= end.y) {
            return {
                x: start.x,
                y: start.y,
                width: end.x - start.x,
                height: end.y - start.y
            };
        }
        if (start.x <= end.x && start.y > end.y) {
            return {
                x: start.x,
                y: end.y,
                width: end.x - start.x,
                height: start.y - end.y
            };
        }
        if (start.x >= end.x && start.y > end.y) {
            return {
                x: end.x,
                y: end.y,
                width: start.x - end.x,
                height: start.y - end.y
            };
        }
        if (start.x >= end.x && start.y <= end.y) {
            return {
                x: end.x,
                y: start.y,
                width: start.x - end.x,
                height: end.y - start.y
            };
        }
    };
    RectShape.prototype.transform = function (start, end) {
        var _a = this.getBoundingRect(start, end), x = _a.x, y = _a.y, width = _a.width, height = _a.height;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
    };
    return RectShape;
}(_shapes_shape__WEBPACK_IMPORTED_MODULE_0__["Shape"]));



/***/ }),

/***/ "./src/app/modules/tools/shapes/shape.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/tools/shapes/shape.ts ***!
  \***********************************************/
/*! exports provided: Shape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Shape", function() { return Shape; });
var Shape = /** @class */ (function () {
    function Shape() {
        this.stroke = 'black';
        this.rendered = false;
        this.editing = true;
    }
    Shape.prototype.ofType = function (type) {
        return this.type === type;
    };
    return Shape;
}());



/***/ }),

/***/ "./src/app/modules/tools/tools.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/tools/tools.module.ts ***!
  \***********************************************/
/*! exports provided: ToolsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolsModule", function() { return ToolsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/esm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/esm5/animations.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tools */ "./src/app/modules/tools/tools.ts");
/* harmony import */ var _components_drawing_tool_drawing_tool_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/drawing-tool/drawing-tool.component */ "./src/app/modules/tools/components/drawing-tool/drawing-tool.component.ts");
/* harmony import */ var _components_geometry_tool_geometry_tool_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/geometry-tool/geometry-tool.component */ "./src/app/modules/tools/components/geometry-tool/geometry-tool.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ToolsModule = /** @class */ (function () {
    function ToolsModule() {
    }
    ToolsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            entryComponents: [
                _components_drawing_tool_drawing_tool_component__WEBPACK_IMPORTED_MODULE_4__["DrawingToolComponent"],
                _components_geometry_tool_geometry_tool_component__WEBPACK_IMPORTED_MODULE_5__["GeometryToolComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            declarations: [
                _components_drawing_tool_drawing_tool_component__WEBPACK_IMPORTED_MODULE_4__["DrawingToolComponent"],
                _components_geometry_tool_geometry_tool_component__WEBPACK_IMPORTED_MODULE_5__["GeometryToolComponent"]
            ],
            providers: [
                {
                    provide: _tools__WEBPACK_IMPORTED_MODULE_3__["TOOLS_TOKEN"], useValue: _tools__WEBPACK_IMPORTED_MODULE_3__["tools"]
                }
            ]
        })
    ], ToolsModule);
    return ToolsModule;
}());



/***/ }),

/***/ "./src/app/modules/tools/tools.ts":
/*!****************************************!*\
  !*** ./src/app/modules/tools/tools.ts ***!
  \****************************************/
/*! exports provided: tools, TOOLS_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "tools", function() { return tools; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOLS_TOKEN", function() { return TOOLS_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _components_drawing_tool_drawing_tool_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/drawing-tool/drawing-tool.component */ "./src/app/modules/tools/components/drawing-tool/drawing-tool.component.ts");
/* harmony import */ var _components_geometry_tool_geometry_tool_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/geometry-tool/geometry-tool.component */ "./src/app/modules/tools/components/geometry-tool/geometry-tool.component.ts");
/* harmony import */ var _types_tools__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./types/tools */ "./src/app/modules/tools/types/tools.ts");




var tools = [
    {
        name: _types_tools__WEBPACK_IMPORTED_MODULE_3__["Tools"].Pencil,
        component: _components_drawing_tool_drawing_tool_component__WEBPACK_IMPORTED_MODULE_1__["DrawingToolComponent"],
        shapeType: 'polyline',
        imageUrl: 'assets/icons/pencil.svg'
    },
    {
        name: _types_tools__WEBPACK_IMPORTED_MODULE_3__["Tools"].Brush,
        component: _components_drawing_tool_drawing_tool_component__WEBPACK_IMPORTED_MODULE_1__["DrawingToolComponent"],
        shapeType: 'polyline',
        imageUrl: 'assets/icons/brush.svg'
    },
    {
        name: _types_tools__WEBPACK_IMPORTED_MODULE_3__["Tools"].Rect,
        component: _components_geometry_tool_geometry_tool_component__WEBPACK_IMPORTED_MODULE_2__["GeometryToolComponent"],
        shapeType: 'rect',
        imageUrl: 'assets/icons/rect.svg'
    },
    {
        name: _types_tools__WEBPACK_IMPORTED_MODULE_3__["Tools"].Circle,
        component: _components_geometry_tool_geometry_tool_component__WEBPACK_IMPORTED_MODULE_2__["GeometryToolComponent"],
        shapeType: 'circle',
        imageUrl: 'assets/icons/circle.svg'
    }
];
var TOOLS_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('tools');


/***/ }),

/***/ "./src/app/modules/tools/types/tools.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/tools/types/tools.ts ***!
  \**********************************************/
/*! exports provided: Tools */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Tools", function() { return Tools; });
var Tools;
(function (Tools) {
    Tools["Pencil"] = "pencil";
    Tools["Brush"] = "brush";
    Tools["Rect"] = "rect";
    Tools["Circle"] = "circle";
})(Tools || (Tools = {}));


/***/ }),

/***/ "./src/app/services/canvas/canvas.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/canvas/canvas.service.ts ***!
  \***************************************************/
/*! exports provided: CanvasService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CanvasService", function() { return CanvasService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs/_esm5/Subject.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var CanvasService = /** @class */ (function () {
    function CanvasService(store) {
        var _this = this;
        this.store = store;
        this.canvasHandler = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.render = function (shape) {
            _this.canvasHandler.next(function (shapeStore) { return shapeStore.concat(shape); });
        };
        this.storeChanges$ = this.store
            .select('app')
            .select('shapes');
        this.canvasShapes$ = this.canvasHandler
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["scan"])(function (shapes, fn) { return fn(shapes); }, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (shapes) {
            console.log(shapes);
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["share"])());
        this.polylines$ = this.getShapes$('polyline');
        this.circles$ = this.getShapes$('circle');
        this.rects$ = this.getShapes$('rect');
    }
    CanvasService.prototype.getShapes$ = function (type) {
        return this.canvasShapes$
            .pipe(this.filterBy((function (shape) { return shape.ofType(type); })));
    };
    CanvasService.prototype.complete = function (shape) {
        shape.editing = false;
    };
    CanvasService.prototype.filterBy = function (fn) {
        return function (source$) {
            return source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (shapes) {
                return shapes.filter(function (shape) { return fn(shape); });
            }));
        };
    };
    CanvasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_1__["Store"]])
    ], CanvasService);
    return CanvasService;
}());



/***/ }),

/***/ "./src/app/store/actions/app.actions.ts":
/*!**********************************************!*\
  !*** ./src/app/store/actions/app.actions.ts ***!
  \**********************************************/
/*! exports provided: SELECT_COLOR, SELECT_TOOL, CREATE_SHAPE, CHANGE_THICKNESS, SelectColor, SelectTool, CreateShape, ChangeThickness */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_COLOR", function() { return SELECT_COLOR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SELECT_TOOL", function() { return SELECT_TOOL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CREATE_SHAPE", function() { return CREATE_SHAPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_THICKNESS", function() { return CHANGE_THICKNESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectColor", function() { return SelectColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SelectTool", function() { return SelectTool; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreateShape", function() { return CreateShape; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeThickness", function() { return ChangeThickness; });
var SELECT_COLOR = '[Tools] Select color';
var SELECT_TOOL = '[Tools] Select tool';
var CREATE_SHAPE = '[Canvas] Create shape';
var CHANGE_THICKNESS = '[Adjustments] Change thickness';
var SelectColor = /** @class */ (function () {
    function SelectColor(payload) {
        this.payload = payload;
        this.type = SELECT_COLOR;
    }
    return SelectColor;
}());

var SelectTool = /** @class */ (function () {
    function SelectTool(payload) {
        this.payload = payload;
        this.type = SELECT_TOOL;
    }
    return SelectTool;
}());

var CreateShape = /** @class */ (function () {
    function CreateShape(payload) {
        this.payload = payload;
        this.type = CREATE_SHAPE;
    }
    return CreateShape;
}());

var ChangeThickness = /** @class */ (function () {
    function ChangeThickness(payload) {
        this.payload = payload;
        this.type = CHANGE_THICKNESS;
    }
    return ChangeThickness;
}());



/***/ }),

/***/ "./src/app/store/app-store.module.ts":
/*!*******************************************!*\
  !*** ./src/app/store/app-store.module.ts ***!
  \*******************************************/
/*! exports provided: AppStoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppStoreModule", function() { return AppStoreModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store-devtools */ "./node_modules/@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./reducers/app.reducer */ "./src/app/store/reducers/app.reducer.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var AppStoreModule = /** @class */ (function () {
    function AppStoreModule() {
    }
    AppStoreModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _ngrx_store__WEBPACK_IMPORTED_MODULE_1__["StoreModule"].forRoot({
                    app: _reducers_app_reducer__WEBPACK_IMPORTED_MODULE_3__["appReducer"]
                }),
                _ngrx_store_devtools__WEBPACK_IMPORTED_MODULE_2__["StoreDevtoolsModule"].instrument({
                    maxAge: 10
                })
            ]
        })
    ], AppStoreModule);
    return AppStoreModule;
}());



/***/ }),

/***/ "./src/app/store/reducers/app.reducer.ts":
/*!***********************************************!*\
  !*** ./src/app/store/reducers/app.reducer.ts ***!
  \***********************************************/
/*! exports provided: appReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "appReducer", function() { return appReducer; });
/* harmony import */ var _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @store/actions/app.actions */ "./src/app/store/actions/app.actions.ts");
var __assign = (undefined && undefined.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};

var defaultState = {
    selectedTool: null,
    selectedColor: '#000000',
    thickness: 2,
    fontSize: 13,
    shapes: []
};
function appReducer(state, action) {
    if (state === void 0) { state = defaultState; }
    switch (action.type) {
        case _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_TOOL"]: {
            return __assign({}, state, { selectedTool: action.payload });
        }
        case _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["SELECT_COLOR"]: {
            return __assign({}, state, { selectedColor: action.payload });
        }
        case _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["CREATE_SHAPE"]: {
            return __assign({}, state, { shapes: state.shapes.concat([
                    action.payload
                ]) });
        }
        case _store_actions_app_actions__WEBPACK_IMPORTED_MODULE_0__["CHANGE_THICKNESS"]: {
            return __assign({}, state, { thickness: action.payload });
        }
        default:
            return state;
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
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/evglukhov/Development/ngPaint/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map