import * as moment from 'moment';
import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { Title } from '@angular/platform-browser';

import { ShoppingList } from 'app/modules/plan/model/shoppingList';
import { IShoppingList } from 'app/contract/IShoppingList';
import { ShoppingListItem } from 'app/modules/plan/model/shoppingListItem';
import { Item } from 'app/modules/inventory/model/item';
import { BaseComponent } from 'app/classes/baseComponent';
import { ShoppingListService } from 'app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent extends BaseComponent implements OnInit {
  public openList: ShoppingList;
  public currentList: ShoppingList;
  public pastLists: IShoppingList[];

  private pastListsPage: number;
  public hasLoadedLists: boolean;

  private listGetIds = new Subject<string>();
  public listGetResult: Observable<IShoppingList>;

  constructor(
    private route: ActivatedRoute,
    private shoppingListService: ShoppingListService,
    title: Title,
    router: Router) {
    super(router, title);
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => {
        const id = params.get('id');
        if (id) {
          return this.shoppingListService.getList(id);
        } else {
          return this.shoppingListService.getOpenList();
        }
      })
      .subscribe((source: IShoppingList) => this.handleServiceResponse(source));

    this.listGetResult = this.listGetIds
      .distinctUntilChanged()
      .switchMap(id => id ? this.shoppingListService.getList(id) : Observable.of<IShoppingList>(null))
      .catch(error => {
        this.handleError(error);
        return Observable.of<IShoppingList>(null);
      });

    this.listGetResult.subscribe(value => {
      if (value && value !== null) {
        this.currentList = new ShoppingList(value);
      }
    });

    this.pastListsPage = 0;
    this.hasLoadedLists = true;
  }

  public addToList(item: ShoppingListItem): void {
    this.currentList.addToList(item);
  }

  public removeFromList(item: ShoppingListItem): void {
    this.currentList.removeFromList(item);
  }

  public deleteList(): void {
    this.shoppingListService.deleteList(this.currentList.id)
      .subscribe(response => {
        this.currentList = undefined;
      },
      (error: any) => this.handleError(error));
  }

  public closeList(): void {
    this.currentList.isDone = true;
    this.saveList();
  }

  public saveList(): void {
    this.shoppingListService.updateList(this.currentList)
      .subscribe(response => this.handleServiceResponse(response),
      (error: any) => this.handleError(error));
  }

  public loadMore(): void {
    this.shoppingListService.getPreviousLists(this.pastListsPage)
      .subscribe(values => { this.setClosedLists(values) }, error => this.handleError(error));
    this.pastListsPage += 1;
  }

  public showList(pastList?: IShoppingList): void {
    if (pastList) {
      if (this.openList && this.currentList.id === this.openList.id) {
        this.openList = this.currentList;
      }
      this.listGetIds.next(pastList.id);
    } else {
      this.listGetIds.next(null);
      this.currentList = new ShoppingList(this.openList);
    }
  }

  public newList(): void {
    const mt = moment();

    this.currentList = new ShoppingList();
    this.currentList.id = '';
    this.currentList.name = mt.format('ddd, MMM-DD YYYY');

    this.openList = this.currentList;
  }

  private handleServiceResponse(source?: IShoppingList): void {{
      if (source) {
        this.currentList = new ShoppingList(source);
        if (!this.currentList.isDone) {
          this.openList = new ShoppingList(source);
        } else {
          this.openList = undefined;
        }
      }
    }
  }

  private setClosedLists(values: IShoppingList[]): void {
    if (!values || values.length <= 0) {
      this.hasLoadedLists = false;
      return;
    }

    if (!this.pastLists) {
      this.pastLists = new Array();
    }

    for (let i = 0; i < values.length; i++) {
      this.pastLists.push(values[i]);
    }
  }
}
