import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { StorageService } from './storage.service';
import { IPlan } from 'app/contract/IPlan';
import { BaseRestService } from 'app/services/BaseRestService';

@Injectable()
export class PlanService extends BaseRestService {

  constructor(httpClient: HttpClient, storageService: StorageService) {
    super(httpClient, storageService, 'plan');
  }

  public getUpcomingPlans(): Observable<IPlan[]> {
    return this.httpClient.get<IPlan[]>(this.endpoint + 'upcoming/14', this.getAuthHeader()).catch(this.handleError);
  }

  public getPreviousPlans(page?: number): Observable<IPlan[]> {
    if (!page) {
      page = 0;
    }
    return this.httpClient.get<IPlan[]>(this.endpoint + 'closed/' + page, this.getAuthHeader()).catch(this.handleError);
  }

  public savePlan(value: IPlan): Observable<void> {
    const options = this.getAuthHeader();

    if (value.id && value.id.length > 0) {
      return this.httpClient.put(this.endpoint + value.id, value, options).catch(this.handleError);
    } else {
      return this.httpClient.post(this.endpoint, value, options).catch(this.handleError);
    }
  }
}
