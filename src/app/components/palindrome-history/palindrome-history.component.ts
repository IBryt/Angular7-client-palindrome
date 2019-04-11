import { Component, OnInit } from '@angular/core';
import {PalindromeService} from '../../services/palindrome.service';
import {Palindrome} from '../../model/palindrome';

@Component({
  selector: 'app-palindrome-history',
  templateUrl: './palindrome-history.component.html',
  styleUrls: ['./palindrome-history.component.css']
})
export class PalindromeHistoryComponent implements OnInit {
  palindromes: Palindrome[] = [];
  constructor(
    private server: PalindromeService
  ) { }

  ngOnInit() {
    this.server.getPalindromes().subscribe(palidrome => {
      if (palidrome) {
        this.palindromes = palidrome;
      }
    }, error => {
      console.log(error);
    });
    this.server.palindromeUpdate.subscribe((palidrome: Palindrome) => {
      palidrome.id = this.palindromes.push(palidrome);
    }, error => {
      console.log(error);
    });
  }

  identify(index) {
    return index;
  }
}
