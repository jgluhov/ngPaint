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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/socket/socket.service */ "./src/app/services/socket/socket.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(socketService) {
        this.socketService = socketService;
        this.socketService.connect();
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: "\n    <div class=\"container\">\n      <app-masthead></app-masthead>\n      <app-toolbar></app-toolbar>\n      <app-options-bar></app-options-bar>\n      <app-users></app-users>\n      <app-canvas></app-canvas>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"]])
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _tools_tools_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tools/tools.module */ "./src/app/modules/tools/tools.module.ts");
/* harmony import */ var _directives_cursorable_cursorable_directive__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/cursorable/cursorable.directive */ "./src/app/directives/cursorable/cursorable.directive.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @components */ "./src/app/components/index.ts");
/* harmony import */ var _directives_mouse_mouse_service_directive__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @directives/mouse/mouse-service.directive */ "./src/app/directives/mouse/mouse-service.directive.ts");
/* harmony import */ var _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @services/canvas/canvas.service */ "./src/app/services/canvas/canvas.service.ts");
/* harmony import */ var _components_polyline_polyline_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/polyline/polyline.component */ "./src/app/components/polyline/polyline.component.ts");
/* harmony import */ var _components_circle_circle_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/circle/circle.component */ "./src/app/components/circle/circle.component.ts");
/* harmony import */ var _components_rect_rect_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/rect/rect.component */ "./src/app/components/rect/rect.component.ts");
/* harmony import */ var _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/user/user.component */ "./src/app/components/user/user.component.ts");
/* harmony import */ var _components_socket_state_socket_state_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/socket-state/socket-state.component */ "./src/app/components/socket-state/socket-state.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _directives_cursorable_cursorable_directive__WEBPACK_IMPORTED_MODULE_6__["CursorableDirective"],
                _directives_mouse_mouse_service_directive__WEBPACK_IMPORTED_MODULE_8__["MouseServiceDirective"]
            ].concat(_components__WEBPACK_IMPORTED_MODULE_7__["commonComponents"], [
                _components_polyline_polyline_component__WEBPACK_IMPORTED_MODULE_10__["PolylineComponent"],
                _components_circle_circle_component__WEBPACK_IMPORTED_MODULE_11__["CircleComponent"],
                _components_rect_rect_component__WEBPACK_IMPORTED_MODULE_12__["RectComponent"],
                _components_user_user_component__WEBPACK_IMPORTED_MODULE_13__["UserComponent"],
                _components_socket_state_socket_state_component__WEBPACK_IMPORTED_MODULE_14__["SocketStateComponent"]
            ]),
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_2__["HttpModule"],
                _tools_tools_module__WEBPACK_IMPORTED_MODULE_5__["ToolsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [
                _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_9__["CanvasService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

module.exports = "<app-panel [panelTitle]=\"title\" class=\"canvas__panel\">\n    <header>{{title}}</header>\n    <svg xmlns=\"http://www.w3.org/2000/svg\"\n      id=\"svg\"\n      viewBox=\"0 0 14000 14000\"\n      width=\"14000\"\n      height=\"14000\"\n      #svg\n      appCursorable\n      appMouseService\n    >\n      <defs>\n          <pattern id=\"grid\"\n            patternUnits=\"userSpaceOnUse\"\n            width=\"10\"\n            height=\"10\">\n              <line x1=\"5\" y1=\"0\" x2=\"5\" y2=\"10\" />\n              <line x1=\"0\" y1=\"5\" x2=\"10\" y2=\"5\" />\n          </pattern>\n      </defs>\n      <rect width=\"100%\" height=\"100%\" fill=\"url(#grid)\" />\n      <g id=\"polylines\">\n        <ng-container *ngFor=\"let polyline of canvasService.polylines$ | async\">\n          <g *ngIf=\"polyline.isStable()\" [appPolyline]=\"polyline\"></g>\n          <polyline *ngIf=\"!polyline.isStable()\"\n            [attr.points]=\"polyline.toString()\"\n            [attr.fill]=\"polyline.fill\"\n            [attr.stroke]=\"polyline.getStroke()\"\n            [attr.stroke-linecap]=\"polyline.strokeLinecap\"\n            [attr.stroke-width]=\"polyline.getStrokeWidth()\"/>\n        </ng-container>\n      </g>\n      <g id=\"circles\">\n        <ng-container *ngFor=\"let circle of canvasService.circles$ | async\">\n          <g *ngIf=\"circle.isStable()\" [appCircle]=\"circle\"></g>\n          <circle *ngIf=\"!circle.isStable()\"\n            [attr.cx]=\"circle.cx\"\n            [attr.cy]=\"circle.cy\"\n            [attr.r]=\"circle.r\"\n            [attr.fill]=\"circle.fill\"\n            [attr.stroke]=\"circle.getStroke()\"\n            [attr.stroke-width]=\"circle.getStrokeWidth()\"\n          />\n        </ng-container>\n      </g>\n      <g id=\"rects\">\n        <ng-container *ngFor=\"let rect of canvasService.rects$ | async\">\n          <g *ngIf=\"rect.isStable()\" [appRect]=\"rect\"></g>\n          <rect *ngIf=\"!rect.isStable()\"\n            [attr.x]=\"rect.x\"\n            [attr.y]=\"rect.y\"\n            [attr.width]=\"rect.width\"\n            [attr.height]=\"rect.height\"\n            [attr.fill]=\"rect.fill\"\n            [attr.stroke]=\"rect.getStroke()\"\n            [attr.rx]=\"rect.rx\"\n            [attr.ry]=\"rect.ry\"\n            [attr.stroke-width]=\"rect.getStrokeWidth()\"\n          />\n        </ng-container>\n      </g>\n      <ng-container #vcr></ng-container>\n    </svg>\n</app-panel>\n"

/***/ }),

/***/ "./src/app/components/canvas/canvas.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/components/canvas/canvas.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#grid > line {\n  stroke: #e0e3e5;\n  stroke-width: 1px; }\n\n#svg.cursor__hand g > rect:hover,\n#svg.cursor__hand g > circle:hover,\n#svg.cursor__hand g > polyline:hover {\n  stroke: red; }\n\n.cursor__pencil {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAc9JREFUOI210z9IG2EYx/HfvXdnkiMGJRIRFNqqZ0Ap4r9FUJDqIEIphcqhmaSQIYJOhYppBxcJiIOCooNLgiBeK3TJ4FA6FDo0pQVpC05y/kONlzNRz8u9LibYVsU76zO/z4cvPLzAfx7G7uJkLFaqa5kApUbiVTC4eidwfGauVxCcMcKyBADU5MH061AoBADEKrabTDa4HPwUYVlCAWgpFaeZ4+CbSMRnGdxeeSuZX6OfnnX3CFnD0I5UFcfpDEAIm+U4ryVQkcOS8eN91Pw4ITi+R4XW+iYXNc11AICJxNjQ0M9bg4oclrC2EiV6igEAdWkU/LtBrvlxfWWxp/AzqNEDhqHALY6SwxhdYwAgvbWHk2QKAJBtfGryzyNNtaKYyL3n7GLE6YSjpDwgXsJuLFTkEQlrH67F+PaBPvHldOzvvStBuxhwxVEUeUSiNrF/CnMYsYn9UajI4TtjAMACwP6+VgdvxTLzO+7C6ZFtLF94Ro1Otqi8iHsxj/ShbhvLFwreh8Mej7tWB48DdyVcv+IgPG8Zy4MtbV39MwuLfkIYlFXVgT5oMdy+soBVDLj4KZyTi/urHlVvbO6cdD8p/lLg65gVawa+WcXuZc4BzFf0O30cAKIAAAAASUVORK5CYII=\") 3 18, auto; }\n\n.cursor__brush {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAN5JREFUOI2l0r1OAkEUBeDPtRNqKnsMoTKBhB4rI6+i+BY2/sCbQMsTUNgRsTOx4AWIhYVazGxcddcdwunmzpxzz9x72BMHFfUmztCO5zUW2NYJZLhCCzOsYr2LETaY4KOsa4YHnP7juIf7+PYPrmvIOfoYF7sS/tzCY4LAEsdowGEsnkfya4IAvKOD59xB2/fAUrDCCRXD2AW5wFpYVSq6eCoWmrjZQeAWR0UHWyEkvQTyAC94+32RCSHp15DvFBJcFuVLYc9zP6N8ETtP8VklkKOBobgqYWCLMtt74wuWPiOg5kawFgAAAABJRU5ErkJggg==\") 8.8 8.3, auto; }\n\n.cursor__circle {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBg4KOhzE+JVaAAAAUElEQVQoz2NgQAXFDMWoAkxoCmwZbPErwACUK2BB4/8hpEGFQQVVgJGhGO7uPwwVDHwMDAyfGDrgJh8m6AaCVqCDNQxr8PsCnT8QIXkYXQEAlwsJnF2CXYYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMTRUMTA6NTg6MjgrMDI6MDApPXlJAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTE0VDEwOjU4OjI4KzAyOjAwWGDB9QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=\") 8.8 8.3, auto; }\n\n.cursor__rect {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAQAAAC1+jfqAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADdcAAA3XAUIom3gAAAAHdElNRQfiBg4KOhzE+JVaAAAAUElEQVQoz2NgQAXFDMWoAkxoCmwZbPErwACUK2BB4/8hpEGFQQVVgJGhGO7uPwwVDHwMDAyfGDrgJh8m6AaCVqCDNQxr8PsCnT8QIXkYXQEAlwsJnF2CXYYAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTgtMDYtMTRUMTA6NTg6MjgrMDI6MDApPXlJAAAAJXRFWHRkYXRlOm1vZGlmeQAyMDE4LTA2LTE0VDEwOjU4OjI4KzAyOjAwWGDB9QAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAAASUVORK5CYII=\") 8 8, auto; }\n\n.cursor__hand {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAARFJREFUWIXt07EuBFEUgOEPa6kRERGt4AW8wSYK0XsAEoVtJUq24Ak8gUq8gU4hEqUQhU6BRKXQoJgrmNjZO5MZG8n8yc09c+bOOf/M3EtNTc0/pIUdDKTyC9jHeNUC93jHHNZwgjEchfx6nmKDBQSaYR7GFlaxFK4/8xPYxnQVAr89n67TRgebVQt0YzTMI/0SiKbvAkV4kuz2M7yG+BLPIb7BdYgPymjYwhVWUgIxo9OreMwvWMQ8jiXHrpm9/AcvOdZ2pSH53LFv/X1slCEAM3gsILBclgDJXnjLKTBbpgDs5mh+V3ZzGMJppMBeFQIw5evMZ43JqgTgvEfzh9hCjYICh7jIuH9bsG5NTc3f8wFebnUsLi7PNQAAAABJRU5ErkJggg==\") 16 15, auto; }\n\n.cursor__fist {\n  cursor: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAANJJREFUWIXt1C9rwlEUh/GPf4IgDOuS72WvQLDbBaNpxbh1217E2tLa2rBaLFYtW9pgTNiWBBGn9/zwYrkPnHS/nPNwuPdSKBQKF6YRzHdwhy6uMcAcn2f2+pcRfvdqiRfco5ZbYHxAYLdmmKKVS+D2hMC2xjmG9/CRKPCY2rQeEBihnZi9yiHwHsgmv4qIwFMguwhkk2lhLe0O3OQQgGHC8IXYZkPU8XpCoJ9r+JbJkeE/gp9QlVW9HTlb4SvSrFlB4BkP2OB7r+YV+hUKhcJl+QMwI1gB4xGC6wAAAABJRU5ErkJggg==\") 16 15, auto; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services */ "./src/app/services/index.ts");
/* harmony import */ var _tools_components_control_tool_control_tool_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tools/components/control-tool/control-tool.component */ "./src/app/modules/tools/components/control-tool/control-tool.component.ts");
/* harmony import */ var _tools_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tools/components */ "./src/app/modules/tools/components/index.ts");
/* harmony import */ var _tools_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tools/enums */ "./src/app/modules/tools/enums/index.ts");
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
    function CanvasComponent(componentFactoryResolver, canvasService, injector, guiService) {
        var _this = this;
        this.componentFactoryResolver = componentFactoryResolver;
        this.canvasService = canvasService;
        this.injector = injector;
        this.guiService = guiService;
        this.title = 'Canvas';
        this.loadComponent = function (tool) {
            _this.vcr.clear();
            if (!tool) {
                return;
            }
            var componentFactory = _this.componentFactoryResolver
                .resolveComponentFactory(_this.getComponentByGroup(tool.group));
            var componentRef = _this.vcr.createComponent(componentFactory);
        };
    }
    CanvasComponent.prototype.ngOnInit = function () {
        this.guiService.tool$
            .subscribe(this.loadComponent);
    };
    CanvasComponent.prototype.getComponentByGroup = function (group) {
        switch (group) {
            case _tools_enums__WEBPACK_IMPORTED_MODULE_4__["ToolGroupEnum"].Default:
                return _tools_components__WEBPACK_IMPORTED_MODULE_3__["PointerToolComponent"];
            case _tools_enums__WEBPACK_IMPORTED_MODULE_4__["ToolGroupEnum"].Drawing:
                return _tools_components__WEBPACK_IMPORTED_MODULE_3__["DrawingToolComponent"];
            case _tools_enums__WEBPACK_IMPORTED_MODULE_4__["ToolGroupEnum"].Geomentry:
                return _tools_components__WEBPACK_IMPORTED_MODULE_3__["GeometryToolComponent"];
            case _tools_enums__WEBPACK_IMPORTED_MODULE_4__["ToolGroupEnum"].Control:
                return _tools_components_control_tool_control_tool_component__WEBPACK_IMPORTED_MODULE_2__["ControlToolComponent"];
            default:
                return _tools_components__WEBPACK_IMPORTED_MODULE_3__["PointerToolComponent"];
        }
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
            styles: [__webpack_require__(/*! ./canvas.component.scss */ "./src/app/components/canvas/canvas.component.scss")],
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"],
            _services__WEBPACK_IMPORTED_MODULE_1__["CanvasService"],
            _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"],
            _services__WEBPACK_IMPORTED_MODULE_1__["GuiService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shapes_circle_circle_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shapes/circle/circle-shape */ "./src/app/modules/tools/shapes/circle/circle-shape.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services */ "./src/app/services/index.ts");
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
    function CircleComponent(canvasService) {
        this.canvasService = canvasService;
    }
    CircleComponent.prototype.handleMouseEnter = function () {
        this.canvasService.hoveredShape$.next(this.circle);
    };
    CircleComponent.prototype.handleMouseLeave = function () {
        this.canvasService.hoveredShape$.next(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appCircle'),
        __metadata("design:type", _shapes_circle_circle_shape__WEBPACK_IMPORTED_MODULE_1__["CircleShape"])
    ], CircleComponent.prototype, "circle", void 0);
    CircleComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[appCircle]',
            template: "\n    <svg:circle\n      [attr.cx]=\"circle.cx\"\n      [attr.cy]=\"circle.cy\"\n      [attr.r]=\"circle.r\"\n      [attr.fill]=\"circle.fill\"\n      [attr.stroke]=\"circle.stroke\"\n      [attr.stroke-width]=\"circle.strokeWidth\"\n      (mouseenter)=\"handleMouseEnter()\"\n      (mouseleave)=\"handleMouseLeave()\"\n    />\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["CanvasService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gui_gui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/gui/gui.service */ "./src/app/services/gui/gui.service.ts");
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
    function ColorPickerComponent(guiService) {
        this.guiService = guiService;
    }
    ColorPickerComponent.prototype.ngOnInit = function () {
        this.color = this.guiService.currentStroke;
    };
    ColorPickerComponent.prototype.handleChange = function (color) {
        this.guiService.setStroke(color);
    };
    ColorPickerComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-color-picker',
            template: "\n    <input type=\"color\"\n      #colorPicker\n      [ngModel]=\"color\"\n      (ngModelChange)=\"handleChange($event)\">\n  "
        }),
        __metadata("design:paramtypes", [_services_gui_gui_service__WEBPACK_IMPORTED_MODULE_1__["GuiService"]])
    ], ColorPickerComponent);
    return ColorPickerComponent;
}());



