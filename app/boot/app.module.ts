import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { HttpModule, JsonpModule }    from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from '../common/service/in-memory-data.service';
//==================================================================
//下面是组件 上面是NgModule
import { AppComponent }         from './app.component';
import { DashboardComponent }   from '../pages/dashboard/dashboard.component';
import { HeroesComponent }      from '../pages/heroes/heroes.component';
import { HeroDetailComponent }  from '../pages/hero-detail/hero-detail.component';
import { MemberListComponent }  from '../pages/member-list/member-list.component';
import { MemberListAddComponent }  from '../pages/member-list-add/member-list-add.component';
//==============下面是服务的导入====================================================
import { Logger }               from '../common/service/logger.service';
import { HeroService }          from '../common/service/hero.service';
import { MemberListService }    from '../pages/member-list/member-list.service';

@NgModule({
  imports: [//不要将 Angular 模块的imports数组与文件顶部的import语句弄混淆了。它们的功能不同。只能是NgModule。
    BrowserModule,//自动刷新浏览器服务
    FormsModule,//系统自带的template指令 分解模板html文件用
    HttpModule,//HTTP
    JsonpModule,
    InMemoryWebApiModule.forRoot(InMemoryDataService),//模拟内存数据库
    AppRoutingModule//路由
  ],//每个组件都需要导入这些 所以不用在每个组件重复导入了
  declarations: [//只能是组件和指令
    AppComponent,//根组件 启动用的 不是页面 不是页面 不是页面
    DashboardComponent,//面板页面
    HeroDetailComponent,//详情页面
    HeroesComponent,//英雄列表页面
    MemberListComponent,//会员管理页面
    MemberListAddComponent//会员管理页面
  ],
  providers: [ HeroService ,MemberListService,Logger],//单例模式的服务 可以包括日志 共享 HeroService 全局用
  bootstrap: [ AppComponent ]//Angular 创建它并插入index.html宿主页面
})
export class AppModule { }

// 这里我们使用小写中线命名法 （也叫烤串命名法）拼写文件名， 所以不用担心它在服务器或者版本控制系统中出现大小写问题
