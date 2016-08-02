import { Injectable } from '@angular/core';

@Injectable()
export class MyService {
  message: string;

  constructor() {
    this.message = "Services are working";
  }

  public getMessage() {
    return this.message;
  }
}
