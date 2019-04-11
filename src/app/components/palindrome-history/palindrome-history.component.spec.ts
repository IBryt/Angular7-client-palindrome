import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeHistoryComponent } from './palindrome-history.component';

describe('PalindromeHistoryComponent', () => {
  let component: PalindromeHistoryComponent;
  let fixture: ComponentFixture<PalindromeHistoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalindromeHistoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
