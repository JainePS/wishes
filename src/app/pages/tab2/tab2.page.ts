import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  constructor(private wishesService: WishesService, private router: Router) {}

  getFinishedShoppingLists() {
    return this.wishesService.filteredFinisheddata();
  }
  selectedList(list: List) {
    console.log(list);
    this.router.navigateByUrl(`/tabs/tab2/add/${list.id}`);
  }
}
