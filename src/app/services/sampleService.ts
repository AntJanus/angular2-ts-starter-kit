import { Injectable } from 'angular2/angular2';

export class MyService {
  message: string;

  constructor() {
    this.message = "Services are working";
  }

  getMessage() {
    return this.message;
  }

}