/***/ }),

/***/ "./src/app/components/index.ts":
/*!*************************************!*\
  !*** ./src/app/components/index.ts ***!
  \*************************************/
/*! exports provided: commonComponents, MastheadComponent, OptionsBarComponent, PanelComponent, ToolbarComponent, ToolbarItemComponent, UsersComponent, CanvasComponent, ColorPickerComponent */
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

/* harmony import */ var _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./toolbar/toolbar.component */ "./src/app/components/toolbar/toolbar.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarComponent", function() { return _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"]; });

/* harmony import */ var _toolbar_item_toolbar_item_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toolbar-item/toolbar-item.component */ "./src/app/components/toolbar-item/toolbar-item.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolbarItemComponent", function() { return _toolbar_item_toolbar_item_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarItemComponent"]; });

/* harmony import */ var _users_users_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./users/users.component */ "./src/app/components/users/users.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "UsersComponent", function() { return _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"]; });

/* harmony import */ var _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./canvas/canvas.component */ "./src/app/components/canvas/canvas.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasComponent", function() { return _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_6__["CanvasComponent"]; });

/* harmony import */ var _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./color-picker/color-picker.component */ "./src/app/components/color-picker/color-picker.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ColorPickerComponent", function() { return _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_7__["ColorPickerComponent"]; });









var commonComponents = [
    _masthead_masthead_component__WEBPACK_IMPORTED_MODULE_0__["MastheadComponent"],
    _options_bar_options_bar_component__WEBPACK_IMPORTED_MODULE_1__["OptionsBarComponent"],
    _panel_panel_component__WEBPACK_IMPORTED_MODULE_2__["PanelComponent"],
    _toolbar_toolbar_component__WEBPACK_IMPORTED_MODULE_3__["ToolbarComponent"],
    _toolbar_item_toolbar_item_component__WEBPACK_IMPORTED_MODULE_4__["ToolbarItemComponent"],
    _users_users_component__WEBPACK_IMPORTED_MODULE_5__["UsersComponent"],
    _canvas_canvas_component__WEBPACK_IMPORTED_MODULE_6__["CanvasComponent"],
    _color_picker_color_picker_component__WEBPACK_IMPORTED_MODULE_7__["ColorPickerComponent"]
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
            template: "\n    <app-panel>\n      <header>{{title}}</header>\n      <app-color-picker></app-color-picker>\n    </app-panel>\n  "
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

module.exports = ":host {\n  display: flex;\n  height: 100%;\n  width: 100%; }\n\n.panel {\n  position: relative;\n  background-color: white;\n  font-size: 12px;\n  border-radius: 1px;\n  box-shadow: 0 1px 11px 0 rgba(0, 0, 0, 0.12);\n  border-radius: 5px;\n  color: #505458;\n  overflow: auto;\n  width: 100%; }\n\n.panel__header {\n    font-weight: 600;\n    cursor: default;\n    margin-bottom: 10px;\n    padding: 5px; }\n\n.panel__content {\n    line-height: 16px;\n    padding: 5px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
            template: "\n    <div class=\"panel\">\n      <div class=\"panel__header\">\n        <ng-content select=\"header\"></ng-content>\n      </div>\n      <div class=\"panel__content\">\n        <ng-content></ng-content>\n      </div>\n    </div>\n  ",
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shapes_polyline_polyline_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shapes/polyline/polyline-shape */ "./src/app/modules/tools/shapes/polyline/polyline-shape.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services */ "./src/app/services/index.ts");
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
    function PolylineComponent(canvasService) {
        this.canvasService = canvasService;
    }
    PolylineComponent.prototype.handleMouseEnter = function () {
        this.canvasService.hoveredShape$.next(this.polyline);
    };
    PolylineComponent.prototype.handleMouseLeave = function () {
        this.canvasService.hoveredShape$.next(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appPolyline'),
        __metadata("design:type", _shapes_polyline_polyline_shape__WEBPACK_IMPORTED_MODULE_1__["PolylineShape"])
    ], PolylineComponent.prototype, "polyline", void 0);
    PolylineComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[appPolyline]',
            template: "\n    <svg:polyline\n      [attr.points]=\"polyline.toString()\"\n      [attr.fill]=\"polyline.fill\"\n      [attr.stroke]=\"polyline.stroke\"\n      [attr.stroke-width]=\"polyline.strokeWidth\"\n      [attr.stroke-linecap]=\"polyline.strokeLinecap\"\n      (mouseenter)=\"handleMouseEnter()\"\n      (mouseleave)=\"handleMouseLeave()\"\n    />\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["CanvasService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shapes_rect_rect_shape__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @shapes/rect/rect-shape */ "./src/app/modules/tools/shapes/rect/rect-shape.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services */ "./src/app/services/index.ts");
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
    function RectComponent(canvasService) {
        this.canvasService = canvasService;
    }
    RectComponent.prototype.handleMouseEnter = function () {
        this.canvasService.hoveredShape$.next(this.rect);
    };
    RectComponent.prototype.handleMouseLeave = function () {
        this.canvasService.hoveredShape$.next(null);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('appRect'),
        __metadata("design:type", _shapes_rect_rect_shape__WEBPACK_IMPORTED_MODULE_1__["RectShape"])
    ], RectComponent.prototype, "rect", void 0);
    RectComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: '[appRect]',
            template: "\n    <svg:rect\n      [attr.x]=\"rect.x\"\n      [attr.y]=\"rect.y\"\n      [attr.width]=\"rect.width\"\n      [attr.height]=\"rect.height\"\n      [attr.fill]=\"rect.fill\"\n      [attr.stroke]=\"rect.stroke\"\n      [attr.rx]=\"rect.rx\"\n      [attr.ry]=\"rect.ry\"\n      [attr.stroke-width]=\"rect.strokeWidth\"\n      (mouseenter)=\"handleMouseEnter()\"\n      (mouseleave)=\"handleMouseLeave()\"\n    />\n  ",
            changeDetection: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ChangeDetectionStrategy"].OnPush,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["CanvasService"]])
    ], RectComponent);
    return RectComponent;
}());



/***/ }),

/***/ "./src/app/components/socket-state/socket-state.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/socket-state/socket-state.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon {\n  position: absolute;\n  top: 5px;\n  right: 10px;\n  background-size: contain;\n  width: 32px;\n  height: 32px; }\n\n.icon__socket-connected {\n  background-image: url(\"data:image/png;base64,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\"); }\n\n.icon__socket-disconnected {\n  background-image: url(\"data:image/png;base64,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\");\n  -webkit-animation: blink 2s infinite ease-in-out;\n          animation: blink 2s infinite ease-in-out;\n  opacity: 1; }\n\n@-webkit-keyframes blink {\n  45% {\n    opacity: 0.4; } }\n\n@keyframes blink {\n  45% {\n    opacity: 0.4; } }\n"

/***/ }),

/***/ "./src/app/components/socket-state/socket-state.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/socket-state/socket-state.component.ts ***!
  \*******************************************************************/
/*! exports provided: SocketStateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketStateComponent", function() { return SocketStateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocketStateComponent = /** @class */ (function () {
    function SocketStateComponent() {
    }
    SocketStateComponent.prototype.getConnectionClass = function () {
        return this.state ?
            'icon__socket-connected' : 'icon__socket-disconnected';
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], SocketStateComponent.prototype, "state", void 0);
    SocketStateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-socket-state',
            template: "\n    <div class=\"icon\" [ngClass]=\"getConnectionClass()\">\n  ",
            styles: [__webpack_require__(/*! ./socket-state.component.scss */ "./src/app/components/socket-state/socket-state.component.scss")]
        })
    ], SocketStateComponent);
    return SocketStateComponent;
}());



/***/ }),

