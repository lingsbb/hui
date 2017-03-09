import { NgModule }             from '@angular/core';
import { Route, RouterModule, Routes } from '@angular/router';
//==================================================================
// import { DashboardComponent }   from './dashboard.component';
// import { HeroesComponent }      from './heroes.component';
// import { HeroDetailComponent }  from './hero-detail.component';
// import { MemberListComponent }   from './member-list.component';

import { DashboardComponent }   from '../pages/dashboard/dashboard.component';
import { HeroesComponent }      from '../pages/heroes/heroes.component';
import { HeroDetailComponent }  from '../pages/hero-detail/hero-detail.component';
import { MemberListComponent }  from '../pages/member-list/member-list.component';
import { MemberListAddComponent }  from '../pages/member-list-add/member-list-add.component';

import { MyTodoGuard} from '../common/interceptor/my-todo-guard';

const routes: Route[] = [
  // { path: '', redirectTo: '/member-list', pathMatch: 'full' },
  // { path: 'member-list',  component: MemberListComponent },
  // { path: 'member-list-add',  component: MemberListAddComponent },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },//路径中的冒号 (:) 表示:id是一个占位符，当导航到这个HeroDetailComponent组件时，它将被填入一个特定英雄的id,
  { path: 'heroes',     component: HeroesComponent },

    {
      path: '',
      redirectTo: '/member-list',
      pathMatch: 'full'
    },
    {
        path: 'member-list',
        component: MemberListComponent
    },

    {
        path: '',
        canActivateChild: [MyTodoGuard],
        children: [
            {
                path: 'member-list-add',
                component: MemberListAddComponent
            }
        ]
    }
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
