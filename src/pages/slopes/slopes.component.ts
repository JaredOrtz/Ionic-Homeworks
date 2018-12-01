import { Component } from '@angular/core';
import { WishesServices } from '../../services/whises.service';
import { NavController, AlertController } from 'ionic-angular';
import { AddPage } from '../add/add.component';
//import { Module } from 'path/to/module';

@Component({
	selector: 'page-slopes',
	templateUrl: 'slopes.component.html'
})
export class SlopesPage {
	constructor(public wishesServices:WishesServices,
				private navCtrl: NavController, private alertCtrl: AlertController) {}
	
	addlist(){
		// this.navCtrl.push(AddPage)
		const alert = this.alertCtrl.create({
			title: 'New List',
			message: 'Name of the new list',
			inputs: [{
				name: 'title',
				placeholder: 'Name of the list'	
			}],
			buttons: [{
				text: 'Cancel'	
			},
			{
				text: 'Add',
				handler: data =>{
					if(length){
						if(data.title.length === 0){
							return;
						}	
					}
					this.navCtrl.push(AddPage,{
						title: data.title
					})
				}
			}]
		});
		alert.present();
	}

}
