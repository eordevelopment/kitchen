import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/classes/baseComponent';
import { ItemsService } from 'app/services/items.service';
import { Title } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { IItem } from 'app/contract/IItem';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.less']
})
export class ItemsListComponent extends BaseComponent implements OnInit {
  public items: IItem[];
  public searchText: string;

  private searchTerms = new Subject<string>();

  constructor(
    private itemsService: ItemsService,
    title: Title,
    router: Router) {
    super(router, title);
  }

  ngOnInit() {
    this.itemsService.getItems().subscribe(value => this.items = value, (error) => this.handleError(error));

    const itemsObservable = this.searchTerms
    .debounceTime(150)
    .distinctUntilChanged()
    .switchMap(term => term ? this.itemsService.searchItems(term).map(res => {
      return res.items;
    }) : this.itemsService.getItems())
    .catch(error => {
      return Observable.of<IItem[]>([]);
    });

    itemsObservable.subscribe(items => this.items = items, (error) => this.handleError(error));
  }

  public searchItems(): void {
    this.searchTerms.next(this.searchText);
  }

  public onSelect(item?: IItem): void {
    this.router.navigate(['/itemdetail', item ? item.id : 0]);
  }

  public hasSearchText(): boolean {
    if(this.searchText && this.searchText.length > 0) {
      return true;
    }
    return false;
  }
}
