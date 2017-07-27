import 'rxjs/add/operator/switchMap';
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

import { BaseComponent } from 'app/components/baseComponent';
import { CategoriesService } from 'app/services/categories.service';
import { ItemsService } from 'app/services/items.service'
import { FormHelperService } from 'app/services/form-helper.service';

import { ICategory, Category } from '../../models/category';
import { IItem, Item } from '../../models/item';
import { ServiceError } from '../../models/error';

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

  private searchTerms = new Subject<string>();
  public itemsSearchResult: Observable<Item[]>;

  constructor(
    private categoriesService: CategoriesService,
    private itemsService: ItemsService,
    private route: ActivatedRoute,
    private location: Location,
    private formHelper: FormHelperService,
    router: Router) {
    super(router);
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.categoriesService.getCategory(+params.get('id')))
      .subscribe((category: ICategory) => {
        this.category = new Category(category);
        this.categoryForm = this.formHelper.buildForm(this.category);
      });

    this.itemsSearchResult = this.searchTerms
      .debounceTime(150)
      .distinctUntilChanged()
      .switchMap(term => term ? this.itemsService.getItems(term) : Observable.of<Item[]>([]))
      .catch(error => {
        console.log(error);
        return Observable.of<Item[]>([]);
      });
  }

  public setItem(item?: IItem): void {
    this.activeItem = new Item(item);
    this.itemForm = this.formHelper.buildForm(this.activeItem);
  }

  public goBack(): void {
    this.location.back();
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
    this.category.upsertItem(this.activeItem);
  }

  public deleteItem(): void {
    this.category.removeItem(this.activeItem);
  }

  public selectSearchItem(searchResult: Item): void {
    this.activeItem.name = searchResult.name;
    this.searchTerms.next(null);
  }

  private search(): void {
    this.searchTerms.next(this.activeItem.name);
  }
}
