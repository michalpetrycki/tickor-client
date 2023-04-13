import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MemberDetailPage } from './member-detail.page';

describe('MemberDetailPage', () => {
  let component: MemberDetailPage;
  let fixture: ComponentFixture<MemberDetailPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MemberDetailPage]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MemberDetailPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
