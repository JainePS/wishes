import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.scss'],
})
export class ListsComponent implements OnInit {
  @Input() itemList: List[];
  @Output() selectedItem: EventEmitter<List>;

  constructor(public wishesService: WishesService) {
    this.selectedItem = new EventEmitter();
  }

  ngOnInit() {}

  emitSelectedList(list: List) {
    this.selectedItem.emit(list);
  }

  toClearList(list: List){
    console.log(list);
    
     this.wishesService.toClearList(list);
  }
}
