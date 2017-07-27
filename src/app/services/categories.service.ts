import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { StorageService } from './storage.service';

import { ICategory } from '../models/category';
import { ServiceError } from '../models/error';

import { environment } from '../../environments/environment';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';

@Injectable()
export class CategoriesService {

  constructor(private http: Http, private storageService: StorageService) { }

  public getCategory(id: number): Observable<ICategory> {
    if (id <= 0) {
      return Observable.of<ICategory>(null)
    } else {
      const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
      const options = new RequestOptions({ headers: headers });

      return this.http.get(environment.serviceUrl + 'categories/' + id, options)
        .map(response => response.json() as ICategory)
        .catch(this.handleError);
    }
  }

  public getCategories(): Observable<ICategory[]> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(environment.serviceUrl + 'categories', options)
      .map(response => response.json() as ICategory[])
      .catch(this.handleError);
  }

  public saveCategory(value: ICategory): Observable<void> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Basic ${this.storageService.getToken()}`);
    const options = new RequestOptions({ headers: headers });

    if (value.id && value.id > 0) {
      return this.http.put(environment.serviceUrl + 'categories/' + value.id, value, options)
      .catch(this.handleError);
    } else {
      return this.http.post(environment.serviceUrl + 'categories', value, options)
      .catch(this.handleError);
    }
  }

  public deleteCategory(id: number): Observable<void> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Basic ${this.storageService.getToken()}`);
    const options = new RequestOptions({ headers: headers });

    return this.http.delete(environment.serviceUrl + 'categories/' + id, options)
      .catch(this.handleError);
  }

  private handleError(res: Response | any) {
    const error = new ServiceError();
    error.status = res.status;
    error.message = res.json().error;
    return Observable.throw(error);
  }
}
