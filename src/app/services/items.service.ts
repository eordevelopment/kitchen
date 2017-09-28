import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseRestService } from 'app/services/BaseRestService';
import { Item } from 'app/modules/inventory/model/item';
import { SessionService } from 'app/services/session.service';
import { IItemSearchResult } from 'app/contract/IItemSearchResult';
import { IItem } from 'app/contract/IItem';

@Injectable()
export class ItemsService extends BaseRestService {

  constructor(httpClient: HttpClient, sessionService: SessionService) {
    super(httpClient, sessionService, 'items');
  }

  public getItem(id: string): Observable<IItem> {
    if (!id || id.length <= 1) {
      return Observable.of<IItem>(null)
    } else {
      return this.httpClient.get<IItem>(this.endpoint + id, this.getAuthHeader()).catch(this.handleError);
    }
  }

  public getItems(): Observable<IItem[]> {
    return this.httpClient.get<IItem[]>(this.endpoint, this.getAuthHeader()).catch(this.handleError);
  }

  public deleteItem(id: string): Observable<void> {
    return this.httpClient.delete(this.endpoint + id, this.getAuthHeader()).catch(this.handleError);
  }

  public saveItem(value: IItem): Observable<void> {
    const options = this.getAuthHeader();

    if (value.id && value.id.length > 0) {
      return this.httpClient.put(this.endpoint + value.id, value, options).catch(this.handleError);
    } else {
      return this.httpClient.post(this.endpoint, value, options).catch(this.handleError);
    }
  }

  public searchItems(searchText: string, pageSize?: number, page?: number): Observable<IItemSearchResult> {
    if (!pageSize) {
      pageSize = 10;
    }
    if (!page) {
      page = 1
    }
    const query = `${this.endpoint}search/${searchText}/${pageSize}/${page}`
    return this.httpClient.get<IItemSearchResult>(query, this.getAuthHeader()).catch(this.handleError);
  }

  public flagItem(id: string, mustBuy: boolean): Observable<void> {
    return this.httpClient.put(this.endpoint + 'flag/' + id, mustBuy, this.getAuthHeader()).catch(this.handleError);
  }
}
