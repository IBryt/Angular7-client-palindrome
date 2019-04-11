import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Subject} from 'rxjs';
import {environment} from '../../environments/environment';
import {Palindrome} from '../model/palindrome';

@Injectable({
  providedIn: 'root'
})
export class PalindromeService {
  private url = environment.api_url + '/palindrome';
  private dataSource = new Subject<Palindrome>();
  palindromeUpdate = this.dataSource.asObservable();
  private dataDisplay = new Subject<Palindrome>();
  display = this.dataDisplay.asObservable();
  constructor(
    private http: HttpClient
  ) { }
  // work with http.
  addPalindrome(data: Palindrome) {
    return this.http.post(`${this.url}`, data);
  }
  getPalindromes() {
    return this.http.get<Palindrome[]>(`${this.url}`);
  }
  // work with app.
  updateDate(data: Palindrome) {
    this.dataSource.next(data);
  }
  displayPalindrome(data: Palindrome) {
    this.dataDisplay.next(data);
  }
}
