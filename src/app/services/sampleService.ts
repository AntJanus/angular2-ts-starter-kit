import { Injectable } from 'angular2/core';

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
