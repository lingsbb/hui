import {Component} from '@angular/core';


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html',
    // template: `
    // <h1>{{title}}</h1>
    // <!--<my-heroes></my-heroes>-->
    // <nav>
    // <a routerLink="/dashboard" routerLinkActive="active">Dashboard</a>
    // <a routerLink="/heroes" routerLinkActive="active">Heroes</a>
    // </nav>
    // <router-outlet></router-outlet>
    // `,
    // styleUrls: ['app.component.css']
})

export class AppComponent {
    // title = 'Tour of Heroes';使用构造函数还是变量初始化 虽然这个例子使用了变量赋值的方式初始化组件，你还可以使用构造函数来声明和初始化属性

    title: string;
    myHero: string;

    constructor() {
        this.title = 'Tour of Heroes';
        this.myHero = 'Windstorm';
    }
}