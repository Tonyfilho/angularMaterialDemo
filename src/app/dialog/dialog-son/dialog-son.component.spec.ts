import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogSonComponent } from './dialog-son.component';

describe('DialogSonComponent', () => {
  let component: DialogSonComponent;
  let fixture: ComponentFixture<DialogSonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogSonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogSonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
