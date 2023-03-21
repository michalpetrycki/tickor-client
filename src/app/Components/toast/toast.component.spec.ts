import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastPopupComponent } from './toast.component';

describe('ToastComponent', () => {
  let component: ToastPopupComponent;
  let fixture: ComponentFixture<ToastPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ToastPopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
