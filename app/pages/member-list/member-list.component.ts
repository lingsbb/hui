import { Component,Input,  OnInit } from '@angular/core';
// import { Hero } from './hero';
import { Hero } from '../../common/entity/hero';
import { MemberListService } from './member-list.service';
import { Logger } from '../../common/service/logger.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

import { Pagination } from '../../common/entity/pagination';
import { PaginationBase } from '../../common/utils/paginationBase';


declare var $:any;
declare var layer:any;

@Component({
    moduleId: module.id,
	selector: 'member-list',
	templateUrl: 'member-list.component.html'
})

export class MemberListComponent extends PaginationBase implements OnInit {
    @Input()
    selectedHero: Hero;

    constructor(private router: Router,private logger: Logger,
        private heroService: MemberListService
    ) { 

        super();
        let a:Hero=new Hero();
        this.selectedHero=a;
    }


    ngOnInit(): void {
        this.getList();
    }    

    /**
     * 重写父类的方法，查询通用过程
     */
    getList(): void {
        // this.heroService.getHeroes().then(heroes => {
        this.heroService.getHeroes_p(this.p.page_right,this.p.rows).then
        (
            heroes => {
                this.heroes = heroes;// as any;
                super.new_page_all();
            }
        );
    }

    /**
     * 点击删除按钮
     */
    click_delete(hero: Hero): void {

      this.heroService
	      .delete(hero.id)
	      .then(() => {
            let heroes:Hero[]=this.heroes as Hero[];
	        this.heroes = heroes.filter(h => h !== hero);
	        if (this.selectedHero === hero) { this.selectedHero = null; }
	      });
	}

    /**
     * 点击修改按钮 弹出对话框
     */
    to_edit(hero: Hero):void{
        this.selectedHero = hero;
        layer.open({
            scrollbar: false,
            area: ['600px', '550px'],
            type: 1,
            closeBtn: 0,
            // shade: false,
            title: "编辑", //不显示标题
            content: $('#form-member-add-edit'), //捕获的元素，注意：最好该指定的元素要存放在body最外层，否则可能被其它的相对元素所影响
            cancel: function(){
                // layer.msg('捕获就是从页面已经存在的元素上，包裹layer的结构', {time: 5000, icon:6});
            }
        });
    }

    /**
     * 点击关闭添加对话框按钮
     */
    click_close_add_win():void{
        this.getList();
        layer.closeAll();
    }

    /**
     * 点击提交添加按钮
     */
    click_submit_add(hero: Hero):void{
        this.logger.alert_json(hero);

        this.heroService
	      .update(hero)
	      .then(() => {
            this.getList();
            layer.closeAll();
	      });
    }

    /**
     * 去添加页面
     */
    to_add():void{
        this.router.navigate(['/member-list-add']);
    }

}