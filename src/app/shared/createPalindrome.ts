import BigNumber from 'bignumber.js';
import {Palindrome} from '../model/palindrome';
export class CreatePalindrome {
  private calc: CalcPalindrome = new CalcPalindrome();
  private palindrome: Palindrome = new Palindrome();
  constructor(palindrome: Palindrome) {
    this.palindrome = palindrome;
  }
  initData() {
    this.calc.calculate(this.palindrome.value);
  }
  getPalindrome(): Palindrome {
    this.palindrome.min = this.calc.getMin();
    this.palindrome.max = this.calc.getMax();
    return this.palindrome;
  }
  isPalindrome(): boolean {
    return this.calc.isPalindrome(this.palindrome.value);
  }
}
class CalcPalindrome {
  private value: string;
  private min: string;
  private max: string;
  constructor() {
  }

  calculate(value: string) {
    this.max = value;
    this.min = value;
    this.value = value;
    if (!this.isPalindrome(this.value)) {
      const floor: number = Math.floor(this.value.length / 2);
      let index = 0;
      while (floor > index && !this.isPalindrome(this.max)) {
        index = this.calcMax(index);
      }
      index = 0;
      while (floor > index && !this.isPalindrome(this.min)) {
        index = this.calcMin(index);
      }
    }
  }
  private calcMin(index): number {
    const start = this.min.charAt(index);
    const end = this.min.charAt(this.min.length - 1 - index);
    if (start !== end) {
      let zeros = '';
      for (let i = 0; i < index; i += 1) { zeros += '0'; }
      let right;
      if (end < start) {
        right = new BigNumber((parseInt(end) + 1) + zeros);
        index--;
      } else {
        right = new BigNumber((parseInt(end) - parseInt(start)) + zeros);
      }
      this.min = new BigNumber(this.min).minus(right).toFixed();
    }
    return ++index;
  }
  private calcMax(index): number {
    let start = this.max.charAt(index);
    const end = this.max.charAt(this.max.length - 1 - index);
    if (start !== end) {
      let zeros = '';
      for (let i = 0; i < index; i += 1) { zeros += '0'; }
      if (start < end) {
        start = '10';
        index--;
      }
      const left = new BigNumber(start + zeros);
      const right = new BigNumber(end + zeros);
      this.max = new BigNumber(this.max).plus(left.minus(right)).toFixed();
    }
    return ++index;
  }
  isPalindrome(str): boolean {
    const len = str.length;
    let res = true;
    if (len !== 1) {
      for (let i = 0; i < Math.floor(len / 2); i++) {
        if (str.charAt(i) !== str.charAt(len - ( 1 + i))) {
          res = false;
          break;
        }
      }
    }
    return res;
  }
  getMin(): string {
    return this.min;
  }
  getMax(): string {
    return this.max;
  }
  getValue(): string {
    return this.value;
  }
}
