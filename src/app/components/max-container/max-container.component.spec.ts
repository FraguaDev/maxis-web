import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxContainerComponent } from './max-container.component';

describe('MaxContainerComponent', () => {
  let component: MaxContainerComponent;
  let fixture: ComponentFixture<MaxContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
