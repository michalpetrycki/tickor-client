import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FieldParamComponent } from './field-param.component';

describe('FieldParamComponent', () => {
  let component: FieldParamComponent;
  let fixture: ComponentFixture<FieldParamComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FieldParamComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FieldParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
