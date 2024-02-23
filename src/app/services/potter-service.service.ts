import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PotterServiceService {

  constructor() { }

  getAllServices() {
    return [
      { name: 'Potter', id: '1', status: 'Active' }
    ]
  }
}