/***/ "./src/app/components/toolbar-item/toolbar-item.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/components/toolbar-item/toolbar-item.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@media screen and (min-width: 961px) {\n  :host {\n    margin-bottom: 10px; } }\n\n.tool__icon {\n  width: 20px;\n  height: 20px;\n  background-size: contain; }\n\n.tool__icon--pointer {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAUJJREFUWIXt1r8rBnEcB/CXx2NgIFIWZWCRehbbM/APsDyZLbLYJP+AsthJNmVkYTAoRVJGFguDSQmjRJzhPDnlx3meO9+Ud11d1/e+n1ffu/veh/+kS3teEzemHLeCO5xnDSikHNeCLYxlDUibdUR4wkRIQPWYCQ2IMI+GkIAIi9K/R7kAIqyhKSQgwiaaa5k4q+UbxTZaQwFgGLvoDAWAQeyjOxQA+nGAvlAA6HlFlEIBoAt7KIcA3OIUx5hE22cDixkVPME4rnCNx7Q31rMCR4nzEh5w+ZPi9QA2MCT+5KqZrnGuVEluxaveHl0lcf1e/OLlCljyftWKuEgg5vIELPj4/z+bANyI27fMU/6kOHSIG9YqYioPwHdZTgDOpO+2M8uA9/1B5bcBsJMAHIYAjOBZvEd8uf/nlQJ6QxT+23kBlMZat5Aux7gAAAAASUVORK5CYII=\"); }\n\n.tool__icon--pencil {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABDNJREFUaIHtmFtoXEUYx39zzsluNpsmkaZeEhOtuWwa27RpxDxEC1WsilUULFTwqQkotS8WZSEFIWCRiPhSsGkNavGlfShJfBEt9ALFG0KlrYUmGlOyaba5mL1mt9mzZ3yIWZKT3e62ye4eMf/HmW9mfv/zfXOGGVjTmv7fEvkGWNCnPT0PUVDQIxT1aaGoxWDEjFjsTyPOB++91dGfapwlDHzc0/Om3VH0laZpqrlPAnORyJmDHe27ko1dNiDX6u7t3ecodHypaZqSKmY2FK5p2/lM6MKZ73809+U1A929vfscNnuvqqpJOSQQnPERjUYwIKrE9Zout/vm4piUrrOtKb+/tcXlejfVF1wMD6BAIaq61xyXFwNTfn+rIflu25amzQ11tcNGPC4X95vhE+1SNpvnyrkBb19nR+zsJxcUKUsBmjc11rjqaofjhiEhNTwAQtjMTVqWeZfI29fZoV8ZOK7oEaFLHW2nG4Rg+6bGGkWIP64NDtWEA0GRFH5eg+aGnGVgMTyA8dsp9HPdIOerZ6uroba2qmoyGo2EU80hDPW0uS0nv1Ez/IKk93dkdAbxSBujnpvEYnFn+f0bYuPe8RhgLpevu94/eNQ8d9YzkAp+QfFLp5j+bA8zMz4AnLZCZ0vzdoBEJgyDiwSL3042PqsZSAcvpSQ8NsHcjes4vT8Tdu0GIbCpmm0hE4bBL0qR/cUu9/6kpZU1A96+zg796jdp4W8H/uXyT1I8/hOzrt0gFGyqZqt4cMPImO/vHV0HDoRSrZOVkzgBH5vNDH4x0MONTL52jIIiZ6DErtU3NTXdutNaq56BlcADEJikKDqm2ze/sDEdPKzyObBieECsK5Pa+pqWhgzgYRX/QmnhyRD+iTe2Nbxz9HKm667KHvCe7uzQr6WB96w+PKyCgXzCwwoN5BseVmDACvBwjwasAg/3YCAT+JBngrkcwMNdGrAaPNzFOTAxcKjdavCQYQYmBg61z10e+Nxq8JCBASvDQxoDVoeHOxj4L8BDik08PTbSNjd03nIbNpmW3Qem/P5Wo8DxrVr9pEMOngE9uqTfSvBgMuD1+R4DcVGBUlG0HrGxjcUmrAYPphJSpaxWoDTRWV6Huuc4wlFmSXjI4CBTyutQXz9G6FbAcvBgKqGKuq3PlTidL99XVpJok1LimY4ScjyAfegcSGPZJPmCB1MGfL7QOvfhI/x1YwyYhx8dHWPGH2C2+imCr3yEUJdeo/MJD0lKKBAM4z58hOERTwJ+QWYT+YYHkwGhzL+0BoJh9rs/5OwPvy4bkDBRXpF3eDA/qyjzfmK3I8T1GCdO9sPeV2l+vH5JWLz+2YCx5fn6TJ8+sqklGZC6ri7AA0hDcuJkP5euXk/E2AvtGb2Y5UpLMlAitC9e2rXjyrIgpSD8aEXVBEBhofBUVlbO5gpwTWvKsv4Bbxb4aK+jhpEAAAAASUVORK5CYII=\"); }\n\n.tool__icon--brush {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAnCAYAAABJ0cukAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAABV1JREFUWIXNWW1Mk1cUfs55WyhCqQIWdIr4NeMkxgxI5mYiiSZbXGKmgkynWaIoyz6IZHHxY0rIqJuZc3GauSrL1C0u1M1txhndkg0R5mxkoit+bAKBICA6bPkoH23v3Q+tTkpLWwrs+ffec85zn3PPufe9b17C/wgHtxa/IMHbITELhL3yTmtBzoEch68YGi5xvpCfn88TXMkfAdjwmEGKcyywbO37WXe8xY54AqZMk2J9ko4QYaUXl2qXdD7/mmFFdX9GHkJtfsE2A/t9iAeAqSxVZUWbv03uzziiCRx4t3gjQOsG8iNGglCcJQe2mOZ42IZG2sAo2nZsgUviDAOK30ECdyUjfX1hZpV7aEQSOLj5aLxQ1JcZiA88WjSxosxbW5BRA4xQC0lFfSg48QDA44TDdfrwpuOxwAhU4OBWUw6IPhs0kcTZBlXcQv/7LwQw5psSyUU/gBA2aDJCklZ2iuFtIQf2gxEVOkL51rAlYNzyzTJmWhRKTpJsGZY9YMw/MQqunusMTAwVp4CQJLFwWCrQZrudE0rxAEDgnesNWb8MeQU2rNw0xeUQVYnjp10YrR0zPySkEoeyDRlrCCSHvAIuJz4Bs6a+uWa+raO1JASUe93igSF+kb3x8qbFILzofq5rqk0POgkhnFLK3HWFmblu8UAg95AAkZeRF+GSqpNEGP3fcVuHNUmj0pRoNBFJ/nIJgUYmXrzOkHmsr23IKuDksM3MSOrPVtdSm26z+VkJgRMqKeZkGzJK+zMPehNfvHhRJ6WcR0TTpJRaImqvrqq1lp6qMDIQ7it2kn5yiU4Xk96vbiGsxJS3vnD5IV8cqmCFV1ZW6p1O5w4hxCpmDgcAovvrUXv9ll+lrWupTZ8EeCQhhDguoXozp3BZ00AcQSVgNpvTent7TzKzntlTqn58LG7VNPvF1SeJWgnk5uzIOumvloA3sdlsTmbmEiKK9eYTP3EsmAnN9V6/xR+DrbNVH6Ya9bY20rU2+71XrgaiJ6A9YLFYorq6uv4goun++F85fw2Xyqp8+kiJ74RKyfv0qKEuEC1uBNRC3d3dH/orHgBmz50JAP0mIST+ZkbuvuIPTgeioS/8bqGKigsLhMAecu9UP+HZTsIOUAG1da7e+/3uGwGp7Qd+ifny7O5x0WExl59QJ48NdqIr56/hn9v3kDhjQlbW6qWmYHn6YsAWktKkGM9dMOtoTNDigUftBCBuMDx9wV+X71rgzXim8khkUdmlq1bRMCGSvR46AUFKqQ0J0QOobM6mw8bSjV1RHPNFuCbyeJdTNiq9YqZLZV9zw1b+ql1awxWooSV9SCYkovaQED2AKloV/3m9o2L7PVFvQAcMDy29j5zi1TPAdL/b7jqroZAaY5TEoCYUQvw1KMV9wCue7SyI4JjugRyrek6hzG7EtZ6foFPGBzWZEMLOzL8FFewFTFQg9Mrkbb6cGh0WNDmq0Cs6MUuzCBzkFYqIvkpNTbUHFewFDAArnntnVxxN8fnKjORYPB2xHDHKpKAmEkJYmbkgqGAfeLiUcfqpc3ta7A3tsjnaPRZOUUgKewbRnACdkoBB3L5dRLQqJSWlcZB6PfDwKvnSzOz2OHXiU1pKaHOP9cgONDkt6JZtcEqff3q8QgjRIYRYmpaW9mMI9HrAY0l/tZiiaqxXyu86b86WkI+5ajgKDDXmaJZgFMf4w/8zEb2ekpJyM2SK+8BrTxSXf7ymVTTsbHPdinMnokIYZkcsQYzvI7RLSnmCiPalpqaWhVivBwZs6uLSPfN7FFter8uRPD1iHkVSrE4IoQXgANBGRC0AagD8KaX8nZnPhvqk8YV/AQrl7L6UheIyAAAAAElFTkSuQmCC\");\n  background-position-y: 2px; }\n\n.tool__icon--rect {\n  background-image: url(\"data:image/png;base64,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\");\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9); }\n\n.tool__icon--circle {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAA55JREFUaIHNmk1LFVEYx393tBelzJuptAg1Cu0bZDspUPwAYWJYG0MjpDZtqkVBJH6EaFUbF0VF2ygIuRYUElKS4UqyN69eDYSKa4tnLk5nnnPv3HFmvD84C8+cl/+ce+Z5OccU0dAEdAHHgWPAESAN7HWfrwHLwBwwC2SAF8CPiOYPRRoYAaaAjRAlj7zIMFCfpPBmYBxZ1TDCtbIKjCG/ZGxUA1fcyaISbpYcMApURS2+DXhThpB1YB5475Z5ty5o/9dAa1Tie4GVEhMuAXeBPndiRxnHQRaiH7gHZEuMmQV6tip+EPhTZJJ3wGlgZ4ixdyEvPF1k/D/AwFbE5y0DL7jCo6IfWLTMlSfES/RiX/kJoC4K1Qb1wEPLnL+B7qADtWHf81cjlaxzzTJ3Fmgp1bkau7UZikevyohFQ4YSJvaypWMSK29yw6Llkq1DM7qTmohbaRGeKHpWgEat8bjSeIF4PtigpIFviq47WkMttonSVIblLH5dqxgBoPbRvE1Upp0UMINf3wVvIy0kroTVL6D9CpOFh03KwyXChQdxUYNEqqaHbnCQTMrkEeL9KoV14KlRlwK6HCQNNHkeu6Ty0TR1OkgOazIVs5gwZJS6DoDP/L+31tHj+e2mGtnWXq2fHMQHeFlEPpBK4y/w3ahLO2wefRT4lYyeUKwZf9dV4lYpCwf/W+3ZDiEBMXfLqoOcmHk5SGV+xDuQiNlL1kGO+7zsJkDmsw0cRiyRlzkHOas06YxfT9mcUOpmHXQHcTJmMWHQNGVAgjnz+CRLZQVztfizxTywv9Aggz8i7Utcpp1B/PpeeRsMKw2mk9VoxQE+UOKUpB49oT+TpFIL5/HrygH7zIZjSsMvJHz5YNCAxD+mrtta4yb8Wc8Gcty3HaSAZ4qeZeCArdOo0mEDOe5LmpsWLReLdapCLhe0jiMxijWxLeQkAcKcVuRn0ga4HovcTVLALcvcS8ChoAP1YD9ef4w/CYqCBvQ9v4FkYqfKHXAA+wXHV+SsJhWBcAcxlZq1KXjc/rCDD+DPQ71lBnmRmhBj1yIeVnNS3pUPLb5AN6Uv5HLAfeAc0I4/7MWta0dW+wGlr2t/EmLb2GhBj5eKrdwC8NEtCxS/LNSsTeAPNihVyOWC5uyiKsuInY81I2xEzuejvLHPIeGB1cPGQT1yxD2J3VoVK3kkJB5CCcyCEoUZBLHhXUgq2gEcRXxF4XZnFTEE3n+3eYk4py3xD4EHMY6gLCAAAAAAAElFTkSuQmCC\");\n  -webkit-transform: scale(0.9);\n          transform: scale(0.9); }\n\n.tool__icon--hand {\n  background-image: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAALEwAACxMBAJqcGAAAAjdJREFUeJztmTFLHEEUx3+G0wgG1ERJYSmJhXKIXUoJqMRokSIWKSxUxE/gN7BOl1JQ0CrpLAKxsFDETgiEFN6hIF6RiBhEMeJZ7Mndjmeye/vmbS68HwzHzuy8ee9/O29mZ8EwDMMwDMMwDMMwfNEIPAcexOjTBbT5cUeXLLAPFIEtAjH+RAOwXLr/Ahj36p0C6wTB3JbhirYsMA+8rKgbdO7f9OlcxqfxEk+d6/bS7wtgg/ITMQJ8Bp4497vXosSZk9K8JTwdRmP0bZByIk0B3FzQFKHPGFAAfgGzEk6kKUBcMsASwZRqAd4DD5MarScBWgkvi80ILJP1JEC1eZ84F9STAF4wAdJ2IG1MgBTHvi+BufVim55qaGyFXaaAS+C1U/8KeAPMOPXPgGngvIqtorh3HvhK+OVGsnQmdU5qCvQDH4FVoFvIZhSuFMe6lwxwSPlfOQJ6K9p9PgEtXiOLSAd3HfsBDJTad6q0S5RrPCfIOKxx18ET4APBqY4PAU5VIovIY8rHXlolL+G4VBI8BiaA30L2olCQMCK5EdomON/T4kBxrFh8QmcKLGgFFJdWYA//ArzTCqgWBvCX/W9Lj1o0NTKHv+BFEqAGK/gRYFEziCQ8Ar4hL8CQZhBJ6QPOkAv+O//QFjgqk8gJMKHsuxhfSB78NcH3ADE0j8TyAjYKBMurGJoC/BSwsS9gI4SmADkBG7sCNkJoZ9MewgexRae9+Je2HLpvnIZhGIZhGIZhGMZ/yQ3WDH049ZCqDAAAAABJRU5ErkJggg==\");\n  -webkit-transform: scale(1.5);\n          transform: scale(1.5); }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/animations */ "./node_modules/@angular/animations/fesm5/animations.js");
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
    ToolbarItemComponent.prototype.getIconClass = function () {
        return "tool__icon--" + this.tool.type;
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
            template: "\n    <div class=\"tool\" [@toolState]=\"toolState\">\n      <div class=\"tool__icon\" [ngClass]=\"getIconClass()\" (mousedown)=\"handleSelect($event)\"></div>\n    </div>\n  ",
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

module.exports = ".toolbar-list {\n  display: flex;\n  justify-content: space-around;\n  flex-wrap: wrap;\n  margin-bottom: 5px; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tools */ "./src/app/modules/tools/index.ts");
/* harmony import */ var _services_gui_gui_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/gui/gui.service */ "./src/app/services/gui/gui.service.ts");
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
    function ToolbarComponent(toolList, guiService) {
        this.toolList = toolList;
        this.guiService = guiService;
        this.title = 'Tools';
    }
    ToolbarComponent.prototype.ngOnInit = function () {
        this.guiService.setTool(this.toolList[0]);
    };
    ToolbarComponent.prototype.isSelected = function (tool) {
        return this.guiService.isCurrentTool(tool);
    };
    ToolbarComponent.prototype.handleSelect = function (tool) {
        this.guiService.setTool(tool);
    };
    ToolbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-toolbar',
            template: "\n    <app-panel>\n      <header>{{title}}</header>\n      <div class=\"toolbar-list\">\n        <app-toolbar-item\n          *ngFor=\"let tool of toolList\"\n          [tool]=\"tool\"\n          [selected]=\"isSelected(tool)\"\n          (select)=\"handleSelect($event)\">\n        </app-toolbar-item>\n      </div>\n    </app-panel>\n  ",
            styles: [__webpack_require__(/*! ./toolbar.component.scss */ "./src/app/components/toolbar/toolbar.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_tools__WEBPACK_IMPORTED_MODULE_1__["TOOL_LIST_TOKEN"])),
        __metadata("design:paramtypes", [Object, _services_gui_gui_service__WEBPACK_IMPORTED_MODULE_2__["GuiService"]])
    ], ToolbarComponent);
    return ToolbarComponent;
}());



