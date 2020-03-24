import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SsingupComponent } from './ssingup.component';

describe('SsingupComponent', () => {
  let component: SsingupComponent;
  let fixture: ComponentFixture<SsingupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SsingupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SsingupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
