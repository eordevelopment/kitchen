import { ServiceError } from 'app/models/error';
import { Router } from '@angular/router';

export abstract class BaseComponent {
  public failure: string;
  protected router: Router;

  constructor(router: Router) {
    this.router = router;
  }

  protected handleError(error: ServiceError): void {
    if (error.status === 401) {
      this.router.navigate(['/login']);
    }
    this.failure = error.message;
  }
}
