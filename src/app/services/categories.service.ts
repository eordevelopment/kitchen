import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Headers, RequestOptions } from '@angular/http';

import { StorageService } from './storage.service';

import { ServiceError } from 'app/classes/error';
import { environment } from '../../environments/environment';
import { ICategory } from 'app/contract/ICategory';

@Injectable()
export class CategoriesService {

  constructor(private http: Http, private storageService: StorageService) { }

  public getCategory(id: string): Observable<ICategory> {
    if (!id) {
      return Observable.of<ICategory>(null)
    } else {
      const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
      const options = new RequestOptions({ headers: headers });

      return this.http.get(environment.serviceUrl + 'category/' + id, options)
        .map(response => response.json() as ICategory)
        .catch(this.handleError);
    }
  }

  public getCategories(): Observable<ICategory[]> {
    const headers = new Headers({ 'Authorization': `Basic ${this.storageService.getToken()}` });
    const options = new RequestOptions({ headers: headers });

    return this.http.get(environment.serviceUrl + 'category', options)
      .map(response => response.json() as ICategory[])
      .catch(this.handleError);
  }

  public saveCategory(value: ICategory): Observable<void> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Basic ${this.storageService.getToken()}`);
    const options = new RequestOptions({ headers: headers });

    if (value.id && value.id.length > 0) {
      return this.http.put(environment.serviceUrl + 'category/' + value.id, value, options)
      .catch(this.handleError);
    } else {
      return this.http.post(environment.serviceUrl + 'category', value, options)
      .catch(this.handleError);
    }
  }

  public deleteCategory(id: string): Observable<void> {
    const headers = new Headers({ 'Content-Type': 'application/json' });
    headers.append('Authorization', `Basic ${this.storageService.getToken()}`);
    const options = new RequestOptions({ headers: headers });

    return this.http.delete(environment.serviceUrl + 'category/' + id, options)
      .catch(this.handleError);
  }

  private handleError(res: Response | any) {
    const error = new ServiceError();
    error.status = res.status;
    error.message = res.json().error;
    return Observable.throw(error);
  }
}
