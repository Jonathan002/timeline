import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatesService {

  constructor(
    private http: HttpClient,
  ) { }

  getDates() {
    return this.http.get('http://my-mock-api/dates').pipe(
      // TODO: implement ErrorService
    );
  }
}
