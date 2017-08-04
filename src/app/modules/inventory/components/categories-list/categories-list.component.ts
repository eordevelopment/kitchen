import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BaseComponent } from 'app/classes/baseComponent';
import { CategoriesService } from 'app/services/categories.service';
import { ICategory } from 'app/contract/ICategory';

@Component({
  selector: 'app-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.less']
})
export class CategoriesListComponent extends BaseComponent implements OnInit {
  public categories: ICategory[];
  public selectedCategory: ICategory;
  public failure: string;

  constructor(private categoriesService: CategoriesService, router: Router) { super(router); }

  ngOnInit() {
    this.categoriesService
      .getCategories()
      .subscribe(
      values => this.categories = values,
      (error: any) => this.handleError(error));
  }

  public onSelect(category: ICategory): void {
    this.selectedCategory = category;
    this.router.navigate(['/categorydetail', this.selectedCategory.id]);
  }
}
