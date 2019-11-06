import { DatesService } from './../dates.service';
import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import * as moment from 'moment';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.scss']
})
export class TimelineComponent implements OnInit {

  dates$: Observable<any>;
  constructor(
    public dates: DatesService,
  ) { }

  ngOnInit() {
    this.dates$ = this.dates.getDates().pipe(
      // expect dates to come in sorted (see ApiService)
      map((dates: string[]) => {
        // TODO: use a web worker if this becomes CPU intesive to make UI responsive..
        const min = moment(dates[0]);
        const max = moment(dates[dates.length - 1]);
        const rangeDiff = max.diff(min, 'days');
        const timelineArr = new Array(rangeDiff + 1).fill(undefined).map(() => []);
        dates.map((date, index) => {
          const momentDate = moment(date);
          const dayIndex = (min.diff(momentDate, 'days') * -1);
          timelineArr[dayIndex].push(date);
        });
        return timelineArr;
      })
    );
  }
}
