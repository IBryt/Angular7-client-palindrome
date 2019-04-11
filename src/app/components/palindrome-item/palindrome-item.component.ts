import {Component, Input, OnInit} from '@angular/core';
import {Palindrome} from '../../model/palindrome';
import {PalindromeService} from '../../services/palindrome.service';

@Component({
  selector: 'app-palindrome-item',
  templateUrl: './palindrome-item.component.html',
  styleUrls: ['./palindrome-item.component.css']
})
export class PalindromeItemComponent implements OnInit {
  @Input() palindrome: Palindrome;
  constructor(
    private server: PalindromeService
  ) { }

  ngOnInit() {
  }

  display() {
    this.server.displayPalindrome(this.palindrome);
  }
}
