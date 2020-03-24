import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlogginComponent } from './sloggin.component';

describe('SlogginComponent', () => {
  let component: SlogginComponent;
  let fixture: ComponentFixture<SlogginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlogginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlogginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
