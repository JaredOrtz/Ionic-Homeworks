import { Component } from '@angular/core';
import { WishesServices } from '../../services/whises.service';
import { List, ListItem } from '../../models';
import { NavParams } from 'ionic-angular';

@Component({
	selector: 'page-add',
	templateUrl: 'add.component.html'
})
export class AddPage {
	
	list: List;
	nameItem:string = '';
	
	constructor(public wishesServices:WishesServices,
				private navParams:NavParams) {
		
		const title = this.navParams.get('title');
		
		if(this.navParams.get('list')){
			this.list = this.navParams.get('list');
		}else{
			this.list = new List(title);
			this.wishesServices.addList(this.list);	
		}
	}
	
	addItem(){
		
			if(this.nameItem.length === 0){
				return;
			}	
		
		const newItem = new ListItem(this.nameItem);
		this.list.items.push(newItem);
		this.nameItem = '';
		this.wishesServices.saveStorage();
	}
	
	updateWish(item: ListItem){
		item.complet = !item.complet;
		const slopes = this.list.items.filter( itemData =>{
			return !itemData.complet;	
		}).length;
		
		if(slopes === 0){
			this.list.finished = true;
			this.list.finishedIn = new Date();
		}else{
			this.list.finished = false;
			this.list.finishedIn = null;
		}
		
		this.wishesServices.saveStorage();
	}
	deleteItem(idx:number){
		this.list.items.splice(idx, 1);
		this.wishesServices.saveStorage();
	}
	
}
