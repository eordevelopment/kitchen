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
import { Item } from 'app/modules/inventory/model/item';

@Injectable()
export class ItemsService {

  constructor(private http: Http, private storageService: StorageService) { }

  public getItems(searchText: string): Observable<Item[]> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(environment.serviceUrl + 'items/search/' + searchText, options)
      .map(response => response.json() as Item[])
      .catch(this.handleError);
  }

  private handleError(res: Response | any) {
    const error = new ServiceError();
    error.status = res.status;
    error.message = res.json().error;
    return Observable.throw(error);
  }
}
