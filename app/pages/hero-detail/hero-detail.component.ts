
// Keep the Input import for now, we'll remove it later:
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
import { Location }                 from '@angular/common';
// import { Hero } from './hero';
// import { HeroService } from './hero.service';

import { Hero } from '../../common/entity/hero';
import { HeroService } from '../../common/service/hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
	moduleId: module.id,
  	selector: 'my-hero-detail',
  	templateUrl: 'hero-detail.component.html',
	  styleUrls: [ 'hero-detail.component.css' ]
})
export class HeroDetailComponent implements OnInit {
	constructor(
	  private heroService: HeroService,
	  private route: ActivatedRoute,
	  private location: Location
	) {}

	ngOnInit(): void {
	  this.route.params
	    .switchMap((params: Params) => this.heroService.getHero(+params['id']))
	    .subscribe(hero => this.hero = hero);
	}

	goBack(): void {
	  this.location.back();
	}
	// @Input() hero: Hero;


	// [myHighlight]="color"中的 'color' 是绑定源。 源属性不需要声明。

	// [myHighlight]="color"中的 'myHighlight' 是绑定目标。 必须把它定义为一个输入属性，否则，Angular 就会拒绝绑定，并给出一个明确的错误。
	
	@Input()//不增加这个注解 会报错 aangularjs2会拒绝 Angular 希望我们把目标属性声明为组件的输入属性，否则，Angular 会拒绝绑定，并抛出错误。 我们在这里详细解释了输入属性，以及为什么目标属性需要这样的特殊待遇，而源属性却不需要。
  	hero: Hero;
  	
  	
  save(): void {
	  this.heroService.update(this.hero)
	    .then(() => this.goBack());
	}

}
