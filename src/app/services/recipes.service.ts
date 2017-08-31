import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { StorageService } from './storage.service';

import { ServiceError } from 'app/classes/error';
import { environment } from '../../environments/environment';
import { IRecipe } from 'app/contract/IRecipe';
import { IRecipeType } from 'app/contract/IRecipeType';

@Injectable()
export class RecipesService {

  constructor(private http: Http, private storageService: StorageService) { }

  public viewRecipe(key: string): Observable<IRecipe> {
    if (!key) {
      return Observable.of<IRecipe>(null)
    } else {
      return this.http.get(environment.serviceUrl + 'recipe/viewrecipe/' + key)
        .map(response => response.json() as IRecipe)
        .catch(this.handleError);
    }
  }

  public getRecipeView(key: string): Observable<IRecipe> {
    if (!key) {
      return Observable.of<IRecipe>(null)
    } else {
      return this.http.get(environment.serviceUrl + 'recipe/viewrecipe/' + key)
        .map(response => response.json() as IRecipe)
        .catch(this.handleError);
    }
  }

  public getRecipe(id: string): Observable<IRecipe> {
    if (!id || Number(id) === 0) {
      return Observable.of<IRecipe>(null)
    } else {
      const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
      const options = new RequestOptions({ headers: headers });

      return this.http.get(environment.serviceUrl + 'recipe/' + id, options)
        .map(response => response.json() as IRecipe)
        .catch(this.handleError);
    }
  }

  public getRecipies(): Observable<IRecipe[]> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(environment.serviceUrl + 'recipe', options)
      .map(response => response.json() as IRecipe[])
      .catch(this.handleError);
  }

  public getRecipeType(id: string): Observable<IRecipeType> {
    if (!id) {
      return Observable.of<IRecipeType>(null)
    } else {
      const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
      const options = new RequestOptions({ headers: headers });

      return this.http.get(environment.serviceUrl + 'recipetype/' + id, options)
        .map(response => response.json() as IRecipeType)
        .catch(this.handleError);
    }
  }

  public getRecipieTypes(): Observable<IRecipeType[]> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(environment.serviceUrl + 'recipetype', options)
      .map(response => response.json() as IRecipeType[])
      .catch(this.handleError);
  }

  public saveRecipe(value: IRecipe): Observable<number> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Basic ${this.storageService.getToken()}`);
    const options = new RequestOptions({ headers: headers });

    console.log(value);

    if (value.id && value.id.length > 0) {
      return this.http.put(environment.serviceUrl + 'recipe/' + value.id, value, options)
        .map(this.extractData)
        .catch(this.handleError);
    } else {
      return this.http.post(environment.serviceUrl + 'recipe', value, options)
        .map(this.extractData)
        .catch(this.handleError);
    }
  }

  public saveRecipeType(value: IRecipeType): Observable<string> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Basic ${this.storageService.getToken()}`);
    const options = new RequestOptions({ headers: headers });

    if (value.id && value.id.length > 0) {
      return this.http.put(environment.serviceUrl + 'recipetype/' + value.id, value, options)
        .map(this.extractData)
        .catch(this.handleError);
    } else {
      return this.http.post(environment.serviceUrl + 'recipetype', value, options)
        .map(this.extractData)
        .catch(this.handleError);
    }
  }

  public deleteRecipe(id: string): Observable<void> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Basic ${this.storageService.getToken()}`);
    const options = new RequestOptions({ headers: headers });

    return this.http.delete(environment.serviceUrl + 'recipe/' + id, options)
      .catch(this.handleError);
  }

  private extractData(res: Response): string {
    return res.text();
  }

  private handleError(res: Response | any) {
    const error = new ServiceError();
    error.status = res.status;
    error.message = res.json().error;
    return Observable.throw(error);
  }
}
