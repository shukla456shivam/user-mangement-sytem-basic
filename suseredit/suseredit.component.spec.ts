import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SusereditComponent } from './suseredit.component';

describe('SusereditComponent', () => {
  let component: SusereditComponent;
  let fixture: ComponentFixture<SusereditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SusereditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SusereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
