import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IShoppingList } from 'app/contract/IShoppingList';
import { BaseRestService } from 'app/services/BaseRestService';
import { SessionService } from 'app/services/session.service';

@Injectable()
export class ShoppingListService extends BaseRestService {

  constructor(httpClient: HttpClient, sessionService: SessionService) {
    super(httpClient, sessionService, 'list');
  }

  public getOpenList(): Observable<IShoppingList> {
    return this.httpClient.get<IShoppingList>(this.endpoint + 'open', this.getAuthHeader()).catch(this.handleError);
  }

  public generateList(): Observable<string> {
    const opts = this.getAuthHeader();
    opts.responseType = 'text';

    return this.httpClient.get<string>(this.endpoint + 'generate', opts).catch(this.handleError);
  }

  public getList(id: string): Observable<IShoppingList> {
    return this.httpClient.get<IShoppingList>(this.endpoint + 'details/' + id, this.getAuthHeader()).catch(this.handleError);
  }

  public getPreviousLists(page?: number): Observable<IShoppingList[]> {
    if (!page) {
      page = 0;
    }
    return this.httpClient.get<IShoppingList[]>(this.endpoint + 'closed/' + page, this.getAuthHeader()).catch(this.handleError);
  }

  public updateList(value: IShoppingList): Observable<IShoppingList> {
    return this.httpClient.put<IShoppingList>(this.endpoint + value.id, value, this.getAuthHeader()).catch(this.handleError);
  }

  public deleteList(id: string): Observable<void> {
    return this.httpClient.delete(this.endpoint + id, this.getAuthHeader()).catch(this.handleError);
  }
}
