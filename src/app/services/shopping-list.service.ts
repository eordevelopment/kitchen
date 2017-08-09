import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { StorageService } from './storage.service';
import { ServiceError } from 'app/classes/error';
import { IShoppingList } from 'app/contract/IShoppingList';
import { environment } from 'environments/environment';

@Injectable()
export class ShoppingListService {

  constructor(private http: Http, private storageService: StorageService) { }

  public getOpenList(): Observable<IShoppingList> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(environment.serviceUrl + 'list/open', options)
      .map(response => response.json() as IShoppingList)
      .catch(this.handleError);
  }

  public generateList(): Observable<number> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(environment.serviceUrl + 'list/generate', options)
      .map(response => Number(response.text()))
      .catch(this.handleError);
  }

  public getList(id: number): Observable<IShoppingList> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(environment.serviceUrl + 'list/details/' + id, options)
      .map(response => response.json() as IShoppingList)
      .catch(this.handleError);
  }

  public getPreviousLists(page?: number): Observable<IShoppingList[]> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    if (!page) {
      page = 0;
    }

    return this.http.get(environment.serviceUrl + 'list/closed/' + page, options)
      .map(response => response.json() as IShoppingList[])
      .catch(this.handleError);
  }

  public updateList(value: IShoppingList): Observable<IShoppingList> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Basic ${this.storageService.getToken()}`);
    const options = new RequestOptions({ headers: headers });

    return this.http.put(environment.serviceUrl + 'list/' + value.id, value, options)
      .map(response => response.json() as IShoppingList)
      .catch(this.handleError);
  }

  public deleteList(id: number): Observable<void> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Basic ${this.storageService.getToken()}`);
    const options = new RequestOptions({ headers: headers });

    return this.http.delete(environment.serviceUrl + 'list/' + id, options)
      .catch(this.handleError);
  }

  private handleError(res: Response | any) {
    const error = new ServiceError();
    error.status = res.status;
    error.message = res.json().error;
    return Observable.throw(error);
  }
}
