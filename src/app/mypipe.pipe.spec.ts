/* tslint:disable:no-unused-variable */

import { addProviders, async, inject } from '@angular/core/testing';
import { MypipePipe } from './mypipe.pipe';

describe('Pipe: Mypipe', () => {
  it('create an instance', () => {
    let pipe = new MypipePipe();
    expect(pipe).toBeTruthy();
  });
});
