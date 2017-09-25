import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { ServiceError } from 'app/classes/error';
import { SessionService } from 'app/services/session.service';

export abstract class BaseRestService {
  protected httpClient: HttpClient;
  protected endpoint: string;
  protected sessionService: SessionService;
  protected serviceUrl: string;

  constructor(httpClient: HttpClient, sessionService: SessionService, resource: string) {
    this.httpClient = httpClient;
    this.endpoint = environment.serviceUrl + resource + '/';
    this.serviceUrl = environment.serviceUrl;
    this.sessionService = sessionService;
  }

  protected getAuthHeader(): any {
    const opts = {
      headers: new HttpHeaders()
    };
    const token = this.sessionService.getToken();
    opts.headers = opts.headers.set('Content-Type', 'application/json');
    if (token && token != null) {
      opts.headers = opts.headers.set('Authorization', `${token.tokenType} ${token.token}`);
    }

    return opts;
  }

  protected handleError(res: Response | any) {
    console.log(res);
    const error = new ServiceError();
    error.status = res.status;
    error.message = res.error;
    console.log(error);
    return Observable.throw(error);
  }
}
