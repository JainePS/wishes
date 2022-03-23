import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListItem } from 'src/app/models/list-item.model';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-add',
  templateUrl: './add.page.html',
  styleUrls: ['./add.page.scss'],
})
export class AddPage implements OnInit {
  list: List;
  itemName: '';

  constructor(
    private whishesService: WishesService,
    private route: ActivatedRoute
  ) {
    const listId = this.route.snapshot.paramMap.get('listId');
    console.log(listId);

    this.list = this.whishesService.getList(listId);
  }

  ngOnInit() {}

  addItem() {
    if (this.itemName.length === 0) {
      return;
    }

    this.list.addItem(this.itemName);

    this.itemName = '';
    this.whishesService.holdStorage();
  }

  changeCheck(item: ListItem) {
    const pending = this.list.items.filter(
      (itemData) => !itemData.completed
    ).length

    console.log({ pending });

    if (pending === 0) {
      this.list.finishedDate = new Date();
      this.list.finished = true;
    } else {
      this.list.finishedDate = null;
      this.list.finished = false;
    }

    this.whishesService.holdStorage();
  }

  clear(i: number) {
    this.list.items.splice(i, 1);
    this.whishesService.holdStorage();
  }
}
