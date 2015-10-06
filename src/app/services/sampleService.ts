import { Injectable } from 'angular2/angular2';

@Injectable() class MyService {
  private message: string;

  constructor() {
    this.message = "Services are working";
  }

  getMessage() {
    return this.message;
  }

}

export { MyService };
