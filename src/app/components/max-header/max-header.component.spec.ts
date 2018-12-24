import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxHeaderComponent } from './max-header.component';

describe('MaxHeaderComponent', () => {
  let component: MaxHeaderComponent;
  let fixture: ComponentFixture<MaxHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
