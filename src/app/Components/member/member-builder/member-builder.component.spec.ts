import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberBuilderComponent } from './member-builder.component';

describe('MemberBuilderComponent', () => {
  let component: MemberBuilderComponent;
  let fixture: ComponentFixture<MemberBuilderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MemberBuilderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberBuilderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
