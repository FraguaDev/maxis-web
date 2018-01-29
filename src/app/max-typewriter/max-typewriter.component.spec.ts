import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxTypewriterComponent } from './max-typewriter.component';

describe('MaxTypewriterComponent', () => {
  let component: MaxTypewriterComponent;
  let fixture: ComponentFixture<MaxTypewriterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxTypewriterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxTypewriterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
