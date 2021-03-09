import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChipColorsComponent } from './chip-colors.component';

describe('ChipColorsComponent', () => {
  let component: ChipColorsComponent;
  let fixture: ComponentFixture<ChipColorsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChipColorsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChipColorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
