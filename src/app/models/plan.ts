import * as moment from 'moment';
import { Validators } from '@angular/forms';

import { IFormEntity } from 'app/models/IFormEntity';
import { IPlanItem, PlanItem } from 'app/models/planItem';

export interface IPlan {
  id: number;
  dateTime: moment.Moment | string;
  items: IPlanItem[];
}

export class Plan implements IFormEntity, IPlan {
  id: number;
  dateTime: moment.Moment | string;
  items: IPlanItem[];

  formErrors: any;
  validationMessages: any;

  constructor(source?: IPlan) {
    if (source) {
      this.id = source.id;
      this.items = source.items;
      if (source.dateTime) {
        this.dateTime = moment(source.dateTime);
      }
    }
  }

  public getFormConfig() {
    throw new Error('Method not implemented.');
  }
}
