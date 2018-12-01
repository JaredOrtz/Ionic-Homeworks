import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable()
export class WishesServices {
	
	lists: List[] = [];
	
	constructor(){
		/*const list1 = new List("Foundypet");
		const list2 = new List("Serpic");
		this.lists.push(list1, list2);
		console.log(this.lists);*/
		this.loadStorage();
	}
	addList(list:List){
		this.lists.push(list);
		this.saveStorage();
	}
	deleteList(list:List){
		this.lists = this.lists.filter(listData =>{
			return listData.id !== list.id
		});
		this.saveStorage();
	}
	saveStorage(){
		localStorage.setItem('data', JSON.stringify( this.lists ));
	}
	loadStorage(){
		if(localStorage.getItem('data')){
			this.lists = JSON.parse( localStorage.getItem('data') );
		}else{
			this.lists = [];
		}
	}
}