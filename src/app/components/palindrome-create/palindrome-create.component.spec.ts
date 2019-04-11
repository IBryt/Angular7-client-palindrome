import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PalindromeCreateComponent } from './palindrome-create.component';

describe('PalindromeCreateComponent', () => {
  let component: PalindromeCreateComponent;
  let fixture: ComponentFixture<PalindromeCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PalindromeCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PalindromeCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
