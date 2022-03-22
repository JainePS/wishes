import { Injectable } from '@angular/core';
import { List } from '../models/list.model';

@Injectable({
  providedIn: 'root',
})
export class WishesService {
  lists: List[] = [];

  constructor() {
    const list1 = new List('Get the infinity rock');
    const list2 = new List('Heroes desappear');

    this.lists.push(list1, list2);

    console.log(this.lists);
    
  }

  createList( tittle: string ){
    const newList = new List(tittle);
    this.lists.push( newList )
  }
}