/***/ }),

/***/ "./src/app/components/user/user.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/components/user/user.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user {\n  display: flex;\n  align-items: center; }\n\n.user__name {\n  font-weight: bold;\n  margin-right: 5px; }\n\n.user__icon {\n  width: 30px;\n  height: 30px;\n  margin-right: 10px;\n  background-size: contain; }\n\n.user__icon.user__icon--1 {\n    background-image: url(\"data:image/png;base64,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\"); }\n\n.user__icon.user__icon--2 {\n    background-image: url(\"data:image/png;base64,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\"); }\n\n.user__icon.user__icon--3 {\n    background-image: url(\"data:image/png;base64,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\"); }\n\n.user__icon.user__icon--4 {\n    background-image: url(\"data:image/png;base64,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\"); }\n\n.user__icon.user__icon--drawing {\n    background-image: url('animated-pencil.gif'); }\n"

/***/ }),

/***/ "./src/app/components/user/user.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/user/user.component.ts ***!
  \***************************************************/
/*! exports provided: UserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserComponent", function() { return UserComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _enums_user_states_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @enums/user-states.enum */ "./src/app/enums/user-states.enum.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services/user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UserComponent = /** @class */ (function () {
    function UserComponent(userService) {
        this.userService = userService;
        this.userClass = this.getRandomUserClass();
    }
    UserComponent.prototype.getRandomUserClass = function () {
        var randomIndex = Math.floor(Math.random() * 4) + 1;
        return "user__icon--" + randomIndex;
    };
    UserComponent.prototype.isDrawing = function () {
        return this.user.state === _enums_user_states_enum__WEBPACK_IMPORTED_MODULE_1__["UserStates"].DRAWING;
    };
    UserComponent.prototype.isMe = function () {
        return this.user.me;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], UserComponent.prototype, "user", void 0);
    UserComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user',
            template: "\n    <div class=\"user\">\n      <div class=\"user__icon\" [ngClass]=\"userClass\"></div>\n      <div class=\"user__name\">{{user.username}}</div>\n      <span *ngIf=\"isMe()\">(you)</span>\n      <span *ngIf=\"isDrawing()\"\n        class=\"user__icon user__icon--drawing\">\n      </span>\n    </div>\n  ",
            styles: [__webpack_require__(/*! ./user.component.scss */ "./src/app/components/user/user.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
    ], UserComponent);
    return UserComponent;
}());



/***/ }),

/***/ "./src/app/components/users/users.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/components/users/users.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".user-list--active {\n  opacity: 1; }\n\n.user-list--inactive {\n  opacity: 0.4; }\n"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/socket/socket.service */ "./src/app/services/socket/socket.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/user/user.service */ "./src/app/services/user/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var UsersComponent = /** @class */ (function () {
    function UsersComponent(socketService, userService) {
        this.socketService = socketService;
        this.userService = userService;
        this.title = 'Users';
    }
    UsersComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.socketService.getConnectionState()
            .subscribe(function (connectionState) {
            _this.connectionState = connectionState;
        });
    };
    UsersComponent.prototype.getConnectionClass = function () {
        return this.connectionState ?
            'user-list--active' : 'user-list--inactive';
    };
    UsersComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-users',
            template: "\n    <app-panel>\n      <header>\n        {{this.title}}\n        <app-socket-state [state]=\"connectionState\"></app-socket-state>\n      </header>\n      <div class=\"user-list\" [ngClass]=\"getConnectionClass()\">\n        <app-user *ngFor=\"let user of userService.users$ | async\" [user]=\"user\"></app-user>\n      </div>\n    </app-panel>\n  ",
            styles: [__webpack_require__(/*! ./users.component.scss */ "./src/app/components/users/users.component.scss")]
        }),
        __metadata("design:paramtypes", [_services_socket_socket_service__WEBPACK_IMPORTED_MODULE_1__["SocketService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]])
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
/* harmony import */ var _services_gui_gui_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @services/gui/gui.service */ "./src/app/services/gui/gui.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
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
    function CursorableDirective(elRef, r, guiService) {
        var _this = this;
        this.elRef = elRef;
        this.r = r;
        this.guiService = guiService;
        this.prefix = 'cursor';
        this.handleChangeCursor = function (cursor) {
            _this.r.removeAttribute(_this.svg, 'class');
            _this.r.addClass(_this.svg, _this.prefix + "__" + cursor);
        };
        this.svg = this.elRef.nativeElement;
    }
    CursorableDirective.prototype.ngOnInit = function () {
        this.guiService.cursor$.subscribe(this.handleChangeCursor);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])('appCursorable'),
        __metadata("design:type", String)
    ], CursorableDirective.prototype, "cursor", void 0);
    CursorableDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[appCursorable]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"],
            _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _services_gui_gui_service__WEBPACK_IMPORTED_MODULE_0__["GuiService"]])
    ], CursorableDirective);
    return CursorableDirective;
}());



/***/ }),

/***/ "./src/app/directives/index.ts":
/*!*************************************!*\
  !*** ./src/app/directives/index.ts ***!
  \*************************************/
