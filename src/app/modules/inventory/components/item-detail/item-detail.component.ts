import { Component, OnInit } from '@angular/core';
import { BaseComponent } from 'app/classes/baseComponent';
import { Title } from '@angular/platform-browser';
import { Location } from '@angular/common';
import { Router, ParamMap, ActivatedRoute } from '@angular/router';
import { ItemsService } from 'app/services/items.service';
import { FormGroup } from '@angular/forms';
import { FormHelperService } from 'app/services/form-helper.service';
import { Item } from 'app/modules/inventory/model/item';
import { IItem } from 'app/contract/IItem';
import { IRecipe } from 'app/contract/IRecipe';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrls: ['./item-detail.component.less']
})
export class ItemDetailComponent extends BaseComponent implements OnInit {
  public itemForm: FormGroup;
  public item: Item;

  constructor(
    private itemsService: ItemsService,
    private formHelper: FormHelperService,
    private route: ActivatedRoute,
    private location: Location,
    title: Title,
    router: Router) {
    super(router, title);
  }

  ngOnInit() {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.itemsService.getItem(params.get('id')))
      .subscribe((item: IItem) => {
        this.item = new Item(item);
        this.itemForm = this.formHelper.buildForm(this.item);
      });
  }

  public goBack(): void {
    this.location.back();
  }

  public saveItem(): void {
    this.itemsService.saveItem(this.item).subscribe(res => {
      this.itemForm.reset();
      this.location.back();
    }, (error) => this.handleError(error));
  }

  public updateItem(event: string): void {
    setTimeout(() => { this.item.name = event; });
  }

  public updateUnit(event: string): void {
    setTimeout(() => { this.item.unitType = event; });
  }

  public toggleShoppingFlag(): void {
    this.item.flaggedForNextShop = !this.item.flaggedForNextShop;
  }

  public viewRecipe(recipe: IRecipe): void {
    this.router.navigate(['/recipedetail', recipe.id]);
  }
}
