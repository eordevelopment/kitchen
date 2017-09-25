import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { StorageService } from 'app/services/storage.service';
import { ServiceError } from 'app/classes/error';

export abstract class BaseRestService {
  protected httpClient: HttpClient;
  protected endpoint: string;
  protected storage: StorageService;
  protected serviceUrl: string;

  constructor(httpClient: HttpClient, storageService: StorageService, resource: string) {
    this.httpClient = httpClient;
    this.endpoint = environment.serviceUrl + resource + '/';
    this.serviceUrl = environment.serviceUrl;
    this.storage = storageService;
  }

  protected getAuthHeader(): any {
    const opts = {
      headers: new HttpHeaders()
    };
    const token = this.storage.getToken();
    opts.headers = opts.headers.set('Content-Type', 'application/json');
    if (token && token != null) {
      opts.headers = opts.headers.set('Authorization', `${token.tokenType} ${token.token}`);
    }

    return opts;
  }

  protected handleError(res: Response | any) {
    const error = new ServiceError();
    error.status = res.status;
    error.message = res.json().error;
    return Observable.throw(error);
  }
}
