import {Component, OnInit} from '@angular/core';
import {PalindromeService} from '../../services/palindrome.service';
import {Palindrome} from '../../model/palindrome';
import {CreatePalindrome} from '../../shared/createPalindrome';

@Component({
  selector: 'app-palindrome-create',
  templateUrl: './palindrome-create.component.html',
  styleUrls: ['./palindrome-create.component.css']
})
export class PalindromeCreateComponent implements OnInit {
  palindrome = new Palindrome();
  constructor(
    private server: PalindromeService
  ) { }

  ngOnInit() {}
  addPalindrome() {
    const calc: CreatePalindrome  = new CreatePalindrome(this.palindrome);
    if (calc.isPalindrome()) {
      alert('This value is palindrome');
      return;
    }
    this.server.updateDate(this.palindrome);
    console.log('t ' + this.palindrome.min);
    calc.initData();
    this.palindrome = calc.getPalindrome();
    console.log('t ' + this.palindrome.min);
    this.server.addPalindrome(this.palindrome)
      .subscribe(
         data => console.log(data), error => console.log(error)
      );
    this.palindrome = new Palindrome();
  }
  allowNumbersOnly(e) {
    const code = (e.which) ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
    }
  }
  onSubmit() {
    this.addPalindrome();
  }
}
