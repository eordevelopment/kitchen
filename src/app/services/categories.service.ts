import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StorageService } from './storage.service';
import { BaseRestService } from 'app/services/BaseRestService';
import { ICategory } from 'app/contract/ICategory';

@Injectable()
export class CategoriesService extends BaseRestService {

  constructor(httpClient: HttpClient, storageService: StorageService) {
    super(httpClient, storageService, 'category');
  }

  public getCategory(id: string): Observable<ICategory> {
    if (!id || id.length <= 1) {
      return Observable.of<ICategory>(null)
    } else {
      return this.httpClient.get<ICategory>(this.endpoint + id, this.getAuthHeader()).catch(this.handleError);
    }
  }

  public getCategories(): Observable<ICategory[]> {
    return this.httpClient.get<ICategory[]>(this.endpoint, this.getAuthHeader()).catch(this.handleError);
  }

  public saveCategory(value: ICategory): Observable<void> {
    const options = this.getAuthHeader();

    if (value.id && value.id.length > 0) {
      return this.httpClient.put(this.endpoint + value.id, value, options).catch(this.handleError);
    } else {
      return this.httpClient.post(this.endpoint, value, options).catch(this.handleError);
    }
  }

  public deleteCategory(id: string): Observable<void> {
    return this.httpClient.delete(this.endpoint + id, this.getAuthHeader()).catch(this.handleError);
  }
}
