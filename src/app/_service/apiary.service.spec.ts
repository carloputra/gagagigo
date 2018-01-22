import { TestBed, inject } from '@angular/core/testing';

import { ApiaryService } from './apiary.service';

describe('ApiaryService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiaryService]
    });
  });

  it('should be created', inject([ApiaryService], (service: ApiaryService) => {
    expect(service).toBeTruthy();
  }));
});
