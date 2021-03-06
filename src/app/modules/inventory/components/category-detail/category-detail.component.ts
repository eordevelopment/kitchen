import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

import { BaseComponent } from 'app/classes/baseComponent';
import { CategoriesService } from 'app/services/categories.service';
import { ItemsService } from 'app/services/items.service'
import { FormHelperService } from 'app/services/form-helper.service';
import { Category } from 'app/modules/inventory/model/category';
import { Item } from 'app/modules/inventory/model/item';
import { ICategory } from 'app/contract/ICategory';
import { IItem } from 'app/contract/IItem';


@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.less']
})
export class CategoryDetailComponent extends BaseComponent implements OnInit {
  public categoryForm: FormGroup;
  public itemForm: FormGroup;
  public category: Category;
  public activeItem: Item;
  public activeItemIdx: number;

  private searchTerms = new Subject<string>();
  public itemsSearchResult: Observable<Item[]>;

  constructor(
    private categoriesService: CategoriesService,
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private location: Location,
    private formHelper: FormHelperService,
    title: Title,
    router: Router) {
    super(router, title);
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.categoriesService.getCategory(params.get('id')))
      .subscribe((category: ICategory) => {
        this.category = new Category(category);
        this.categoryForm = this.formHelper.buildForm(this.category);
      });

    this.itemsSearchResult = this.searchTerms
      .debounceTime(150)
      .distinctUntilChanged()
      .switchMap(term => term ? this.itemsService.searchItems(term).map(res => {
        const items = new Array();
        for (const item of res.items) {
          items.push(new Item(item));
        }
        return items;
      }) : Observable.of<Item[]>([]))
      .catch(error => {
        return Observable.of<Item[]>([]);
      });
  }

  public setItem(idx: number, item?: IItem): void {
    this.activeItemIdx = idx;
    this.activeItem = new Item(item);
    this.itemForm = this.formHelper.buildForm(this.activeItem);
  }

  public goBack(): void {
    this.location.back();
  }

  public updateCategory(event: string): void {
    setTimeout(() => { this.category.name = event; });
  }

  public updateItem(event: string): void {
    setTimeout(() => { this.activeItem.name = event; });
  }

  public updateUnit(event: string): void {
    setTimeout(() => { this.activeItem.unitType = event; });
  }

  public deleteCategory(): void {
    this.categoriesService.deleteCategory(this.category.id)
      .subscribe(response => {
        this.categoryForm.reset();
        this.router.navigate(['/categories']);
      },
      (error: any) => this.handleError(error));
  }

  public saveCategory(): void {
    this.categoriesService.saveCategory(this.category)
      .subscribe(response => {
        this.categoryForm.reset();
        this.router.navigate(['/categories']);
      },
      (error: any) => this.handleError(error));
  }

  public saveItem(): void {
    if (this.activeItemIdx >= 0) {
      this.category.updateItem(this.activeItemIdx, this.activeItem);
    } else {
      this.category.insertItem(this.activeItem);
    }
  }

  public deleteItem(): void {
    this.category.removeItem(this.activeItem);
  }

  public selectSearchItem(searchResult: Item): void {
    this.activeItem.name = searchResult.name;
    this.activeItem.quantity = searchResult.quantity;
    this.activeItem.unitType = searchResult.unitType;
    this.activeItem.id = searchResult.id;
    this.searchTerms.next(null);
  }

  private search(): void {
    this.searchTerms.next(this.activeItem.name);
  }
}
