import { TestBed, fakeAsync, tick, async } from '@angular/core/testing';
import { ApiService } from './api.service';
import { HttpClientModule, HttpRequest } from '@angular/common/http';

fdescribe('ApiService', () => {
  let service: ApiService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.get(ApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it(`should generate a collection of dates and assign it to the datesCollection property`, () => {
    expect((service as any).datesCollection.length > 0).toEqual(true);
  });
  it(`should be able to return a MockResponse`, async () => {
    const req = new HttpRequest('GET', `my-mock-api/dates`);
    const res: any = await service.makeGetRequest(req);
    expect(res.status).toEqual(200);
    expect((service as any).datesCollection).toEqual(res.body);
  });
});
