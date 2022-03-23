import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { List } from 'src/app/models/list.model';
import { WishesService } from 'src/app/services/wishes.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    public wishesService: WishesService,
    private router: Router,
    private alertCtrl: AlertController
  ) {}

  getAllShoppingLists() {
    return this.wishesService.lists;
  }
  
  async addList() {
    const alert = await this.alertCtrl.create({
      cssClass: 'my-custom-class',
      header: 'New',
      inputs: [
        {
          name: 'title',
          type: 'text',
          placeholder: 'List name',
        },
      ],
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel');
          },
        },
        {
          text: 'Create',
          handler: (data) => {
            console.log(data);
            if (data.title.length === 0) {
              return;
            }
            const listid = this.wishesService.createList(data.title);
            this.router.navigateByUrl(`/tabs/add/${listid}`);
          },
        },
      ],
    });

    alert.present();
  }

  selectedList(list: List) {
    console.log(list);
    this.router.navigateByUrl(`/tabs/add/${list.id}`);
  }
}