/*! exports provided: MouseServiceDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mouse_mouse_service_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mouse/mouse-service.directive */ "./src/app/directives/mouse/mouse-service.directive.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "MouseServiceDirective", function() { return _mouse_mouse_service_directive__WEBPACK_IMPORTED_MODULE_0__["MouseServiceDirective"]; });





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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @math */ "./src/app/math/index.ts");
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @services/socket/socket.service */ "./src/app/services/socket/socket.service.ts");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services */ "./src/app/services/index.ts");
/* harmony import */ var _tools_enums__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @tools/enums */ "./src/app/modules/tools/enums/index.ts");
/* harmony import */ var _enums_user_states_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @enums/user-states.enum */ "./src/app/enums/user-states.enum.ts");
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
    function MouseServiceDirective(elRef, socketService, userService, guiService) {
        var _this = this;
        this.elRef = elRef;
        this.socketService = socketService;
        this.userService = userService;
        this.guiService = guiService;
        this.isBtnPressed = function (event) {
            return event.buttons === 1;
        };
        this.toSVGCoordinate = function (_a) {
            var x = _a.x, y = _a.y;
            var p = _this.elRef.nativeElement.createSVGPoint();
            p.x = x;
            p.y = y;
            var point = p.matrixTransform(_this.elRef.nativeElement.getScreenCTM().inverse());
            return new _math__WEBPACK_IMPORTED_MODULE_3__["Point2D"](point.x, point.y);
        };
        this.mouseDowns$ = this.fromEvent('mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.mouseEventToCoordinate));
        this.mouseMoves$ = this.fromEvent('mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(this.isBtnPressed), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.mouseEventToCoordinate));
        this.mouseUps$ = this.fromEvent('mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.mouseEventToCoordinate));
        this.touchStarts$ = this.fromEvent('touchstart').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.touchEventToCoordinate));
        this.touchMoves$ = this.fromEvent('touchmove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.touchEventToCoordinate));
        this.touchEnds$ = this.fromEvent('touchend').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.touchEventToCoordinate));
        this.starts$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.mouseDowns$, this.touchStarts$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.toSVGCoordinate));
        this.moves$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.mouseMoves$, this.touchMoves$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["throttleTime"])(5), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.toSVGCoordinate));
        this.ends$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.mouseUps$, this.touchEnds$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.toSVGCoordinate));
        this.startDrawing$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.mouseDowns$, this.touchStarts$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.guiService.tool$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["filter"])(function (_a) {
            var point = _a[0], tool = _a[1];
            return tool.type !== _tools_enums__WEBPACK_IMPORTED_MODULE_7__["ToolTypeEnum"].Pointer;
        }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(_enums_user_states_enum__WEBPACK_IMPORTED_MODULE_8__["UserStates"].DRAWING));
        this.endDrawing$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.mouseUps$, this.touchEnds$).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(_enums_user_states_enum__WEBPACK_IMPORTED_MODULE_8__["UserStates"].IDLE));
        this.drawingState$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.startDrawing$, this.endDrawing$);
        this.withoutMoves$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(true), this.mouseMoves$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["mapTo"])(false), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["skip"])(1)))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["sample"])(this.mouseUps$));
        this.drawingState$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["withLatestFrom"])(this.userService.users$))
            .subscribe(function (_a) {
            var drawingState = _a[0], users = _a[1];
            users.filter(function (user) { return user.me; }).forEach(function (user) {
                _this.userService.changeState(user.id, drawingState);
            });
        });
    }
    MouseServiceDirective.prototype.fromEvent = function (name) {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["fromEvent"])(this.elRef.nativeElement, name)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (evt) { return evt.preventDefault(); }));
    };
    MouseServiceDirective.prototype.mouseEventToCoordinate = function (event) {
        return new _math__WEBPACK_IMPORTED_MODULE_3__["Point2D"](event.clientX, event.clientY);
    };
    MouseServiceDirective.prototype.touchEventToCoordinate = function (event) {
        var touch = event.changedTouches[0];
        return new _math__WEBPACK_IMPORTED_MODULE_3__["Point2D"](touch.clientX, touch.clientY);
    };
    MouseServiceDirective.prototype.listenDropsV2 = function (fn) {
        var _this = this;
        return this.starts$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (pStart) {
            var handler = fn(pStart);
            return _this.withoutMoves$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (withoutMoves) {
                withoutMoves ?
                    handler.next(withoutMoves) : handler.error(withoutMoves);
                handler.complete();
            }));
        }));
    };
    MouseServiceDirective.prototype.listenDragsV2 = function (fn) {
        var _this = this;
        return this.starts$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (pStart) {
            var handler = fn(pStart);
            return _this.moves$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (point) { return handler.next(point); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.ends$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () { return handler.complete(); }));
        }));
    };
    MouseServiceDirective.prototype.listenDrags$ = function (_a) {
        var _this = this;
        var create = _a.create, start = _a.start, next = _a.next, complete = _a.complete;
        return this.starts$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (pStart) {
            var shape = create(pStart);
            if (!shape) {
                return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["empty"])();
            }
            var handler = start(shape, pStart);
            return _this.moves$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function (pCurrent) { return next(shape, pStart, pCurrent, handler); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(_this.ends$), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["finalize"])(function () {
                complete(shape, true);
            }));
        }));
    };
    MouseServiceDirective.prototype.listenDrops$ = function (_a) {
        var _this = this;
        var create = _a.create, start = _a.start, complete = _a.complete;
        return this.starts$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["switchMap"])(function (point) {
            var shape = create(point);
            start(shape, point);
            return _this.withoutMoves$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])(function () { return complete(shape, true); }));
        }));
    };
    MouseServiceDirective.prototype.onMouseUp = function () {
        return this.fromEvent('mouseup').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.toSVGCoordinate));
    };
    MouseServiceDirective.prototype.onMouseDown = function () {
        return this.fromEvent('mousedown').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.toSVGCoordinate));
    };
    MouseServiceDirective.prototype.onMouseMove = function () {
        return this.fromEvent('mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(this.toSVGCoordinate));
    };
    MouseServiceDirective.prototype.onMouseLeave = function () {
        return this.fromEvent('mouseleave');
    };
    MouseServiceDirective.prototype.onEnd = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["merge"])(this.fromEvent('mouseup'), this.fromEvent('mouseleave'));
    };
    MouseServiceDirective = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"])({
            selector: '[appMouseService]'
        }),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"],
            _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_4__["SocketService"],
            _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services__WEBPACK_IMPORTED_MODULE_6__["GuiService"]])
    ], MouseServiceDirective);
    return MouseServiceDirective;
}());



/***/ }),

/***/ "./src/app/enums/socket-event.enum.ts":
/*!********************************************!*\
  !*** ./src/app/enums/socket-event.enum.ts ***!
  \********************************************/
/*! exports provided: SocketEventEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketEventEnum", function() { return SocketEventEnum; });
var SocketEventEnum;
(function (SocketEventEnum) {
    SocketEventEnum["SAVE_USERNAME"] = "save username";
    SocketEventEnum["CHANGE_STATE"] = "change state";
    SocketEventEnum["SHAPE_CHANGE"] = "change shape";
    SocketEventEnum["SHAPE_ADD"] = "shape add";
    SocketEventEnum["USER_JOIN"] = "user join";
    SocketEventEnum["USER_LEFT"] = "user left";
    SocketEventEnum["ALL_USERS"] = "all users";
    SocketEventEnum["START_DRAWING"] = "user starts drawing";
    SocketEventEnum["STOP_DRAWING"] = "user stop drawing";
    SocketEventEnum["CONNECT"] = "connect";
    SocketEventEnum["CONNECTION"] = "connection";
    SocketEventEnum["DISCONNECT"] = "disconnect";
    SocketEventEnum["CONNECT_ERROR"] = "connect_error";
})(SocketEventEnum || (SocketEventEnum = {}));


/***/ }),

/***/ "./src/app/enums/user-states.enum.ts":
/*!*******************************************!*\
  !*** ./src/app/enums/user-states.enum.ts ***!
  \*******************************************/
/*! exports provided: UserStates */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserStates", function() { return UserStates; });
var UserStates;
(function (UserStates) {
    UserStates["IDLE"] = "idle";
    UserStates["DRAWING"] = "drawing";
})(UserStates || (UserStates = {}));


/***/ }),

/***/ "./src/app/math/index.ts":
/*!*******************************!*\
  !*** ./src/app/math/index.ts ***!
  \*******************************/
/*! exports provided: Point2D */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _point2d__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./point2d */ "./src/app/math/point2d.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "Point2D", function() { return _point2d__WEBPACK_IMPORTED_MODULE_0__["Point2D"]; });





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
        return Point2D.subtract(p1, p2).divideBy(2).add(p1);
    };
    Point2D.subtract = function (p1, p2) {
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
    Point2D.prototype.isCorrect = function () {
        return this.x >= 0 && this.y >= 0;
    };
    return Point2D;
}());



/***/ }),

/***/ "./src/app/modules/tools/components/control-tool/control-tool.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/tools/components/control-tool/control-tool.component.ts ***!
  \*********************************************************************************/
/*! exports provided: ControlToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ControlToolComponent", function() { return ControlToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @directives */ "./src/app/directives/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services */ "./src/app/services/index.ts");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _tools_enums__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @tools/enums */ "./src/app/modules/tools/enums/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/socket/socket.service */ "./src/app/services/socket/socket.service.ts");
/* harmony import */ var _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @enums/socket-event.enum */ "./src/app/enums/socket-event.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var ControlToolComponent = /** @class */ (function () {
    function ControlToolComponent(canvasService, mouseService, socketService) {
        var _this = this;
        this.canvasService = canvasService;
        this.mouseService = mouseService;
        this.socketService = socketService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.handleSuccess = function (shape) {
            shape.setState(_tools_enums__WEBPACK_IMPORTED_MODULE_4__["ShapeStateEnum"].STABLE);
            _this.socketService.send(Object(rxjs__WEBPACK_IMPORTED_MODULE_5__["of"])(shape), _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_8__["SocketEventEnum"].SHAPE_CHANGE);
        };
    }
    ControlToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mouseService.listenDragsV2(function (pStart) {
            var handler = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
            var shape = _this.canvasService.hoveredShape;
            if (!shape) {
                handler.complete();
                return handler;
            }
            shape.setState(_tools_enums__WEBPACK_IMPORTED_MODULE_4__["ShapeStateEnum"].DRAGGING);
            handler.subscribe(Object(ramda__WEBPACK_IMPORTED_MODULE_3__["bind"])(shape.getDragHandler(pStart), shape), null, Object(ramda__WEBPACK_IMPORTED_MODULE_3__["partial"])(_this.handleSuccess, [shape]));
            return handler;
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["takeUntil"])(this.destroy$))
            .subscribe();
    };
    ControlToolComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    ControlToolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-control-tool',
            template: ""
        }),
        __metadata("design:paramtypes", [_services__WEBPACK_IMPORTED_MODULE_2__["CanvasService"],
            _directives__WEBPACK_IMPORTED_MODULE_1__["MouseServiceDirective"],
            _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]])
    ], ControlToolComponent);
    return ControlToolComponent;
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @directives */ "./src/app/directives/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @services */ "./src/app/services/index.ts");
/* harmony import */ var rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/Subject */ "./node_modules/rxjs-compat/_esm5/Subject.js");
/* harmony import */ var rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/observable/of */ "./node_modules/rxjs-compat/_esm5/observable/of.js");
/* harmony import */ var _services_shape_shape_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/shape/shape.service */ "./src/app/services/shape/shape.service.ts");
/* harmony import */ var _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @enums/socket-event.enum */ "./src/app/enums/socket-event.enum.ts");
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/socket/socket.service */ "./src/app/services/socket/socket.service.ts");
/* harmony import */ var _tools_enums__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @tools/enums */ "./src/app/modules/tools/enums/index.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function DrawingToolComponent(mouseService, canvasService, guiService, shapeService, socketService) {
        this.mouseService = mouseService;
        this.canvasService = canvasService;
        this.guiService = guiService;
        this.shapeService = shapeService;
        this.socketService = socketService;
        this.destroy$ = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    DrawingToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mouseService.listenDropsV2(function (pStart) {
            var handler = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            var circle = _this.shapeService.createCircle(pStart, true)
                .setState(_tools_enums__WEBPACK_IMPORTED_MODULE_8__["ShapeStateEnum"].STABLE)
                .seal();
            _this.canvasService.add(circle);
            handler.subscribe(function () { return _this.handleSuccess(circle); }, function () { return _this.handleFailed(circle); });
            return handler;
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$))
            .subscribe();
        this.mouseService.listenDragsV2(function (pStart) {
            var handler = new rxjs_Subject__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
            var polyline = _this.shapeService.createPolyline(pStart).seal();
            _this.canvasService.add(polyline);
            handler.subscribe(polyline.addPoint.bind(polyline), null, function () {
                polyline.isCorrect() ?
                    _this.handleSuccess(polyline) : _this.handleFailed(polyline);
            });
            return handler;
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(this.destroy$))
            .subscribe();
    };
    DrawingToolComponent.prototype.handleSuccess = function (shape) {
        shape.setState(_tools_enums__WEBPACK_IMPORTED_MODULE_8__["ShapeStateEnum"].STABLE);
        this.canvasService.update();
        this.socketService.send(Object(rxjs_observable_of__WEBPACK_IMPORTED_MODULE_4__["of"])(shape), _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_6__["SocketEventEnum"].SHAPE_ADD);
    };
    DrawingToolComponent.prototype.handleFailed = function (shape) {
        this.canvasService.remove(shape);
    };
    DrawingToolComponent.prototype.ngOnDestroy = function () {
        this.destroy$.next(true);
        this.destroy$.unsubscribe();
    };
    DrawingToolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-drawing-tool',
            template: ''
        }),
        __metadata("design:paramtypes", [_directives__WEBPACK_IMPORTED_MODULE_1__["MouseServiceDirective"],
            _services__WEBPACK_IMPORTED_MODULE_2__["CanvasService"],
            _services__WEBPACK_IMPORTED_MODULE_2__["GuiService"],
            _services_shape_shape_service__WEBPACK_IMPORTED_MODULE_5__["ShapeService"],
            _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_7__["SocketService"]])
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _directives__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @directives */ "./src/app/directives/index.ts");
/* harmony import */ var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services */ "./src/app/services/index.ts");
/* harmony import */ var _tools_enums__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @tools/enums */ "./src/app/modules/tools/enums/index.ts");
/* harmony import */ var _services_shape_shape_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @services/shape/shape.service */ "./src/app/services/shape/shape.service.ts");
/* harmony import */ var _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @services/socket/socket.service */ "./src/app/services/socket/socket.service.ts");
/* harmony import */ var _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @enums/socket-event.enum */ "./src/app/enums/socket-event.enum.ts");
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
    function GeometryToolComponent(mouseService, canvasService, guiService, shapeService, socketService) {
        var _this = this;
        this.mouseService = mouseService;
        this.canvasService = canvasService;
        this.guiService = guiService;
        this.shapeService = shapeService;
        this.socketService = socketService;
        this.destroy$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
        this.handleSuccess = function (shape) {
            shape.setState(_tools_enums__WEBPACK_IMPORTED_MODULE_6__["ShapeStateEnum"].STABLE);
            _this.canvasService.update();
            _this.socketService.send(Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["of"])(shape), _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_9__["SocketEventEnum"].SHAPE_ADD);
        };
    }
    GeometryToolComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.mouseService.listenDragsV2(function (pStart) {
            var handler = new rxjs__WEBPACK_IMPORTED_MODULE_1__["Subject"]();
            var shape = _this.createShape(pStart);
            _this.canvasService.add(shape);
            handler.subscribe(Object(ramda__WEBPACK_IMPORTED_MODULE_3__["bind"])(Object(ramda__WEBPACK_IMPORTED_MODULE_3__["partial"])(shape.transform, [pStart]), shape), null, Object(ramda__WEBPACK_IMPORTED_MODULE_3__["partial"])(_this.handleSuccess, [shape]));
            return handler;
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["takeUntil"])(this.destroy$))
            .subscribe();
    };
    GeometryToolComponent.prototype.createShape = function (point) {
        if (this.guiService.isCurrentShape(_tools_enums__WEBPACK_IMPORTED_MODULE_6__["SVGShapeEnum"].Rect)) {
            return this.shapeService.createRect(point);
        }
        if (this.guiService.isCurrentShape(_tools_enums__WEBPACK_IMPORTED_MODULE_6__["SVGShapeEnum"].Circle)) {
            return this.shapeService.createCircle(point);
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
        __metadata("design:paramtypes", [_directives__WEBPACK_IMPORTED_MODULE_4__["MouseServiceDirective"],
            _services__WEBPACK_IMPORTED_MODULE_5__["CanvasService"],
            _services__WEBPACK_IMPORTED_MODULE_5__["GuiService"],
            _services_shape_shape_service__WEBPACK_IMPORTED_MODULE_7__["ShapeService"],
            _services_socket_socket_service__WEBPACK_IMPORTED_MODULE_8__["SocketService"]])
    ], GeometryToolComponent);
    return GeometryToolComponent;
}());



