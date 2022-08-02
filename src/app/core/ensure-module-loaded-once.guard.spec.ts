import { TestBed } from '@angular/core/testing';

import { EnsureModuleLoadedOnceGuard } from './ensure-module-loaded-once.guard';

describe('EnsureModuleLoadedOnceGuard', () => {
  let guard: EnsureModuleLoadedOnceGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EnsureModuleLoadedOnceGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
