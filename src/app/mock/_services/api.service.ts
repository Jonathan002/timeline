import { Injectable } from '@angular/core';
import { MockResponse } from '../_models/api.model';
import { HttpRequest } from '@angular/common/http';
import * as faker from 'faker';
import * as moment from 'moment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private datesCollection = [];

  constructor() {
    this.generateDatesDatabase();
  }

  private generateDatesDatabase() {
    for (let i = 0; i < 50; i++) {
      const date = faker.date.past(5);
      const dateStr = moment(date).format('YYYY-MM-DD');
      this.datesCollection.push(dateStr);
    }
  }
  private databaseApplySort() {
    return this.datesCollection.sort((dateStrA, dateStrB) => {
      return moment(dateStrA).valueOf() - moment(dateStrB).valueOf();
    });
  }
  makeGetRequest(req: HttpRequest<any>) {
    // have sorting done in database query
    const sorted = this.databaseApplySort();
    const res = new MockResponse(sorted);
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(res);
      }, 1000);
    });
  }
}
