import { Component, OnInit } from '@angular/core';
import { WishesServices } from '../../services/whises.service';

@Component({
	selector: 'page-finished',
	templateUrl: 'finished.component.html'
})
export class FinishedPage implements OnInit {
	constructor(public wishesServices:WishesServices){
		
	}

	ngOnInit() {
		
	}
}