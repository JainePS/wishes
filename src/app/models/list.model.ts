import { ListItem } from "./list-item.model";




export class List {

    id: number;
    tittle: string;
    finishedDate: Date;
    finished: boolean;
    items: ListItem[];
 
    constructor(tittle: string){

        this.tittle = tittle;
        this.finishedDate = new Date();
        this.finished = false;
        this.items = [];
        this.id = new Date().getTime()

    }

}