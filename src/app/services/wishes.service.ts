import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class WishesService {
  lists: List[] = [];

  constructor() {
    this.chargeStorage();
    
  }

  createList( tittle: string ){
    const newList = new List(tittle);
    this.lists.push( newList );
    this.holdStorage();
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
