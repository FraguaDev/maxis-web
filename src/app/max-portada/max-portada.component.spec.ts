import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxPortadaComponent } from './max-portada.component';

describe('MaxPortadaComponent', () => {
  let component: MaxPortadaComponent;
  let fixture: ComponentFixture<MaxPortadaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxPortadaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxPortadaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
