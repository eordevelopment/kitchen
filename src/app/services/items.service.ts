import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BaseRestService } from 'app/services/BaseRestService';
import { Item } from 'app/modules/inventory/model/item';
import { SessionService } from 'app/services/session.service';

@Injectable()
export class ItemsService extends BaseRestService {

  constructor(httpClient: HttpClient, sessionService: SessionService) {
    super(httpClient, sessionService, 'items');
  }

  public getItems(searchText: string): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.endpoint + 'search/' + searchText, this.getAuthHeader()).catch(this.handleError);
  }
}
