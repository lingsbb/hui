"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var platform_browser_1 = require('@angular/platform-browser');
var forms_1 = require('@angular/forms');
var http_1 = require('@angular/http');
var app_routing_module_1 = require('./app-routing.module');
// Imports for loading & configuring the in-memory web api
var angular_in_memory_web_api_1 = require('angular-in-memory-web-api');
var in_memory_data_service_1 = require('../common/service/in-memory-data.service');
//==================================================================
//下面是组件 上面是NgModule
var app_component_1 = require('./app.component');
var dashboard_component_1 = require('../pages/dashboard/dashboard.component');
var heroes_component_1 = require('../pages/heroes/heroes.component');
var hero_detail_component_1 = require('../pages/hero-detail/hero-detail.component');
var member_list_component_1 = require('../pages/member-list/member-list.component');
var member_list_add_component_1 = require('../pages/member-list-add/member-list-add.component');
//==============下面是服务的导入====================================================
var logger_service_1 = require('../common/service/logger.service');
var hero_service_1 = require('../common/service/hero.service');
var member_list_service_1 = require('../pages/member-list/member-list.service');
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                http_1.JsonpModule,
                angular_in_memory_web_api_1.InMemoryWebApiModule.forRoot(in_memory_data_service_1.InMemoryDataService),
                app_routing_module_1.AppRoutingModule //路由
            ],
            declarations: [
                app_component_1.AppComponent,
                dashboard_component_1.DashboardComponent,
                hero_detail_component_1.HeroDetailComponent,
                heroes_component_1.HeroesComponent,
                member_list_component_1.MemberListComponent,
                member_list_add_component_1.MemberListAddComponent //会员管理页面
            ],
            providers: [hero_service_1.HeroService, member_list_service_1.MemberListService, logger_service_1.Logger],
            bootstrap: [app_component_1.AppComponent] //Angular 创建它并插入index.html宿主页面
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
// 这里我们使用小写中线命名法 （也叫烤串命名法）拼写文件名， 所以不用担心它在服务器或者版本控制系统中出现大小写问题
//# sourceMappingURL=app.module.js.map