/***/ }),

/***/ "./src/app/modules/tools/components/index.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/tools/components/index.ts ***!
  \***************************************************/
/*! exports provided: DrawingToolComponent, GeometryToolComponent, ControlToolComponent, PointerToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _drawing_tool_drawing_tool_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drawing-tool/drawing-tool.component */ "./src/app/modules/tools/components/drawing-tool/drawing-tool.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "DrawingToolComponent", function() { return _drawing_tool_drawing_tool_component__WEBPACK_IMPORTED_MODULE_0__["DrawingToolComponent"]; });

/* harmony import */ var _geometry_tool_geometry_tool_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./geometry-tool/geometry-tool.component */ "./src/app/modules/tools/components/geometry-tool/geometry-tool.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GeometryToolComponent", function() { return _geometry_tool_geometry_tool_component__WEBPACK_IMPORTED_MODULE_1__["GeometryToolComponent"]; });

/* harmony import */ var _control_tool_control_tool_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./control-tool/control-tool.component */ "./src/app/modules/tools/components/control-tool/control-tool.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ControlToolComponent", function() { return _control_tool_control_tool_component__WEBPACK_IMPORTED_MODULE_2__["ControlToolComponent"]; });

/* harmony import */ var _pointer_tool_pointer_tool_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pointer-tool/pointer-tool.component */ "./src/app/modules/tools/components/pointer-tool/pointer-tool.component.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "PointerToolComponent", function() { return _pointer_tool_pointer_tool_component__WEBPACK_IMPORTED_MODULE_3__["PointerToolComponent"]; });








/***/ }),

/***/ "./src/app/modules/tools/components/pointer-tool/pointer-tool.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/modules/tools/components/pointer-tool/pointer-tool.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PointerToolComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointerToolComponent", function() { return PointerToolComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PointerToolComponent = /** @class */ (function () {
    function PointerToolComponent() {
    }
    PointerToolComponent.prototype.ngOnInit = function () {
    };
    PointerToolComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pointer-tool',
            template: '',
            styles: []
        }),
        __metadata("design:paramtypes", [])
    ], PointerToolComponent);
    return PointerToolComponent;
}());



/***/ }),

/***/ "./src/app/modules/tools/enums/index.ts":
/*!**********************************************!*\
  !*** ./src/app/modules/tools/enums/index.ts ***!
  \**********************************************/
/*! exports provided: ShapeStateEnum, SVGShapeEnum, ToolGroupEnum, ToolTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _shape_state_enum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./shape-state.enum */ "./src/app/modules/tools/enums/shape-state.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ShapeStateEnum", function() { return _shape_state_enum__WEBPACK_IMPORTED_MODULE_0__["ShapeStateEnum"]; });

/* harmony import */ var _svg_shape_enum__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./svg-shape.enum */ "./src/app/modules/tools/enums/svg-shape.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SVGShapeEnum", function() { return _svg_shape_enum__WEBPACK_IMPORTED_MODULE_1__["SVGShapeEnum"]; });

/* harmony import */ var _tool_group_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tool-group.enum */ "./src/app/modules/tools/enums/tool-group.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolGroupEnum", function() { return _tool_group_enum__WEBPACK_IMPORTED_MODULE_2__["ToolGroupEnum"]; });

/* harmony import */ var _tool_type_enum__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tool-type.enum */ "./src/app/modules/tools/enums/tool-type.enum.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolTypeEnum", function() { return _tool_type_enum__WEBPACK_IMPORTED_MODULE_3__["ToolTypeEnum"]; });








/***/ }),

/***/ "./src/app/modules/tools/enums/shape-state.enum.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/tools/enums/shape-state.enum.ts ***!
  \*********************************************************/
/*! exports provided: ShapeStateEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeStateEnum", function() { return ShapeStateEnum; });
var ShapeStateEnum;
(function (ShapeStateEnum) {
    ShapeStateEnum["STABLE"] = "stable";
    ShapeStateEnum["EDITING"] = "editing";
    ShapeStateEnum["DRAGGING"] = "dragging";
})(ShapeStateEnum || (ShapeStateEnum = {}));


/***/ }),

/***/ "./src/app/modules/tools/enums/svg-shape.enum.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/tools/enums/svg-shape.enum.ts ***!
  \*******************************************************/
/*! exports provided: SVGShapeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SVGShapeEnum", function() { return SVGShapeEnum; });
var SVGShapeEnum;
(function (SVGShapeEnum) {
    SVGShapeEnum["None"] = "None";
    SVGShapeEnum["Polyline"] = "polyline";
    SVGShapeEnum["Circle"] = "circle";
    SVGShapeEnum["Rect"] = "rect";
})(SVGShapeEnum || (SVGShapeEnum = {}));


/***/ }),

/***/ "./src/app/modules/tools/enums/tool-group.enum.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/tools/enums/tool-group.enum.ts ***!
  \********************************************************/
/*! exports provided: ToolGroupEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolGroupEnum", function() { return ToolGroupEnum; });
var ToolGroupEnum;
(function (ToolGroupEnum) {
    ToolGroupEnum["Default"] = "Default";
    ToolGroupEnum["Drawing"] = "Drawing";
    ToolGroupEnum["Geomentry"] = "Geometry";
    ToolGroupEnum["Control"] = "Control";
})(ToolGroupEnum || (ToolGroupEnum = {}));


/***/ }),

/***/ "./src/app/modules/tools/enums/tool-type.enum.ts":
/*!*******************************************************!*\
  !*** ./src/app/modules/tools/enums/tool-type.enum.ts ***!
  \*******************************************************/
/*! exports provided: ToolTypeEnum */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToolTypeEnum", function() { return ToolTypeEnum; });
var ToolTypeEnum;
(function (ToolTypeEnum) {
    ToolTypeEnum["Pointer"] = "pointer";
    ToolTypeEnum["Pencil"] = "pencil";
    ToolTypeEnum["Brush"] = "brush";
    ToolTypeEnum["Rect"] = "rect";
    ToolTypeEnum["Circle"] = "circle";
    ToolTypeEnum["Hand"] = "hand";
})(ToolTypeEnum || (ToolTypeEnum = {}));


/***/ }),

/***/ "./src/app/modules/tools/index.ts":
/*!****************************************!*\
  !*** ./src/app/modules/tools/index.ts ***!
  \****************************************/
/*! exports provided: ToolsModule, TOOL_LIST_TOKEN, toolList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tools_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./tools.module */ "./src/app/modules/tools/tools.module.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "ToolsModule", function() { return _tools_module__WEBPACK_IMPORTED_MODULE_0__["ToolsModule"]; });

/* harmony import */ var _tool_list__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tool-list */ "./src/app/modules/tools/tool-list.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "TOOL_LIST_TOKEN", function() { return _tool_list__WEBPACK_IMPORTED_MODULE_1__["TOOL_LIST_TOKEN"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "toolList", function() { return _tool_list__WEBPACK_IMPORTED_MODULE_1__["toolList"]; });






/***/ }),

/***/ "./src/app/modules/tools/shapes/circle/circle-shape.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/tools/shapes/circle/circle-shape.ts ***!
  \*************************************************************/
/*! exports provided: CircleShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CircleShape", function() { return CircleShape; });
/* harmony import */ var _shapes_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shapes/shape */ "./src/app/modules/tools/shapes/shape.ts");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @math */ "./src/app/math/index.ts");
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
    function CircleShape(center, stroke, strokeWidth, fill, r) {
        if (fill === void 0) { fill = 'none'; }
        if (r === void 0) { r = 1; }
        var _this = _super.call(this) || this;
        _this.center = center;
        _this.stroke = stroke;
        _this.strokeWidth = strokeWidth;
        _this.fill = fill;
        _this.r = r;
        _this.type = 'circle';
        _this.cx = center.x;
        _this.cy = center.y;
        return _this;
    }
    CircleShape.composeShape = function (rawShape) {
        Object.setPrototypeOf(rawShape, CircleShape.prototype);
        return rawShape;
    };
    CircleShape.prototype.getRadius = function (start, end) {
        var difference = _math__WEBPACK_IMPORTED_MODULE_1__["Point2D"].subtract(start, end);
        return _math__WEBPACK_IMPORTED_MODULE_1__["Point2D"].size(difference.divideBy(2));
    };
    CircleShape.prototype.transform = function (start, end) {
        var _a = _math__WEBPACK_IMPORTED_MODULE_1__["Point2D"].getMidpoint(start, end), x = _a.x, y = _a.y;
        var radius = this.getRadius(start, end);
        this.r = radius;
        this.cx = x;
        this.cy = y;
        return this;
    };
    CircleShape.prototype.getDragHandler = function (start) {
        var _this = this;
        var xStartX = start.x - this.cx;
        var xStartY = start.y - this.cy;
        return function (end) {
            _this.cx = end.x - xStartX;
            _this.cy = end.y - xStartY;
        };
    };
    return CircleShape;
}(_shapes_shape__WEBPACK_IMPORTED_MODULE_0__["Shape"]));



/***/ }),

/***/ "./src/app/modules/tools/shapes/polyline/polyline-shape.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/tools/shapes/polyline/polyline-shape.ts ***!
  \*****************************************************************/
/*! exports provided: PolylineShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PolylineShape", function() { return PolylineShape; });
/* harmony import */ var _shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../shape */ "./src/app/modules/tools/shapes/shape.ts");
/* harmony import */ var _math__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @math */ "./src/app/math/index.ts");
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
        var _this = _super.call(this) || this;
        _this.points = points;
        _this.strokeWidth = strokeWidth;
        _this.stroke = stroke;
        _this.type = 'polyline';
        _this.fill = 'none';
        _this.strokeLinecap = 'round';
        _this.addPoint = function (point) {
            _this.points.push(point);
        };
        return _this;
    }
    PolylineShape.composeShape = function (rawShape) {
        Object.setPrototypeOf(rawShape, PolylineShape.prototype);
        return rawShape;
    };
    PolylineShape.prototype.toString = function () {
        return this.points
            .map(function (point) { return point.x + "," + point.y; })
            .join(' ');
    };
    PolylineShape.prototype.isCorrect = function () {
        return this.points.length > 2;
    };
    PolylineShape.prototype.getDragHandler = function (start) {
        var _this = this;
        var points = this.points
            .map(function (point) { return new _math__WEBPACK_IMPORTED_MODULE_1__["Point2D"](point.x, point.y); });
        return function (end) {
            var move = _math__WEBPACK_IMPORTED_MODULE_1__["Point2D"].subtract(start, end);
            _this.points = points.map(function (point) {
                return new _math__WEBPACK_IMPORTED_MODULE_1__["Point2D"](point.x + move.x, point.y + move.y);
            });
        };
    };
    return PolylineShape;
}(_shape__WEBPACK_IMPORTED_MODULE_0__["Shape"]));



