import { Injectable } from 'angular2/angular2';

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
