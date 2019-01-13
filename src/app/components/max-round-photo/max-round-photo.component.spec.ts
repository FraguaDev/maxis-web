import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxRoundPhotoComponent } from './max-round-photo.component';

describe('MaxRoundPhotoComponent', () => {
  let component: MaxRoundPhotoComponent;
  let fixture: ComponentFixture<MaxRoundPhotoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxRoundPhotoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxRoundPhotoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
