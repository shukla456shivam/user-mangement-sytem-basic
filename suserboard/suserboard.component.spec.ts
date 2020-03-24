import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuserboardComponent } from './suserboard.component';

describe('SuserboardComponent', () => {
  let component: SuserboardComponent;
  let fixture: ComponentFixture<SuserboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuserboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuserboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