/***/ }),

/***/ "./src/app/modules/tools/shapes/rect/rect-shape.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/tools/shapes/rect/rect-shape.ts ***!
  \*********************************************************/
/*! exports provided: RectShape */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RectShape", function() { return RectShape; });
/* harmony import */ var _shapes_shape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @shapes/shape */ "./src/app/modules/tools/shapes/shape.ts");
/* harmony import */ var _tools_tool_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tools/tool-options */ "./src/app/modules/tools/tool-options.ts");
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
    function RectShape(start, stroke, strokeWidth, fill) {
        if (stroke === void 0) { stroke = _tools_tool_options__WEBPACK_IMPORTED_MODULE_1__["SHAPE_DEFAULT_STROKE"]; }
        if (strokeWidth === void 0) { strokeWidth = _tools_tool_options__WEBPACK_IMPORTED_MODULE_1__["SHAPE_DEFAULT_STROKE_WIDTH"]; }
        if (fill === void 0) { fill = 'none'; }
        var _this = _super.call(this) || this;
        _this.stroke = stroke;
        _this.strokeWidth = strokeWidth;
        _this.fill = fill;
        _this.type = 'rect';
        _this.width = 0;
        _this.height = 0;
        _this.x = 0;
        _this.y = 0;
        _this.rx = 2;
        _this.ry = 2;
        _this.x = start.x;
        _this.y = start.y;
        return _this;
    }
    RectShape.composeShape = function (rawShape) {
        Object.setPrototypeOf(rawShape, RectShape.prototype);
        return rawShape;
    };
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
        this.setSize(width, height);
        return this;
    };
    RectShape.prototype.getDragHandler = function (start) {
        var _this = this;
        var xStartX = start.x - this.x;
        var xStartY = start.y - this.y;
        return function (end) {
            _this.x = end.x - xStartX;
            _this.y = end.y - xStartY;
        };
    };
    RectShape.prototype.setSize = function (width, height) {
        this.width = width;
        this.height = height;
        return this;
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
/* harmony import */ var _tools_enums__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tools/enums */ "./src/app/modules/tools/enums/index.ts");
/* harmony import */ var _tool_options__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../tool-options */ "./src/app/modules/tools/tool-options.ts");


var Shape = /** @class */ (function () {
    function Shape() {
        this.state = _tools_enums__WEBPACK_IMPORTED_MODULE_0__["ShapeStateEnum"].EDITING;
    }
    Shape.prototype.ofType = function (type) {
        return this.type === type;
    };
    Shape.prototype.setState = function (state) {
        this.state = state;
        return this;
    };
    Shape.prototype.isCorrect = function () {
        return true;
    };
    Shape.prototype.transform = function (start, end) {
        return this;
    };
    Shape.prototype.seal = function () {
        this.id = crypto.getRandomValues(new Uint32Array(2))
            .toString().replace(',', '');
        return this;
    };
    Shape.prototype.getStroke = function () {
        return this.isDragging() ?
            _tool_options__WEBPACK_IMPORTED_MODULE_1__["SHAPE_HOVER_STROKE"] : this.stroke;
    };
    Shape.prototype.getStrokeWidth = function () {
        return this.isDragging() ?
            this.strokeWidth * 1.5 : this.strokeWidth;
    };
    Shape.prototype.isStable = function () {
        return this.state === _tools_enums__WEBPACK_IMPORTED_MODULE_0__["ShapeStateEnum"].STABLE;
    };
    Shape.prototype.isDragging = function () {
        return this.state === _tools_enums__WEBPACK_IMPORTED_MODULE_0__["ShapeStateEnum"].DRAGGING;
    };
    return Shape;
}());



/***/ }),

/***/ "./src/app/modules/tools/tool-list.ts":
/*!********************************************!*\
  !*** ./src/app/modules/tools/tool-list.ts ***!
  \********************************************/
/*! exports provided: toolList, TOOL_LIST_TOKEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toolList", function() { return toolList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TOOL_LIST_TOKEN", function() { return TOOL_LIST_TOKEN; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _tools_enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tools/enums */ "./src/app/modules/tools/enums/index.ts");
/* harmony import */ var _tool_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tool-options */ "./src/app/modules/tools/tool-options.ts");



var toolList = [
    {
        type: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["ToolTypeEnum"].Pointer,
        group: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["ToolGroupEnum"].Default,
        shape: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["SVGShapeEnum"].None,
        strokeWidth: _tool_options__WEBPACK_IMPORTED_MODULE_2__["SHAPE_DEFAULT_STROKE_WIDTH"]
    },
    {
        type: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["ToolTypeEnum"].Pencil,
        group: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["ToolGroupEnum"].Drawing,
        shape: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["SVGShapeEnum"].Polyline,
        strokeWidth: _tool_options__WEBPACK_IMPORTED_MODULE_2__["SHAPE_DEFAULT_STROKE_WIDTH"]
    },
    {
        type: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["ToolTypeEnum"].Brush,
        group: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["ToolGroupEnum"].Drawing,
        shape: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["SVGShapeEnum"].Polyline,
        strokeWidth: _tool_options__WEBPACK_IMPORTED_MODULE_2__["SHAPE_THICK_STROKE_WIDTH"]
    },
    {
        type: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["ToolTypeEnum"].Rect,
        group: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["ToolGroupEnum"].Geomentry,
        shape: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["SVGShapeEnum"].Rect,
        strokeWidth: _tool_options__WEBPACK_IMPORTED_MODULE_2__["SHAPE_DEFAULT_STROKE_WIDTH"]
    },
    {
        type: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["ToolTypeEnum"].Circle,
        group: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["ToolGroupEnum"].Geomentry,
        shape: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["SVGShapeEnum"].Circle,
        strokeWidth: _tool_options__WEBPACK_IMPORTED_MODULE_2__["SHAPE_DEFAULT_STROKE_WIDTH"]
    },
    {
        type: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["ToolTypeEnum"].Hand,
        group: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["ToolGroupEnum"].Control,
        shape: _tools_enums__WEBPACK_IMPORTED_MODULE_1__["SVGShapeEnum"].None,
        strokeWidth: _tool_options__WEBPACK_IMPORTED_MODULE_2__["SHAPE_DEFAULT_STROKE_WIDTH"]
    }
];
var TOOL_LIST_TOKEN = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]('toolList');


/***/ }),

/***/ "./src/app/modules/tools/tool-options.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/tools/tool-options.ts ***!
  \***********************************************/
/*! exports provided: SHAPE_DEFAULT_STROKE, SHAPE_HOVER_STROKE, SHAPE_DEFAULT_STROKE_WIDTH, SHAPE_THICK_STROKE_WIDTH */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPE_DEFAULT_STROKE", function() { return SHAPE_DEFAULT_STROKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPE_HOVER_STROKE", function() { return SHAPE_HOVER_STROKE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPE_DEFAULT_STROKE_WIDTH", function() { return SHAPE_DEFAULT_STROKE_WIDTH; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SHAPE_THICK_STROKE_WIDTH", function() { return SHAPE_THICK_STROKE_WIDTH; });
var SHAPE_DEFAULT_STROKE = '#1945ee';
var SHAPE_HOVER_STROKE = '#ff4500';
var SHAPE_DEFAULT_STROKE_WIDTH = 2;
var SHAPE_THICK_STROKE_WIDTH = 10;


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _tool_list__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./tool-list */ "./src/app/modules/tools/tool-list.ts");
/* harmony import */ var _components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components */ "./src/app/modules/tools/components/index.ts");
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
                _components__WEBPACK_IMPORTED_MODULE_4__["DrawingToolComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["GeometryToolComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["ControlToolComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["PointerToolComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_2__["BrowserAnimationsModule"]
            ],
            declarations: [
                _components__WEBPACK_IMPORTED_MODULE_4__["DrawingToolComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["GeometryToolComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["ControlToolComponent"],
                _components__WEBPACK_IMPORTED_MODULE_4__["PointerToolComponent"]
            ],
            providers: [
                {
                    provide: _tool_list__WEBPACK_IMPORTED_MODULE_3__["TOOL_LIST_TOKEN"], useValue: _tool_list__WEBPACK_IMPORTED_MODULE_3__["toolList"]
                }
            ]
        })
    ], ToolsModule);
    return ToolsModule;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ramda__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ramda */ "./node_modules/ramda/es/index.js");
/* harmony import */ var _tools_enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tools/enums */ "./src/app/modules/tools/enums/index.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
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
    function CanvasService() {
        var _this = this;
        this.shapeHandler$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.hoveredShape$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.add = function (shape) {
            _this.shapeHandler$.next(function (shapes) { return shapes.concat(shape); });
        };
        this.remove = function (removedShape) {
            _this.shapeHandler$.next(function (shapes) {
                return shapes.filter(function (shape) { return shape.id !== removedShape.id; });
            });
        };
        this.replace = function (replacedShape) {
            _this.shapeHandler$.next(function (shapes) {
                return shapes.filter(function (shape) { return shape.id !== replacedShape.id; }).concat(replacedShape);
            });
        };
        this.setState = function (id, state) {
            _this.shapeHandler$.next(function (shapeStore) {
                var shape = shapeStore.find(function (item) { return item.id === id; });
                if (shape) {
                    shape.setState(state);
                }
                return shapeStore;
            });
        };
        this.shapeStore$ = this.shapeHandler$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["scan"])(function (shapes, fn) { return fn(shapes); }, []), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["startWith"])([]), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["share"])());
        this.polylines$ = this.getShapes$('polyline');
        this.circles$ = this.getShapes$('circle');
        this.rects$ = this.getShapes$('rect');
    }
    CanvasService.prototype.getShapes$ = function (type) {
        return this.shapeStore$
            .pipe(this.filterBy((function (shape) { return shape.ofType(type); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["distinctUntilChanged"])(function (a, b) { return ramda__WEBPACK_IMPORTED_MODULE_1__["equals"](a, b); }));
    };
    CanvasService.prototype.setStable = function (shape) {
        this.setState(shape.id, _tools_enums__WEBPACK_IMPORTED_MODULE_2__["ShapeStateEnum"].STABLE);
    };
    CanvasService.prototype.update = function () {
        this.shapeHandler$.next(function (shapeStore) { return shapeStore; });
    };
    CanvasService.prototype.setDragging = function (shape) {
        this.setState(shape.id, _tools_enums__WEBPACK_IMPORTED_MODULE_2__["ShapeStateEnum"].DRAGGING);
    };
    CanvasService.prototype.filterBy = function (fn) {
        return function (source$) {
            return source$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (shapes) { return shapes.filter(function (shape) { return fn(shape); }); }));
        };
    };
    Object.defineProperty(CanvasService.prototype, "hoveredShape", {
        get: function () {
            return this.hoveredShape$.value;
        },
        enumerable: true,
        configurable: true
    });
    CanvasService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [])
    ], CanvasService);
    return CanvasService;
}());



/***/ }),

/***/ "./src/app/services/gui/gui.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/gui/gui.service.ts ***!
  \*********************************************/
