import { Component, Input } from '@angular/core';
import { WishesServices } from '../services/whises.service';
import { NavController, AlertController, ItemSliding  } from 'ionic-angular';
import { AddPage } from '../pages/add/add.component';
import { List } from '../models/list.model';

@Component({
	selector: 'app-lists',
	templateUrl: 'lists.component.html'
})
export class ListsComponent {
	
	@Input() finish: boolean = false;
	
	constructor(public wishesServices:WishesServices,
				private navCtrl:NavController,
				private alertCtrl:AlertController){
	}
	
	listSelected(list:List){
		this.navCtrl.push(AddPage, {
			title: list.title,
			list: list
		})
		
	}
	
	deleteList(list: List){
		this.wishesServices.deleteList(list);
	}
	
	editList(list:List, slidingItem:ItemSliding){
		const alert = this.alertCtrl.create({
			title: 'Edit Title',
			message: 'Edit name of the list',
			inputs: [{
				name: 'title',
				placeholder: 'Name of the list',
				value: list.title
			}],
			buttons: [{
				text: 'Cancel'	
			},
			{
				text: 'Save',
				handler: data =>{
					if(length){
						if(data.title.length === 0){
							return;
						}	
					}
					list.title = data.title;
					this.wishesServices.saveStorage();
					slidingItem.close();
				}
			}]
		});
		alert.present();
	}
}