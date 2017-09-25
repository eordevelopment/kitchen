import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { IRecipe } from 'app/contract/IRecipe';
import { IRecipeType } from 'app/contract/IRecipeType';
import { BaseRestService } from 'app/services/BaseRestService';
import { SessionService } from 'app/services/session.service';

@Injectable()
export class RecipesService extends BaseRestService {

  constructor(httpClient: HttpClient, sessionService: SessionService) {
    super(httpClient, sessionService, 'recipe');
  }

  public getRecipeView(key: string): Observable<IRecipe> {
    if (!key) {
      return Observable.of<IRecipe>(null)
    } else {
      return this.httpClient.get<IRecipe>(this.endpoint + 'viewrecipe/' + key).catch(this.handleError);
    }
  }

  public getRecipe(id: string): Observable<IRecipe> {
    if (!id || Number(id) === 0) {
      return Observable.of<IRecipe>(null)
    } else {
      return this.httpClient.get<IRecipe>(this.endpoint + id, this.getAuthHeader()).catch(this.handleError);
    }
  }

  public getRecipies(): Observable<IRecipe[]> {
    return this.httpClient.get<IRecipe[]>(this.endpoint, this.getAuthHeader()).catch(this.handleError);
  }

  public getRecipeType(id: string): Observable<IRecipeType> {
    if (!id) {
      return Observable.of<IRecipeType>(null)
    } else {
      return this.httpClient.get<IRecipeType>(this.serviceUrl + 'recipetype/' + id, this.getAuthHeader()).catch(this.handleError);
    }
  }

  public getRecipieTypes(): Observable<IRecipeType[]> {
    return this.httpClient.get<IRecipeType[]>(this.serviceUrl + 'recipetype/', this.getAuthHeader()).catch(this.handleError);
  }

  public saveRecipe(value: IRecipe): Observable<string> {
    const options = this.getAuthHeader();
    options.responseType = 'text';

    if (value.id && value.id.length > 0) {
      return this.httpClient.put<string>(this.endpoint + value.id, value, options).catch(this.handleError);
    } else {
      return this.httpClient.post<string>(this.endpoint, value, options).catch(this.handleError);
    }
  }

  public saveRecipeType(value: IRecipeType): Observable<string> {
    const options = this.getAuthHeader();
    options.responseType = 'text';

    if (value.id && value.id.length > 0) {
      return this.httpClient.put(this.serviceUrl + 'recipetype/' + value.id, value, options).catch(this.handleError);
    } else {
      return this.httpClient.post(this.serviceUrl + 'recipetype', value, options).catch(this.handleError);
    }
  }

  public deleteRecipe(id: string): Observable<void> {
    return this.httpClient.delete(this.endpoint + id, this.getAuthHeader()).catch(this.handleError);
  }
}
