import { ServiceError } from 'app/classes/error';
import { Router } from '@angular/router';
import { Title } from '@angular/platform-browser';

export abstract class BaseComponent {
  public failure: string;
  protected router: Router;
  protected title: Title

  constructor(router: Router, title: Title) {
    this.router = router;
  }

  protected handleError(error: ServiceError): void {
    if (error.status === 401) {
      this.router.navigate(['/welcome']);
    }
    this.failure = error.message;
  }
}
