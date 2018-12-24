import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaxTileComponent } from './max-tile.component';

describe('MaxTileComponent', () => {
  let component: MaxTileComponent;
  let fixture: ComponentFixture<MaxTileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MaxTileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaxTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
