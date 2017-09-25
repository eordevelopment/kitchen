import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StorageService } from './storage.service';
import { BaseRestService } from 'app/services/BaseRestService';
import { Item } from 'app/modules/inventory/model/item';

@Injectable()
export class ItemsService extends BaseRestService {

  constructor(httpClient: HttpClient, storageService: StorageService) {
    super(httpClient, storageService, 'items');
  }

  public getItems(searchText: string): Observable<Item[]> {
    return this.httpClient.get<Item[]>(this.endpoint + 'search/' + searchText, this.getAuthHeader()).catch(this.handleError);
  }
}
