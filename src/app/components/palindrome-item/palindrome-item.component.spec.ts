import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeItemComponent } from './palindrome-item.component';

describe('PalindromeItemComponent', () => {
  let component: PalindromeItemComponent;
  let fixture: ComponentFixture<PalindromeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalindromeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