/*! exports provided: GuiService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuiService", function() { return GuiService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _tools_tool_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tools/tool-options */ "./src/app/modules/tools/tool-options.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GuiService = /** @class */ (function () {
    function GuiService() {
        this.toolHandler$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
        this.cursorHandler$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]('');
        this.strokeWidthHandler$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](0);
        this.strokeHandler$ = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](_tools_tool_options__WEBPACK_IMPORTED_MODULE_2__["SHAPE_DEFAULT_STROKE"]);
        this.cursor$ = this.cursorHandler$.asObservable();
        this.strokeWidth$ = this.strokeWidthHandler$.asObservable();
        this.tool$ = this.toolHandler$.asObservable();
        this.stroke$ = this.strokeHandler$.asObservable();
    }
    GuiService.prototype.setCursor = function (cursor) {
        this.cursorHandler$.next(cursor);
    };
    GuiService.prototype.setStrokeWidth = function (strokeWidth) {
        this.strokeWidthHandler$.next(strokeWidth);
    };
    GuiService.prototype.setStroke = function (color) {
        this.strokeHandler$.next(color);
    };
    GuiService.prototype.setTool = function (tool) {
        this.setCursor(tool.type);
        this.setStrokeWidth(tool.strokeWidth);
        this.toolHandler$.next(tool);
    };
    GuiService.prototype.isCurrentTool = function (tool) {
        return this.toolHandler$.value === tool;
    };
    GuiService.prototype.isCurrentToolType = function (type) {
        return this.toolHandler$.value.type === type;
    };
    GuiService.prototype.isCurrentShape = function (shape) {
        return this.toolHandler$.value.shape === shape;
    };
    Object.defineProperty(GuiService.prototype, "currentTool", {
        get: function () {
            return this.toolHandler$.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuiService.prototype, "currentStroke", {
        get: function () {
            return this.strokeHandler$.value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuiService.prototype, "currentStrokeWidth", {
        get: function () {
            return this.strokeWidthHandler$.value;
        },
        enumerable: true,
        configurable: true
    });
    GuiService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], GuiService);
    return GuiService;
}());



/***/ }),

/***/ "./src/app/services/index.ts":
/*!***********************************!*\
  !*** ./src/app/services/index.ts ***!
  \***********************************/
/*! exports provided: CanvasService, GuiService, SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _canvas_canvas_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas/canvas.service */ "./src/app/services/canvas/canvas.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "CanvasService", function() { return _canvas_canvas_service__WEBPACK_IMPORTED_MODULE_0__["CanvasService"]; });

/* harmony import */ var _gui_gui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./gui/gui.service */ "./src/app/services/gui/gui.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "GuiService", function() { return _gui_gui_service__WEBPACK_IMPORTED_MODULE_1__["GuiService"]; });

/* harmony import */ var _socket_socket_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket/socket.service */ "./src/app/services/socket/socket.service.ts");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return _socket_socket_service__WEBPACK_IMPORTED_MODULE_2__["SocketService"]; });







/***/ }),

/***/ "./src/app/services/shape/shape.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/shape/shape.service.ts ***!
  \*************************************************/
/*! exports provided: ShapeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShapeService", function() { return ShapeService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_gui_gui_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @services/gui/gui.service */ "./src/app/services/gui/gui.service.ts");
/* harmony import */ var _shapes_polyline_polyline_shape__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @shapes/polyline/polyline-shape */ "./src/app/modules/tools/shapes/polyline/polyline-shape.ts");
/* harmony import */ var _shapes_rect_rect_shape__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @shapes/rect/rect-shape */ "./src/app/modules/tools/shapes/rect/rect-shape.ts");
/* harmony import */ var _shapes_circle_circle_shape__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @shapes/circle/circle-shape */ "./src/app/modules/tools/shapes/circle/circle-shape.ts");
/* harmony import */ var _tools_enums__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @tools/enums */ "./src/app/modules/tools/enums/index.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ShapeService = /** @class */ (function () {
    function ShapeService(guiService) {
        var _this = this;
        this.guiService = guiService;
        this.createPolyline = function (pStart) {
            var _a = _this.guiService, currentStrokeWidth = _a.currentStrokeWidth, currentStroke = _a.currentStroke;
            return new _shapes_polyline_polyline_shape__WEBPACK_IMPORTED_MODULE_2__["PolylineShape"]([pStart], currentStrokeWidth, currentStroke);
        };
        this.createCircle = function (center, fill) {
            if (fill === void 0) { fill = false; }
            var _a = _this.guiService, currentStrokeWidth = _a.currentStrokeWidth, currentStroke = _a.currentStroke;
            var fillShape = fill ? currentStroke : 'none';
            return new _shapes_circle_circle_shape__WEBPACK_IMPORTED_MODULE_4__["CircleShape"](center, currentStroke, currentStrokeWidth, fillShape);
        };
        this.createRect = function (edge) {
            var _a = _this.guiService, currentStrokeWidth = _a.currentStrokeWidth, currentStroke = _a.currentStroke;
            return new _shapes_rect_rect_shape__WEBPACK_IMPORTED_MODULE_3__["RectShape"](edge, currentStroke, currentStrokeWidth);
        };
    }
    ShapeService.prototype.composeShape = function (rawShape) {
        switch (rawShape.type) {
            case _tools_enums__WEBPACK_IMPORTED_MODULE_5__["SVGShapeEnum"].Polyline:
                return _shapes_polyline_polyline_shape__WEBPACK_IMPORTED_MODULE_2__["PolylineShape"].composeShape(rawShape);
            case _tools_enums__WEBPACK_IMPORTED_MODULE_5__["SVGShapeEnum"].Circle:
                return _shapes_circle_circle_shape__WEBPACK_IMPORTED_MODULE_4__["CircleShape"].composeShape(rawShape);
            case _tools_enums__WEBPACK_IMPORTED_MODULE_5__["SVGShapeEnum"].Rect:
                return _shapes_rect_rect_shape__WEBPACK_IMPORTED_MODULE_3__["RectShape"].composeShape(rawShape);
            default:
                return;
        }
    };
    ShapeService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_gui_gui_service__WEBPACK_IMPORTED_MODULE_1__["GuiService"]])
    ], ShapeService);
    return ShapeService;
}());



/***/ }),

/***/ "./src/app/services/socket/socket.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/socket/socket.service.ts ***!
  \***************************************************/
/*! exports provided: SocketStateEnum, SocketService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketStateEnum", function() { return SocketStateEnum; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SocketService", function() { return SocketService; });
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! socket.io-client */ "./node_modules/socket.io-client/dist/socket.io.slim.js");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _env_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @env/environment */ "./src/environments/environment.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_user_user_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @services/user/user.service */ "./src/app/services/user/user.service.ts");
/* harmony import */ var _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @services/canvas/canvas.service */ "./src/app/services/canvas/canvas.service.ts");
/* harmony import */ var _shape_shape_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shape/shape.service */ "./src/app/services/shape/shape.service.ts");
/* harmony import */ var _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @enums/socket-event.enum */ "./src/app/enums/socket-event.enum.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var SocketStateEnum;
(function (SocketStateEnum) {
    SocketStateEnum["CONNECTED"] = "connected";
    SocketStateEnum["DISCONNECTED"] = "disconnected";
})(SocketStateEnum || (SocketStateEnum = {}));
var SocketService = /** @class */ (function () {
    function SocketService(userService, canvasService, shapeService) {
        var _this = this;
        this.userService = userService;
        this.canvasService = canvasService;
        this.shapeService = shapeService;
        this.connection$ = new rxjs__WEBPACK_IMPORTED_MODULE_3__["ReplaySubject"](1);
        this.send = function (data$, event) {
            _this.connection$
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (socket) {
                return data$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])((function (data) { return ({ socket: socket, data: data }); })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this.disconnect$));
            }))
                .subscribe(function (_a) {
                var socket = _a.socket, data = _a.data;
                socket.emit(event, data);
            });
        };
        this.handleAllUsers = function (_a) {
            var users = _a[0], socket = _a[1];
            _this.identifying(socket, users);
            _this.userService.clear();
            (_b = _this.userService).add.apply(_b, users);
            var _b;
        };
        this.handleUserLeft = function (user) {
            _this.userService.remove(user.id);
        };
        this.handleUserJoin = function (user) {
            _this.userService.add(user);
        };
        this.handleShapeAdd = function (_a) {
            var id = _a.id, shape = _a.message;
            var composedShape = _this.shapeService.composeShape(shape);
            _this.canvasService.add(composedShape);
        };
        this.handleShapeChange = function (_a) {
            var id = _a.id, shape = _a.message;
            var composedShape = _this.shapeService.composeShape(shape);
            _this.canvasService.replace(composedShape);
        };
        this.handleStateChange = function (_a) {
            var id = _a.id, message = _a.message;
            _this.userService.changeState(id, message);
        };
    }
    SocketService.prototype.connect = function () {
        this.socket$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["of"])(socket_io_client__WEBPACK_IMPORTED_MODULE_0__["connect"](_env_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wsUrl));
        this.socket$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (socket) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(socket, _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_8__["SocketEventEnum"].CONNECT)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function () { return socket; }));
        })).subscribe(this.connection$);
        this.disconnect$ = this.socket$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (socket) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(socket, _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_8__["SocketEventEnum"].DISCONNECT);
        }));
        this.connectionState$ = Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["merge"])(this.connection$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(SocketStateEnum.CONNECTED)), this.disconnect$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mapTo"])(SocketStateEnum.DISCONNECTED)));
        this.listen(_enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_8__["SocketEventEnum"].ALL_USERS).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["withLatestFrom"])(this.socket$)).subscribe(this.handleAllUsers);
        this.listen(_enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_8__["SocketEventEnum"].USER_LEFT).subscribe(this.handleUserLeft);
        this.listen(_enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_8__["SocketEventEnum"].USER_JOIN).subscribe(this.handleUserJoin);
        this.listen(_enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_8__["SocketEventEnum"].CHANGE_STATE).subscribe(this.handleStateChange);
        this.listen(_enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_8__["SocketEventEnum"].SHAPE_ADD).subscribe(this.handleShapeAdd);
        this.listen(_enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_8__["SocketEventEnum"].SHAPE_CHANGE).subscribe(this.handleShapeChange);
        this.send(this.userService.username$, _enums_socket_event_enum__WEBPACK_IMPORTED_MODULE_8__["SocketEventEnum"].SAVE_USERNAME);
    };
    SocketService.prototype.listen = function (event) {
        return this.connection$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (socket) { return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["fromEvent"])(socket, event); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this.disconnect$));
    };
    SocketService.prototype.getConnectionState = function () {
        return this.connectionState$;
    };
    SocketService.prototype.identifying = function (socket, users) {
        users.forEach(function (user) {
            user.me = user.id === socket.id;
        });
    };
    SocketService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_services_user_user_service__WEBPACK_IMPORTED_MODULE_5__["UserService"],
            _services_canvas_canvas_service__WEBPACK_IMPORTED_MODULE_6__["CanvasService"],
            _shape_shape_service__WEBPACK_IMPORTED_MODULE_7__["ShapeService"]])
    ], SocketService);
    return SocketService;
}());



/***/ }),

/***/ "./src/app/services/user/user.service.ts":
/*!***********************************************!*\
  !*** ./src/app/services/user/user.service.ts ***!
  \***********************************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! faker */ "./node_modules/faker/index.js");
/* harmony import */ var faker__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(faker__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserService = /** @class */ (function () {
    function UserService() {
        var _this = this;
        this.username$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](faker__WEBPACK_IMPORTED_MODULE_3__["name"].findName());
        this.usersHandler$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["ReplaySubject"](1);
        this.add = function () {
            var newbies = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                newbies[_i] = arguments[_i];
            }
            _this.usersHandler$.next(function (users) { return users.concat(newbies); });
        };
        this.remove = function (id) {
            _this.usersHandler$.next(function (users) { return users.filter(function (u) { return u.id !== id; }); });
        };
        this.clear = function () {
            _this.usersHandler$.next(function (users) { return []; });
        };
        this.changeState = function (id, state) {
            _this.usersHandler$.next(function (users) {
                var foundUser = users.find(function (user) { return user.id === id; });
                foundUser.state = state;
                return users;
            });
        };
        this.users$ = this.usersHandler$
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["scan"])(function (users, fn) { return fn(users); }, []));
    }
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], UserService);
    return UserService;
}());



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
    production: false,
    wsUrl: 'http://localhost:8080'
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
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

module.exports = __webpack_require__(/*! /Users/evglukhov/Development/ngPaintClient/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map