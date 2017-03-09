import { Component, OnInit } from '@angular/core';

@Component({
	moduleId: module.id,
	selector: 'mybutton',
	templateUrl: 'mybutton.component.html'
})

export class MybuttonComponent {
	clickMessage = '';

	onClickMe() {
		this.clickMessage = 'lingzhihua';
	}


}