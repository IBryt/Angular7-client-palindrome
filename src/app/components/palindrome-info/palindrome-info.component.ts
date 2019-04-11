import { Component, OnInit } from '@angular/core';
import {Palindrome} from '../../model/palindrome';
import {PalindromeService} from '../../services/palindrome.service';

@Component({
  selector: 'app-palindrome-info',
  templateUrl: './palindrome-info.component.html',
  styleUrls: ['./palindrome-info.component.css']
})
export class PalindromeInfoComponent implements OnInit {
  palindrome: Palindrome;
  constructor(
    private server: PalindromeService
  ) { }

  ngOnInit() {
    this.palindrome = new Palindrome();
    this.server.display.subscribe((palidrome: Palindrome) => {
      this.palindrome = palidrome;
    }, error => {
      console.log(error);
    });
  }
}
