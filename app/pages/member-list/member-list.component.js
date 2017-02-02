"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
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
// import { Hero } from './hero';
var hero_1 = require('../../common/entity/hero');
var member_list_service_1 = require('./member-list.service');
var logger_service_1 = require('../../common/service/logger.service');
var router_1 = require('@angular/router');
var paginationBase_1 = require('../../common/utils/paginationBase');
var MemberListComponent = (function (_super) {
    __extends(MemberListComponent, _super);
    function MemberListComponent(router, logger, heroService) {
        _super.call(this);
        this.router = router;
        this.logger = logger;
        this.heroService = heroService;
        var a = new hero_1.Hero();
        this.selectedHero = a;
    }
    MemberListComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    /**
     * 重写父类的方法，查询通用过程
     */
    MemberListComponent.prototype.getList = function () {
        var _this = this;
        // this.heroService.getHeroes().then(heroes => {
        this.heroService.getHeroes_p(this.p.page_right, this.p.rows).then(function (heroes) {
            _this.heroes = heroes; // as any;
            _super.prototype.new_page_all.call(_this);
        });
    };
    /**
     * 点击删除按钮
     */
    MemberListComponent.prototype.click_delete = function (hero) {
        var _this = this;
        this.heroService
            .delete(hero.id)
            .then(function () {
            var heroes = _this.heroes;
            _this.heroes = heroes.filter(function (h) { return h !== hero; });
            if (_this.selectedHero === hero) {
                _this.selectedHero = null;
            }
        });
    };
    /**
     * 点击修改按钮 弹出对话框
     */
    MemberListComponent.prototype.to_edit = function (hero) {
        this.selectedHero = hero;
        layer.open({
            scrollbar: false,
            area: ['600px', '550px'],
            type: 1,
            closeBtn: 0,
            // shade: false,
            title: "编辑",
            content: $('#form-member-add-edit'),
            cancel: function () {
                // layer.msg('捕获就是从页面已经存在的元素上，包裹layer的结构', {time: 5000, icon:6});
            }
        });
    };
    /**
     * 点击关闭添加对话框按钮
     */
    MemberListComponent.prototype.click_close_add_win = function () {
        this.getList();
        layer.closeAll();
    };
    /**
     * 点击提交添加按钮
     */
    MemberListComponent.prototype.click_submit_add = function (hero) {
        var _this = this;
        this.logger.alert_json(hero);
        this.heroService
            .update(hero)
            .then(function () {
            _this.getList();
            layer.closeAll();
        });
    };
    /**
     * 去添加页面
     */
    MemberListComponent.prototype.to_add = function () {
        this.router.navigate(['/member-list-add']);
    };
    __decorate([
        core_1.Input(), 
        __metadata('design:type', hero_1.Hero)
    ], MemberListComponent.prototype, "selectedHero", void 0);
    MemberListComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'member-list',
            templateUrl: 'member-list.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, logger_service_1.Logger, member_list_service_1.MemberListService])
    ], MemberListComponent);
    return MemberListComponent;
}(paginationBase_1.PaginationBase));
exports.MemberListComponent = MemberListComponent;
//# sourceMappingURL=member-list.component.js.map