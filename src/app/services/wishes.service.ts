import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class WishesService {
  lists: List[] = [];

  constructor() {
    // this.holdStorage();
    this.chargeStorage();
    
  }

  createList( tittle: string ){
    const newList = new List(tittle);
    this.lists.push( newList );
    this.holdStorage();
    return newList.id;
  }

  getList(id: string | number){
    id = Number(id);

    console.log(this.lists);
    
    let filteredList = this.lists.find (listData => listData.id === id);

    return filteredList;
  }

  holdStorage(){
    localStorage.setItem('data',JSON.stringify(this.lists))
  }

  chargeStorage(){
    if(localStorage.getItem('data')){
      
      this.lists = JSON.parse( localStorage.getItem('data'));

    } else{
      this.lists = [];
    }
  }
 
}
