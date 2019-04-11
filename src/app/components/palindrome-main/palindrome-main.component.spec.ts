import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeMainComponent } from './palindrome-main.component';

describe('PalindromeMainComponent', () => {
  let component: PalindromeMainComponent;
  let fixture: ComponentFixture<PalindromeMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalindromeMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
