import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeInfoComponent } from './palindrome-info.component';

describe('PalindromeInfoComponent', () => {
  let component: PalindromeInfoComponent;
  let fixture: ComponentFixture<PalindromeInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalindromeInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
