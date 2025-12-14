import { TestBed } from '@angular/core/testing';

import { FlaskService } from './flask-service';

describe('FlaskService', () => {
  let service: FlaskService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlaskService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
getProfilo() {
  return this.http.get('https://cuddly-rotary-phone-gr54wj5qp4x2g45-
  5000.app.github.dev/profilo');
}
});
