import * as moment from 'moment';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-planner-home',
  templateUrl: './planner-home.component.html',
  styleUrls: ['./planner-home.component.less']
})
export class PlannerHomeComponent implements OnInit {
  public days: moment.Moment[];

  constructor() { }

  ngOnInit() {
    this.days = new Array();

    const now = moment();

    for (let i = 0; i < 7; i++) {
      const dt = moment(now);
      this.days.push(dt.add(i, 'd'));
    }
  }

}
