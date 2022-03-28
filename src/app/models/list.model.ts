import { ListItem } from './list-item.model';

export class List {
  id: number;
  tittle: string;
  finishedDate: Date;
  finished: boolean;
  items: ListItem[];
  

  constructor(tittle: string) {
    this.tittle = tittle;
    this.finishedDate = new Date();
    this.finished = false;
    this.items = [];
    this.id = new Date().getTime();
  }

  setFinished( isFinished: boolean ) {
    this.finished = isFinished;
  }

  isFinished() {
    return this.finished;
  }

  addItem( itemName: string ) {
    const newItem = new ListItem(itemName);
    this.items.push(newItem);
  }

  

}
